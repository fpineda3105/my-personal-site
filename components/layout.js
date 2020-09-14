import Meta from './utils/meta'
import SideBar from './sidebar/sideBar'

export const siteTitle = 'Home | Fernando Pineda';

export default function Layout({children}) {    
    return (        
        <div id="layout" className="pure-g">
            <Meta props={children.props.meta} />
            <SideBar />
            {children}                                 
        </div>  
    );
}