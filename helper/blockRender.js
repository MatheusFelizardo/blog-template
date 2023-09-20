import { parse } from "postcss"

const checkProperties = (block) => {
  let classes = 'block_classes'

  if (!block.annotations) return block.plain_text

  if (block.annotations.bold) {
    classes += ' bold'
  }

  if (block.annotations.italic) {
    classes += ' italic'
  }

  if (block.annotations.strikethrough) {
    classes += ' strikethrough'
  }

  if (block.annotations.underline) {
    classes += ' underline'
  }

  if (block.annotations.code) {
    classes += ' code'
  }

  if (block.annotations.color && block.annotations.color !== 'default') {
    classes += ` ${block.annotations.color}`
  }

  return `<span class="${classes}">${block.plain_text}</span>`
}

const renderBlock = (block) => {
  const parsedText = []

  if (block[block.type]?.rich_text.length <= 0) return `<br />`

  block[block.type].rich_text.forEach(text => {
    if (!text.plain_text) return 
    parsedText.push(`${checkProperties(text)}`)
  })

  return parsedText.length > 0 ? parsedText.join('') : ''
}

export const returnHtmlForBlockType = (block) => {
  switch (block.type) {
    case 'heading_1': 
    // For a heading
      return `<h1 class="block-h-one">${ renderBlock(block) }</h1> `
    case 'heading_2': 
    // For a heading
      return `<h2 class="block-h-two">${ renderBlock(block) }</h2> `
    case 'heading_3': 
    // For a heading
      return `<h3 class="block-h-three">${ renderBlock(block) }</h3>`
    case 'image': 
    // For an image
      const imageSrc = block['image'].external?.url || block['image'].file?.url
      return `<img class="block-image" src="${ imageSrc }" />`
    case 'bulleted_list_item': 
      // For an unordered list
      return `<li class="block-list">${ renderBlock(block) }</li>`
    case 'paragraph': 
      // For a paragraph
      return `<p class="block-paragraph">${ renderBlock(block)}</p>`
    default: 
    // For an extra type
      return `<br/>`
  }
}

export const parseHTML = (posts) => {
  const parsedPosts = []

  posts?.forEach((postPage, index) => {
    const { blocks, page_id, post } = postPage

    const created_at = new Date(post.created_time).toLocaleDateString('en-Us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      // hour: 'numeric',
      // minute: 'numeric'
    })

    if (blocks.length > 0) {
      const parsedBlockHTMl = blocks.map(block => returnHtmlForBlockType(block))
      const parsedBlockHTMlString = parsedBlockHTMl.join('')

      parsedPosts.push({
        page_id,
        uri: post.properties["URI"].rich_text[0]?.text.content || `custom-post-${index}`,
        created_at,
        author: post.properties["Author"]?.rich_text[0]?.text.content || 'Josceline Dadá',
        thumbnail: post.properties['Thumbnail'].files[0]?.file?.url || '/images/default-thumbnail.png',
        title: post.properties["Name"].title[0]?.text.content,
        description: post.properties["Description"].rich_text[0]?.text.content || '',
        html: parsedBlockHTMlString
      })
    }

  
  })

  return parsedPosts
}