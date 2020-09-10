import PostPreview from './postPreview'

function BlogListPreview( {allPosts}) {

    const fixedPosts = Array.from(allPosts).filter( post => post.meta.type === 'fixed');
    const normalPosts = Array.from(allPosts).filter (post => post.meta.type !== 'fixed');
    return (        
            <div>
                { fixedPosts.length > 0 ? (               
                <div className="posts">
                    <h1 className="content-subhead">Post Fijado</h1>                                      
                    {
                      fixedPosts.map(post => (
                        <PostPreview key={post.id} post={post}/>                              
                      ))
                    }  
                </div>
                ) : null
                }
                { normalPosts.length > 0 ? (  
                    <div className="posts">
                        <h1 className="content-subhead">Posts Recientes</h1>
                        {
                        normalPosts.map(post => (
                            <PostPreview key={post.id} post={post}/>                              
                        ))
                        }                                                                                           
                    </div>
                ) : null
                }                                
                
            </div>        
    );    
}

export default BlogListPreview