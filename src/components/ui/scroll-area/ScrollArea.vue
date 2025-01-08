<script setup lang="ts">
import { computed } from 'vue';

import { omit } from 'lodash';
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport } from 'radix-vue';

import ScrollBar from './ScrollBar.vue';

import { cn } from '@/lib/utils';

import type { ScrollAreaRootProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

const props = defineProps<ScrollAreaRootProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  return omit(props, ['class']);
});
</script>

<template>
  <ScrollAreaRoot v-bind="delegatedProps" :class="cn('relative overflow-hidden', props.class)">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
