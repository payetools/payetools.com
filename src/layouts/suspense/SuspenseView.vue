<script setup lang="ts">
import { ref } from 'vue';

import LoadingBar from './LoadingBar.vue';
import SuspenseFallback from './SuspenseFallback.vue';

const isSuspense = ref(false);
</script>

<template>
  <main class="relative">
    <!-- horizontal loading progress bar when app is suspended -->
    <LoadingBar :loading="isSuspense" />

    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense @pending="isSuspense = true" @resolve="isSuspense = false">
          <component :is="Component"></component>
          <template #fallback>
            <SuspenseFallback />
          </template>
        </Suspense>
      </template>
    </RouterView>
  </main>
</template>
