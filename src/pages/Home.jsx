import "./Home.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../assets/Resume-poto.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen px-6 md:px-8 lg:px-16">
      <div className="font-poppins mt-28 md:w-2/3 xl:w-1/2 w-full">
        <div className="flex justify-center">
          <div className="flex flex-col text-left">
            <div className=" font-bold text-xl lg:text-5xl">
              <p>Front-End React</p>
              <p>Developer 👋</p>
            </div>

            <div className="text-xs text-[#bcbabb] mt-4">
              <p>Hi, I&apos;m Fidel Yong. A passionate Front-end React</p>
              <p>Developer based in Malaysia, Sabah.</p>
            </div>

            <div className="flex mt-4 space-x-2">
              <a href="https://github.com/FidHackU">
                <FaGithub className="contact-icon cursor-pointer text-black" />
              </a>
              <a href="https://www.linkedin.com/in/fidelyong">
                <FaLinkedin className="contact-icon cursor-pointer text-black" />
              </a>
            </div>
          </div>

          <div className="ml-7 ml-10 min-w-32 w-32 md:w-48 lg:w-64 ">
            <img className="rounded-full" src={image} alt="" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 mt-10 mb-40 lg:w-1/2 w-full text-left">
        <div className="font-bold text-sm">
          <p>Tech</p>
          <p>Stack</p>
        </div>
        <div className="border-l border-gray-400 h-14"></div>
        <div className="grid grid-cols-7 gap-4 text-xs">
          <FaHtml5 className="w-6 h-6 text-[#e34c26] hover:shadow hover:rounded" />
          <FaCss3Alt className="w-6 h-6 text-[#264de4] hover:shadow hover:rounded" /> 
          <FaBootstrap className="w-6 h-6 text-[#7952b3] hover:shadow hover:rounded" />
          <FaReact className="w-6 h-6 text-[#61dafb]" />
          <SiTailwindcss className="w-6 h-6 text-[#38BDF8] hover:shadow hover:rounded" />
          <FaDatabase className="w-6 h-6 text-[#00758f] hover:shadow hover:rounded" />
          <FaPhp className="rounded w-6 h-6 text-[#777bb4] hover:shadow hover:rounded" />
        </div>
      </div>
    </div>
  );
};

export default Home;
