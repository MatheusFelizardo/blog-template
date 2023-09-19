import { Client } from '@notionhq/client'

export default defineEventHandler(async (event) => {
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

  return myPages
})