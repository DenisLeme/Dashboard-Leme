import './Navbar.css'

const Navbar = ({sidebarOpen , openSidebar}) => {
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fas fas-bars" aria-hidden="true"></i>
                 </div>
                 <div className="navbar__left">
                    <a href="#">Produtos</a>
                    <a href="#">Usuarios</a>
                    <a href="#" className="active_link">Admin</a>
                 </div>
                 <div className="navbar__right">
                    <a href="#">
                        <i className="fa fa-search"></i>
                    </a>
                    <a href="#">
                        <i className="fas fas-search"></i>
                    </a>
                    
                 </div>

        </nav>
    )

}

export default Navbar;