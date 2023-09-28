<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  const { $postStore } = useNuxtApp()
  const route = useRoute()
  const currentUrl = route.path
  
  if (currentUrl !== '/refresh') {
    await $postStore.getPosts()
  }
  
</script>