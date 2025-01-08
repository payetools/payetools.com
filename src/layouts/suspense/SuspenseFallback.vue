<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';

import { useRoute } from 'vue-router';

const route = useRoute();
const fallbackComponentKey = computed(() => route.meta?.suspenseFallbackComponent ?? 'default');

const components = computed(() => {
  return {
    default: defineAsyncComponent(() => import('./DefaultFallback.vue')),
    // other fallback components
  };
});

const fallbackComponent = computed(() => {
  if (!Object.keys(components.value).includes(fallbackComponentKey.value))
    return components.value.default;

  return components.value[fallbackComponentKey.value];
});
</script>

<template>
  <Component :is="fallbackComponent" />
</template>
