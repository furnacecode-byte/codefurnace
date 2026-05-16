import { Link } from 'react-router-dom'

export function Hero({ eyebrow, title, text }) {
  return (
    <section className="hero-section section">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
        <div className="row gap-sm">
          <Link to="/quote-booking" className="btn btn-primary">Start Project</Link>
          <Link to="/services" className="btn btn-secondary">Explore Services</Link>
        </div>
      </div>
      <div className="code-orb" aria-hidden="true">&lt;/&gt;</div>
    </section>
  )
}

