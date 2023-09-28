import { Client } from '@notionhq/client'
import fs from 'fs'

export default defineEventHandler(async (event) => {
  try {
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

    if (myPages.length <= 0) throw new Error('Update failed! No posts found!')
    if (aboutMeBlocks.results.length <= 0) throw new Error('Update failed! No about me found!')
    
    const cachedDataExists = fs.existsSync('./public/data.json')
    if(cachedDataExists) {
      fs.unlinkSync('./public/data.json')
    }

    fs.writeFileSync('./public/data.json', JSON.stringify(data))

    console.log('Refreshing notion api data...')

    return {
      newData: data,
      message: 'Data refreshed successfully!'
    }
  } catch (e) {
    return {
      newData: [],
      error: e,
      message: 'Error refreshing data, try again later.'
    }
  }


})