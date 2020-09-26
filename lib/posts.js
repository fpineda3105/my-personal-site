import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import html from 'remark-html' 
import unified from 'unified'
import markdown from 'remark-parse'
import highlight from 'remark-highlight.js'
const headings = require('remark-autolink-headings')
import slug from 'remark-slug'

const processor = unified()
    // Transform markdown into a markdown syntax tree
    .use(markdown)
    .use(slug)
    .use(headings)
    // Transform markdown syntax tree to html syntax tree
    // Traverse html syntax tree to apply code highlighting to content within code tags
    .use(highlight)
    // Transform html syntax tree to string to send to the client
    .use(html)

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getAllPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = [];
  for await (const fileName of fileNames) {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    
    // Combine the data with the id
    let post = {
      'id': id,
      'meta': matterResult.data
    }
    allPosts.push(post)
  }
  return allPosts
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
        
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }
  
  export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    //using unified and highlight to parse the content
    const processedContent = await processor.process(matterResult.content)
    // Use remark to convert markdown into HTML string
    /*const processedContent = await remark()
    .use(html)
    .process(matterResult.content)*/
    const contentHtml = processedContent.toString()  

    // Combine the data with the id and contentHtml
    return {
      'id': id,
      'meta': matterResult.data,
      'html': contentHtml
    }    
  }
  
