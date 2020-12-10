import { App } from 'vue';

import fbButton from './Button';

const components = [fbButton];

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export const Button = fbButton;

export default {
  version: '1.0.0',
  install,
  Button: fbButton,
};
