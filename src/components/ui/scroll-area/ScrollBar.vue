<script setup lang="ts">
import { computed } from 'vue';

import { omit } from 'lodash';
import { ScrollAreaScrollbar, ScrollAreaThumb } from 'radix-vue';

import { cn } from '@/lib/utils';

import type { ScrollAreaScrollbarProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

const props = withDefaults(
  defineProps<ScrollAreaScrollbarProps & { class?: HTMLAttributes['class'] }>(),
  {
    orientation: 'vertical',
  },
);

const delegatedProps = computed(() => {
  return omit(props, ['class']);
});
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="delegatedProps"
    :class="
      cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-px',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-px',
        props.class,
      )
    "
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
</template>
