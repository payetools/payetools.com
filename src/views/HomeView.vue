<script setup lang="ts">
import {
  CookieConfirmation,
  HomeBanner,
  HomeBannerDescription,
  HomePayetoolFeatures,
  HomePayetoolFeedback,
} from '@/components/page/home-view';

// top level await will trigger the suspense
// const delay = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 5000);
//   });
// };
// await delay();
</script>

<template>
  <div class="w-full space-y-6 pt-4 lg:space-y-10 lg:pt-2">
    <!-- banner -->
    <HomeBanner />

    <!-- banner description -->
    <HomeBannerDescription />

    <!-- cookie confirmation -->
    <CookieConfirmation />

    <!-- features -->
    <HomePayetoolFeatures />

    <!-- feedback carousel -->
    <HomePayetoolFeedback />

    <!-- empty content -->
    <div
      class="flex aspect-video w-full items-center justify-center bg-accent p-4 text-white dark:text-background md:p-8 lg:p-12 xl:p-20"
    >
      <p class="text-center text-lg font-bold sm:text-xl md:text-3xl lg:text-6xl xl:text-[120px]">
        Empty Section Awaiting New Content
      </p>
    </div>
  </div>
</template>
