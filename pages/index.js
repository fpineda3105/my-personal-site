import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import BlogListPreview from '../components/blogListPreview'

import  { getAllPostsData } from '../lib/posts'

export default function Index( { allPostsData } ) {
  return (
    <div className="content pure-u-1 pure-u-md-3-4">
      <Head>
          <title>{siteTitle}</title>
      </Head>  
      <BlogListPreview allPosts={allPostsData}/> 
    </div>        
  )
}

export async function getStaticProps() {
  const allPostsData = await getAllPostsData();   
  return {
    props: {
       allPostsData
    }
  }
}
