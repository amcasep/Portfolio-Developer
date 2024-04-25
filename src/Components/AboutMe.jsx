import img2 from "../assets/pic.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const AboutMe = () => {
    useEffect(() => {
        Aos.init({ duration: 400 })
    }, [])
    return (
        <div className="aboutMe wrapper" id="aboutme" data-aos='fade-up' data-aos-once="true">
            <div className="sectionTextWrapper">
                <h1 className="title">About Me</h1>
                <h1>🚀</h1>
            </div>
            <div className="aboutmeContainer">
                <div className="tex">  <p> Originally from Spain, I am a <span>software developer</span> currently based in Germany with a background in architecture.
                    Recently, I discovered and embarked on my first steps in the field of web development, graduating from the <span>Ironhack Full Stack Bootcamp</span>.
                    I enjoyed the experience so much that I decided to pursue a career change. <br /><br />
                    Drawing from my past experience as an architect, I bring a <span>strong sense of design</span> and a <span>passion for details</span> to my work.
                    I am fascinated by the endless possibilities and the continuous learning that comes with web development, and I am always seeking new challenges. <br /><br />
                    The projects showcased in my portfolio were created in less than 3 months with no prior coding experience. 
                    I am excited to see where this journey takes me next
                </p></div>
              
                <div className="imageContainer">
                    <img src={img2} alt="profile picture" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;