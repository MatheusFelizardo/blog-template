<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  const { $postStore } = useNuxtApp()
  await $postStore.getPosts()
  
</script>