import img1 from "../assets/p1.png"
import img2 from "../assets/p2.png"
import img3 from "../assets/p3.png"
import img4 from "../assets/p4.png"
const Projects = () => {
    return (
        <div className="wrapper">
            <div className="projects">
                <p>hover over any project to learn more!</p>
                <section className="portfolioProjects" id="projects">
                    <div className="firstRow">
                        <div className="p1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="p2">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;