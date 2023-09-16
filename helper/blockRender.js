const isBold = (block) => {
  const blockType = block.type
 
  let classes = 'block_classes'

  if (block[blockType].rich_text.length) {
    if (block[blockType].rich_text[0].annotations.bold) {
      classes += ' bold'
    }

    if (block[blockType].rich_text[0].annotations.italic) {
      classes += ' italic'
    }

    if (block[blockType].rich_text[0].annotations.strikethrough) {
      classes += ' strikethrough'
    }

    if (block[blockType].rich_text[0].annotations.underline) {
      classes += ' underline'
    }

    if (block[blockType].rich_text[0].annotations.code) {
      classes += ' code'
    }

    if (block[blockType].rich_text[0].annotations.color && block[blockType].rich_text[0].annotations.color !== 'default') {
      classes += ` ${block[blockType].rich_text[0].annotations.color}`
    }
  }

  return `class="${classes}"`
}

export const returnHtmlForBlockType = (block) => {
  switch (block.type) {
    case 'heading_1': 
    // For a heading
      return `<h1 ${isBold(block)}>${ block['heading_1'].rich_text.length > 0 ? block['heading_1'].rich_text[0].plain_text : '' } </h1> `
    case 'heading_2': 
    // For a heading
      return `<h2 ${isBold(block)}>${ block['heading_2'].rich_text.length > 0 ? block['heading_2'].rich_text[0].plain_text : '' } </h2> `
    case 'heading_3': 
    // For a heading
      return `<h3 ${isBold(block)}>${ block['heading_3'].rich_text.length > 0 ?  block['heading_3'].rich_text[0].plain_text : '' } </h3>`
    case 'image': 
    // For an image
      return `<img class="block-image" src="${ block['image'].external.url }" />`
    case 'bulleted_list_item': 
      // For an unordered list
      return `<li ${isBold(block)}>${ block['bulleted_list_item'].rich_text.length > 0 ?  block['bulleted_list_item'].rich_text[0].plain_text :  '' }</li>`
    case 'paragraph': 
      // For a paragraph
      return `<p ${isBold(block)}>${ block['paragraph'].rich_text.length > 0 ? block['paragraph'].rich_text[0]?.text?.content : '' }</p>`
    default: 
    // For an extra type
      return `<br/>`
  }
}

export const parseHTML = (posts) => {
  const parsedPosts = []

  posts?.forEach(postPage => {
    const { blocks, page_id, post } = postPage

    const created_at = new Date(post.created_time).toLocaleDateString('en-Us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      // hour: 'numeric',
      // minute: 'numeric'
    })

    console.log(created_at)
    if (blocks.length > 0) {
      const parsedBlockHTMl = blocks.map(block => returnHtmlForBlockType(block))
      const parsedBlockHTMlString = parsedBlockHTMl.join('')

      parsedPosts.push({
        page_id,
        uri: post.properties["URI"].rich_text[0]?.text.content,
        created_at,
        author: post.properties["Author"]?.rich_text[0]?.text.content || 'Josceline Dadá',
        thumbnail: post.properties['Thumbnail'].files[0]?.file.url || '',
        title: post.properties["Name"].title[0]?.text.content,
        description: post.properties["Description"].rich_text[0]?.text.content,
        html: parsedBlockHTMlString
      })
    }
  })

  return parsedPosts
}