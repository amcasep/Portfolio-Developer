import img from "../assets/profPic.png"
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="headerText">
                    <h1>Hey there! I'm Amparo :)</h1>
                    <p>A multidisciplinary <span>developer</span> and fomer <span>architect</span> with a passion for   <br />
                        designing and bringing to life any idea that turns up in my mind. ✨</p>
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