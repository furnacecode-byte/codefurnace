import { useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "../components/common/useSeo";
import "./PortfolioPage.css";

const filters = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "SaaS Platforms",
  "Enterprise Solutions",
  "UI/UX Design",
];

const projects = [
  {
    title: "FinDash — Finance Dashboard",
    category: "Web Development",
    stack: "React, Node.js, Charting",
    label: "Web Development",
    text: "A real-time finance dashboard for reporting, forecasts, and executive decision support.",
  },
  {
    title: "Learnify — E-learning Platform",
    category: "Web Development",
    stack: "React, Next.js, CMS",
    label: "Web Development",
    text: "Interactive learning journeys, course management, and progress analytics for modern education teams.",
  },
  {
    title: "EstatePro — Real Estate Marketplace",
    category: "Web Development",
    stack: "React, API, Payments",
    label: "Web Development",
    text: "Marketplace search, property listings, buyer/seller workflows, and agent automation.",
  },
  {
    title: "MediTrack — Healthcare App",
    category: "Mobile Apps",
    stack: "React Native, Firebase",
    label: "Mobile Apps",
    text: "Patient booking, care coordination, and secure records access in a polished mobile experience.",
  },
  {
    title: "PaySwift — Mobile Banking",
    category: "Mobile Apps",
    stack: "React Native, Payments",
    label: "Mobile Apps",
    text: "Seamless digital banking with account flows, transfers, notifications, and security controls.",
  },
  {
    title: "Shopio — E-commerce Platform",
    category: "Web Development",
    stack: "React, Commerce, UI",
    label: "Web Development",
    text: "A fast, secure storefront built to convert visitors into customers with modern UI/UX.",
  },
  {
    title: "DataPulse — Analytics SaaS",
    category: "SaaS Platforms",
    stack: "React, Data Viz, Dashboards",
    label: "SaaS Platforms",
    text: "A data intelligence platform delivering KPI visualizations, alerts, and business insights.",
  },
  {
    title: "ERPNext Custom Solution",
    category: "Enterprise Solutions",
    stack: "ERP, Automation, Integrations",
    label: "Enterprise Solutions",
    text: "A scalable enterprise system for operations, inventory, finance, and compliance.",
  },
  {
    title: "Brandix — Digital Agency Website",
    category: "UI/UX Design",
    stack: "Branding, Web Design, Motion",
    label: "UI/UX Design",
    text: "A premium agency website focused on storytelling, conversions, and brand differentiation.",
  },
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const visibleProjects = projects.filter((project) =>
    activeFilter === "All Projects" ? true : project.category === activeFilter,
  );

  useSeo(
    "Projects",
    "Explore Code furnace project case studies for web, mobile, SaaS, enterprise, and UI/UX solutions.",
  );

  return (
    <section className="section projects-hero" id="projects-list">
      <div className="projects-breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <span>Projects</span>
      </div>

      <div className="section-intro">
        <p className="eyebrow">Our Work</p>
        <h1>Our Projects</h1>
        <p className="lead">
          Explore premium digital product development, enterprise systems,
          mobile experiences, and UI/UX work delivered for forward-looking
          businesses.
        </p>
      </div>

      <div className="projects-filter-bar">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`projects-filter ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-content">
              <span className="project-card-category">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <p>
                <strong>Tech stack:</strong> {project.stack}
              </p>
              <div className="project-card-footer">
                <span>View Case Study</span>
                <Link to="/quote-booking">Start a Project</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-cta-strip">
        <div>
          <p>Have a project in mind?</p>
          <h2>Let&apos;s build something great together.</h2>
        </div>
        <Link to="/quote-booking" className="btn btn-primary">
          Start a Project
        </Link>
      </div>
    </section>
  );
}
