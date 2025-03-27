// import "./About.css";

const About = () => {
  return (
    <div id="about" className="h-screen font-poppins space-y-12">
      <div className="flex justify-center">
        {/* Profile Section (Image Left, Description Right) */}
        <div className="flex items-center justify-center w-1/2 space-x-12">
          <img
            className="rounded-xl h-64 w-72 object-cover"
            src="https://placehold.co/400"
            alt=""
          />
          <div className="text-left h-64 w-72">
            <h1 className="font-bold text-sm text-[#70a0dd]">About Me</h1>
            <h2 className="font-bold text-lg mb-4">
              A dedicated Web Developer based in Malaysia
            </h2>
            <p className="text-sm text-[#bcbabb]">
              Hello! I am a passionate Frontend Developer with expertise in
              HTML, CSS, PHP, MySQL, and Bootstrap 5. I enjoy creating dynamic,
              scalable, and user-friendly applications, ensuring both aesthetic
              appeal and functionality.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-sm text-[#70a0dd]">My Journey</h1>
        <div className="">
          {/* Internship Experience */}
          <div className="">
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
          <div className="">
            <h3>Bachelor of Computer Science (Hons.) - Software Engineering</h3>
            <p>2019 - 2024 | University Malaysia Sarawak (CGPA: 3.45)</p>
            <ul>
              <li>
                Gained expertise in web development, data structures, and cloud
                computing.
              </li>
              <li>
                Final Year Project: Car Rental Management System, implementing
                secure booking & fleet tracking.
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

export default About;
