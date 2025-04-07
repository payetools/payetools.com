<script setup lang="ts">
import {
  CookieConfirmation,
  HomeBanner,
  HomeBannerDescription,
  HomePayetoolFeatures,
  HomePayetoolFeedback,
} from '@/components/page/home-view';
</script>

<template>
  <div class="w-full min-h-screen bg-background">
    <!-- banner -->
    <HomeBanner />

    <!-- banner description -->
    <HomeBannerDescription />

    <!-- features -->
    <HomePayetoolFeatures />

    <!-- feedback carousel -->
    <HomePayetoolFeedback />

    <!-- call to action section -->
    <div class="w-full max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div class="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-8 md:p-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to simplify your payroll?</h2>
        <p class="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Join thousands of businesses that trust Payetools for their payroll needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors">
            Get Started
          </button>
          <button class="px-6 py-3 rounded-lg bg-primary/20 text-white border border-white/30 font-medium hover:bg-primary/30 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>

    <!-- cookie confirmation -->
    <CookieConfirmation />
  </div>
</template>