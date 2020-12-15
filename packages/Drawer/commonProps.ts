import { PropType } from 'vue';
import { IviewConfig } from './interface';

export const commonProps = {
  viewConfig: {
    type: Array as PropType<IviewConfig[]>,
    defalut: () => [],
  },
  animation: {
    type: Boolean,
    default: true,
  },
};
