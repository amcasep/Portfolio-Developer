import img1 from "../assets/p1.png"
import img2 from "../assets/p2.png"
import img3 from "../assets/p3.png"
import img4 from "../assets/p4.png"
import img5 from "../assets/p5.png"
const Projects = () => {
    return (

        <div className="projects wrapper">
            <p>hover over any project to learn more!</p>
            <section className="portfolioProjects" id="projects">
                <div className="firstRow">
                    <div className="portfolioOne">
                        <img src={img1} alt="" />
                        <div className="overlayOne"></div>
                    </div>
                    <div className="portfolioTwo">
                        <img src={img2} alt="" />
                    </div>

                </div>
                <div className="secondRow" >
                    <div className="portfolioThree">
                        <img src={img3} alt="" />
                    </div>
                    <div className="portfolioFour">
                        <img src={img5} alt="" />
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Projects;