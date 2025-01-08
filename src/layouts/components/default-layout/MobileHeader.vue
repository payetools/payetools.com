<script setup lang="ts">
import { type HTMLAttributes } from 'vue';

import { AppLogo, ColorModeToggler, MobileMenu } from '.';

import { cn } from '@/lib/utils';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
  <div :class="cn('flex w-full items-center justify-between', props.class)">
    <!-- left -->
    <div class="flex items-center gap-3">
      <!-- logo -->
      <AppLogo class="text-lg" />
      <MobileMenu />
    </div>

    <!-- right -->
    <div class="flex items-center justify-end gap-3">
      <!-- color mode -->
      <ColorModeToggler />
    </div>
  </div>
</template>
