import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fbButton',
  setup() {
    return () => (
      <div>
        {'13123'}
        <button class="fb-button">{'123123123'}</button>
        <input placeholder="你好" />
      </div>
    );
  },
});
