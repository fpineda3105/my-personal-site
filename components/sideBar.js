
function SideBar() {
    return (
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <div className="header">
                <div className="profile">
                    <img src="/profile.webp" alt="" />
                </div>                
                <h1 className="brand-title">Fernando Pineda</h1>
                <h2 className="brand-tagline">Software engineer</h2>
    
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="pure-button" href="#">Acerca de mí</a>
                        </li>                        
                    </ul>
                </nav>
            </div>
        </div>
    );    
}

export default SideBar