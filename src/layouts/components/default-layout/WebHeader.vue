<script setup lang="ts">
import { type HTMLAttributes } from 'vue';

import { Button } from '@/components/ui/button';
import { AppLogo, ColorModeToggler, NavLink } from '.';

import { cn } from '@/lib/utils';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
  <div :class="cn('flex w-full items-center justify-between', props.class)">
    <!-- left -->
    <div class="flex items-center gap-3">
      <!-- logo -->
      <AppLogo />
    </div>

    <!-- right -->
    <div class="flex items-center justify-end gap-8">
      <!-- nav links -->
      <div class="flex items-center gap-5">
        <NavLink :to="{ name: 'product' }">Product</NavLink>
        <NavLink :to="{ name: 'licensing' }">Licensing</NavLink>
        <NavLink :to="{ name: 'about' }">About</NavLink>
        <NavLink :to="{ name: 'docs' }">Docs</NavLink>
      </div>

      <!-- color mode -->
      <ColorModeToggler />

      <!-- login -->
      <RouterLink :to="{ name: 'login' }">
        <Button class="px-8">Login</Button>
      </RouterLink>
    </div>
  </div>
</template>
