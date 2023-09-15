<template>
  <div>
    Dashboard Josceline
  </div>
</template>

<script setup>
  onMounted(() => {
    const isLoged = Boolean(localStorage.getItem('isLoged'))

    if (!isLoged === true) {
      navigateTo('/login')
    }
   
  })
</script>
