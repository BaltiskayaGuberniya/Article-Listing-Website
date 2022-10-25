function Navbar() {
    
    return ( 
        <nav className="navbar">
            <h1>Navbar</h1>
            <div className="links">
                <a href="/">Home</a>
                <a className="newArticle" href="/new" style ={{ 
                }}>New Blog</a>
            </div>
        </nav>
        
    ) ;
    
}

export default Navbar;
