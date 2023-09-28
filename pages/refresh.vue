<template>
  <div>
    <h1>Esta página mostra o status da atualização dos posts</h1>

    <!-- simple form to login with user and pass with tailwind style -->
    <div v-if="!authenticated">
      <form class="w-full max-w-sm mt-6" @submit.prevent="handleLogin">
        <div class="flex flex-col mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" for="user">
              Usuário
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="user" type="text" v-model="formData.user">
          </div>
        </div>
        <div class="flex flex-col mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="password">
              Senha
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" placeholder="******************" v-model="formData.password">
          </div>
        </div>
        <div class="flex md:items-center">
          <div class="md:w-2/3">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
    
    <div v-else class="mt-6">
      <template v-if="loading">
      <div>
        Carregando... 
      </div>
    </template>

    <template v-else>
      <template v-if="data?.error">
        <div>
          <p class="my-4">Falha na atualização dos dados!</p>

          <button class="p-2 bg-purple-300" @click="getData()">
            Tentar novamente
          </button>
        </div>
      </template>

      <template v-else>
        <div>
          <p class="my-4">Dados atualizados com sucesso.</p>

          <a class="p-2 bg-purple-300" href="/">Ir para homepage</a>
        </div>
      </template>
    </template>
    </div>
  </div>
</template>

<script setup>
  const runtimeConfig = useRuntimeConfig()

  const { user, password } = runtimeConfig.public
  const formData = ref({
    user: '',
    password: ''
  })
  const authenticated = ref(false)

  const data = ref(null)
  const loading = ref(true)

  const handleLogin = () => {
    const logged = user === formData.value.user && password === formData.value.password

    if (logged) {
      authenticated.value = true
      getData()
    } else {
      alert('Usuário ou senha inválidos')
    }
  }

  const getData = async () => {
    loading.value = true
    const response = await fetch('/api/refresh')
    const json = await response.json()
    loading.value = false

    data.value = json 
    console.log(json)
    return data;
  }

</script>