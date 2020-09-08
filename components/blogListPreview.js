import PostPreview from './postPreview'

function BlogListPreview( {allPosts}) {
    return (        
            <div>                
                <div className="posts">
                    <h1 className="content-subhead">Post Fijado</h1>                    
                    <section className="post">
                        <header className="post-header">                                
                            <h2 className="post-title">Introducing Pure</h2>    
                            <p className="post-meta">
                                By <a href="#" className="post-author">Fernando Pineda</a> under <a className="post-category post-category-design" href="#">Personal</a>
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
                      allPosts.map(post => (
                        <PostPreview key={post.id} post={post}/>                              
                      ))
                    }                                                                                           
                </div>                                
                
            </div>        
    );    
}

export default BlogListPreview