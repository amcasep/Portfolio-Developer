import { useState } from "react";
import axios from "axios";

import { HiOutlinePaperAirplane } from "react-icons/hi2";


const Contact = () => {


    const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name,
            email,
            message
        };

        axios.post(`${API_URL}/messages`, data)
            .then(response => {
                console.log(response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="contact wrapper">
            <div className="sectionTextWrapper">
                <h1 className="title">Contact</h1>
                <h1>🙋‍♀️</h1>
            </div>
            <form onSubmit={handleSubmit} className="contactForm">
                {/* <input type="hidden" name="form-name" value="contact" /> */}
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
  
                  
         
         
        </div>
    );
}

export default Contact;