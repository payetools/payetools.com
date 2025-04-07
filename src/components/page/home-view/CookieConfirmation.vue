<script setup lang="ts">
import { computed, ref } from 'vue';

import { Button } from '@/components/ui/button';

const cookieAcceptanceStatus = ref<boolean | null>(null);
const isUserInteracted = computed(() => typeof cookieAcceptanceStatus.value === 'boolean');
</script>

<template>
  <Transition
    leave-to-class="opacity-0 translate-y-4"
    leave-active-class="transition duration-300 ease-in-out"
  >
    <div
      v-if="!isUserInteracted"
      class="fixed bottom-0 left-0 right-0 z-[99] bg-background border-t border-border shadow-lg"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-sm text-muted-foreground">
          We use cookies to collect data to improve your experience on our site. See our
          <a href="#" class="text-primary font-medium hover:underline">cookie policy</a>. You can
          <a href="#" class="text-primary font-medium hover:underline">change your preferences</a> at any time.
        </div>

        <div class="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            class="font-medium"
            @click="cookieAcceptanceStatus = false"
            >Decline</Button
          >

          <Button 
            size="sm" 
            class="font-medium bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
            @click="cookieAcceptanceStatus = true"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  </Transition>
</template>