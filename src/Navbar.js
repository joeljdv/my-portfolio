import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/portfolio" className="title">
        Joel Diaz
      </Link>
      <ul>
        <li>
          <Link to="/portfolio/about"> About </Link>
        </li>
        <li>
          <Link to="/portfolio/work"> Work </Link>
        </li>
        <li>
          <a href="Resume.pdf" download="Resume.pdf" target="">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
