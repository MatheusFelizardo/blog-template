<template>

  <div class="max-w-5xl m-auto pt-40">
    <div :id="post.title" class="post w-[65%] m-auto  text-black">
      <div class="flex flex-col mb-8">
        <h1 class="text-4xl font-light font-['Newsreader'] mb-4">
          {{ post.title }}
          </h1>

          <div class="text-sm text-black font-['Newsreader']">
          {{ post.created_at }}
          </div>
        </div>

        <div id="post_content" class=" font-['Newsreader']" v-html="post.html" />

        <div class="flex gap-2 items-center  justify-between text-xs font-bold italic mt-20 font-['Newsreader']">
          <NuxtLink v-if="prevPost" class="p-2 text-black mb-4" :to="`/posts/${prevPost.uri}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path fill="currentColor" d="M27.3 34.7L17.6 25l9.7-9.7l1.4 1.4l-8.3 8.3l8.3 8.3z"/></svg>
          </NuxtLink>
          <div class="p-2 text-black mb-4" v-else>
            
          </div>
          <NuxtLink v-if="nextPost" class="p-2 text-black mb-4" :to="`/posts/${nextPost.uri}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path fill="currentColor" d="m22.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"/></svg>
          </NuxtLink>
          <div class="p-2 text-black mb-4" v-else>
            
          </div>
        </div>
    </div>
  </div>
 

</template>

<script setup>
  const route = useRoute()
  const props = defineProps({
    posts: {
      type: Array,
      required: true
    }
  })

  const post = props.posts.find(post => post.uri === route.params.slug)

  const nextPost = props.posts[props.posts.indexOf(post) + 1]
  const prevPost = props.posts[props.posts.indexOf(post) - 1]

  useSeoMeta({
    title: `${post.title} - ${post.created_at} - MyBlog`,
    ogTitle: `${post.title} - ${post.created_at} - MyBlog`,
    description: `${post.description}`,
    ogDescription: `${post.description}`,
  })
</script>
