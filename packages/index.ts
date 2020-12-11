import { App } from 'vue';

import fbButton from './Button';
import fbDrawer from './Drawer';

const components = [fbButton, fbDrawer];

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export const Button = fbButton;
export const Drawer = fbDrawer;

export default {
  install,
  Button: fbButton,
  Drawer: fbDrawer,
};
