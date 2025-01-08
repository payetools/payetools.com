<script setup lang="ts">
import { MobileHeader, WebHeader } from '.';
</script>

<template>
  <header class="sticky top-0 z-10 flex h-12 w-full bg-background md:h-20">
    <WebHeader class="hidden md:flex" />
    <MobileHeader class="md:hidden" />
  </header>
</template>
