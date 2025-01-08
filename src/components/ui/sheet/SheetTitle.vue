<script setup lang="ts">
import { computed } from 'vue';

import { omit } from 'lodash';
import { DialogTitle } from 'radix-vue';

import { cn } from '@/lib/utils';

import type { DialogTitleProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

const props = defineProps<DialogTitleProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  return omit(props, ['class']);
});
</script>

<template>
  <DialogTitle
    :class="cn('text-lg font-semibold text-foreground', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogTitle>
</template>
