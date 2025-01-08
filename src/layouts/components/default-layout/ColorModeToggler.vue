<script setup lang="ts">
import { Switch } from '@/components/ui/switch';

import useDarkMode from '@/composables/useDarkMode';

const darkMode = useDarkMode();
</script>

<template>
  <Switch
    v-model:checked="darkMode"
    thumbClass="bg-secondary"
    class="data-[state=checked]:bg-secondary/40 data-[state=unchecked]:bg-secondary/40"
  />
</template>
