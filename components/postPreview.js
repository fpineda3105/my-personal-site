import Link from 'next/link'
import Date from '../components/date'

function PostPreview( {post}) {
    return (
        <section className="post">
            <header className="post-header"> 
                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                    <h2 className="post-title"><a dangerouslySetInnerHTML={{ __html: post.meta.title }}></a></h2>      
                </Link>                                                   
                <p className="post-meta">
                    Por <a className="post-author" href="#">Fer</a> <Date dateString={post.meta.date} /> en {post.meta.tags.split(',').map(
                        tag => (
                        <a key={tag} className={`post-category post-category-${tag}`} href="#">{tag}</a>
                        )
                    )}
                </p>
            </header>
            <div className="post-description">
                <div dangerouslySetInnerHTML={{ __html: post.meta.preview }} />
                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                    <a>leer mas</a>                
                </Link>                
            </div>
        </section> 
    );    
}

export default PostPreview