import SocialCards from './social-card';
import Menu from './menu'
import Header from './header'

function SideBar( ) {                 
    return (
        <aside className="sidebar pure-u-1 pure-u-md-1-4">
            <Header />
            <nav className="nav-container">
                <SocialCards />
                <Menu />
            </nav>
        </aside>
    );    
}

export default SideBar