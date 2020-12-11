import { defineComponent } from 'vue';
import { Drawer } from 'packages/index';

import './style.scss';

import config from './config';

export default defineComponent({
  setup() {
    setTimeout(() => {
      Drawer.openView('button', 200, { name: 123 });
    }, 3000);

    return () => (
      <div class="ex-drawer">
        <Drawer viewConfig={config} />
      </div>
    );
  },
});
