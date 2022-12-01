import { r as registerInstance, h } from './index-a2ee93c8.js';
import { Q as QuizService } from './quiz.service-10037255.js';
import { s as socket } from './shared-socket-d5ea6bc8.js';

const resultsCss = "table,th,td{border:1px solid black;border-collapse:collapse}";

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
let ResultsComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.quizId = 0;
    this.quizService = new QuizService();
  }
  onReceive(response) {
    if (response) {
      this.getResults(this.quizId.toString());
    }
  }
  async componentWillLoad() {
    this.quizId = +this.match.params.id;
    this.getResults(this.quizId.toString());
  }
  reload() {
    this.quizId = +this.match.params.id;
    this.getResults(this.match.params.id);
  }
  async getResults(id) {
    this.results = await this.quizService.getResults(id);
  }
  render() {
    return (h("div", null, this.results && h("h3", null, "results"), h("table", { class: "table" }, h("thead", null, h("tr", null, h("th", null, "User"), h("th", null, "Total Count"), h("th", null, "Score"))), h("tbody", null, this.results &&
      this.results.map(result => {
        return (h("tr", null, h("td", null, result.userName), h("td", null, result.totalCount), h("td", null, result.score)));
      })))));
  }
  static get watchers() { return {
    "match": ["reload"]
  }; }
};
__decorate([
  socket.Receive('refreshResults')
], ResultsComponent.prototype, "onReceive", null);
ResultsComponent.style = resultsCss;

export { ResultsComponent as results_component };
