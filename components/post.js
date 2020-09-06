import Link from 'next/link'
import Footer from '../components/footer'

export default function PostComponent( {post}) {
    return (
        <div>                     
            <div>   
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
            </div>
        
            <Link href="/">
                        <a>← Back to home</a>
                    </Link>
        </div>    

    );

}