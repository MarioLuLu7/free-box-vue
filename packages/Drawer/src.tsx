import { defineComponent, PropType, Plugin } from 'vue';
import { useView } from './useView';
import DrawerMain from './DrawerMain';
import { useVNode } from './useVNode';
import { commonProps } from './commonProps';

const viewUseTemp = useView();

const Drawer = defineComponent({
  name: 'fbDrawer',
  Main: DrawerMain,
  useView,
  props: {
    viewUse: {
      type: Object as PropType<typeof viewUseTemp>,
      defalut: () => viewUseTemp,
    },
    ...commonProps,
  },
  setup(props) {
    const VNodeUse = useVNode(props, props.viewUse);
    return () => VNodeUse.viewsVNode.value;
  },
});

export default Drawer as typeof Drawer &
  Plugin & {
    readonly Main: typeof DrawerMain;
    readonly useView: typeof useView;
  };
