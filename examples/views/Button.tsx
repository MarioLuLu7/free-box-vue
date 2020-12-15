import { computed, defineComponent } from 'vue';

import { Button, Drawer } from '../../packages';

export default defineComponent({
  setup(props, ctx) {
    const getname = (name: any) => {
      console.log(name);
    };

    const dom = computed(() => (
      <div>
        <Button />
        <button
          onClick={() => {
            Drawer.Main.closeView(ctx);
          }}
        >
          {'关闭'}
        </button>
        <button
          onClick={() => {
            Drawer.Main.openView({
              ctx,
              // id: 'aaa',
              name: 'button',
              width: 300,
            });
          }}
        >
          {'打开自己'}
        </button>
        <button
          onClick={() => {
            Drawer.Main.runFn('aaa', 'getname', '22222222');
          }}
        >
          {'执行方法'}
        </button>
      </div>
    ));

    return {
      dom,
      getname,
    };
  },
  render() {
    const { dom } = this;
    return dom;
  },
});
