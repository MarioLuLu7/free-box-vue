import {
  ref,
  ComponentInternalInstance,
  ComponentPublicInstance,
  nextTick,
  onBeforeUnmount,
  watch,
  computed,
  defineProps,
} from 'vue';
import { TviewUse } from './interface';
import './style.scss';
import { commonProps } from './commonProps';

const propsTemp = defineProps(commonProps);
export const useVNode = (props: typeof propsTemp, viewUse: TviewUse) => {
  const { viewConfig, animation } = props;

  // 移动拖拽--------------------------------------------------------------start
  const mouseState = ref(false);
  const leftW = ref<number>(0);
  const lastW = ref<number>(0);
  const moveDrawerRef = ref(null);
  const outDrawerRef = ref(null);
  let moveboxW = 0;

  const moveEvent = (e: MouseEvent) => {
    if (!mouseState.value) return;
    let left = leftW.value + e.movementX;
    if (left > 0) {
      left = 0;
    } else if (left < (moveboxW - lastW.value) * -1) {
      left = (moveboxW - lastW.value) * -1;
    }
    leftW.value = left;
  };
  const upEvent = () => {
    mouseState.value = false;
  };
  const onMouseDown = () => {
    mouseState.value = true;
    moveboxW = moveDrawerRef.value.clientWidth;
  };
  document.addEventListener('mousemove', moveEvent);
  document.addEventListener('mouseup', upEvent);
  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', moveEvent);
    document.removeEventListener('mouseup', upEvent);
  });
  watch(
    () => viewUse.views.value.length,
    () => {
      // 设置最后一个view的宽度
      lastW.value = viewUse.views.value[viewUse.views.value.length - 1]?.width || 0;
      nextTick(() => {
        const left = outDrawerRef.value.clientWidth - moveDrawerRef.value.clientWidth;
        leftW.value = left < 0 ? left : leftW.value;
      });
    }
  );
  // 移动拖拽----------------------------------------------------------------end

  const setItemRef = (id: string, d: ComponentInternalInstance) => {
    if (!d) return;
    nextTick(() => {
      viewUse._registerRef(id, d);
    });
  };

  const getView = (name: string) => {
    return viewConfig.filter((item) => item.name === name)?.[0].view;
  };

  const viewsVNode = computed(() => (
    <div class="fb-drawer" ref={outDrawerRef}>
      <div
        class={{ 'fb-transition-left': !mouseState.value && animation, 'fb-drawer-move-box': true }}
        style={{ left: `${leftW.value}px` }}
        onMousedown={onMouseDown}
        ref={moveDrawerRef}
      >
        {viewUse.views.value.map((item) => {
          const View = getView(item.name);
          return (
            <div class="fb-drawer-item" style={{ width: `${item.width}px` }}>
              <View
                {...{ ...item.props, ['fb-id']: item['fb-id'] }}
                ref={(el: ComponentPublicInstance | undefined) => {
                  setItemRef(item['fb-id'], el?.$);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  ));

  return {
    viewsVNode,
  };
};
