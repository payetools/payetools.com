<script setup lang="ts">
import { computed } from 'vue';

import { omit } from 'lodash';
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from 'radix-vue';

import { cn } from '@/lib/utils';

import type { SwitchRootEmits, SwitchRootProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

const props = defineProps<
  SwitchRootProps & { class?: HTMLAttributes['class']; thumbClass?: HTMLAttributes['class'] }
>();

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = computed(() => {
  return omit(props, ['class', 'thumbClass']);
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        props.class,
      )
    "
  >
    <SwitchThumb
      :class="
        cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5',
          thumbClass,
        )
      "
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
