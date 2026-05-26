import { Link } from "react-router-dom";
import { useSeo } from "../../components/common/useSeo";
import {
  FiArrowRight,
  FiBarChart2,
  FiCalendar,
  FiCode,
  FiMonitor,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiDocker,
  SiFigma,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import serviceHero from "../../assets/services_hero.png";

const services = [
  {
    title: "Software Development",
    description: "Custom ERP, CRM, POS, dashboards, and enterprise platforms built for operations at scale.",
    icon: FiMonitor,
    link: "/services/software-development",
  },
  {
    title: "Web Development",
    description: "High-performance websites and web applications crafted for growth and engagement.",
    icon: FiCode,
    link: "/services/web-development",
  },
  {
    title: "Booking Systems",
    description: "Appointment, reservation, payment, reminder, and dashboard systems for service businesses.",
    icon: FiCalendar,
    link: "/services/booking-systems",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver seamless user experiences.",
    icon: FiSmartphone,
    link: "/services/mobile-apps",
  },
  {
    title: "AI Automation",
    description: "AI assistants, WhatsApp automation, CRM workflows, and smart business intelligence systems.",
    icon: FiBarChart2,
    link: "/services/ai-automation",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We understand your goals, challenges, and requirements.",
  },
  {
    step: "02",
    title: "Plan",
    description: "We define the roadmap, architecture, and strategy.",
  },
  {
    step: "03",
    title: "Build",
    description: "We design, develop, and test with quality and precision.",
  },
  {
    step: "04",
    title: "Deploy",
    description: "We deliver, deploy, and ensure everything runs smoothly.",
  },
  {
    step: "05",
    title: "Support",
    description: "We provide ongoing support and continuous improvement.",
  },
];

const techStack = [
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Python", icon: SiPython },
  { label: "AWS", icon: FaAws },
  { label: "Docker", icon: SiDocker },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "MongoDB", icon: SiMongodb },
  { label: "Figma", icon: SiFigma },
];

const orbitItems = [
  { icon: FiCode, className: "services-orbit-item services-orbit-code" },
  { icon: FiCalendar, className: "services-orbit-item services-orbit-cloud" },
  { icon: FiShield, className: "services-orbit-item services-orbit-shield" },
  { icon: FiSmartphone, className: "services-orbit-item services-orbit-phone" },
  { icon: FiBarChart2, className: "services-orbit-item services-orbit-chart" },
  { icon: FiArrowRight, className: "services-orbit-item services-orbit-arrow" },
];

export function ServicesPage() {
  useSeo(
    "Services",
    "Code furnace delivers end-to-end digital solutions tailored to your business needs.",
  );

  return (
    <div className="services-page">
      <section className="services-hero">
        <div
          className="services-hero-bg"
          aria-hidden="true"
          style={{ backgroundImage: `url(${serviceHero})` }}
        />
        <div className="services-hero-copy">
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <strong>Services</strong>
          </nav>
          <p className="services-kicker">OUR SERVICES</p>
          <h1>
            Comprehensive Services.
            <br />
            Powerful <span>Results.</span>
          </h1>
          <p className="services-lead">
            We deliver end-to-end digital solutions tailored to your business needs. From strategy to deployment, we&apos;ve got you covered.
          </p>
        </div>

        <div className="services-hero-visual" aria-hidden="true">
          <div className="services-visual-core">
            <FiCode />
          </div>
          {orbitItems.map((item) => {
            const Icon = item.icon;
            return (
              <span className={item.className} key={item.className}>
                <Icon />
              </span>
            );
          })}
        </div>

        <div className="services-card-grid" id="solutions">
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
                  Learn More <FiArrowRight />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-panel services-process">
        <div className="services-section-head">
          <p className="services-kicker">OUR PROCESS</p>
          <h2>A Proven Process. Predictable Results.</h2>
        </div>

        <div className="services-process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step" key={step.step}>
              <span>{step.step}</span>
              {index < processSteps.length - 1 && <i aria-hidden="true" />}
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-panel services-tech" id="technologies">
        <div className="services-section-head">
          <p className="services-kicker">TECHNOLOGIES WE WORK WITH</p>
          <h2>Modern Tech Stack for Modern Solutions</h2>
        </div>

        <div className="services-tech-grid">
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} className="services-tech-badge">
                <Icon />
                {item.label}
              </span>
            );
          })}
        </div>
        <Link to="/lets-talk" className="services-tech-link">
          Explore All Technologies <FiArrowRight />
        </Link>
      </section>

      <section className="services-cta-strip">
        <div>
          <h2>Have a project in mind?</h2>
          <p>Let&apos;s build something amazing together.</p>
        </div>
        <Link to="/lets-talk" className="btn btn-primary">
          Let&apos;s Talk <FiArrowRight />
        </Link>
      </section>
    </div>
  );
}
