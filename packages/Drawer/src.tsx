import { defineComponent, ref, PropType, DefineComponent, Plugin } from 'vue';
import './style.scss';

export interface IviewConfig {
  name: string;
  view: DefineComponent<any, any, any>;
}

export interface Iview {
  name: string;
  props: Record<string, any>;
  width: number;
}

const views = ref<Iview[]>([]);

const openView = (name: string, width: number, props: any) => {
  views.value.push({
    name,
    props,
    width,
  });
};

const Drawer = defineComponent({
  name: 'fbDrawer',
  openView,
  props: {
    viewConfig: {
      type: Array as PropType<IviewConfig[]>,
      defalut: () => [],
    },
  },
  setup(props) {
    const getView = (name: string) => {
      const { viewConfig } = props;
      for (let i = 0; i < viewConfig.length; i++) {
        if (viewConfig[i].name === name) {
          return viewConfig[i].view;
        }
      }
    };

    return () => (
      <div class="fb-drawer">
        {views.value.map((item) => {
          const View = getView(item.name);
          return (
            <div class="fb-drawer-item" style={{ width: `${item.width}px` }}>
              <View {...item.props} />
            </div>
          );
        })}
      </div>
    );
  },
});

export default Drawer as typeof Drawer &
  Plugin & {
    readonly openView: typeof openView;
  };
