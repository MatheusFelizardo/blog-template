<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  const { $postStore } = useNuxtApp()
  await $postStore.getPosts()
  
</script>