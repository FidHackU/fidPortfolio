import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  console.log(useLocation());

  // Function to add active class
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "w-full text-center hover:bg-[#A0B8C7] text-sm bg-[#A0B8C7]"
      : "w-full text-center hover:bg-[#A0B8C7] text-sm";
  };

  return (
    <nav className="bg-[#C8DCEB] flex items-center">
      <Link
        className="w-32 text-center text-sm font-prism"
        to="/pages/HomePage"
      >
        Fidel Yong
      </Link>

      <div className="w-full flex justify-space-around font-prism">
        <Link
          className={getLinkClass("/pages/Projects")}
          to="/pages/Projects"
        >
          Projects
        </Link>
        <Link
          className={getLinkClass("/pages/AboutPage")}
          to="/pages/AboutPage"
        >
          About
        </Link>
        <Link
          className={getLinkClass("/pages/Contacts")}
          to="/pages/Contacts"
        >
          Say Hi!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
