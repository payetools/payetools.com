<script setup lang="ts">
import { useCarousel } from './useCarousel';

import { cn } from '@/lib/utils';

import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  activeClass?: HTMLAttributes['class'];
  count: number;
}>();
const { scrollTo, isActiveSlide } = useCarousel();
</script>

<template>
  <div class="flex w-full items-center justify-center gap-1.5">
    <template v-for="(_, index) in count" :key="index">
      <button
        :class="
          cn(
            'h-4 w-4 rounded-full bg-accent/60',
            props.class,
            isActiveSlide(index) ? 'bg-accent' : '',
            isActiveSlide(index) ? activeClass : '',
          )
        "
        @click="scrollTo(index)"
      ></button>
    </template>
  </div>
</template>
