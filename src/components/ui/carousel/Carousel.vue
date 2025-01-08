<script setup lang="ts">
import { useProvideCarousel } from './useCarousel';

import { cn } from '@/lib/utils';

import type { CarouselEmits, CarouselProps, WithClassAsProps } from './interface';

const props = withDefaults(defineProps<CarouselProps & WithClassAsProps>(), {
  orientation: 'horizontal',
});

const emits = defineEmits<CarouselEmits>();

const {
  canScrollNext,
  canScrollPrev,
  currentIndex,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev,
  scrollTo,
  isActiveSlide,
} = useProvideCarousel(props, emits);

defineExpose({
  canScrollNext,
  canScrollPrev,
  currentIndex,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev,
  scrollTo,
  isActiveSlide,
});

function onKeyDown(event: KeyboardEvent) {
  const prevKey = props.orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
  const nextKey = props.orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';

  if (event.key === prevKey) {
    event.preventDefault();
    scrollPrev();

    return;
  }

  if (event.key === nextKey) {
    event.preventDefault();
    scrollNext();
  }
}
</script>

<template>
  <div
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="onKeyDown"
  >
    <slot
      :can-scroll-next
      :can-scroll-prev
      :current-index
      :carousel-api
      :carousel-ref
      :orientation
      :scroll-next
      :scroll-prev
      :scroll-to
      :is-active-slide
    />
  </div>
</template>
