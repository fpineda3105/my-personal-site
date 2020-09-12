import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub , faLinkedin, faHackerrank, faTwitter  } from '@fortawesome/free-brands-svg-icons/'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function SocialCards(params) {  
    return (
        <nav className="nav">
            <ul className="nav-social"> 
                <li className="nav-social-item"> 
                    <a href="https://www.hackerrank.com/fernandopineda31" target="_blank" alt="Hackerrank"> <FontAwesomeIcon icon={faHackerrank} color="white"/> </a>                                                                                                                              
                </li> 
                <li className="nav-social-item">                             
                    <a href="https://github.com/fpineda3105/" target="_blank" alt="Github"> <FontAwesomeIcon icon={faGithub} color="white" /> </a>                                                                                                     
                </li>
                <li className="nav-social-item"> 
                    <a href="https://www.linkedin.com/in/fpineda3105/" target="_blank" alt="Linkedin"> <FontAwesomeIcon icon={faLinkedin} color="white" /> </a>                                                                                                                                
                </li>
                <li className="nav-social-item"> 
                    <a href="https://twitter.com/_fpineda/" target="_blank" alt="Twitter"> <FontAwesomeIcon icon={faTwitter} color="white" /></a>                                                                                                                                
                </li>
                <li className="nav-social-item">
                    <a href="https://www.codewars.com/users/fpineda3105" target="_blank" alt="Codewars"> <FontAwesomeIcon icon={faCode} color="white" /> </a>                                                                                                                                  
                </li>                            
            </ul>
        </nav>
    );
}