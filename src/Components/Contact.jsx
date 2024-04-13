import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="contact">
            <div className="contactContainer">
                <div className="contactInformation">
                    <h2>Let's Connect! 💌</h2>
                    <p>You can find me on LinkedIn or Github
                        or you can send me a message here!
                        Feel free to reach out and say hello :)</p>
                    <ul className="socialMediaLinks">
                        <li><a href=""><FaLinkedinIn /></a></li>
                        <li><a href=""><FaGithub /></a></li>
                    </ul>
                </div>
                <div className="contactForm">
                    <form action="thanks" method="POST" name="contact">
                        <input type="hidden" name="form-name" value={"contact"} />
                        <label for="name">name</label>
                        <input type="text" name="name" id="name" placeholder="name" autoComplete="off" required />
                        <label for="email">email</label>
                        <input type="email" name="email" id="email" placeholder="email" autoComplete="off" required />
                        <label for="message">message</label>
                        <textarea name="message" id="message" placeholder="message" autoComplete="off" required />
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;