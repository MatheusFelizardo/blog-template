<template>
 
  <template v-if="!$route.params.slug">
      
    <div id="cards-container" class="flex flex-col gap-[20px] pt-10 max-w-5xl m-auto sm:pt-40">
      <template v-for="(post, index) in posts" :key="post.title">
        <div :id="post.title" class="post w-[90%] m-auto  text-black relative sm:w-[65%]">
        <NuxtLink class="absolute w-full h-full left-0 top-0 font-sans" :to="`/posts/${post.uri}`"></NuxtLink>
          <div class="flex flex-col mb-1">
            <h1 class="text-4xl font-light font-['Newsreader'] mb-4">
            {{ post.title }}
            </h1>

            <div class="text-sm text-black font-['Newsreader']">
            {{ post.created_at }}
            </div>
          </div>

          <div id="post_content" class=" font-['Newsreader']" v-html="post.html" />

          <hr class="mt-12" />

        </div>
      </template>
    </div>
  </template>

  <NuxtPage v-else :posts="posts" />

</template>

<script setup>
  import { storeToRefs } from 'pinia';
  const { $postStore } = useNuxtApp()
  const { posts } = storeToRefs($postStore)

  useSeoMeta({
    title: 'STORIES - MyBlog',
    ogTitle: 'STORIES - MyBlog',
    description: 'This is my blog, let me tell you all about it.',
    ogDescription: 'This is my blog, let me tell you all about it.',
  })

</script>
