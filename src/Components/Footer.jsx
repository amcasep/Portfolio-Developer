import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMediaLinks">
                <a href="https://www.linkedin.com/in/amparo-cabezuelo/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://github.com/amcasep" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <p>Developed with love ❤️ Amparo</p>
        </div>
    );
}

export default Footer;