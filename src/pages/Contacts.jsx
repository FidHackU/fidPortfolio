import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons
import "./Contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!"); // Replace with actual form submission logic
  };

  return (
    <div>
      <h1 className="contacts-title">Contact Me</h1>
      <div className="contacts-container">
        <p>Feel free to reach out for any inquiries or collaborations!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3 className="mb-5">Or Connect With Me:</h3>
          <p>
            <FaEnvelope className="contact-icon" />
            Email: <a href="mailto:fidelyong22@gmail.com">fidelyong22@gmail.com</a>
          </p>
          <p>
            <FaGithub className="contact-icon" />
            GitHub: <a href="https://github.com/FidHackU" target="_blank" rel="noopener noreferrer">
              github.com/FidHackU
            </a>
          </p>
          <p>
            <FaLinkedin className="contact-icon" />
            LinkedIn: <a href="https://www.linkedin.com/in/fidelyong" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/fidelyong
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
