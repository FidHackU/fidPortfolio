import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between text-md font-poppins font-bold p-6 sticky top-0 bg-white">
      <span>Fidel.dev</span>
      <div className="flex space-x-6">
        <a href="#home" className="hover:scale-105">Home</a>
        <a href="#about" className="hover:scale-105">About</a>
        <a href="#projects" className="hover:scale-105">Projects</a>
        <a href="#contacts" className="hover:scale-105">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
