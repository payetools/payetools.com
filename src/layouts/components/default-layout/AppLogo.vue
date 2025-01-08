<script setup lang="ts">
import { cn } from '@/lib/utils';

import type { HTMLAttributes } from 'vue';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
  <RouterLink to="/">
    <h1 :class="cn('text-3xl font-bold text-primary', props.class)">
      <slot> Payetools </slot>
    </h1>
  </RouterLink>
</template>
