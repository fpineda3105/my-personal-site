import SocialCards from './social-card';
import Menu from './menu'
import Header from './header'

function SideBar( ) {                 
    return (
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <Header />
            <div className="nav-container">
                <SocialCards />
                <Menu />
            </div>
        </div>
    );    
}

export default SideBar