<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';

import { Switch } from '@/components/ui/switch';

import useDarkMode from '@/composables/useDarkMode';

const darkMode = useDarkMode();
</script>

<template>
  <Switch
    v-model:checked="darkMode"
    thumbClass="bg-yellow-500 flex justify-center items-center"
    class="data-[state=checked]:bg-yellow-100 data-[state=unchecked]:bg-yellow-100"
  >
    <template #thumb>
      <Moon v-if="darkMode" :size="14" class="text-white" />
      <Sun v-else :size="14" class="text-white" />
    </template>
  </Switch>
</template>
