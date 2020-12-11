import { defineComponent } from 'vue';

import { Button } from '../../packages';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <Button />
      </div>
    );
  },
});
