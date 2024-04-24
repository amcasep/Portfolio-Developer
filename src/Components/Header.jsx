import img from "../assets/profPic.png"
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
    const handleScrollToContact = () => {
        const projectsSection = document.getElementById('contact');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
    return (

        <div className="header wrapper">
            <div className="headerText">
                <p className="hi">Hey there! :) I'm </p>
                <h1>Amparo Cabezuelo</h1>
                <h2>Full Stack Web Developer</h2>
                <p>Welcome to my page, where you can navigate through my professional journey and the unique path that guided me from architecture to the ever-evolving world of technology.
                {/* Feel free to connect with me for brainstorming sessions, potential collaborations, or even just to swap stories and experiences. */}
                </p>
                <button  onClick={handleScrollToContact}>Contact</button>
            </div>

            <div className="arrowDown">
                <MdKeyboardArrowDown onClick={handleScrollToProjects} />
            </div>
        </div>

    );
}

export default Header;