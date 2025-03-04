import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="font-play homepage-container">
      <div className="py-2 my-2">
        Welcome to my portfolio, I am Fidel the software engineer
      </div>

      <div className="flex justify-center">
        <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex justify-center m-4">
          <div className="p-4">
            <h5 className="font-bold text-xl mb-2">Hello I&apos;m Fidel</h5>
            <p className="text-gray-700 text-xs text-justify py-2">
              Hello I&apos;m Fidel, a recent Software Engineering graduate with
              a passion for creating innovative solutions through code. During
              my academic journey, I&apos;ve honed my skills in a diverse range
              of technologies and paradigms. My proficiency in web technologies,
              including HTML5, CSS, and PHP, combined with MySQL expertise,
              empowers me to build dynamic and responsive web solutions. My
              enthusiasm for delving into the intricacies of software
              engineering, coupled with a deep appreciation for data structures
              and algorithms, drives my commitment to crafting efficient and
              elegant code. I thrive in collaborative environments and am always
              eager to learn and adapt to emerging technologies.
            </p>

            <div className="flex items-center space-x-4">
              {/* Contact Info Button */}
              <Link className="w-full text-center" to="/pages/Contacts">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded text-xs w-full">
                  Contact Info
                </button>
              </Link>

              {/* Download PDF Button */}
              <a
                href="/Fid Resume.pdf"
                download
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded text-xs w-full text-center"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-7">
        <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex justify-center m-4">
          <div className="p-4">
            <h5 className="font-bold text-xl mb-2">Background</h5>
            <div className="text-gray-700 text-xs text-justify">
              <p className=" py-2">From: Sabah, MY</p>
              <p className=" py-2">Education: Bachelors in Computer Science Hons. (Software Engineering)</p>
              <p className=" py-2">Skills: C++, C, Java, Web Development, Javascript, Php, Sql, React, Ajax, Jquery, Highchart JS</p>
              <p className=" py-2">Languages: English, Malay</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default HomePage;
