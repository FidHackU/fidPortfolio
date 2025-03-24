import "./Home.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../assets/Resume-poto.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen" id="home">
      <div className="font-poppins mt-28 w-1/2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-left">
            <div className=" font-bold text-6xl">
              <p>Front-End React</p>
              <p>Developer 👋</p>
            </div>

            <div className="text-sm text-[#bcbabb] mt-4">
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

          <div>
            <img
              className="p-10 h-64 w-64 rounded-full"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex mt-4 mb-40 space-x-14 w-1/2 text-left">
        <span className="font-bold mr-10">Tech Stack</span>
        <div className="border-l border-gray-400 h-6 pr-35"></div>
        <FaHtml5 className="w-8 h-8 text-[#e34c26]" />
        <FaCss3Alt className="w-8 h-8 text-[#264de4]" />
        <FaPhp className="w-8 h-8 text-[#777bb4]" />
        <FaDatabase className="w-8 h-8 text-[#00758f]" />
        <FaBootstrap className="w-8 h-8 text-[#7952b3]" />
        <FaReact className="w-8 h-8 text-[#61dafb]" />
      </div>
    </div>
  );
};

export default Home;
