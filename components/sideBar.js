import Link from 'next/link'
import { useRouter } from 'next/router'

function SideBar( ) {        
    const currentPage = useRouter().route;    
    
    return (
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <div className="header">
                <div className="profile">
                    <img className="profile-img" src="/profile.webp" alt="" />
                </div>                
                <h1 className="brand-title">Fernando Pineda</h1>
                <h2 className="brand-tagline">Software engineer</h2>
                
            </div>
            <div className="nav-container">
            <nav className="nav">
                    <ul className="nav-social"> 
                        <li className="nav-social-item"> 
                        <a href="https://www.hackerrank.com/fernandopineda31" target="_blank"> <i className="social-item fab fa-hackerrank fa-2x"/> </a>                                                                                                                              
                        </li> 
                        <li className="nav-social-item">                             
                            <a href="https://github.com/fpineda3105/" target="_blank"> <i className="social-item fab fa-github fa-2x"/> </a>                                                                                                     
                        </li>
                        <li className="nav-social-item"> 
                            <a href="https://www.linkedin.com/in/fpineda3105/" target="_blank"> <i className="social-item fab fa-linkedin fa-2x"/> </a>                                                                                                                                
                        </li>
                        <li className="nav-social-item"> 
                            <a href="https://twitter.com/_fpineda/" target="_blank"> <i className="social-item fab fa-twitter fa-2x"/> </a>                                                                                                                                
                        </li>
                        <li className="nav-social-item">
                            <a href="https://www.codewars.com/users/fpineda3105" target="_blank"> <i className="social-item fas fa-code fa-2x"/> </a>                                                                                                                                  
                        </li>
                            
                    </ul>
                </nav>
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
                                    <a className="pure-button">Acerca de mí</a>  
                                </Link>                                                                                                     
                            </li>                               
                      ) : null }                                                                                                                                                
                    </ul>
                </nav>
            </div>
        </div>
    );    
}

export default SideBar