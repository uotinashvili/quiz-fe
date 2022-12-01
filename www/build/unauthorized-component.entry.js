import { r as registerInstance, h } from './index-a2ee93c8.js';

let UnauthorizedComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "container mt-3" }, h("p", null, "Welcome to the Quiz page!"), h("p", null, "To star the quiz, at first you have to authorize!"), h("stencil-route-link", { url: "/auth" }, h("button", { class: "btn btn-primary" }, "Start authorize"))));
  }
};

export { UnauthorizedComponent as unauthorized_component };
