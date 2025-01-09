<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';

import { Switch } from '@/components/ui/switch';

import useDarkMode from '@/composables/useDarkMode';

const darkMode = useDarkMode();
</script>

<template>
  <Switch
    v-model:checked="darkMode"
    :thumbClass="`flex justify-center items-center ${darkMode ? 'bg-blue-500' : 'bg-yellow-500'}`"
    class="data-[state=checked]:bg-blue-950 data-[state=unchecked]:bg-yellow-100"
  >
    <template #thumb>
      <Moon v-if="darkMode" :size="14" class="text-white" />
      <Sun v-else :size="14" class="text-white" />
    </template>
  </Switch>
</template>
