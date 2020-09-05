
function PostPreview( {post}) {
    return (
        <section className="post">
            <header className="post-header">                                
                <h2 className="post-title">{post.meta.title}</h2>    
                <p className="post-meta">
                    By <a className="post-author" href="#">Fernando Pineda</a> under <a className="post-category post-category-js" href="#">JavaScript</a>
                </p>
            </header>
            <div className="post-description">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </section> 
    );    
}

export default PostPreview