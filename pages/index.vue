<template>

   <!-- <div class="my-12 flex justify-center items-center flex-col">
      <img class="min-h-[166px]" src="~/assets/images/logo-preta.png" alt="Josceline Dadá">
      
   </div> -->
   <div v-if="!$route.params.slug" class="pt-10 sm:pt-40 py-5 max-w-5xl m-auto">
      <div class="mb-4 max-w-[90%] sm:max-w-[65%] m-auto relative flex flex-col justify-center  text-black ">
        <div class="flex flex-col mb-1">
          <h1 class="text-4xl font-light font-['Newsreader'] mb-4">
          {{ posts[0].title }}
          </h1>

          <div class="text-sm text-black font-['Newsreader']">
           {{ posts[0].created_at }}
          </div>
        </div>

         <div id="post_content" class="font-['Newsreader']" v-html="posts[0].html" />
      </div>
 
      <hr class="mt-16" />
   
      <!-- <div class="my-6 text-sm font-sans text-center uppercase text-black">
        Check all posts
      </div> -->
      
     <!-- <div id="cards-container" class="grid grid-cols-1 gap-8 max-w-[950px] m-auto mt-16"> -->
     <div id="cards-container" class="grid grid-cols-1 gap-8 max-w-[950px] m-auto mt-10 sm:mt-16 sm:grid-cols-2 md:grid-cols-3">
       <template v-for="(post, index) in posts" :key="post.title">
        <div v-if="index !== 0"  class="relative group">
          <div class="">
            <img class="w-full h-[300px] object-cover" :src="post.thumbnail" alt="">
          </div>

          <NuxtLink :to="`/posts/${post.uri}`" class="opacity-0 transition-opacity description w-full h-full absolute justify-center items-center flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black bg-opacity-50 group-hover:opacity-100">
            <span class="text-md font-extralight w-[90%] sm:w-[65%] text-center text-white font-['Newsreader']">{{ post.title }}</span>
          </NuxtLink>
        </div>
         <!-- <div 
          v-if="index !== 0" 
          id="card" 
          class="flex gap-16 font-sans relative border-2 border-gray-100 text-black rounded-sm">
            <div class="basis-6/12 ">
                <img class="w-full h-96 object-cover" :src="post.thumbnail" alt="">
            </div>

            <div class="p-8 basis-6/12 relative">
              <div class="flex items-center gap-4 mb-8">
                <div>
                  <img v-if="post.author_image" class="w-8 h-8 rounded-full" :src="post.author_image" alt="">
                  <div v-else class="w-8 h-8 rounded-full bg-gray-300">
                    <svg class="w-8 h-8 rounded-full" width="1000" height="1000" viewBox="0 0 1000 1000"><circle cx="500" cy="500" r="500" fill="#cccccc"></circle><path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path></svg>
                  </div>
                </div>

                <div class="text-xs">
                  <p>{{ post.author }}</p>
                  <p>{{ post.created_at }}</p>
                </div>
              </div>
              <NuxtLink :to="`/posts/${post.uri}`" class="hover:text-blue-900">
                <h1 class="text-3xl font-thin uppercase mb-8">
                  {{ post.title }}
                </h1>

                <p class="line-clamp-5">
                  {{ post.description }}
                </p>
              </NuxtLink>
              <NuxtLink class="absolute bottom-3 right-8 decoration-transparent text-md font-light underline underline-offset-2 hover:text-blue-900 hover:decoration-blue-900" :to="`/posts/${post.uri}`">
                Read more
              </NuxtLink>

            </div>
         </div> -->

       </template>


     </div>
     <hr class="mt-12" />

   </div>

 </template>
 
 <script setup>
   import { storeToRefs } from 'pinia';
 
   const { $postStore } = useNuxtApp()
   const { posts } = storeToRefs($postStore)

   // SEO
   useSeoMeta({
    title: 'HOME - MyBlog',
    ogTitle: 'HOME - MyBlog',
    description: 'This is my blog, let me tell you all about it.',
    ogDescription: 'This is my blog, let me tell you all about it.',
  })
 
 </script>
 