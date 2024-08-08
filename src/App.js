import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";
import Work from "./components/Work.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="socialMedia">
        <Container>
          <a
            href="https://linkedin.com/in/joel-diaz-vidal"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/joeljdv" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Container>
      </div>
      <div className="pages">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="work" exact element={<Work />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
