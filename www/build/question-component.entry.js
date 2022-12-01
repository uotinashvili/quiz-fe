import { r as registerInstance, i as createEvent, h } from './index-a2ee93c8.js';
import { s as state } from './store-34f43168.js';
import { Q as QuizService } from './quiz.service-10037255.js';

const questionCss = "";

let QuestionComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.submitResults = createEvent(this, "submitResults", 7);
    this.totalCount = 0;
    this.current = 1;
    this.selectedValue = null;
    this.quizId = 0;
    this.submited = false;
    this.quizService = new QuizService();
    this.answeredQuestions = {
      userName: '',
      quizId: 0,
      answers: [],
    };
  }
  async componentWillLoad() {
    this.quizId = +this.match.params.id;
    this.loadQuestions(this.quizId.toString());
  }
  reload() {
    this.quizId = +this.match.params.id;
    this.current = 1;
    this.submited = false;
    this.loadQuestions(this.match.params.id);
  }
  async loadQuestions(id) {
    this.questions = await this.quizService.getQuestionsByQuizId(id);
    this.totalCount = this.questions.length;
  }
  get question() {
    return this.questions && this.questions[this.current - 1];
  }
  isFirst() {
    return this.current <= 1;
  }
  isLast() {
    return this.current >= this.totalCount;
  }
  next() {
    if (!this.isLast()) {
      this.setAnswer();
      this.current++;
    }
  }
  handleCheckbox(selected) {
    this.selectedValue = selected;
  }
  setAnswer() {
    this.answeredQuestions.answers.push(this.selectedValue);
    this.selectedValue = null;
  }
  submit() {
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
    const completed = (h("div", null, h("h4", null, "Your score is saved, thanks!")));
    const nextButton = this.isLast() ? (h("button", { class: "btn btn-primary", disabled: state.timeover || !this.selectedValue, onClick: this.submit.bind(this) }, "submit")) : (h("button", { class: "btn btn-outline-primary", disabled: state.timeover || !this.selectedValue, onClick: this.next.bind(this) }, "next"));
    const questionsContainer = (h("div", null, h("div", { class: "row" }, h("div", { class: "col-lg-2" }, "Question ", this.current, " from ", this.totalCount), h("div", { class: "col-lg-10" }, h("h6", { class: "d-flex justify-content-end" }, h("timer-component", null)))), h("div", null, h("h5", null, " ", this.question && this.question.title, " "), h("div", null, h("ul", { class: "list-group" }, h("form", null, this.question &&
      this.question.answers.map(answer => {
        return (h("li", { class: "list-group-item" }, h("div", { class: "form-check" }, h("label", { class: "form-check-label" }, h("input", { type: "radio", class: "form-check-input", name: 'answers_' + this.question.id.toString(), checked: this.selectedValue === answer.id, onChange: () => this.handleCheckbox(answer.id) }), answer.option))));
      })))), h("div", { class: "mt-3" }, nextButton))));
    return h("div", null, (this.submited && completed) || questionsContainer);
  }
  static get watchers() { return {
    "match": ["reload"]
  }; }
};
QuestionComponent.style = questionCss;

export { QuestionComponent as question_component };
