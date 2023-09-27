<template>
  <div class="bg-white min-h-full pb-20" >

    <div class="gtranslate_wrapper absolute md:top-2 right-3 flex gap-2 z-50"></div>
    <Script>window.gtranslateSettings = {"default_language":"pt","languages":["pt","en"],"wrapper_selector":".gtranslate_wrapper"}</Script>
    <Script async src="https://cdn.gtranslate.net/widgets/latest/flags.js" defer></Script>
      

    <div class="max-w-7xl m-auto relative px-5 min-h-full">
      <HeaderMenu />
      <slot></slot>
    </div>

  </div>
  
</template>

<script setup>
   


</script>
