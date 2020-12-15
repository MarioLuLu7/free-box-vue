import { defineAsyncComponent } from 'vue';
import { IviewConfig } from 'packages/Drawer';

const config: IviewConfig[] = [
  {
    name: 'test1',
    view: defineAsyncComponent(() => import('./test1.vue')),
  },
];

export default config;
