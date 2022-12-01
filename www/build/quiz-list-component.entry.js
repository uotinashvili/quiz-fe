import { r as registerInstance, h } from './index-a2ee93c8.js';
import { Q as QuizService } from './quiz.service-10037255.js';
import { s as socket } from './shared-socket-d5ea6bc8.js';

const quizListCss = "";

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
let QuizListComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.quizService = new QuizService();
  }
  onReceive(data) {
    this.quizes = JSON.parse(data);
  }
  async componentWillLoad() {
    await this.loadQuizes();
  }
  async loadQuizes() {
    this.quizes = await this.quizService.getAllQuizes();
  }
  render() {
    return (h("div", null, h("ul", { class: "list-group" }, this.quizes &&
      this.quizes.map(quiz => {
        return (h("li", { class: "list-group-item" }, h("stencil-route-link", { url: `/quiz/questions/${quiz.id}` }, h("a", null, quiz.title))));
      })), h("stencil-router", null, h("stencil-route", { url: "/quiz/questions/:id", component: "results-component" }))));
  }
};
__decorate([
  socket.Receive('refreshQuizList')
], QuizListComponent.prototype, "onReceive", null);
QuizListComponent.style = quizListCss;

export { QuizListComponent as quiz_list_component };
