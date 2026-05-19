import { Link } from "react-router-dom";
import hero from "../../assets/hero.png";

export function Hero({ eyebrow, title, text }) {
  return (
    <section
      className="hero-section section"
      style={{ "--hero-bg": `url(${hero})` }}
    >
      <div className="hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
        <div className="row gap-sm">
          <Link to="/quote-booking" className="btn btn-primary full-width">
            Start Project
          </Link>
          <Link to="/services" className="btn btn-secondary full-width">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
