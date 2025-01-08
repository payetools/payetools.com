<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { cn } from '@/lib/utils';

import type { HTMLAttributes } from 'vue';
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';

type Props = {
  to: string | RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric;
  class?: HTMLAttributes['class'];
};

const props = defineProps<Props>();

const isExternalLink = (to: Props['to']): to is string => {
  return typeof to === 'string' && to.startsWith('http');
};
</script>

<template>
  <a
    v-if="isExternalLink(to)"
    v-bind="$attrs"
    :href="to"
    target="_blank"
    :class="cn('font-medium text-primary hover:underline dark:text-primary/10', props.class)"
  >
    <slot />
  </a>

  <RouterLink v-else :to="to" v-slot="{ isActive, href, navigate }">
    <slot name="link" :isActive="isActive" :href="href" :navigate="navigate">
      <span
        :class="
          cn('font-medium text-primary hover:underline', isActive ? 'underline' : '', props.class)
        "
      >
        <slot />
      </span>
    </slot>
  </RouterLink>
</template>
