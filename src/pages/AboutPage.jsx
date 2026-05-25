import { Link } from "react-router-dom";
import { useSeo } from "../components/common/useSeo";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiEye,
  FiShield,
  FiTarget,
  FiUsers,
  FiCode,
  FiSmile,
  FiTrendingUp,
} from "react-icons/fi";
import aboutHeroImage from "../assets/about hero.png";

const coreCards = [
  {
    title: "Mission",
    text: "To help businesses grow through modern technology, automation, and scalable digital solutions.",
    icon: FiTarget,
  },
  {
    title: "Vision",
    text: "To become East Africa's leading digital transformation and AI automation company.",
    icon: FiEye,
  },
  {
    title: "Why Businesses Trust Us",
    text: "Premium delivery standards, secure architecture, and transparent collaboration from kickoff to support.",
    icon: FiShield,
  },
];

const stackCards = [
  {
    title: "Scalable Systems",
    text: "Cloud-ready architecture, API-first development, and performance optimization.",
    icon: FiCpu,
  },
  {
    title: "Business-Focused Delivery",
    text: "Every build is aligned with operational goals, revenue, and growth strategy.",
    icon: FiCheckCircle,
  },
  {
    title: "Team Collaboration",
    text: "Cross-functional design, engineering, and support teams moving in one direction.",
    icon: FiUsers,
  },
];

const stats = [
  { label: "Projects Delivered", value: 50, suffix: "+", icon: FiSmile },
  { label: "Happy Clients", value: 30, suffix: "+", icon: FiUsers },
  { label: "Years Experience", value: 5, suffix: "+", icon: FiCode },
  { label: "Client Satisfaction", value: 100, suffix: "%", icon: FiTrendingUp },
];

export function AboutPage() {
  useSeo(
    "About",
    "Learn Code furnace mission, vision, values, and delivery approach.",
  );

  return (
    <section className="section about-page" id="about-company">
      <section className="about-hero card reveal">
        <div className="about-hero-copy">
          <p className="about-breadcrumb">
            <Link to="/">Home</Link> <span>›</span> <span>About Us</span>
          </p>
          <p className="eyebrow">Who We Are</p>
          <h1>
            About CODE
            <br />
            <span className="gradient-word">furnace</span>
          </h1>
          <p className="lead">
            We are a digital solutions company based in Narok, Kenya, helping
            businesses grow through modern technology, automation, and scalable
            digital systems.
          </p>
          <Link to="/quote-booking" className="btn btn-primary">
            Let's Build Something Great <FiArrowRight />
          </Link>
        </div>

        <div className="about-hero-art" aria-hidden="true">
          <img
            src={aboutHeroImage}
            alt="Futuristic Code Furnace technology platform"
            className="about-hero-image"
            loading="eager"
            decoding="async"
          />
          <div className="about-hero-glow" />
        </div>
      </section>

      <section className="about-core-grid">
        {coreCards.map((item, index) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="about-core-card card">
              <span className="about-core-index">0{index + 1}</span>
              <span className="about-icon-wrap">
                <Icon />
              </span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          );
        })}
      </section>

      <section className="about-stack card" id="technologies">
        <div className="section-intro">
          <p className="eyebrow">Our Strength</p>
          <h2>Technology Stack</h2>
          <p>
            React, Node.js, cloud platforms, automation systems, and enterprise
            integrations.
          </p>
        </div>

        <div className="about-stack-grid">
          {stackCards.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="about-stack-card">
                <span className="about-icon-wrap">
                  <Icon />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-stats card" aria-label="Company stats">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article key={stat.label} className="about-stat-item">
              <span className="about-icon-wrap">
                <Icon />
              </span>
              <div>
                <h3>
                  {stat.value}{stat.suffix}
                </h3>
                <p>{stat.label}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="about-bottom-cta card">
        <p className="eyebrow">Ready To Work Together?</p>
        <h2>Let's build the future together.</h2>
        <p>We turn ideas into powerful digital solutions.</p>
        <Link to="/quote-booking" className="btn btn-primary">
          Let's Talk <FiArrowRight />
        </Link>
      </section>
    </section>
  );
}


