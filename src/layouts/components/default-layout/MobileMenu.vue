<script setup lang="ts">
import { ref } from 'vue';

import { Menu } from 'lucide-vue-next';

import { Button } from '@/components/ui/button';
import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AppLogo, NavLink } from '.';

const open = ref(false);
</script>

<template>
  <Sheet v-model:open="open">
    <SheetTrigger asChild>
      <Button class="h-8 w-8">
        <Menu />
      </Button>
    </SheetTrigger>

    <SheetContent side="left" class="min-w-[375px] p-0">
      <div class="flex h-12 items-center px-4">
        <AppLogo class="text-lg" @click="open = false" />
      </div>

      <ScrollArea class="h-[calc(100vh-48px)] p-4">
        <div class="w-full space-y-6">
          <div class="flex w-full flex-col gap-2">
            <NavLink :to="{ name: 'product' }" @click="open = false">Product</NavLink>
            <NavLink :to="{ name: 'licensing' }" @click="open = false">Licensing</NavLink>
            <NavLink :to="{ name: 'about' }" @click="open = false">About</NavLink>
            <NavLink :to="{ name: 'docs' }" @click="open = false">Docs</NavLink>
          </div>

          <div class="w-full">
            <RouterLink :to="{ name: 'login' }" @click="open = false">
              <Button class="w-full px-8">Login</Button>
            </RouterLink>
          </div>
        </div>
      </ScrollArea>
    </SheetContent>
  </Sheet>
</template>
