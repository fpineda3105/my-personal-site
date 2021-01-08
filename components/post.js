import Link from 'next/link'
import Date from '../components/date'


export default function PostComponent( {post}) {
    return (
        <main>                                   
            <section className="post">
                <header className="post-header">                 
                <h1 id='#' className="post-title"><a dangerouslySetInnerHTML={{ __html: post.meta.title }}></a></h1>                               
                    <p className="post-meta">
                        Por <a className="post-author" href="#">Fer</a> <Date dateString={post.meta.date} /> en {post.meta.tags.split(',').map(
                            tag => (
                            <a key={tag} className="post-category" href="#">{tag}</a>
                            )
                        )}
                    </p>
                </header>
                <section className="post-description">
                        <article dangerouslySetInnerHTML={{ __html: post.html }} />                        
                </section>
            </section>                
            
            <footer>
                <Link href="/">
                        <a>← volver</a>
                    </Link>
            </footer>
            
        </main>    

    );

}