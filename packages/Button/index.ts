import Button from './src';
import { App } from 'vue';
import './style.scss';

Button.install = (app: App) => {
  app.component(Button.name, Button);
};

export default Button;
