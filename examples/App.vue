<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <router-view></router-view>
      </div>
    );
  },
});
</script>
