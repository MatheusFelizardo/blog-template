<template>
  <nav class="text-xs text-black font-semibold uppercase flex gap-[72px] justify-center items-center py-8 underline-offset-4 decoration-red-500 decoration-2">
    <NuxtLink :active-class="'underline '" to="/">Home</NuxtLink>
    <NuxtLink :active-class="'underline'" to="/about">About me</NuxtLink>
    <NuxtLink :active-class="'underline'" to="/posts">Stories</NuxtLink>
  </nav>
</template>

<script setup>

</script>
