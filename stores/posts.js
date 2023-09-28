import { defineStore } from 'pinia'
import axios from '../plugins/axios'
import { parseHTML, returnHtmlForBlockType } from '~/helper/blockRender'

const $axios = axios().provide.axios

export const usePostStore = defineStore('post', {
  state: () => (
    {
      posts: [],
      aboutMe: '',
      authenticated: false,
    }
  ),
  actions: {
    async getPosts() {
      const { data } = await useFetch('/api/notion')
      const posts = parseHTML(data.value?.pages)

      const aboutMeParsedHTMl = data.value.aboutMe.map(block => returnHtmlForBlockType(block))
      const aboutMeParsedHTMlString = aboutMeParsedHTMl.join('')

      this.aboutMe = aboutMeParsedHTMlString
      this.posts = posts

      return posts;
    },
   
    restartPostStates() {
      this.posts = []
      this.aboutMe = ''
    }
  },
})
