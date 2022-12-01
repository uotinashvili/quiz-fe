import { MatchResults } from '@stencil-community/router';
import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import { IQuestion, SendAnswerDto } from '../../../model/question.model';
import state from '../../../model/store';
import QuizService from '../../../services/quiz.service';

@Component({
  tag: 'question-component',
  styleUrl: 'question.css',
})
export class QuestionComponent {
  @Prop() match: MatchResults;
  @State() questions: IQuestion[];
  @State() totalCount = 0;
  @State() current = 1;
  @State() selectedValue: number = null;
  @State() quizId: number = 0;
  @State() submited = false;

  @Event({ eventName: 'submitResults' }) submitResults: EventEmitter<SendAnswerDto>;

  quizService = new QuizService();

  async componentWillLoad() {
    this.quizId = +this.match.params.id;
    this.loadQuestions(this.quizId.toString());
  }

  @Watch('match')
  reload() {
    this.quizId = +this.match.params.id;
    this.current = 1;
    this.submited = false;
    this.loadQuestions(this.match.params.id);
  }

  async loadQuestions(id: string) {
    this.questions = await this.quizService.getQuestionsByQuizId(id);
    this.totalCount = this.questions.length;
  }

  get question(): IQuestion {
    return this.questions && this.questions[this.current - 1];
  }

  answeredQuestions: SendAnswerDto = {
    userName: '',
    quizId: 0,
    answers: [],
  };

  isFirst(): boolean {
    return this.current <= 1;
  }

  isLast(): boolean {
    return this.current >= this.totalCount;
  }

  next(): void {
    if (!this.isLast()) {
      this.setAnswer();
      this.current++;
    }
  }

  handleCheckbox(selected: number) {
    this.selectedValue = selected;
  }

  setAnswer(): void {
    this.answeredQuestions.answers.push(this.selectedValue);

    this.selectedValue = null;
  }

  submit(): void {
    this.setAnswer();
    this.answeredQuestions.userName = state.user.email || 'Admin';
    this.answeredQuestions.quizId = this.quizId;
    this.submitResults.emit(this.answeredQuestions);

    if (this.isLast()) {
      this.answeredQuestions.answers = [];
      this.submited = true;
    }
  }

  render() {
    const completed = (
      <div>
        <h4>Your score is saved, thanks!</h4>
      </div>
    );

    const nextButton = this.isLast() ? (
      <button class="btn btn-primary" disabled={state.timeover || !this.selectedValue} onClick={this.submit.bind(this)}>
        submit
      </button>
    ) : (
      <button class="btn btn-outline-primary" disabled={state.timeover || !this.selectedValue} onClick={this.next.bind(this)}>
        next
      </button>
    );

    const questionsContainer = (
      <div>
        <div class="row">
          <div class="col-lg-2">
            Question {this.current} from {this.totalCount}
          </div>
          <div class="col-lg-10">
            <h6 class="d-flex justify-content-end">
              <timer-component></timer-component>
            </h6>
          </div>
        </div>

        <div>
          <h5> {this.question && this.question.title} </h5>
          <div>
            <ul class="list-group">
              <form>
                {this.question &&
                  this.question.answers.map(answer => {
                    return (
                      <li class="list-group-item">
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name={'answers_' + this.question.id.toString()}
                              checked={this.selectedValue === answer.id}
                              onChange={() => this.handleCheckbox(answer.id)}
                            />
                            {answer.option}
                          </label>
                        </div>
                      </li>
                    );
                  })}
              </form>
            </ul>
          </div>
          <div class="mt-3">{nextButton}</div>
        </div>
      </div>
    );

    return <div>{(this.submited && completed) || questionsContainer}</div>;
  }
}
