<template>

   <div class="my-12 flex justify-center">
      <img class="min-h-[166px]" src="~/assets/images/logo-preta.png" alt="Josceline Dadá">
   </div>
   <div v-if="!$route.params.slug" class="py-5 max-w-5xl m-auto">
      <div class="mb-4  max-w-[75%] m-auto relative flex flex-col justify-center items-center text-black ">
        <div class="flex flex-col items-center mb-8">
          <h1 class="text-5xl font-thin mb-4">
          {{ posts[0].title }}
          </h1>

          <div class="text-sm mb-6 font-mono font-extralight text-slate-100">
          by {{ posts[0].author }}
          </div>
        </div>

         <div class="text-md font-mono" v-html="posts[0].html" />
      </div>
 
      <hr class="mt-2" />
   
      <div class="my-6 text-sm font-mono text-center uppercase text-black">
         Check all posts
      </div>
      
     <div id="cards-container" class="grid grid-cols-3 gap-5">
       <template v-for="(post, index) in posts" :key="post.title">
         <div 
          v-if="index !== 0" 
          id="card" 
          class="max-w-sm font-mono p-4 relative border text-black border-gray-100 rounded-sm hover:shadow-sm hover:shadow-black ">
          <NuxtLink class="absolute w-full h-full left-0 top-0 font-mono" :to="`/posts/${post.uri}`"></NuxtLink>
          <h1 class="text-sm font-thin">
              {{ post.title }}
          </h1>

          <div class="my-4">
              <img class="w-full h-24 object-cover" :src="post.thumbnail" alt="">
          </div>
 
          <!-- <p class="text-xs">
            {{ post.description }}
          </p> -->
           <!-- <div class="text-xl" v-html="post.html" /> -->
         </div>
       </template>


     </div>
     <hr class="mt-12" />

   </div>

 </template>
 
 <script setup>
   import { storeToRefs } from 'pinia';
 
   const { $postStore } = useNuxtApp()
   const { posts } = storeToRefs($postStore)
 
 </script>
 