import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

import { defineStore } from 'pinia';

const COLOR_MODE_STORAGE_KEY = 'color-mode';
const resolveColorMode = () => {
  const saved = localStorage.getItem(COLOR_MODE_STORAGE_KEY);
  if (saved && ['light', 'dark'].includes(saved)) {
    return saved;
  }
  return 'system';
};

export const useRootStore = defineStore('root', () => {
  /**
   * ------------------------------------------------------------
   * Tracking current window width
   * ------------------------------------------------------------
   */
  const windowWidth = ref(window?.innerWidth ?? 1920);
  onMounted(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth;
    });
  });
  onBeforeUnmount(() => {
    if (typeof window === 'undefined') return;

    window.removeEventListener('resize', () => {
      windowWidth.value = window.innerWidth;
    });
  });

  /**
   * ------------------------------------------------------------
   * Toggle color mode
   * ------------------------------------------------------------
   */
  const setColorMode = (mode: 'light' | 'dark' | 'system') => {
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, mode);
    colorMode.value = mode;
  };

  const colorMode = ref(resolveColorMode());

  const isDark = computed(
    () =>
      colorMode.value === 'dark' ||
      (colorMode.value === 'system' &&
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  );
  watch(
    () => isDark.value,
    () => {
      document.documentElement.classList.toggle('dark', isDark.value);
    },
    {
      immediate: true,
    },
  );

  return {
    windowWidth,
    colorMode,
    setColorMode,
    isDark,
  };
});
