import image from "./Joel_diaz.png";
export default function Home() {
  return (
    <div className="Home">
      <div className="Home-Left-column">
        <h1>Software Engineer.</h1>
        <p>
          I am a software enginner specialized in building incredible digital
          experiences.
        </p>
      </div>
      <div className="Home-Right-column">
        <img src={image} />
      </div>
    </div>
  );
}
