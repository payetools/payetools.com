import { computed } from 'vue';

import { useRootStore } from '@/stores/rootStore';

const useDarkMode = () => {
  const store = useRootStore();
  return computed({
    get: () => store.isDark,
    set: (value) => store.setColorMode(value ? 'dark' : 'light'),
  });
};

export default useDarkMode;
