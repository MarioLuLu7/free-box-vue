import Button from './src';
import { App } from 'vue';
import './style.less';

Button.install = (app: App) => {
  app.component(Button.name, Button);
};

export default Button;
