<script setup lang="ts">
import { readonly } from 'vue';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselTabs } from '@/components/ui/carousel';

type Feedback = {
  from: string;
  position: string;
  message: string;
  image: string;
};

const feedbacks = readonly<Feedback[]>([
  {
    from: 'Donald Trump',
    position: 'President / USA',
    message:
      '"Payetools? Tremendous company, absolutely the best for payments. Nobody knows payments better than me, believe me, but Payetools—wow—they\'ve got it all figured out. If I had Payetools back in the day, my businesses would\'ve been even more successful.',
    image: '/images/person-7.jpg',
  },
  {
    from: 'Elon Musk',
    position: 'CEO / SpaceX',
    message:
      '"Payetools? It\'s like launching a rocket, but for payments—fast, efficient, and no explosions. If SpaceX handled payments, we\'d probably just call it Payetools. Highly recommend, it\'s out of this world!"',
    image: '/images/person-6.jpg',
  },
  {
    from: 'Albert Einstein',
    position: 'Father of Modern Physics',
    message:
      '"Managing payments with Payetools is so simple, it feels like bending the laws of physics. If only balancing my equations was as easy as balancing my budget with this!"',
    image: '/images/person-8.jpg',
  },
  {
    from: 'Lionel Messi',
    position: 'GOAT / Football',
    message:
      '"Using Payetools feels like scoring a hat-trick in the first half—smooth, effortless, and absolutely unstoppable. If payments were a game, Payetools would always be the GOAT!"',
    image: '/images/person-9.jpg',
  }
]);
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold tracking-tight mb-4">Trusted by Businesses Everywhere</h2>
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
        Don't take our word for it, Payetools is making payroll-enabling applications quicker and
        easier…
      </p>
    </div>

    <!-- carousel -->
    <div class="w-full">
      <Carousel
        class="w-full"
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent class="-ml-4">
          <CarouselItem
            v-for="(feedback, index) in feedbacks"
            :key="index"
            class="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <Card class="h-full border border-border bg-background/50 hover:bg-background transition-colors duration-200">
              <CardContent class="flex h-[420px] flex-col justify-between gap-4 p-6">
                <p class="text-foreground/80 italic">{{ feedback?.message }}</p>

                <div class="flex items-center gap-4">
                  <img :src="feedback?.image" class="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div class="font-medium text-foreground">{{ feedback?.from }}</div>
                    <div class="text-sm text-muted-foreground">{{ feedback?.position }}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <div class="mt-8 flex justify-center">
          <CarouselTabs
            :count="feedbacks?.length"
            class="h-2 w-2 rounded-full bg-muted transition-colors duration-200"
            activeClass="bg-primary"
          />
        </div>
      </Carousel>
    </div>
  </div>
</template>