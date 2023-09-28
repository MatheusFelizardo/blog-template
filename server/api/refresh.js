import { Client } from '@notionhq/client'
import fs from 'fs'
import path from 'path';

export default defineEventHandler(async (event) => {
  const jsonPath = path.join(process.cwd(), '/public/data.json')


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

    console.log(jsonPath)
    const cachedDataExists = fs.existsSync(jsonPath)
    if(cachedDataExists) {
      fs.unlinkSync(jsonPath)
    }

    fs.writeFileSync(jsonPath, JSON.stringify(data))

    console.log('Refreshing notion api data...')

    return {
      newData: data,
      jsonPath,
      message: 'Data refreshed successfully!'
    }
  } catch (e) {
    return {
      newData: [],
      error: e,
      jsonPath,
      message: 'Error refreshing data, try again later.'
    }
  }


})