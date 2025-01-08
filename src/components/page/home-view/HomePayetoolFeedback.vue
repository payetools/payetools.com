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
      '“Payetools? Tremendous company, absolutely the best for payments. Nobody knows payments better than me, believe me, but Payetools—wow—they’ve got it all figured out. If I had Payetools back in the day, my businesses would’ve been even more successful.',
    image: '/images/person-7.jpg',
  },
  {
    from: 'Elon Musk',
    position: 'CEO / SpaceX',
    message:
      '"Payetools? It’s like launching a rocket, but for payments—fast, efficient, and no explosions. If SpaceX handled payments, we’d probably just call it Payetools. Highly recommend, it\'s out of this world!"',
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
  },
  {
    from: 'Cristiano Ronaldo',
    position: 'Goal Machine / Football',
    message:
      '"Payetools? It’s like my signature free-kick—precise, powerful, and always on target. When it comes to payments, they’re definitely playing in the Champions League. Simply the best!"',
    image: '/images/person-10.jpg',
  },
  {
    from: 'Jan Van Grundy',
    position: 'CEO / Superpay',
    message:
      '“Payetools let us prototype our payroll solution in a matter of days, instead of the months we expected if we coded ourselves”',
    image: '/images/person-1.jpg',
  },

  {
    from: 'Sean Samuels',
    position: 'CTO / Monster Pay',
    message: '“Payetools is magic”',
    image: '/images/person-2.jpg',
  },

  {
    from: 'Sally Shawshank',
    position: 'Evangelist / Microsoft',
    message: '“We love Payetools because it is top-notch”',
    image: '/images/person-3.jpg',
  },

  {
    from: 'Robin Gustafsson',
    position: 'CEO / Rekonomista',
    message: '“Payetools let us prototype our payroll solution in a matter of days.”',
    image: '/images/person-4.jpg',
  },

  {
    from: 'Arshad Sayed',
    position: 'CEO / AOS',
    message: '“Best at what it does”',
    image: '/images/person-5.jpg',
  },
]);
</script>

<template>
  <div class="w-full space-y-4">
    <!-- header -->
    <div class="w-full px-4 md:px-8 lg:px-12">
      <h6 class="text-lg font-bold">What are people saying about Payetools?</h6>
      <p class="text-sm text-muted-foreground">
        Don't take our word for it, Payetools is making payroll-enabling applications quicker and
        easier…
      </p>
    </div>

    <!-- carousel -->
    <div class="w-full bg-accent p-4 lg:p-8">
      <Carousel
        class="w-full"
        :opts="{
          align: 'start',
          // loop: true,
        }"
      >
        <CarouselContent class="-ml-1">
          <CarouselItem
            v-for="(feedback, index) in feedbacks"
            :key="index"
            class="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div class="p-1">
              <Card>
                <CardContent class="flex h-[420px] flex-col justify-between gap-4 p-8">
                  <p>{{ feedback?.message }}</p>

                  <div class="flex items-center justify-between gap-3">
                    <div class="flex h-3/5 flex-col justify-around gap-3">
                      <div class="font-semibold">{{ feedback?.from }}</div>
                      <div>{{ feedback?.position }}</div>
                    </div>

                    <img :src="feedback?.image" class="aspect-square w-24 rounded-lg" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div class="mt-4">
          <CarouselTabs
            :count="feedbacks?.length"
            class="h-3 w-3 bg-gray-300 dark:bg-background/60"
            activeClass="dark:bg-background bg-gray-500"
          />
        </div>
      </Carousel>
    </div>
  </div>
</template>
