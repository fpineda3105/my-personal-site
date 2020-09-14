import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import PostComponent from '../../components/post'
import {BASE_URI} from '../../components/utils/meta'

export default function Post( {post, meta} ) {
    return ( 
        <div className="content pure-u-1 pure-u-md-3-4">
            <Head>                                
                <title>{meta.titlePage}</title>                
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
            post,
            meta : {
                url: BASE_URI + "/posts/" + post.id,
                title: post.meta.title,
                description: post.meta.description,
                contentType: "article",
                titlePage : post.meta.title + " | Fernando Pineda",
            }
        }
    }
}