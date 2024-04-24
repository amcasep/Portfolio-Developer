import img from "../assets/profPic.png"

const AboutMe = () => {
    return (
        <div className="aboutMe wrapper" id="aboutme">
            <div className="sectionTextWrapper">
                <h1 className="title">About Me</h1>
                <h1>🚀</h1>
            </div>
            <div className="aboutmeContainer">
                <p>AWith a deep love for art and creativity, I chose to study architecture because I was
                    always fascinated by how these blend with mathematics to create stunning geometric
                    designs. However, my intrigue with the internet and computers led me to consider a
                    career change. Once I started exploring this world, I was blown away by what I found.
                    So, I decided to dive in headfirst to figure out all the amazing possibilities it offers.
                    A multidisciplinary developer and fomer architect with a passion for
designing and bringing to life any idea that turns up in my mind. 
                </p>
                <div className="imageContainer">
                    <img src={img} alt="profile picture" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;