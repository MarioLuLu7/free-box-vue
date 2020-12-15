import { DefineComponent } from 'vue';
import { useView } from './useView';

export interface IviewConfig {
  name: string;
  view: DefineComponent<any, any, any>;
}

export interface Iview {
  'fb-id': string;
  name: string;
  props: Record<string, any>;
  width: number;
}

const viewUseTemp = useView();
export type TviewUse = typeof viewUseTemp;
