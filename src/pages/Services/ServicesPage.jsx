import { Link } from "react-router-dom";
import { useSeo } from "../../components/common/useSeo";
import {
  FiArrowRight,
  FiCode,
  FiSmartphone,
  FiCloud,
  FiPenTool,
  FiCpu,
  FiServer,
  FiCheckCircle,
  FiEye,
  FiTarget,
  FiZap as FiBolt,
} from "react-icons/fi";

const services = [
  {
    title: "Web Development",
    description:
      "Fast, secure, and scalable web applications that turn visitors into customers.",
    icon: FiCode,
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps that deliver seamless user experiences.",
    icon: FiSmartphone,
    link: "/services/mobile-apps",
  },
  {
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms with secure architecture and powerful workflows.",
    icon: FiCloud,
    link: "/services/software-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive, branded interfaces crafted for engagement and conversion.",
    icon: FiPenTool,
    link: "/quote-booking",
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent automation and AI solutions that streamline operations.",
    icon: FiCpu,
    link: "/services/ai-automation",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, CI/CD, and automation for reliable delivery.",
    icon: FiCloud,
    link: "/quote-booking",
  },
  {
    title: "ERP & Custom Software",
    description:
      "Custom ERP, CRM, and business systems tailored to your unique workflows.",
    icon: FiServer,
    link: "/services/software-development",
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "We understand your goals, challenges, and success metrics.",
    icon: FiEye,
  },
  {
    title: "Plan",
    description: "We create a strategic roadmap and clear delivery plan.",
    icon: FiTarget,
  },
  {
    title: "Build",
    description: "We design, develop, and test with precision and speed.",
    icon: FiBolt,
  },
  {
    title: "Deliver",
    description: "We launch, optimize, and support your solution for growth.",
    icon: FiCheckCircle,
  },
];

const partnerBrands = [
  "Techverse",
  "cloudmax",
  "Uideck",
  "graygrids",
  "penta",
  "OrbitUI",
];

export function ServicesPage() {
  useSeo(
    "Services",
    "We design, build, and scale digital products that solve real-world problems and drive business growth.",
  );

  return (
    <>
      <section className="section services-hero">
        <div className="services-hero-copy">
          <p className="eyebrow">Home / Services</p>
          <h1>
            Our <span className="gradient-word">Services</span>
          </h1>
          <p className="lead">
            We design, build, and scale digital products that solve real-world
            problems and drive business growth.
          </p>
          <div className="services-hero-actions">
            <Link to="/quote-booking" className="btn btn-primary">
              Discuss Your Project <FiArrowRight />
            </Link>
          </div>
          <div className="services-trusted-row">
            <span>Trusted by innovative companies worldwide</span>
            <div className="services-brand-list">
              {partnerBrands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="services-hero-visual" id="technologies">
          <div className="services-hero-card">
            <span className="visual-badge">01</span>
            <div className="visual-block" />
          </div>
          <div className="services-hero-stack">
            <div className="visual-tile" />
            <div className="visual-tile" />
            <div className="visual-tile" />
          </div>
          <div className="services-hero-grid">
            <div className="visual-chip" />
            <div className="visual-chip" />
            <div className="visual-chip" />
          </div>
        </div>
      </section>

      <section className="section services-solutions" id="solutions">
        <div className="section-intro">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>End-to-end Solutions for Every Business Need</h2>
          <p>
            From strategy and design to development and deployment, we offer a
            comprehensive range of services to help you build, launch, and grow
            powerful digital products.
          </p>
        </div>

        <div className="services-card-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-feature-card" key={service.title}>
                <div className="feature-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="feature-link">
                  Learn More
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section services-process">
        <div className="section-intro">
          <p className="eyebrow">OUR PROCESS</p>
          <h2>A Proven Process for Delivering Success</h2>
          <p>
            We follow a transparent and agile process to ensure quality,
            alignment, and on-time delivery.
          </p>
        </div>

        <div className="services-process-grid">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article className="process-step" key={step.title}>
                <div className="process-icon">
                  <Icon />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section services-cta-strip">
        <div>
          <p>Ready to bring your ideas to life?</p>
          <h2>Let's build something amazing together.</h2>
        </div>
        <Link to="/quote-booking" className="btn btn-primary">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
