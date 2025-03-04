import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaBootstrap,
  FaReact,
} from "react-icons/fa"; // Icons for skills
import "./AboutPage.css";
import image from '../assets/Resume-poto.jpg';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      {/* Profile Section (Image Left, Description Right) */}
      <div className="about-profile">
        <img
          src={image}// Replace with your actual image
          alt="Profile"
          className="profile-image"
        />
        <p className="about-description">
          Hello! I am a passionate Frontend Developer with expertise in HTML,
          CSS, PHP, MySQL, and Bootstrap 5. I enjoy creating dynamic, scalable,
          and user-friendly applications, ensuring both aesthetic appeal and
          functionality.
        </p>
      </div>

      {/* Skills Section with Icons */}
      <div className="about-skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FaHtml5 className="skill-icon html" />
            <span>HTML5</span>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon css" />
            <span>CSS3</span>
          </div>
          <div className="skill-item">
            <FaPhp className="skill-icon php" />
            <span>PHP</span>
          </div>
          <div className="skill-item">
            <FaDatabase className="skill-icon mysql" />
            <span>MySQL</span>
          </div>
          <div className="skill-item">
            <FaBootstrap className="skill-icon bootstrap" />
            <span>Bootstrap 5</span>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon react" />
            <span>React.js</span>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="about-experience">
        <h2>My Journey</h2>
        <div className="timeline">
          {/* Internship Experience */}
          <div className="timeline-item">
            <h3>Web Developer Intern @ Sabah Electricity Sdn Bhd</h3>
            <p>Feb 2023 - Aug 2023</p>
            <ul>
              <li>
                Developed a web application for electrical data input and
                management.
              </li>
              <li>
                Created interactive graphs to visualize data from multiple
                stations.
              </li>
              <li>
                Implemented a role-based access system for secure login and
                registration.
              </li>
            </ul>
          </div>

          {/* University Education */}
          <div className="timeline-item">
            <h3>Bachelor of Computer Science (Hons.) - Software Engineering</h3>
            <p>2019 - 2024 | University Malaysia Sarawak (CGPA: 3.45)</p>
            <ul>
              <li>
                Gained expertise in web development, data structures, and
                cloud computing.
              </li>
              <li>
                Final Year Project: Car Rental Management System,
                implementing secure booking & fleet tracking.
              </li>
              <li>
                Participated in hands-on projects integrating technical
                solutions with business needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
