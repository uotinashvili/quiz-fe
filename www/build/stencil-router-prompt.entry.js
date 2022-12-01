import { r as registerInstance, e as getElement } from './index-a2ee93c8.js';
import { A as ActiveRouter } from './active-router-12f88a8e.js';

let StencilRouterPrompt = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.when = true;
    this.message = '';
  }
  enable(message) {
    if (this.unblock) {
      this.unblock();
    }
    if (this.history) {
      this.unblock = this.history.block(message);
    }
  }
  disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = undefined;
    }
  }
  componentWillLoad() {
    if (this.when) {
      this.enable(this.message);
    }
  }
  updateMessage(newMessage, prevMessage) {
    if (this.when) {
      if (!this.when || prevMessage !== newMessage) {
        this.enable(this.message);
      }
    }
    else {
      this.disable();
    }
  }
  componentDidUnload() {
    this.disable();
  }
  render() {
    return null;
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "message": ["updateMessage"],
    "when": ["updateMessage"]
  }; }
};
ActiveRouter.injectProps(StencilRouterPrompt, [
  'history',
]);

export { StencilRouterPrompt as stencil_router_prompt };
