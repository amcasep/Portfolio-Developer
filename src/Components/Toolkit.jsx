import { DiResponsive } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
const Toolkit = () => {
    return (
        <div className="toolkit">
            <div className="toolkitContainer">
                <h1>My Toolkit 💻</h1>
                <ul>
                   
                    <li><IoLogoJavascript /><p>JavaScriptp</p></li>
                    <li><FaReact /><p>React</p></li>
                    <li><FaNodeJs /><p>Node.js</p></li>
                    <li><SiExpress /><p>Express.js</p></li>
                    <li><BiLogoMongodb /><p>MongoDB</p></li>
                    <li><AiOutlineHtml5 /><p>HTML</p></li>
                    <li><FaCss3Alt /><p>CSS</p></li>
                    <li><SiTailwindcss /><p>Tailwind</p></li>
                    <li><FaSass /><p>Sass</p></li>
                    <li className="bigger"><DiResponsive /><p className="smaller">Responsive</p></li>
                    <li><SiAdobephotoshop /><p>Photoshop</p></li>
                    <li><SiAdobeillustrator /><p>Illustrator</p></li>
                    <li><SiAdobeindesign /><p>InDesign</p></li>
                    
                </ul>
            </div>


        </div>
    );
}

export default Toolkit;