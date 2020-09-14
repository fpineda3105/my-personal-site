import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Menu() {
    const currentPage = useRouter().route;    
    return (
        <nav className="nav">
            <ul className="nav-list">     
                { currentPage !== '/' ? (                          
                <li className="nav-item"> 
                    <Link href="/" >                       
                        <a className="pure-button">Inicio</a> 
                    </Link>                                                                                                     
                </li>                            
                ) : null}                
                { currentPage !== "/about-me" ? (                          
                    <li className="nav-item">
                        <Link href="/about-me" >                        
                            <a className="pure-button" alt="about me" title="acerca de mí">Acerca de mí</a>  
                        </Link>                                                                                                     
                    </li>                               
                ) : null }                                                                                                                                                
            </ul>
        </nav>
    );
}