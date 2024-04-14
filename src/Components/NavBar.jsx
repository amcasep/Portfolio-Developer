const NavBar = () => {
    return (
        <>
            <nav className="navBar">

                <input type="checkbox" id="active" />
                <label for="active" className="menu-btn"><span></span></label>
                <label for="active" className="close"></label>

                <div className="wrapper2">
                    <ul>
                        <li> <a href="#projects" className="link"><span>Projects</span></a></li>
                        <li> <a href="#aboutme" className="link"><span>About Me</span></a></li>
                        <li> <a href="#contact" className="link"><span>Contact</span></a></li>
                    </ul>
                </div>

            </nav>
        </>
    );
}

export default NavBar;