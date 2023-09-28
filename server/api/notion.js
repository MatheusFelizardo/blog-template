import { Client } from '@notionhq/client'
import fs from 'fs'

export default defineEventHandler(async (event) => {
  // const cachedDataExists = fs.existsSync('./public/data.json')

  // if (cachedDataExists) {
  //   const cachedData = fs.readFileSync('./public/data.json')
    
  //   console.log('Returning cached data...')
  //   return JSON.parse(cachedData)
  // }

  const response = await fetch('https://thisisus.vercel.app/data.json')
  const json = await response?.json()

  if(json) {
    return json;
  }

  const runtimeConfig = useRuntimeConfig()

  // Initializing a client
  const client = new Client({
    auth: process.env.NOTION_API_KEY,
  })


  const listUsersResponse = await client.users.list({})
  
  const myPosts = await client.databases.query({
    database_id: process.env.NOTION_DATABASE
  })

  const dbPages = myPosts.results.map(page => page.id)


  const myPages = await Promise.all(dbPages.map(async (item) => {
    const post = await client.pages.retrieve({page_id: item})

    const blocks = await client.blocks.children.list({
      block_id: item
    });

    return {
      page_id: item,
      post,
      blocks: blocks.results ?? []
    }
  }))

  const aboutMeBlocks = await client.blocks.children.list({
    block_id: process.env.NOTION_ABOUT_ME
  })



  const data = {
    pages: myPages ?? [],
    aboutMe: aboutMeBlocks.results ?? [],
  }
  
  fs.writeFileSync('./public/data.json', JSON.stringify(data))

  console.log('Returning notion api data...')

  return data
})