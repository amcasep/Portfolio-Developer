import { useState } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';
import { HiOutlinePaperAirplane } from "react-icons/hi2";


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send(
            'service_0a2h2ek',
            'template_gfsrpvi',
            templateParams,
            '9-ZVnV8Sck9ZkcqzA'
        )
        .then((response) => {
            console.log('Email sent!', response);
            // Clear form fields after successful submission
            setName('');
            setEmail('');
            setMessage('');
             // Set notification message
             setNotification('Message sent successfully!');
             // Clear notification after some time
             setTimeout(() => {
                 setNotification(null);
             }, 3000); // Clear notification after 3 seconds
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
    };

    return (
        <div className="contact wrapper">
            <div className="sectionTextWrapper">
                <h1 className="title">Contact</h1>
                <h1>🙋‍♀️</h1>
            </div>
            
            <form onSubmit={handleSubmit} className="contactForm">
                <div className="group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                    <span className="bar"></span>
                    <label>name</label>
                    {/* <div className="error-txt">Required</div> */}
                </div>
                <div className="group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={email} onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <span className="bar"></span>
                    <label>email</label>
                </div>
                <div className="group">
                    <textarea
                        name="message"
                        id="message"
                        autoComplete="off"
                        rows={5}
                        value={message} onChange={(event) => setMessage(event.target.value)}
                        required
                    />
                    <span className="bar"></span>
                    <label>message</label>
                </div>
                <div>
                    <button type="submit">SEND MESSAGE <HiOutlinePaperAirplane className="icon" /></button>
                </div>
            </form>
            {notification && <div className="notification">{notification}</div>}
        </div>
        
    );
}

export default Contact;