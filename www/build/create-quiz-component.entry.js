import { r as registerInstance, i as createEvent, h } from './index-a2ee93c8.js';

const createQuizCss = ".correct-answer{background-color:green}table,th,td{border:1px solid black;border-collapse:collapse}";

let CreateQuizComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.submitQuiz = createEvent(this, "onSubmitQuiz", 7);
    this.quiz = {
      title: '',
      creator: "CCze9vVYTO6h31VglgGh5Q",
      creatorId: "CCze9vVYTO6h31VglgGh5Q",
      questions: [],
    };
  }
  newQuestion(quiz) {
    return Object.assign(Object.assign({}, quiz), { questions: [] });
  }
  addQuestion() {
    const formControls = this.form.elements;
    const question = {};
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
  buildQuiz(quiz) {
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
    };
  }
  submit() {
    this.submitQuiz.emit(this.buildQuiz(this.quiz));
    this.history.push('/quiz', {});
  }
  render() {
    return (h("div", null, h("div", null, h("h4", null, "Creating new Quiz")), h("form", { ref: el => (this.form = el) }, h("div", null, h("label", null, "Quiz Name"), h("input", { required: true, class: "form-control", type: "text", name: "title", ref: el => (this.quizTitleInput = el) })), h("div", null, h("div", null, h("label", null, "Question"), h("input", { required: true, class: "form-control", type: "text", name: "question" })), h("div", null, h("div", { class: "row" }, h("div", { class: "col-lg-6" }, h("label", null, "Answer 1"), h("input", { required: true, class: "form-control", type: "text", name: "answer1" })), h("div", { class: "form-check col-lg-6 mt-4" }, h("label", { class: "form-check-label mt-2" }, h("input", { required: true, class: "form-check-input", type: "radio", name: "correctAnswer", value: "1" }), "Is Correct Answer"))), h("div", { class: "row" }, h("div", { class: "col-lg-6" }, h("label", null, "Answer 2"), h("input", { required: true, class: "form-control", type: "text", name: "answer2" })), h("div", { class: "form-check col-lg-6 mt-4" }, h("label", { class: "form-check-label mt-2" }, h("input", { required: true, class: "form-check-input", type: "radio", name: "correctAnswer", value: "2" }), "Is Correct Answer"))))), h("div", { class: "mt-3" }, h("button", { class: "btn btn-outline-primary", type: "button", onClick: this.addQuestion.bind(this) }, "add new question"))), h("div", { class: "mt-2" }, h("table", { class: "table" }, h("thead", null, h("tr", null, h("th", null, "question"), h("th", null, "answer 1"), h("th", null, "answer 2"), h("th", null, "is correct"))), h("tbody", null, this.quiz.questions.map(question => {
      return (h("tr", null, h("td", null, question.question), h("td", { class: question.correctAnswer === 'answer1' ? 'correct-answer' : '' }, question.answer1), h("td", { class: question.correctAnswer === 'answer2' ? 'correct-answer' : '' }, question.answer2), h("td", null, question.correctAnswer)));
    }))), h("button", { disabled: this.quiz.questions.length == 0, type: "button", class: "btn btn-primary mt-2", onClick: this.submit.bind(this) }, "Submit"))));
  }
};
CreateQuizComponent.style = createQuizCss;

export { CreateQuizComponent as create_quiz_component };
