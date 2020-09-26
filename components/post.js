import Link from 'next/link'
import Date from '../components/date'


export default function PostComponent( {post}) {
    return (
        <div>                     
            <div>   
                <section className="post">
                    <header className="post-header">                 
                    <h2 className="post-title"><a dangerouslySetInnerHTML={{ __html: post.meta.title }}></a></h2>                               
                        <p className="post-meta">
                            Por <a className="post-author" href="#">Fer</a> <Date dateString={post.meta.date} /> en {post.meta.tags.split(',').map(
                                tag => (
                                <a key={tag} className="post-category" href="#">{tag}</a>
                                )
                            )}
                        </p>
                    </header>
                    <div className="post-description">
                            <div dangerouslySetInnerHTML={{ __html: post.html }} />                        
                    </div>
                </section>                
            </div>
        
            <Link href="/">
                        <a>← volver</a>
                    </Link>
        </div>    

    );

}