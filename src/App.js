import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";
import Work from "./components/Work.js";

function App() {
  return (
    console.log(window.location),
    (
      <div>
        <HashRouter>
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
              <a
                href="https://github.com/joeljdv"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Container>
          </div>
          <div className="pages">
            <Routes>
              <Route path="/portfolio" element={<Home />} />
              <Route path="/portfolio/about" element={<About />} />
              <Route path="/portfolio/work" element={<Work />} />
            </Routes>
          </div>
        </HashRouter>
      </div>
    )
  );
}

export default App;
