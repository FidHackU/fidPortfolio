import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Function to add active class with pop-out effect
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "w-full text-center px-4 py-2 rounded-lg bg-[#C8DCEB] shadow-lg scale-105 transform transition-all duration-300"
      : "w-full text-center px-4 py-2 rounded-lg hover:bg-[#DEE9F2] transition-all duration-300";
  };

  // function getLinkClass(path) {
  //   if (location.pathname === path) {
  //     return "w-full text-center px-4 py-2 rounded-lg bg-[#A0B8C7] shadow-lg scale-105 transform transition-all duration-300";
  //   } else {
  //     return "w-full text-center px-4 py-2 rounded-lg hover:bg-[#C8DCEB] transition-all duration-300";
  //   }
  // }  

  return (
    <nav className="navbar flex items-center text-xl font-prism shadow-md">
      <Link className="w-64 text-center" to="/pages/HomePage">
        Fidel Yong
      </Link>

      <div className="w-full h-full flex justify-around items-center">
        <Link className={getLinkClass("/pages/Projects")} to="/pages/Projects">
          Projects
        </Link>
        <Link className={getLinkClass("/pages/AboutPage")} to="/pages/AboutPage">
          About
        </Link>
        <Link className={getLinkClass("/pages/Contacts")} to="/pages/Contacts">
          Say Hi!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

