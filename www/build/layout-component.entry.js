import { r as registerInstance, h } from './index-a2ee93c8.js';

const layoutCss = "";

let Layout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "container mt-3" }, h("slot", null)));
  }
};
Layout.style = layoutCss;

export { Layout as layout_component };
