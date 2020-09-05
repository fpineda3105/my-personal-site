import Head from 'next/head'
import SideBar from '../components/sideBar'
import Footer from '../components/footer'
import PostPreview from '../components/postPreview'

import  { getAllPostsData } from '../lib/posts'

export default function Home( { allPostsData } ) {
  return (
    <div id="layout" className="pure-g">
      <Head>
        <title>Fernando Pineda</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <link rel="icon" href="/favicon.png" />        
      </Head>

      <SideBar />
        <div className="content pure-u-1 pure-u-md-3-4">
            <div>                
                <div className="posts">
                    <h1 className="content-subhead">Post Fijado</h1>                    
                    <section className="post">
                        <header className="post-header">                                
                            <h2 className="post-title">Introducing Pure</h2>    
                            <p className="post-meta">
                                By <a href="#" className="post-author">Fernando Pineda</a> under <a className="post-category post-category-design" href="#">CSS</a> <a className="post-category post-category-pure" href="#">Pure</a>
                            </p>
                        </header>    
                        <div className="post-description">
                            <p>
                                Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the <a href="https://speakerdeck.com/tilomitra/pure-bliss">slides from the presentation</a>. Although it looks pretty minimalist, we’ve been working on Pure for several months. After many iterations, we have released Pure as a set of small, responsive, CSS modules that you can use in every web project.
                            </p>
                        </div>
                    </section>
                </div>
    
                <div className="posts">
                    <h1 className="content-subhead">Posts Recientes</h1>
                    {
                      allPostsData.map(post => (
                        <PostPreview key={post.id} post={post}/>                              
                      ))
                    }                                                                                           
                </div>
                
                <Footer />
                
            </div>
        </div>
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
