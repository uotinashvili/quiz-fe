import { RouterHistory } from '@stencil-community/router';
import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { ICreateQuestion, ICreateQuiz, IQuiz } from '../../../model/question.model';

@Component({
  tag: 'create-quiz-component',
  styleUrl: 'create-quiz.css',
})
export class CreateQuizComponent {
  @Prop() history: RouterHistory;
  @State() renderTriger: {};
  @State() quizTitleInput: HTMLInputElement;
  @State() form: HTMLFormElement;

  @Event({ eventName: 'onSubmitQuiz' }) submitQuiz: EventEmitter<IQuiz>;

  quiz: ICreateQuiz = {
    title: '',
    creator: process.env.CLIENT_ID,
    creatorId: process.env.CLIENT_ID,
    questions: [],
  };

  newQuestion(quiz: ICreateQuiz): ICreateQuiz {
    return {
      ...quiz,
      questions: [],
    };
  }

  addQuestion() {
    const formControls = this.form.elements;

    const question = {} as ICreateQuestion;

    this.quiz['title'] = this.quizTitleInput.value;
    question['question'] = formControls['question'].value;
    question['answer1'] = formControls['answer1'].value;
    question['answer2'] = formControls['answer2'].value;
    question['correctAnswer'] = formControls['correctAnswer'].value;

    this.quiz.questions.push(question);

    this.form.reset();

    this.quizTitleInput.value = this.quiz.title;

    this.renderTriger = {};
  }

  buildQuiz(quiz: ICreateQuiz) {
    return {
      title: quiz.title,
      creator: quiz.creator,
      creatorId: quiz.creatorId,
      questions: quiz.questions.map(question => {
        return {
          title: question.question,
          answers: [
            {
              option: question.answer1,
              correctAnswer: question.correctAnswer === '1',
            },
            {
              option: question.answer2,
              correctAnswer: question.correctAnswer === '2',
            },
          ],
        };
      }),
    } as IQuiz;
  }

  submit() {
    this.submitQuiz.emit(this.buildQuiz(this.quiz));
    this.history.push('/quiz', {});
  }

  render() {
    return (
      <div>
        <div>
          <h4>Creating new Quiz</h4>
        </div>
        <form ref={el => (this.form = el)}>
          <div>
            <label>Quiz Name</label>
            <input required class="form-control" type="text" name="title" ref={el => (this.quizTitleInput = el)} />
          </div>

          <div>
            <div>
              <label>Question</label>
              <input required class="form-control" type="text" name="question" />
            </div>
            <div>
              <div class="row">
                <div class="col-lg-6">
                  <label>Answer 1</label>
                  <input required class="form-control" type="text" name="answer1" />
                </div>
                <div class="form-check col-lg-6 mt-4">
                  <label class="form-check-label mt-2">
                    <input required class="form-check-input" type="radio" name="correctAnswer" value="1" />
                    Is Correct Answer
                  </label>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <label>Answer 2</label>
                  <input required class="form-control" type="text" name="answer2" />
                </div>
                <div class="form-check col-lg-6 mt-4">
                  <label class="form-check-label mt-2">
                    <input required class="form-check-input" type="radio" name="correctAnswer" value="2" />
                    Is Correct Answer
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-3">
            <button class="btn btn-outline-primary" type="button" onClick={this.addQuestion.bind(this)}>
              add new question
            </button>
          </div>
        </form>

        <div class="mt-2">
          <table class="table">
            <thead>
              <tr>
                <th>question</th>
                <th>answer 1</th>
                <th>answer 2</th>
                <th>is correct</th>
              </tr>
            </thead>
            <tbody>
              {this.quiz.questions.map(question => {
                return (
                  <tr>
                    <td>{question.question}</td>
                    <td class={question.correctAnswer === 'answer1' ? 'correct-answer' : ''}>{question.answer1}</td>
                    <td class={question.correctAnswer === 'answer2' ? 'correct-answer' : ''}>{question.answer2}</td>
                    <td>{question.correctAnswer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button disabled={this.quiz.questions.length == 0} type="button" class="btn btn-primary mt-2" onClick={this.submit.bind(this)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
