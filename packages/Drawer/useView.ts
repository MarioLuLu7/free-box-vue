import { ref, SetupContext, EmitsOptions, ComponentInternalInstance } from 'vue';
import { Iview } from './interface';

export const useView = () => {
  const views = ref<Iview[]>([]);

  const openView = (params: {
    id?: string;
    ctx: SetupContext<EmitsOptions>;
    name: string;
    width: number;
    props?: unknown;
  }) => {
    const { id, name, ctx, width, props } = params;
    const fid = ctx.attrs?.['fb-id'];
    const fIndex = views.value.findIndex((item) => item['fb-id'] === fid);
    views.value.splice(fIndex + 1, views.value.length - (fIndex + 1));
    // id是否重复
    if (views.value.findIndex((item) => item['fb-id'] === id) > -1) {
      throw new Error('id does not allow duplicate!');
      return;
    }
    views.value.push({
      'fb-id': id || String(parseInt(`${Math.random() * 100000}`)),
      name,
      props,
      width,
    });
  };

  const closeViewById = (id: string) => {
    if (!id) {
      return;
    }
    const index = views.value.findIndex((item) => item['fb-id'] === id);
    views.value.splice(index, views.value.length - index);
  };

  const closeView = (ctx: SetupContext<EmitsOptions>) => {
    closeViewById(ctx.attrs['fb-id'] as string);
  };

  const refs = ref<{ id: string; ref: ComponentInternalInstance }[]>([]);
  const _registerRef = (id: string, ref: ComponentInternalInstance) => {
    const index = refs.value.findIndex((item) => item['fb-id'] === id);
    index > -1
      ? (refs.value[index].ref = ref)
      : refs.value.push({
          id,
          ref,
        });
  };
  const runFn = (id: string, name: string, params: unknown) => {
    const items = refs.value.filter((it) => it.id === id);
    return (
      items.length && ((items[0].ref as unknown) as ComponentInternalInstance & { ctx: unknown }).ctx?.[name](params)
    );
  };

  const registerId = (ctx: SetupContext<EmitsOptions>, id: string) => {
    const oldId = ctx.attrs['fb-id'] as string;
    if (!oldId) return;
    const index = views.value.findIndex((item) => item['fb-id'] === oldId);
    if (index < 0) return;
    views.value[index]['fb-id'] = id;
  };

  return {
    views,
    openView,
    closeView,
    closeViewById,
    runFn,
    registerId,
    _registerRef,
  };
};
