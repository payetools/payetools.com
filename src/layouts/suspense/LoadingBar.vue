<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = withDefaults(defineProps<{ loading?: boolean }>(), {
  loading: false,
});

const show = ref(props.loading);
const width = ref(0);
const counter = ref(0);

watch(
  () => props.loading,
  (value, oldValue) => {
    if (value) {
      show.value = true;
      incrementCounter();
    } else if (!value && oldValue) {
      setTimeout(() => {
        show.value = false;
        width.value = 0;
        counter.value = 0;
      }, 400);
      width.value = 98;
    }
  },
);

watch(
  () => counter.value,
  () => {
    if (counter.value <= 5) width.value = counter.value * 10;
    else if (counter.value > 5) width.value = 50 + (counter.value - 5) * 5;
  },
);

const incrementCounter = () => {
  if (!props.loading || counter.value > 11) return;

  counter.value++;
  if (counter.value <= 5) setTimeout(incrementCounter, 200);

  if (counter.value > 5) {
    setTimeout(incrementCounter, 1000);
  }
};

const loaderWidth = computed(() => `${width.value}%`);
</script>

<template>
  <div
    v-if="show"
    class="page-loader absolute left-0 top-0 h-1 transition-all duration-100"
    :class="[show ? 'z-50 bg-gradient-to-r from-primary to-secondary' : 'z-0 bg-transparent']"
  ></div>
</template>

<style scoped>
.page-loader {
  width: v-bind('loaderWidth');
}
</style>
