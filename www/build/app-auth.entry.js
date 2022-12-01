import { r as registerInstance, h } from './index-a2ee93c8.js';
import { s as state } from './store-34f43168.js';

class ZoomService {
  constructor() {
    this.API_HOST = "http://localhost:3000";
  }
  async auth(code) {
    try {
      console.log('code-', code);
      const response = await fetch(`${this.API_HOST}/auth/${code}`);
      const json = await response.json();
      return json;
    }
    catch (err) {
      return err.message;
    }
  }
  async getDeepLink(token) {
    try {
      console.log('install...');
      const response = await fetch(`${this.API_HOST}/auth/zoom/deeplink/${token}`);
      console.log('install response-', response);
      const json = await response.json();
      return json;
    }
    catch (err) {
      console.log(err);
    }
  }
  async getInstallurl() {
    try {
      console.log('install...');
      const response = await fetch(`${this.API_HOST}/auth/zoom/installurl`);
      console.log('install response-', response);
      const json = await response.json();
      console.log('url-', json);
      return json;
    }
    catch (err) {
      console.log(err);
    }
  }
}

const getQueryParam = (param) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has(param)) {
    return urlParams.get(param);
  }
  return '';
};

const appAuthCss = "";

let AuthRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clientId = "CCze9vVYTO6h31VglgGh5Q";
    this.redirectUrl = "https://0612-37-232-29-16.eu.ngrok.io/auth";
    this.zoomService = new ZoomService();
  }
  async componentWillLoad() {
    let code = getQueryParam('code');
    if (code) {
      const response = await this.zoomService.auth(code);
      if (response.userId) {
        state.user = {
          email: response === null || response === void 0 ? void 0 : response.email,
          token: response === null || response === void 0 ? void 0 : response.token,
        };
      }
      else {
        console.error('ERROR-', response.message);
      }
    }
  }
  async installApp() {
    const response = await this.zoomService.getInstallurl();
    window.open(response.url, '_blank');
  }
  async openApp() {
    if (state.user.token) {
      const response = await this.zoomService.getDeepLink(state.user.token);
      window.open(response.deeplink, '_blank');
    }
  }
  render() {
    return (h("div", { class: "container mt-3" }, !state.user.token && (h("div", null, h("a", { class: "btn btn-outline-primary", href: `https://zoom.us/oauth/authorize?response_type=code&client_id=${this.clientId}&redirect_uri=${this.redirectUrl}` }, "Login with zoom account"))), state.user.token && (h("div", { class: "mt-3" }, h("div", null, h("stencil-route-link", { url: "/quiz" }, h("a", { class: "btn btn-primary" }, "Start Quiz")), h("div", { class: "mt-3" }, h("button", { class: "btn btn-outline-primary", onClick: this.openApp.bind(this) }, "Open app in zoom")))))));
  }
};
AuthRoot.style = appAuthCss;

export { AuthRoot as app_auth };
