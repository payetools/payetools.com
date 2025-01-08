<script setup lang="ts">
import { computed, ref } from 'vue';

import { Button } from '@/components/ui/button';

const cookieAcceptanceStatus = ref<boolean | null>(null);
const isUserInteracted = computed(() => typeof cookieAcceptanceStatus.value === 'boolean');
</script>

<template>
  <Transition
    leave-to-class="opacity-0"
    leave-active-class="transition duration-300 ease-in-out -translate-x-4"
  >
    <div
      v-if="!isUserInteracted"
      class="gray-gray-300 fixed bottom-4 left-4 z-[99] flex w-[520px] max-w-[calc(100%-32px)] items-center gap-3 rounded-lg border bg-accent p-4 text-sm shadow-md shadow-gray-500 dark:border-gray-700 dark:shadow-sm dark:shadow-accent"
    >
      <div class="flex-1">
        We use cookies to collect data to improve your experience on our site. See our
        <a href="#" class="text-primary underline">cookie policy</a>. You can
        <a href="#" class="text-primary underline">change your preferences</a> at any time.
      </div>

      <div class="flex flex-col items-center gap-1.5 sm:flex-row">
        <Button
          variant="outline"
          class="shrink-0 px-4 dark:hover:bg-background/80"
          @click="cookieAcceptanceStatus = false"
          >Decline</Button
        >

        <Button class="shrink-0 px-4" @click="cookieAcceptanceStatus = true">Accept</Button>
      </div>
    </div>
  </Transition>
</template>
