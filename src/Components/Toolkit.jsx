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
import { SiPostman } from "react-icons/si";
// import { FaBootstrap } from "react-icons/fa";
import { IoCubeSharp } from "react-icons/io5";
const Toolkit = () => {
    return (
        <div className="toolkit wrapper">
            <div className="sectionTextWrapper">
                <h1 className="title">My Toolkit</h1>
                <h1>💻</h1>
            </div>
            <div className="toolkitContainer">
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
                    {/* <li><FaBootstrap /><p>Bootstrap</p></li> */}
                    <li><DiResponsive /><p>Responsive</p></li>
                    <li><SiPostman /><p>Postman</p></li>
                    <li><SiAdobephotoshop /><p>Photoshop</p></li>
                    <li><SiAdobeillustrator /><p>Illustrator</p></li>
                    <li><SiAdobeindesign /><p>InDesign</p></li>
                    <li><IoCubeSharp /><p>3D Modeling</p></li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Toolkit;