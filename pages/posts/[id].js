import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'    
import PostComponent from '../../components/post'

export default function Post( {post} ) {
    return ( 
        <div className="content pure-u-1 pure-u-md-3-4">
            <Head>
                <title>{post.meta.title}</title>
            </Head>              
            <PostComponent post={post}/>  
        </div>                       
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const post = await getPostData(params.id)
    return {
        props: {
            post
        }
    }
}