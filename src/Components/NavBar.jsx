import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

import { useState, useEffect } from "react";

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [modeText, setIsModeText] = useState("light on")

    const handleLinkClick = (event, targetId) => {
        // Close the dropdown menu
        const checkbox = document.getElementById('active');
        checkbox.checked = false;
    };

    useEffect(() => {
        // Apply dark mode styles
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleModeButton = () => {
        toggleDarkMode();
        toggleText()
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    
    const toggleText = () => {
        if (modeText === 'light on') {
            setIsModeText('light off');
        } else {
            setIsModeText('light on');
        }
    };

    return (
        <>
            <nav className="navBar">
                <div className="toggleMode">
                    <FaRegCircle onClick={handleModeButton} />
                    <p>{modeText}</p>
                </div>
                <input type="checkbox" id="active" />
                <label for="active" className="menu-btn"><span></span></label>
                {/* <label for="active" className="close"></label> */}

                <div className="dropdownMenu">
                    <ul >
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