<script lang="tsx">
import { defineComponent } from 'vue';
import { Drawer } from 'packages/index';

import config from './config';

export default defineComponent({
  setup(props, ctx) {
    return () => (
      <div>
        <div class="ex-drawer">
          <Drawer.Main viewConfig={config} />
        </div>
        <button
          onClick={() => {
            Drawer.Main.openView({
              ctx,
              id: 'aaa',
              name: 'test1',
              width: 200,
              props: { name: 123 },
            });
          }}
        >
          打开test1
        </button>
      </div>
    );
  },
});
</script>

<style lang="scss">
.ex-drawer {
  height: 400px;
  width: 800px;
  margin: 100px;
  border: 1px solid #000;
}
</style>
