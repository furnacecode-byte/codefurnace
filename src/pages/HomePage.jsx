import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCode,
  FiMonitor,
  FiSmartphone,
  FiPenTool,
  FiCpu,
  FiCloud,
  FiCheckCircle,
  FiUsers,
  FiAward,
  FiBriefcase,
  FiTrendingUp,
} from "react-icons/fi";
import { useSeo } from "../components/common/useSeo";

const trustedBrands = [
  "techverse",
  "ideabloom",
  "startify",
  "cloudmax",
  "devstack",
  "pixeldash",
];

const services = [
  {
    title: "Web Development",
    icon: FiMonitor,
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    icon: FiSmartphone,
    link: "/services/mobile-apps",
  },
  {
    title: "SaaS Platforms",
    icon: FiCode,
    link: "/services/software-development",
  },
  { title: "UI/UX Design", icon: FiPenTool, link: "/quote-booking" },
  { title: "AI Automation", icon: FiCpu, link: "/services/ai-automation" },
  { title: "Cloud & DevOps", icon: FiCloud, link: "/quote-booking" },
  {
    title: "ERP/POS Systems",
    icon: FiBriefcase,
    link: "/services/software-development",
  },
];

const statCards = [
  { value: 120, suffix: "+", label: "Projects Delivered", icon: FiTrendingUp },
  { value: 80, suffix: "+", label: "Happy Clients", icon: FiUsers },
  { value: 5, suffix: "+", label: "Years Experience", icon: FiAward },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: FiCheckCircle },
];

const projects = [
  { name: "FinDash", type: "Finance Dashboard Platform" },
  { name: "Learnify", type: "E-learning Platform" },
  { name: "EstatePro", type: "Real Estate Marketplace" },
  { name: "MediTrack", type: "Healthcare Management System" },
];

function Counter({ target, suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    let startTs;
    const duration = 1200;
    const tick = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function HomePage() {
  useSeo(
    "Home",
    "Code furnace builds premium software, mobile apps, SaaS, AI and cloud solutions.",
  );

  const statsRef = useRef(null);
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal-on-scroll");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealNodes.forEach((node) => revealObserver.observe(node));

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounters(true);
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      revealObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="home-hero reveal-on-scroll">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-chip">Building Software. Forging Futures.</p>
            <h1>
              We Build Powerful
              <br />
              Digital <span>Solutions</span>
            </h1>
            <p>
              We help businesses build secure, scalable, and high-performance
              software products with modern engineering and thoughtful design.
            </p>
            <div className="home-hero-actions">
              <Link to="/quote-booking" className="btn btn-primary">
                Start a Project <FiArrowRight />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Services <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="home-hero-art" aria-hidden="true">
            <div className="cube-grid" />
          </div>
        </div>
      </section>

      <section className="home-trusted reveal-on-scroll">
        <p>TRUSTED BY INNOVATIVE COMPANIES</p>
        <div className="home-trusted-row">
          {trustedBrands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </section>

      <section className="home-section home-light reveal-on-scroll" id="ai-services">
        <div className="home-heading-row">
          <div>
            <p className="home-kicker">WHAT WE DO</p>
            <h2>End-to-end Software Solutions That Drive Results</h2>
          </div>
          <p>
            From strategy and design to development and deployment, we build
            products tailored to your business goals.
          </p>
        </div>

        <div className="home-services-grid">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="home-service-card">
                <div className="home-icon-wrap">
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <Link to={item.link}>
                  Explore <FiArrowRight />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-section home-soft reveal-on-scroll">
        <div className="home-heading-row home-why-head">
          <div>
            <p className="home-kicker">WHY CHOOSE US</p>
            <h2>Premium delivery with measurable business impact.</h2>
          </div>
          <p>
            We combine product strategy, design excellence, and engineering
            discipline to deliver long-term digital value.
          </p>
        </div>

        <div className="home-stats-grid" ref={statsRef}>
          {statCards.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="home-stat-card">
                <div className="home-icon-wrap">
                  <Icon />
                </div>
                <h3>
                  <Counter
                    target={item.value}
                    suffix={item.suffix}
                    start={startCounters}
                  />
                </h3>
                <p>{item.label}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-section home-light reveal-on-scroll">
        <div className="home-work-head">
          <h2>Recent Projects</h2>
          <Link to="/projects">
            View All <FiArrowRight />
          </Link>
        </div>

        <div className="home-project-scroll" role="list">
          {projects.map((project) => (
            <article
              key={project.name}
              className="home-project-card"
              role="listitem"
            >
              <div className="home-work-image" aria-hidden="true" />
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </article>
          ))}
        </div>

        <div className="home-cta-strip">
          <div>
            <p>LET&apos;S BUILD SOMETHING GREAT</p>
            <h2>
              Have a project in mind? Let&apos;s bring your ideas to life.
            </h2>
          </div>
          <Link to="/contact" className="btn btn-secondary">
            Get In Touch <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
