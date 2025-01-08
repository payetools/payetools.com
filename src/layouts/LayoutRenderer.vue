<script setup lang="ts">
import { computed } from 'vue';

import DefaultLayout from './DefaultLayout.vue';
import FullLayout from './FullLayout.vue';

import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => route.meta?.layout ?? 'default');
</script>

<template>
  <DefaultLayout v-if="layout === 'default'" />
  <FullLayout v-else />
</template>
