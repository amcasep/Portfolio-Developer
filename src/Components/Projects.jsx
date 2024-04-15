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
                        <div className="overlayOne">
                            <h3>Architecture Portfolio</h3>
                            <p>Personal website dedicated to store my projects and experience as an architect</p>
                            <ul>
                                <li>CSS</li>
                                <li>JS</li>
                                <li>REACT</li>
                            </ul>
                            <div className="links">
                                <a href="https://architecture-portfolio.netlify.app/">DEMO</a>
                                <a href="https://github.com/amcasep/Portfolio-Architecture">CODE</a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioTwo">
                        <img src={img2} alt="" />
                        <div className="overlayTwo">
                            <h3>Pika-shoot!</h3>
                            <p>A game about avoiding obstacles, collecting Pokéballs and shooting enemies</p>
                            <ul>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                            <div className="links">
                                <a href="https://amcasep.github.io/Pikachu-Game/">DEMO</a>
                                <a href="https://github.com/amcasep/Pikachu-Game">CODE</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="secondRow" >
                    <div className="portfolioThree">
                        <img src={img3} alt="" />
                        <div className="overlayThree">
                            <h3>WanderWorld</h3>
                            <p>React app that displays information about destinations around the world incl. weather</p>
                            <ul>
                        
                                <li>SASS</li>
                                <li>JS</li>
                                <li>REACT</li>
                                <li>JSON</li>
                            </ul>
                            <div className="links">
                                <a href="https://waanderworld.netlify.app/">DEMO</a>
                                <a href="https://github.com/amcasep/WanderWorld">CODE</a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioFour">
                        <img src={img5} alt="" />
                        <div className="overlayFour">
                        <h3>PlantiePie</h3>
                            <p>MERN app where you can create an account and develop a personalized care plan for your plants</p>
                            <ul>
                        
                                <li>TAILWIND</li>
                                <li>JS</li>
                                <li>REACT</li>
                                <li>NODE</li>
                                <li>MONGODB</li>
                            </ul>
                            <div className="links">
                                <a href="https://plantie-pie.netlify.app/">DEMO</a>
                                <a href="https://github.com/plant-app-react/back-end">CODE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Projects;