import Head from 'next/head'
import SideBar from '../components/sideBar'
import BlogListPreview from '../components/blogListPreview'

export default function Home({ allPosts } ) {
    return (
        <div id="layout" className="pure-g">
        <Head>
            <title>Fernando Pineda</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <link rel="icon" href="/favicon.png" />        
        </Head>
    
        <SideBar />
        <BlogListPreview allPosts={allPosts}/> 
        </div>                
    );
}