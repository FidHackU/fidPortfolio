import "./Projects.css";
// Sample project data (replace with your actual project data)
const projectData = [
  {
    id: 1,
    title: "Car Rental System",
    image: "https://placehold.co/500x250",
    techStack: ["Html", "Css", "Php", "MySQL", "Bootstrap5"],
    description: "A short description of Project One.",
    liveLink: "https://liveprojectlink.com",
    repoLink: "https://github.com/yourusername/project-one",
  },
  {
    id: 2,
    title: "Sesb Grid Op website functions",
    image: "https://placehold.co/500x250",
    techStack: ["Html", "Css", "Php", "MySQL", "Bootstrap5"],
    description: "A short description of Project Two.",
    liveLink: "https://liveprojectlink.com",
    repoLink: "https://github.com/yourusername/project-two",
  },
  {
    id: 3,
    title: "AFCarWash",
    image: "https://placehold.co/500x250",
    techStack: ["Html", "Css", "Php", "MySQL", "Bootstrap5"],
    description: "A short description of Project Three.",
    liveLink: "https://liveprojectlink.com",
    repoLink: "https://github.com/yourusername/project-two",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <h1 className="project-title">My Projects</h1>
      <div className="projects-container">
        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-thumbnail"
              />
              <div className="project-details">
                <h2>{project.title}</h2>
                <p className="tech-stack">{project.techStack.join(" | ")}</p>
                <p className="mb-5">{project.description}</p>
                <p className="project-buttons">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Code
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
