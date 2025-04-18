// import "./About.css";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen font-poppins grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:place-items-center md:pb-32"
    >
      {/* Profile Section (Image Left, Description Right) */}
      <div className="h-32 pt-4 md:pt-0 md:h-64">
        <img
          className="rounded-xl w-full h-64 object-cover"
          src="https://placehold.co/200"
          alt=""
        />
      </div>
      <div className="text-left h-48 w-full md:w-4/5">
        <h1 className="font-bold text-xs text-[#70a0dd] uppercase">About Me</h1>
        <h2 className="font-bold text-md mb-2">
          A dedicated Web Developer based in Malaysia
        </h2>
        <p className="text-sm text-[#bcbabb]">
          Hello! I am a passionate Frontend Developer with expertise in HTML,
          CSS, PHP, MySQL, and Bootstrap 5. I enjoy creating dynamic, scalable,
          and user-friendly applications, ensuring both aesthetic appeal and
          functionality.
        </p>
      </div>
    </div>
  );
};

export default About;
