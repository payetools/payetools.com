<script setup lang="ts">
import { computed } from 'vue';

import { omit } from 'lodash';
import { DialogDescription } from 'radix-vue';

import { cn } from '@/lib/utils';

import type { DialogDescriptionProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  return omit(props, ['class']);
});
</script>

<template>
  <DialogDescription
    :class="cn('text-sm text-muted-foreground', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>
