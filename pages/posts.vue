<template>
 
  <template v-if="!$route.params.slug">
    <div class="my-2 text-md text-center">
      Todos os posts
    </div>
      
    <div id="cards-container" class="flex flex-col gap-[20px]">
      <template v-for="(post, index) in posts" :key="post.title">
        <div :id="post.title" class="post w-[75%] m-auto p-5 text-black relative">
        <NuxtLink class="absolute w-full h-full left-0 top-0 font-mono" :to="`/posts/${post.uri}`"></NuxtLink>

          <div class="flex flex-col items-center mb-8 justify-center">
            <h1 class="text-5xl font-thin mb-4">
            {{ post.title }}
            </h1>

            <div class="text-sm mb-6 font-mono font-extralight text-slate-100">
            by {{ post.author }}
            </div>
          </div>

          <div class="text-md font-mono" v-html="post.html" />
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

</script>
