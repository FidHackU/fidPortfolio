// import "./Projects.css";
// Sample project data (replace with your actual project data)
const projectData = [
  {
    id: 1,
    title: "Car Rental System",
    image: "https://placehold.co/500x500",
    techStack: ["Php", "MySQL", "Bootstrap"],
    description: "A short description of Project One.",
    liveLink: "https://liveprojectlink.com",
    repoLink: "https://github.com/yourusername/project-one",
  },
  {
    id: 2,
    title: "Sesb Grid Op website functions",
    image: "https://placehold.co/500x500",
    techStack: ["Php", "MySQL", "Bootstrap"],
    description: "A short description of Project Two.",
    liveLink: "https://liveprojectlink.com",
    repoLink: "https://github.com/yourusername/project-two",
  },
  {
    id: 3,
    title: "AFCarWash",
    image: "https://placehold.co/500x500",
    techStack: ["Php", "MySQL", "Bootstrap"],
    description: "A short description of Project Three.",
    liveLink: "https://liveprojectlink.com",
    repoLink: "https://github.com/yourusername/project-two",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="font-poppins px-4 space-y-2 h-screen" id="projects">
      <h1 className="font-bold text-xs text-[#70a0dd] text-left uppercase">Portfolio</h1>
      <h2 className="font-bold text-md text-left">
        Each project is a unique piece of development
      </h2>
      <div className="projects-container">
        <div className="">
          {projectData.map((project) => (
            <div key={project.id} className="grid grid-cols-2 gap-4 py-2 items-center">
              <div className="h-full w-full rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h2 className="font-bold text-sm">{project.title}</h2>
                <p className="text-sm text-[#bcbabb]">{project.description}</p>
                <p className="text-xs font-bold">
                  {project.techStack.join(" | ")}
                </p>
                <p className="text-sm font-bold space-x-4">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
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
