import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBox,
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiCode,
  FiHeart,
  FiHelpCircle,
  FiLayers,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { ComparisonTable } from "../pricing/PricingBlocks";

const processSteps = [
  {
    title: "Discover",
    text: "We understand your goals, challenges, and requirements.",
  },
  {
    title: "Plan",
    text: "We define the roadmap, architecture, and strategy.",
  },
  {
    title: "Design",
    text: "We create friendly designs and interactive prototypes.",
  },
  {
    title: "Develop",
    text: "We build your solution using best practices and clean code.",
  },
  {
    title: "Test",
    text: "We test performance, security, quality, and usability.",
  },
  {
    title: "Deploy",
    text: "We launch your solution and support the go-live experience.",
  },
];

const trustItems = [
  { icon: FiShield, title: "Transparent Pricing", text: "No Hidden Costs" },
  { icon: FiCheck, title: "Secure & Reliable", text: "Best Security Standards" },
  { icon: FiCalendar, title: "On-time Delivery", text: "We Respect Deadlines" },
  { icon: FiUsers, title: "Dedicated Support", text: "We're Here for You" },
];

const stats = [
  { icon: FiBox, value: "120+", label: "Projects Delivered" },
  { icon: FiHeart, value: "98%", label: "Client Satisfaction" },
  { icon: FiUsers, value: "50+", label: "Tech Experts" },
  { icon: FiLayers, value: "5+", label: "Years of Excellence" },
];

function splitTitle(title) {
  const words = title.split(" ");
  if (words.length < 2) return [title, ""];
  const accent = words.slice(-1).join(" ");
  return [words.slice(0, -1).join(" "), accent];
}

function getServiceLabel(title = "") {
  if (title.toLowerCase().includes("website")) return "Premium Web Solutions";
  if (title.toLowerCase().includes("booking")) return "Smart Booking Solutions";
  if (title.toLowerCase().includes("mobile")) return "Mobile App Solutions";
  if (title.toLowerCase().includes("ai")) return "Intelligent Automation";
  return "Premium Software Solutions";
}

function getShortTitle(title = "") {
  if (title.includes("That Build Trust")) return "Website Development";
  if (title.includes("AI Business")) return "AI Automation";
  return title;
}

