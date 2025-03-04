import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Projects from "./pages/Projects.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Contacts from "./pages/Contacts.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Routes>
              <Route path="/pages/HomePage" element={<HomePage />}></Route>
              <Route path="/pages/Projects" element={<Projects />}></Route>
              <Route path="/pages/AboutPage" element={<AboutPage />}></Route>
              <Route path="/pages/Contacts" element={<Contacts />}></Route>
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
