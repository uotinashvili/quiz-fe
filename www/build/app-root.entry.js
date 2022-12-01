import { r as registerInstance, h } from './index-a2ee93c8.js';
import { s as state } from './store-34f43168.js';

const appRootCss = "";

let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("header", null, h("nav", { class: "navbar navbar-expand-sm navbar-dark bg-dark" }, h("div", { class: "container" }, h("div", { class: "collapse navbar-collapse", id: "mynavbar" }, h("ul", { class: "navbar-nav me-auto" }, h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/" }, h("a", { class: "nav-link" }, "HOME"))), h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/auth" }, h("a", { class: "nav-link" }, "AUTH"))), state.user.token &&
      h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/quiz" }, h("a", { class: "nav-link" }, "QUIZ")))), h("div", { class: "d-flex" }, h("h5", { class: "text-white" }, "Logged User: ", `${state && state.user && state.user.email}`)))))), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { url: "/quiz", component: "app-quiz" }), h("stencil-route", { url: "/auth", component: "app-auth" }), h("stencil-route", { url: "/auth/?:code", component: "app-auth" }))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
