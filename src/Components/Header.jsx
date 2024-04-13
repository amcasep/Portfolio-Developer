import img from "../assets/profPic.png"
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    return (
        <div>
            <nav className="navBar">
              
                    <input type="checkbox" id="active" />
                    <label for="active" className="menu-btn"><span></span></label>
                    <label for="active" className="close"></label>
              
                <div className="wrapper">
                    <ul>
                        <li> <a href="#projects" className="link"><span>Projects</span></a></li>
                        <li> <a href="#aboutme" className="link"><span>About Me</span></a></li>
                        <li> <a href="#contact" className="link"><span>Contact</span></a></li>
                    </ul>
                </div>

            </nav>
            <div className="header">
                <div className="headerText">
                    <h1>Hey there! I'm Amparo :)</h1>
                    <p>A multidisciplinary web developer and fomer architect <br />
                        with a passion for designing and bringing to life <br />
                        any idea that turns up in my mind. ✨</p>
                </div>
                <div className="imageContainer">
                    <img src={img} alt="profile picture" />
                </div>
                <div className="arrowDown">
                    <MdKeyboardArrowDown />
                </div>

            </div>
        </div>

    );
}

export default Header;