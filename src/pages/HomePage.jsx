import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiBox,
  FiCamera,
  FiCheckCircle,
  FiCloud,
  FiCode,
  FiGitBranch,
  FiMonitor,
  FiPenTool,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
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
import heroImage from "../assets/hero_images.png";
import { useSeo } from "../components/common/useSeo";

const trustedBrands = [
  { name: "techverse", icon: FiBox },
  { name: "ideabloom", icon: FiGitBranch },
  { name: "startify", icon: FiAward },
  { name: "cloudmax", icon: FiCamera },
  { name: "devstack", icon: FiCode },
  { name: "pixeldash", icon: FiGitBranch },
];

const services = [
  {
    title: "Product Engineering",
    icon: FiMonitor,
    link: "/services/software-development",
    text: "We build robust, scalable products using modern technologies and best practices.",
  },
  {
    title: "Web Development",
    icon: FiMonitor,
    link: "/services/website-development",
    text: "High-performance websites and web applications crafted for growth and engagement.",
  },
  {
    title: "Mobile Development",
    icon: FiSmartphone,
    link: "/services/mobile-apps",
    text: "Native and cross-platform mobile apps that deliver seamless user experiences.",
  },
  {
    title: "Cloud & DevOps",
    icon: FiCloud,
    link: "/quote-booking",
    text: "Scalable cloud solutions and DevOps practices that ensure reliability and speed.",
  },
  {
    title: "UI/UX Design",
    icon: FiPenTool,
    link: "/quote-booking",
    text: "User-centered designs that combine aesthetics with usability to drive results.",
  },
];

const statCards = [
  { value: 120, suffix: "+", label: "Projects Delivered", icon: FiTrendingUp },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: FiUsers },
  { value: 50, suffix: "+", label: "Tech Experts", icon: FiAward },
  { value: 5, suffix: "+", label: "Years of Excellence", icon: FiCheckCircle },
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

const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "We understand your goals, challenges, and requirements.",
  },
  {
    step: "02",
    title: "Plan",
    text: "We define the roadmap, architecture, and strategy.",
  },
  {
    step: "03",
    title: "Build",
    text: "We design, develop, and test with quality and precision.",
  },
  {
    step: "04",
    title: "Deploy",
    text: "We deliver, deploy, and ensure everything runs smoothly.",
  },
  {
    step: "05",
    title: "Support",
    text: "We provide ongoing support and continuous improvement.",
  },
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
    <div className="home-page">
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
              We help businesses build secure, scalable, and high-performance software products with modern engineering and thoughtful design.
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

          <div className="home-hero-art">
            <img src={heroImage} alt="Glowing digital solution cubes" />
          </div>
        </div>

        <div className="home-trusted">
          <p>TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="home-trusted-row">
            {trustedBrands.map((brand) => {
              const Icon = brand.icon;
              return (
                <span key={brand.name}>
                  <Icon />
                  {brand.name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section home-services reveal-on-scroll">
        <div className="home-section-head">
          <div>
            <p className="home-kicker">WHAT WE DO</p>
            <h2>End-to-end Software Solutions That Drive Results</h2>
          </div>
          <p>
            From strategy and design to development and deployment, we build products tailored to your business goals.
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
                <p>{item.text}</p>
                <Link to={item.link}>
                  Learn More <FiArrowRight />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-section home-why reveal-on-scroll">
        <div className="home-why-copy">
          <p className="home-kicker">WHY CHOOSE US</p>
          <h2>
            Engineering Excellence.
            <br />
            Business <span>Impact.</span>
          </h2>
          <p>
            We combine technology, creativity, and strategy to deliver solutions that make a real difference.
          </p>
        </div>

        <div className="home-stats-grid" ref={statsRef}>
          {statCards.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="home-stat-card">
                <div className="home-icon-wrap home-icon-wrap--dark">
                  <Icon />
                </div>
                <div>
                  <h3>
                    <Counter target={item.value} suffix={item.suffix} start={startCounters} />
                  </h3>
                  <p>{item.label}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-section home-tech reveal-on-scroll">
        <div className="home-tech-head">
          <p className="home-kicker">TECHNOLOGIES WE WORK WITH</p>
          <h2>Modern Tech Stack for Modern Solutions</h2>
        </div>

        <div className="home-tech-grid">
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} className="home-tech-badge">
                <Icon />
                {item.label}
              </span>
            );
          })}
        </div>
        <Link to="/services" className="home-tech-link">
          Explore All Technologies <FiArrowRight />
        </Link>
      </section>

      <section className="home-section home-process reveal-on-scroll">
        <div className="home-process-head">
          <p className="home-kicker">OUR PROCESS</p>
          <h2>A Proven Process. Predictable Results.</h2>
        </div>

        <div className="home-process-grid">
          {processSteps.map((item, index) => (
            <article key={item.step} className="home-process-card">
              <span>{item.step}</span>
              {index < processSteps.length - 1 && <i aria-hidden="true" />}
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-cta reveal-on-scroll">
        <div>
          <h2>Have an idea? Let&apos;s build something amazing together.</h2>
          <p>We&apos;re here to turn your vision into powerful digital solutions.</p>
        </div>
        <Link to="/contact" className="btn btn-primary">
          Let&apos;s Talk <FiArrowRight />
        </Link>
      </section>
    </div>
  );
}
