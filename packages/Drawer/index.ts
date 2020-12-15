import Drawer from './src';
import { App } from 'vue';
export * from './interface';
export * from './useView';

Drawer.install = (app: App) => {
  app.component(Drawer.name, Drawer);
};

export default Drawer;
