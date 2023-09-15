<template>
  <NuxtLink class="p-2 bg-black text-white mb-4" :to="`/posts`">BACK</NuxtLink>

  <div :id="post.title" class="post w-[75%] m-auto p-5 text-black">
      <div class="flex flex-col items-center mb-8">
        <h1 class="text-5xl font-semibold mb-4">
        {{ post.title }}
        </h1>

        <div class="text-sm mb-6 font-sans font-extralight text-slate-100">
        by {{ post.author }}
        </div>
      </div>

      <div class="text-md font-sans" v-html="post.html" />
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
</script>
