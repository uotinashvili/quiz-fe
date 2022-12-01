import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
  timeover: false,
  user: {
    email: '',
    token: ''
  }
});

onChange('timeover', value => {
  state.timeover = value;
});

onChange('user', value => {
  state.user = value;
});

export default state;
