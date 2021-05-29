<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Example Component</div>
          <div class="card-body">I'm an example component.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const message = ref("Hello Laravel Vue 3");
    onMounted(() => {
      console.log("Component mounted.");
    });
    return {
      message,
    };
  },
});
</script>
