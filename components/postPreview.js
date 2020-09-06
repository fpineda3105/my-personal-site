import Link from 'next/link'

function PostPreview( {post}) {
    return (
        <section className="post">
            <header className="post-header"> 
                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                    <h2 className="post-title"><a>{post.meta.title}</a></h2>                
                </Link>                                                   
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