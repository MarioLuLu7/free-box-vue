import { defineAsyncComponent } from 'vue';
import { IviewConfig } from 'packages/Drawer/src';

const config: IviewConfig[] = [
  {
    name: 'button',
    view: defineAsyncComponent(() => import('../Button')),
  },
];

export default config;
