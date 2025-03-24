import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

const App = () => {
  return (
      <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Contacts />
        <Footer />
      </div>
  );
};

export default App;