export function ServicePageTemplate({
  title,
  subtitle,
  features,
  pricingRoute,
  showPricingButton = true,
}) {
  const shortTitle = getShortTitle(title);
  const [mainTitle, accentTitle] = splitTitle(shortTitle);

  return (
    <section className="service-detail-shell" id="service-overview">
      <div className="service-detail-hero">
        <div className="service-detail-copy">
          <nav className="service-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <strong>{shortTitle}</strong>
          </nav>

          <p className="service-detail-pill">
            <FiShield /> {getServiceLabel(shortTitle)}
          </p>
          <h1>
            {mainTitle} {accentTitle && <span>{accentTitle}</span>}
          </h1>
          <p className="service-detail-lead">{subtitle}</p>

          <div className="service-detail-actions">
            {showPricingButton && pricingRoute ? (
              <Link className="service-detail-primary" to={pricingRoute}>
                View Prices <FiArrowRight />
              </Link>
            ) : (
              <Link className="service-detail-primary" to="/lets-talk">
                Let's Build Your Solution <FiArrowRight />
              </Link>
            )}
            <Link className="service-detail-secondary" to="/lets-talk">
              <FiCalendar /> Book a Consultation
            </Link>
          </div>

          <div className="service-detail-stats" aria-label="Company stats">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="service-detail-visual" aria-hidden="true">
          <div className="service-circuit-grid" />
          <div className="service-chip">
            <div className="service-glow-cube">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <section className="service-detail-panel service-offer-panel" id="service-features">
        <div className="service-detail-section-head split">
          <div>
            <p>What We Offer</p>
            <h2>End-to-End {shortTitle} Services</h2>
          </div>
          <span>
            We provide complete development services using modern technologies
            and proven methods to deliver secure, fast, and future-ready
            business solutions.
          </span>
        </div>

        <div className="service-detail-feature-grid">
          {features.map((item) => {
            const Icon = item.icon || FiCode;
            return (
              <article className="service-detail-feature" key={item.title}>
                <div className="service-detail-icon">
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="service-feature-arrow">
                  <FiArrowRight />
                </span>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export function ServicePackagesTemplate({
  title,
  subtitle,
  plans = [],
  faqs = [],
  pricingModes,
  defaultMode,
  comparison,
  quoteForm,
}) {
  const serviceName = title.replace("Packages", "").replace("Pricing", "").trim();
  const modeEntries = pricingModes ? Object.entries(pricingModes) : [];
  const [activeMode, setActiveMode] = useState(
    defaultMode || modeEntries[0]?.[0] || "default",
  );
  const activeModeData =
    pricingModes && pricingModes[activeMode] ? pricingModes[activeMode] : null;
  const activePlans = activeModeData?.plans || plans;
  const activeModeTitle = activeModeData?.title || `${serviceName} Packages`;
  const activeModeText =
    activeModeData?.text ||
    subtitle ||
    "Choose a package then send us your requirements.";

  const buildLetsTalkUrl = (plan) => {
    const params = new URLSearchParams();
    params.set("package", plan?.name || "");
    params.set("service", "Website Development");
    return `/lets-talk?${params.toString()}`;
  };

  const jumpToTalk = (plan) => {
    window.location.href = buildLetsTalkUrl(plan);
  };

  const renderPackageCard = (plan) => (
    <article
      key={plan.name}
      className={
        plan.recommended
          ? "service-detail-plan recommended"
          : "service-detail-plan"
      }
    >
      {plan.recommended && <span className="service-plan-badge">Recommended</span>}
      <h3>{plan.name}</h3>
      <p className="service-plan-subtitle">
        {plan.setup || (plan.recommended ? "Ideal for growing businesses" : "Perfect for focused needs")}
      </p>
      <strong>{plan.price}</strong>
      <p>{plan.subtitle || plan.description || plan.timeline || plan.setup}</p>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button
        className={plan.recommended ? "service-detail-primary" : "service-detail-secondary"}
        type="button"
        onClick={() => jumpToTalk(plan)}
      >
        {plan.ctaLabel || (plan.price.toLowerCase().includes("from") ? "Contact Us" : "Choose Package")}
      </button>
    </article>
  );

  return (
    <section className="service-detail-shell service-detail-continuation">
      <section className="service-detail-panel service-process-panel">
        <div className="service-detail-section-head center">
          <p>Our Development Process</p>
          <h2>A Proven Process. Predictable Results.</h2>
        </div>

        <div className="service-detail-process">
          {processSteps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-panel service-package-panel" id="service-packages">
        <div className="service-detail-section-head center">
          <p>{serviceName} Packages</p>
          <h2>Flexible Plans for Every Business</h2>
          <span>{subtitle || "Choose a package then send us your requirements."}</span>
        </div>

        {modeEntries.length > 0 ? (
          <>
            <div className="pricing-toggle card service-pricing-toggle">
              {modeEntries.map(([key, mode]) => (
                <button
                  key={key}
                  type="button"
                  className={`pricing-toggle-btn ${
                    activeMode === key ? "active" : ""
                  }`}
                  aria-pressed={activeMode === key}
                  onClick={() => setActiveMode(key)}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <div className="pricing-inline-banner card service-pricing-banner">
              <div>
                <p className="eyebrow">Not sure which plan fits your business?</p>
                <h3>Schedule a free consultation before you decide.</h3>
                <p>{activeModeText}</p>
              </div>
              <Link className="btn btn-primary" to="/lets-talk">
                Schedule Free Consultation <FiArrowRight />
              </Link>
            </div>

            <div className="service-detail-section-head center service-mode-head">
              <p>{activeModeData?.label || serviceName}</p>
              <h2>{activeModeTitle}</h2>
              <span>{activeModeText}</span>
            </div>

            <div className="service-detail-plans service-detail-plans--mode">
              {activePlans.map((plan) => renderPackageCard(plan))}
            </div>

            {comparison ? (
              <div className="service-comparison-wrap">
                <ComparisonTable
                  columns={["One-Time Payment", "Monthly Subscription"]}
                  rows={comparison}
                />
              </div>
            ) : null}
          </>
        ) : (
          <div className="service-detail-plans">
            {plans.slice(0, 4).map((plan) => renderPackageCard(plan))}
          </div>
        )}

        <div className="service-trust-row">
          {trustItems.map(({ icon: Icon, title: itemTitle, text }) => (
            <div key={itemTitle}>
              <Icon />
              <span>
                <strong>{itemTitle}</strong>
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="service-detail-bottom">
        <div className="service-faq-card">
          <p>Frequently Asked Questions</p>
          <div className="service-faq-list">
            {faqs.slice(0, 4).map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <FiChevronDown />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="service-consult-card">
          <div className="service-consult-icon">
            <FiHelpCircle />
          </div>
          <div>
            <h2>Have a Project in Mind?</h2>
            <p>Let's discuss your idea and turn it into a powerful digital solution.</p>
            <ul>
              <li><FiCheck /> Free Consultation</li>
              <li><FiCheck /> Expert Advice</li>
              <li><FiCheck /> No Obligation</li>
            </ul>
            <Link className="service-detail-primary" to="/lets-talk">
              Book a Free Consultation <FiArrowRight />
            </Link>
          </div>
        </aside>
      </section>

      <section className="service-detail-cta">
        <div>
          <h2>Ready to Build Your Next Big Thing?</h2>
          <p>Let's turn your ideas into powerful {serviceName.toLowerCase()} solutions.</p>
        </div>
        <Link className="service-detail-primary" to="/lets-talk">
          Let's Talk <FiArrowRight />
        </Link>
      </section>

      {quoteForm ? <section className="service-quote-panel">{quoteForm}</section> : null}
    </section>
  );
}
