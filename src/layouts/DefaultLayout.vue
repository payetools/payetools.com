<script setup lang="ts">
import { LayoutFooter, LayoutHeader } from './components/default-layout';
import SuspenseView from './suspense/SuspenseView.vue';
</script>

<template>
  <!-- header -->
  <LayoutHeader />

  <!-- main router view content with suspense -->
  <SuspenseView />

  <!-- footer -->
  <LayoutFooter />
</template>
