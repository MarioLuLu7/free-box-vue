import { createApp } from 'vue';
import App from './App.vue';

// 导入组件库
import fb from '../packages';

createApp(App)
  .use(fb)
  .mount('#app');
