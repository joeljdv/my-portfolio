export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/portfolio" className="title">
        Joel Diaz
      </a>
      <ul>
        <li>
          <a href="#/portfolio/about"> About </a>
        </li>
        <li>
          <a href="#/portfolio/work"> Work </a>
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
