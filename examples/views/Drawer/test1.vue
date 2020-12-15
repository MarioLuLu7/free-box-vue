<script lang="tsx">
import { defineComponent } from 'vue';
import { Drawer } from 'packages/index';

export default defineComponent({
  setup(props, ctx) {
    return () => (
      <div>
        <button
          onClick={() =>
            Drawer.Main.openView({
              ctx,
              id: 'bbb',
              name: 'test1',
              width: 200,
              props: { name: 123 },
            })
          }
        >
          打开自己
        </button>
      </div>
    );
  },
});
</script>

<style lang="scss" scoped></style>
