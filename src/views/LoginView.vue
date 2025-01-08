<script setup lang="ts">
const delay = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 6000);
  });
};
await delay();
</script>
<template>
  <h1>This is login page</h1>
</template>
