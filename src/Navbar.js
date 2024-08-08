export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="title">
        Joel Diaz
      </a>
      <ul>
        <li>
          <a href="/about"> About </a>
        </li>
        <li>
          <a href="/work"> Work </a>
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
