import { r as registerInstance, e as getElement } from './index-a2ee93c8.js';
import { A as ActiveRouter } from './active-router-12f88a8e.js';

// Get the URL for this route link without the root from the router
const getUrl = (url, root) => {
  // Don't allow double slashes
  if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
    return root.slice(0, root.length - 1) + url;
  }
  return root + url;
};
let Redirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    if (this.history && this.root && this.url) {
      return this.history.replace(getUrl(this.url, this.root));
    }
  }
  get el() { return getElement(this); }
};
ActiveRouter.injectProps(Redirect, [
  'history',
  'root'
]);

export { Redirect as stencil_router_redirect };
