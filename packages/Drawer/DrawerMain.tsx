import { defineComponent, Plugin } from 'vue';
import { useView } from './useView';
import { useVNode } from './useVNode';
import { commonProps } from './commonProps';

const mainViewUse = useView();

const DrawerMain = defineComponent({
  name: 'fbDrawerMain',
  openView: mainViewUse.openView,
  closeView: mainViewUse.closeView,
  closeViewById: mainViewUse.closeViewById,
  registerId: mainViewUse.registerId,
  runFn: mainViewUse.runFn,
  props: commonProps,
  setup(props) {
    const VNodeUse = useVNode(props, mainViewUse);
    return () => VNodeUse.viewsVNode.value;
  },
});

export default DrawerMain as typeof DrawerMain &
  Plugin & {
    readonly openView: typeof mainViewUse.openView;
    readonly closeView: typeof mainViewUse.closeView;
    readonly closeViewById: typeof mainViewUse.closeViewById;
    readonly runFn: typeof mainViewUse.runFn;
    readonly registerId: typeof mainViewUse.registerId;
  };
