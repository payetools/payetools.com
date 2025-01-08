<script setup lang="ts">
import { Facebook, Github, Linkedin, Twitter, Youtube } from 'lucide-vue-next';

import { Button } from '@/components/ui/button';
</script>

<template>
  <footer class="mt-6 w-full space-y-4 pb-4">
    <div class="grid w-full grid-cols-10 gap-4">
      <div class="col-span-10 md:col-span-2 lg:col-span-4">
        <div class="mt-6 md:mt-10">
          <RouterLink to="/"
            ><span class="text-xl font-bold text-primary">Payetools</span></RouterLink
          >
        </div>
      </div>

      <div class="col-span-10 grid grid-cols-12 gap-3 md:col-span-8 lg:col-span-6">
        <!-- product -->
        <div class="col-span-12 space-y-3 sm:col-span-6 md:col-span-3 md:space-y-6">
          <div class="font-bold">Product</div>

          <div class="flex flex-col gap-0.5">
            <a href="#" class="hover:underline">Pricing</a>
            <a href="#" class="hover:underline">Dashboard</a>
            <a href="#" class="hover:underline">Feature Request</a>
          </div>
        </div>

        <!-- developers -->
        <div class="col-span-12 space-y-3 sm:col-span-6 md:col-span-3 md:space-y-6">
          <div class="font-bold">Developers</div>

          <div class="flex flex-col gap-0.5">
            <a href="#" class="hover:underline">Documentation</a>
            <a href="#" class="hover:underline">Source code</a>
            <a href="#" class="hover:underline">Support</a>
          </div>
        </div>

        <!-- company -->
        <div class="col-span-12 space-y-3 sm:col-span-6 md:col-span-3 md:space-y-6">
          <div class="font-bold">Company</div>

          <div class="flex flex-col gap-0.5">
            <a href="#" class="hover:underline">About</a>
            <a href="#" class="hover:underline">Blog</a>
            <a href="#" class="hover:underline">Contact</a>
          </div>
        </div>

        <!-- legal -->
        <div class="col-span-12 space-y-3 sm:col-span-6 md:col-span-3 md:space-y-6">
          <div class="font-bold">Legal</div>

          <div class="flex flex-col gap-0.5">
            <a href="#" class="hover:underline">Terms and Conditions</a>
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Data Processing</a>
            <a href="#" class="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p>&#169; 2025 Payetools Ltd</p>
      <div class="flex items-center justify-end gap-0 text-muted-foreground">
        <a href="#">
          <Button variant="ghost" size="sm">
            <Twitter />
          </Button>

          <Button variant="ghost" size="sm">
            <Youtube />
          </Button>

          <Button variant="ghost" size="sm">
            <Facebook />
          </Button>

          <Button variant="ghost" size="sm">
            <Linkedin />
          </Button>

          <Button variant="ghost" size="sm">
            <Github />
          </Button>
        </a>
      </div>
    </div>
  </footer>
</template>
