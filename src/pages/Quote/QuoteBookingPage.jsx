import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";
import { useSeo } from "../../components/common/useSeo";

const serviceOptions = [
  "Website",
  "Booking System",
  "Mobile App",
  "Software",
  "AI Automation",
  "SEO",
  "Branding",
];
const goals = [
  "Increase sales",
  "Improve operations",
  "Automate workflows",
  "Reach more customers",
  "Build online presence",
];
const timelineOptions = ["Immediately", "1-2 weeks", "1 month", "Flexible"];
const budgetOptions = [
  "Under KES 50,000",
  "KES 50,000 - 150,000",
  "KES 150,000 - 500,000",
  "KES 500,000+",
];
const channels = ["WhatsApp", "Email", "Phone Call", "Zoom Meeting"];
const addOns = [
  "M-Pesa integration",
  "Client login system",
  "Management dashboard",
  "Email automation",
  "Analytics dashboard",
  "Training session",
  "Online payment gateway",
  "Booking system",
  "Employee management",
  "Digital marketing",
  "Branding services",
  "SEO setup",
  "WhatsApp automation",
];

const initial = {
  companyName: "",
  industry: "",
  businessDescription: "",
  sells: "",
  serviceNeed: "",
  projectGoal: "",
  hasWebsite: "No",
  websiteLink: "",
  issues: "",
  addOns: [],
  timeline: "Immediately",
  budget: "",
  city: "",
  channel: "WhatsApp",
  fullName: "",
  whatsapp: "",
  email: "",
  decisionMaker: "Yes",
};

const getErrors = (step, data) => {
  if (step === 1)
    return [data.companyName, data.industry, data.businessDescription].every(
      Boolean,
    );
  if (step === 2) return [data.serviceNeed, data.projectGoal].every(Boolean);
  if (step === 4) return Boolean(data.budget);
  if (step === 5) return Boolean(data.city);
  if (step === 6)
    return [data.fullName, data.whatsapp, data.email].every(Boolean);
  return true;
};

