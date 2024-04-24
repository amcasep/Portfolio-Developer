import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
    const handleLinkClick = (event, targetId) => {
        // Close the dropdown menu
        const checkbox = document.getElementById('active');
        checkbox.checked = false;
    };

    return (
        <>
            <nav className="navBar">

                <input type="checkbox" id="active" />
                <label for="active" className="menu-btn"><span></span></label>
                {/* <label for="active" className="close"></label> */}

                <div className="dropdownMenu">
                    <ul>
                        <li> <a href="#projects" className="link" onClick={handleLinkClick}><span>Projects</span></a></li>
                        <li> <a href="#aboutme" className="link" onClick={handleLinkClick}><span>About Me</span></a></li>
                        <li> <a href="#contact" className="link" onClick={handleLinkClick}><span>Contact</span></a></li>
                        {/* <li> <a href="#cv" className="link"><span>Curriculum Vitae</span></a></li> */}
                    </ul>
                </div>
            </nav>
            <div class="socialIcon">
                <a href="https://github.com/amcasep" target="_blank" rel="noopener noreferrer" class="socialIconLink"><p>Github</p><FaGithub /></a>
            </div>
        </>
    );
}

export default NavBar;