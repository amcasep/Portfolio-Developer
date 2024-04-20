import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMediaLinks">
                <a href="https://www.linkedin.com/in/amparo-cabezuelo/"><FaLinkedinIn /></a>
                <a href="https://github.com/amcasep"><FaGithub /></a>
            </div>
            <p>Developed and designed with love ❤️ Amparo</p>
        </div>
    );
}

export default Footer;