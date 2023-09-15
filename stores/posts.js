import { defineStore } from 'pinia'
import axios from '../plugins/axios'
import { parseHTML } from '~/helper/blockRender'

const $axios = axios().provide.axios

export const usePostStore = defineStore('post', {
  state: () => (
    {
      posts: [],
      authenticated: false,
    }
  ),
  actions: {
    async getPosts() {
      const { data } = await useFetch('/api/notion')
      const posts = parseHTML(data.value)

      this.posts = posts

      return posts;
    },
   
    restartPostStates() {
      this.posts = []
    }
  },
})
