import PostPreview from './postPreview'

function BlogListPreview( {allPosts}) {

    const fixedPosts = Array.from(allPosts).filter( post => post.meta.type === 'fixed');
    const normalPosts = Array.from(allPosts).filter(post => post.meta.type !== 'fixed').sort( (postA, postB) => {        
        return new Date(postB.meta.date) - new Date(postA.meta.date);
    });
    return (        
            <main>
                { fixedPosts.length > 0 ? (               
                <section className="posts">
                    <h1 className="content-subhead">Post Fijado</h1>                                      
                    {
                      fixedPosts.map(post => (
                        <PostPreview key={post.id} post={post}/>                              
                      ))
                    }  
                </section>
                ) : null
                }
                { normalPosts.length > 0 ? (  
                    <section className="posts">
                        <h1 className="content-subhead">Posts Recientes</h1>
                        {
                        normalPosts.map(post => (
                            <PostPreview key={post.id} post={post}/>                              
                        ))
                        }                                                                                           
                    </section>
                ) : null
                }                                
                
            </main>        
    );    
}

export default BlogListPreview