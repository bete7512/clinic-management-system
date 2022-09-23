<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
const defaultLayout = "empty";
export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();
    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );
    console.log(layout);
    // console.log(currentRoute.value.meta.la);
    

    return {
      layout,
    };
  },
});
</script>
