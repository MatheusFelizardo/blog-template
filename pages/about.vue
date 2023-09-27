<template>
   
    <div class="mt-10 sm:mt-[100px] max-w-5xl m-auto font-['Newsreader']">
      <div class="max-w-[90%] sm:max-w-[65%] m-auto flex flex-col gap-4">
        <div v-html="aboutMe"></div>
      </div>
    </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  const { $postStore } = useNuxtApp()
  const { aboutMe } = storeToRefs($postStore)

  useSeoMeta({
    title: 'ABOUT ME - MyBlog',
    ogTitle: 'ABOUT ME - MyBlog',
    description: 'This is my blog, let me tell you all about it.',
    ogDescription: 'This is my blog, let me tell you all about it.',
  })
</script>