export function QuoteBookingPage() {
  useSeo(
    "Quote & Booking",
    "Multi-step project inquiry and booking platform for Code furnace services.",
  );
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("cf-quote-progress");
    return saved ? JSON.parse(saved) : initial;
  });

  const progress = useMemo(() => Math.round((step / 6) * 100), [step]);

  const update = (key, value) => {
    const next = { ...form, [key]: value };
    setForm(next);
    localStorage.setItem("cf-quote-progress", JSON.stringify(next));
  };

  const toggleAddon = (value) => {
    const exists = form.addOns.includes(value);
    update(
      "addOns",
      exists ? form.addOns.filter((v) => v !== value) : [...form.addOns, value],
    );
  };

  const nextStep = () => {
    if (!getErrors(step, form)) return;
    setStep((s) => Math.min(s + 1, 6));
  };

  const submit = () => {
    if (!getErrors(6, form)) return;
    setDone(true);
    localStorage.removeItem("cf-quote-progress");
  };

  const summary = `${form.serviceNeed || "Service"} | ${form.budget || "Budget pending"} | ${form.timeline}`;

  if (done) {
    return (
      <section className="section">
        <article className="card confirmation-card">
          <h1>
            <FiCheckCircle /> Inquiry Submitted
          </h1>
          <p>
            Thank you. Our team will reach out via {form.channel} to confirm
            your consultation.
          </p>
          <p>
            <strong>Summary:</strong> {summary}
          </p>
          <div className="row gap-sm">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                setDone(false);
                setStep(1);
                setForm(initial);
              }}
            >
              Create Another Inquiry
            </button>
            <a
              className="btn btn-secondary"
              href="mailto:info@codefurnace.com"
            >
              Send By Email
            </a>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-intro">
        <h1>Quote / Booking Platform</h1>
        <p>
          Choose services, package direction, and send your project inquiry.
        </p>
      </div>

      <div className="card progress-wrap">
        <div className="progress-track">
          <span className={`progress-fill progress-step-${step}`} />
        </div>
        <p>Step {step} of 6</p>
      </div>

      <form className="card quote-form">
        {step === 1 && (
          <section className="quote-step">
            <h3>01 Business Information</h3>
            <input
              placeholder="Company name"
              value={form.companyName}
              onChange={(e) => update("companyName", e.target.value)}
            />
            <input
              placeholder="Industry/sector"
              value={form.industry}
              onChange={(e) => update("industry", e.target.value)}
            />
            <textarea
              rows="3"
              placeholder="Describe your business"
              value={form.businessDescription}
              onChange={(e) => update("businessDescription", e.target.value)}
            />
            <textarea
              rows="3"
              placeholder="What products/services do you sell"
              value={form.sells}
              onChange={(e) => update("sells", e.target.value)}
            />
          </section>
        )}

        {step === 2 && (
          <section className="quote-step">
            <h3>02 Your Need</h3>
            <select
              value={form.serviceNeed}
              onChange={(e) => update("serviceNeed", e.target.value)}
            >
              <option value="">What do you need right now?</option>
              {serviceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              value={form.projectGoal}
              onChange={(e) => update("projectGoal", e.target.value)}
            >
              <option value="">Main project goal</option>
              {goals.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              value={form.hasWebsite}
              onChange={(e) => update("hasWebsite", e.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
            <input
              placeholder="Existing website link"
              value={form.websiteLink}
              onChange={(e) => update("websiteLink", e.target.value)}
            />
            <textarea
              rows="3"
              placeholder="What is not working currently?"
              value={form.issues}
              onChange={(e) => update("issues", e.target.value)}
            />
          </section>
        )}

        {step === 3 && (
          <section className="quote-step">
            <h3>03 Add-ons</h3>
            <div className="addons-grid">
              {addOns.map((item) => (
                <label key={item} className="addon-item">
                  <input
                    type="checkbox"
                    checked={form.addOns.includes(item)}
                    onChange={() => toggleAddon(item)}
                  />{" "}
                  {item}
                </label>
              ))}
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="quote-step">
            <h3>04 Timeline & Budget</h3>
            <select
              value={form.timeline}
              onChange={(e) => update("timeline", e.target.value)}
            >
              {timelineOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
            >
              <option value="">Estimated budget</option>
              {budgetOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </section>
        )}

        {step === 5 && (
          <section className="quote-step">
            <h3>05 Location & Contact</h3>
            <input
              placeholder="City of operation"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
            />
            <select
              value={form.channel}
              onChange={(e) => update("channel", e.target.value)}
            >
              {channels.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </section>
        )}

        {step === 6 && (
          <section className="quote-step">
            <h3>06 Client Details</h3>
            <input
              placeholder="Full name"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
            />
            <input
              placeholder="WhatsApp number (+254...)"
              value={form.whatsapp}
              onChange={(e) => update("whatsapp", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
            <select
              value={form.decisionMaker}
              onChange={(e) => update("decisionMaker", e.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </section>
        )}

        <div className="row gap-sm wrap">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
          >
            <FiArrowLeft /> Back
          </button>
          {step < 6 ? (
            <button
              className="btn btn-primary"
              type="button"
              onClick={nextStep}
            >
              Continue <FiArrowRight />
            </button>
          ) : (
            <button className="btn btn-primary" type="button" onClick={submit}>
              Submit Project Inquiry
            </button>
          )}
          <a
            className="btn btn-secondary"
            href="https://wa.me/254700123456"
            target="_blank"
            rel="noreferrer"
          >
            <FiMessageCircle /> Talk To Us Now
          </a>
          <a className="btn btn-secondary" href="mailto:info@codefurnace.com">
            <FiMail /> Send By Email
          </a>
        </div>
      </form>
    </section>
  );
}
