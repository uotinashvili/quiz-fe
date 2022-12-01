import { h, r as registerInstance } from './index-a2ee93c8.js';
import { Q as QuizService } from './quiz.service-10037255.js';
import { s as socket } from './shared-socket-d5ea6bc8.js';
import { s as state } from './store-34f43168.js';

class QuizView {
  getQuizView() {
    return (h("div", null, state.user.token && (h("div", { class: "row" },
      h("div", { class: "col-lg-3" },
        h("div", { class: "row" },
          h("h3", { class: "col-lg-6" }, "Quiz List"),
          h("div", { class: "col-lg-6" },
            h("stencil-route-link", { url: "/quiz/create" },
              h("a", { class: "btn btn-outline-primary" }, "create new quiz")))),
        h("quiz-list-component", null)),
      h("div", { class: "col-lg-9" },
        h("stencil-router", null,
          h("stencil-route", { url: "/quiz/create", component: "create-quiz-component" })),
        h("stencil-router", null,
          h("stencil-route", { url: "/quiz/questions/:id", component: "question-component" }))))) || (h("div", null,
      h("unauthorized-component", null)))));
  }
}

const appQuizCss = "";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AppQuiz = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.quizService = new QuizService();
  }
  async submitResults(event) {
    const data = event.detail;
    await this.quizService.submitAnswers(data);
    this.sendResultsEmitter.emit(true);
  }
  async onSubmitQuiz(event) {
    const data = event.detail;
    await this.quizService.submitQuiz(data);
    this.createQuizEmmitter.emit(true);
  }
  render() {
    const view = new QuizView();
    return (h("layout-component", null, h("div", null, view.getQuizView())));
  }
};
__decorate([
  socket.Emit('onCreateQuiz')
], AppQuiz.prototype, "createQuizEmmitter", void 0);
__decorate([
  socket.Emit('onSendResults')
], AppQuiz.prototype, "sendResultsEmitter", void 0);
AppQuiz.style = appQuizCss;

export { AppQuiz as app_quiz };
