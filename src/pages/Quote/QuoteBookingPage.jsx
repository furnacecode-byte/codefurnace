import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBox,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { useSeo } from "../../components/common/useSeo";

const steps = [
  "Business Info",
  "Project Details",
  "Requirements",
  "Review & Submit",
  "Complete",
];

const industryOptions = [
  "Retail & E-commerce",
  "Hospitality",
  "Healthcare",
  "Education",
  "Real Estate",
  "Professional Services",
  "Non-profit",
  "Other",
];

const serviceOptions = [
  "Website Development",
  "Booking System",
  "Custom Software",
  "Mobile App",
  "AI Automation",
  "Branding & SEO",
];

const budgetOptions = [
  "Under KES 50,000",
  "KES 50,000 - 150,000",
  "KES 150,000 - 500,000",
  "KES 500,000+",
];

const timelineOptions = [
  "Immediately",
  "Within 2 weeks",
  "Within 1 month",
  "Flexible",
];

const featureOptions = [
  "Online payments",
  "Booking calendar",
  "Client dashboard",
  "Admin dashboard",
  "WhatsApp automation",
  "SEO setup",
  "Analytics",
  "Training",
];

const optionalAddOns = [
  { name: "M-Pesa integration", price: 15000 },
  { name: "Client login system", price: 12000 },
  { name: "Management dashboard", price: 18000 },
  { name: "Email automation", price: 10000 },
  { name: "Analytics dashboard", price: 16000 },
  { name: "Training session", price: 8000 },
  { name: "Card / online payment gateway", price: 18000 },
  { name: "Booking system", price: 25000 },
  { name: "Login system", price: 10000 },
  { name: "Employee management", price: 20000 },
  { name: "Digital marketing", price: 22000 },
  { name: "Branding services", price: 25000 },
  { name: "SEO setup", price: 12000 },
  { name: "WhatsApp automation", price: 18000 },
];

const initialForm = {
  companyName: "",
  industry: "",
  fullName: "",
  email: "",
  phone: "",
  budget: "",
  packageName: "",
  businessDescription: "",
  service: "",
  projectGoal: "",
  timeline: "Immediately",
  meetingDate: "",
  meetingTime: "",
  requirements: [],
  addons: [],
  notes: "",
};

const requiredByStep = {
  1: ["companyName", "industry", "fullName", "email", "phone"],
  2: ["service", "projectGoal", "timeline"],
  4: ["meetingDate", "meetingTime"],
};

function Field({ label, required, children }) {
  return (
    <label className="lets-field">
      <span>
        {label} {required && <strong>*</strong>}
      </span>
      {children}
    </label>
  );
}

function loadInitialForm(search = "") {
  let saved = null;
  try {
    const raw = localStorage.getItem("cf-lets-talk-progress");
    saved = raw ? JSON.parse(raw) : null;
  } catch {
    saved = null;
  }

  const params = new URLSearchParams(search);
  const packageName = params.get("package") || saved?.packageName || "";
  const service = params.get("service") || saved?.service || "";

  return {
    ...initialForm,
    ...(saved || {}),
    packageName,
    service,
    requirements: Array.isArray(saved?.requirements)
      ? saved.requirements
      : Array.isArray(saved?.features)
        ? saved.features
        : [],
    addons: Array.isArray(saved?.addons) ? saved.addons : [],
  };
}

function getMessage(form) {
  const requirements = form.requirements.length
    ? form.requirements.join(", ")
    : "None selected";
  const addons = form.addons.length ? form.addons.join(", ") : "None selected";
  return [
    "Hello Code Furnace, I would like to book a consultation.",
    `Name: ${form.fullName}`,
    `Company: ${form.companyName}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Industry: ${form.industry}`,
    `Service: ${form.service}`,
    `Package: ${form.packageName || "Not selected"}`,
    `Budget: ${form.budget || "Not selected"}`,
    `Timeline: ${form.timeline}`,
    `Meeting: ${form.meetingDate || "Date pending"} at ${form.meetingTime || "Time pending"}`,
    `Requirements: ${requirements}`,
    `Optional add-ons: ${addons}`,
    `Project goal: ${form.projectGoal}`,
    `Business: ${form.businessDescription || "Not provided"}`,
    `Notes: ${form.notes || "None"}`,
  ].join("\n");
}

export function QuoteBookingPage() {
  useSeo(
    "Let's Talk",
    "Book a Code Furnace consultation and share your project requirements.",
  );

  const location = useLocation();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(() => loadInitialForm(location.search));

  useEffect(() => {
    const next = loadInitialForm(location.search);
    setForm(next);
    localStorage.setItem("cf-lets-talk-progress", JSON.stringify(next));
  }, [location.search]);

  const message = useMemo(() => getMessage(form), [form]);
  const whatsappUrl = `https://wa.me/254143369440?text=${encodeURIComponent(message)}`;
  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=furnacecode@gmail.com&su=${encodeURIComponent(
    "Code Furnace consultation booking",
  )}&body=${encodeURIComponent(message)}`;

  const update = (key, value) => {
    const next = { ...form, [key]: value };
    setForm(next);
    localStorage.setItem("cf-lets-talk-progress", JSON.stringify(next));
  };

  const toggleFeature = (feature) => {
    update(
      "requirements",
      form.requirements.includes(feature)
        ? form.requirements.filter((item) => item !== feature)
        : [...form.requirements, feature],
    );
  };

  const toggleAddon = (addon) => {
    update(
      "addons",
      form.addons.includes(addon)
        ? form.addons.filter((item) => item !== addon)
        : [...form.addons, addon],
    );
  };

  const canContinue = () => {
    const required = requiredByStep[step] || [];
    return required.every((key) => String(form[key] || "").trim());
  };

  const nextStep = () => {
    if (!canContinue()) return;
    if (step === 4) {
      setSubmitted(true);
      setStep(5);
      localStorage.removeItem("cf-lets-talk-progress");
      return;
    }
    setStep((current) => Math.min(current + 1, 5));
  };

  return (
    <section className="section lets-talk-page" id="quote-booking">
      <div className="lets-talk-shell">
        <div className="lets-talk-grid">
          <aside className="lets-talk-sidebar">
            <p className="lets-pill">
              <span /> Let's Talk
            </p>
            <h1>
              Let's Build Something <span>Amazing Together.</span>
            </h1>
            <p className="lets-lead">
              Have a project in mind or need expert advice? Share your ideas
              with us and we'll get back to you within 24 hours.
            </p>

            <div className="lets-contact-card">
              <a className="lets-contact-item" href="tel:+254143369440">
                <span className="lets-icon">
                  <FiPhone />
                </span>
                <span>
                  <strong>Call Us</strong>
                  +254 143 369440
                </span>
              </a>
              <a
                className="lets-contact-item"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=furnacecode@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="lets-icon">
                  <FiMail />
                </span>
                <span>
                  <strong>Email Us</strong>
                  furnacecode@gmail.com
                </span>
              </a>
              <a
                className="lets-contact-item"
                href="https://www.google.com/maps/search/-1.099076,+35.861809"
                target="_blank"
                rel="noreferrer"
              >
                <span className="lets-icon">
                  <FiMapPin />
                </span>
                <span>
                  <strong>Our Location</strong>
                  Narok, Kenya
                </span>
              </a>
              <div className="lets-contact-item">
                <span className="lets-icon">
                  <FiClock />
                </span>
                <span>
                  <strong>Working Hours</strong>
                  Mon - Fri: 8:00 AM - 6:00 PM
                </span>
              </div>
            </div>

            <div className="lets-consult-card">
              <div className="lets-cube" aria-hidden="true">
                <FiBox />
              </div>
              <div>
                <h2>Not Sure Where to Start?</h2>
                <p>
                  Book a free consultation call with our experts and bring your
                  ideas to life.
                </p>
                <a className="lets-outline-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Schedule a Call <FiArrowRight />
                </a>
              </div>
            </div>
          </aside>

          <div className="lets-talk-main">
            <form className="lets-form-card" id="quote-booking-form">
              <div className="lets-steps" aria-label="Booking progress">
                {steps.map((label, index) => {
                  const number = index + 1;
                  const active = number <= step;
                  return (
                    <div className={active ? "lets-step active" : "lets-step"} key={label}>
                      <span>{number}</span>
                      <p>{label}</p>
                    </div>
                  );
                })}
              </div>

              {step === 1 && (
                <section className="lets-form-section">
                  <h2>Tell us about your business</h2>
                  <p>This helps us understand your needs better.</p>
                  <div className="lets-form-grid">
                    <Field label="Company Name" required>
                      <input
                        value={form.companyName}
                        onChange={(event) => update("companyName", event.target.value)}
                        placeholder="Enter your company name"
                      />
                    </Field>
                    <Field label="Industry / Sector" required>
                      <select
                        value={form.industry}
                        onChange={(event) => update("industry", event.target.value)}
                      >
                        <option value="">Select your industry</option>
                        {industryOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Your Name" required>
                      <input
                        value={form.fullName}
                        onChange={(event) => update("fullName", event.target.value)}
                        placeholder="Enter your full name"
                      />
                    </Field>
                    <Field label="Email Address" required>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(event) => update("email", event.target.value)}
                        placeholder="Enter your email address"
                      />
                    </Field>
                    <Field label="Phone Number" required>
                      <input
                        value={form.phone}
                        onChange={(event) => update("phone", event.target.value)}
                        placeholder="+254 700 000000"
                      />
                    </Field>
                  <Field label="Project Budget">
                    <select
                      value={form.budget}
                      onChange={(event) => update("budget", event.target.value)}
                    >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Package / Plan (Optional)">
                      <input
                        value={form.packageName}
                        onChange={(event) => update("packageName", event.target.value)}
                        placeholder="Starter Website, Standard Package, etc."
                      />
                    </Field>
                  </div>
                  <Field label="Describe your business">
                    <textarea
                      rows="4"
                      maxLength="500"
                      value={form.businessDescription}
                      onChange={(event) =>
                        update("businessDescription", event.target.value)
                      }
                      placeholder="Tell us about your company, goals, and what you do..."
                    />
                    <em>{form.businessDescription.length} / 500</em>
                  </Field>
                </section>
              )}

              {step === 2 && (
                <section className="lets-form-section">
                  <h2>Project details</h2>
                  <p>Tell us what you want to build and when you need it.</p>
                  <div className="lets-form-grid">
                    <Field label="Service Needed" required>
                      <select
                        value={form.service}
                        onChange={(event) => update("service", event.target.value)}
                      >
                        <option value="">Choose a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Timeline" required>
                      <select
                        value={form.timeline}
                        onChange={(event) => update("timeline", event.target.value)}
                      >
                        {timelineOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Project Goal" required>
                    <textarea
                      rows="5"
                      value={form.projectGoal}
                      onChange={(event) => update("projectGoal", event.target.value)}
                      placeholder="Describe the result you want from this project..."
                    />
                  </Field>
                </section>
              )}

              {step === 3 && (
                <section className="lets-form-section">
                  <h2>Requirements</h2>
                  <p>Select features you may need. We will confirm details on the call.</p>
                  <div className="lets-feature-grid">
                    {featureOptions.map((feature) => (
                      <label className="lets-feature" key={feature}>
                        <input
                          type="checkbox"
                          checked={form.requirements.includes(feature)}
                          onChange={() => toggleFeature(feature)}
                        />
                        <span>{feature}</span>
                      </label>
                    ))}
                  </div>
                  <Field label="Extra Notes">
                    <textarea
                      rows="4"
                      value={form.notes}
                      onChange={(event) => update("notes", event.target.value)}
                      placeholder="Any integrations, references, competitors, or special requirements?"
                    />
                  </Field>
                </section>
              )}

              {step === 4 && (
                <section className="lets-form-section">
                  <h2>Review & submit</h2>
                  <p>Choose a preferred consultation slot and confirm your request.</p>
                  <div className="lets-addon-section">
                    <h3>Optional add-ons</h3>
                    <p>
                      Select any extra features you want. You can leave this
                      empty if you only want the chosen package.
                    </p>
                    <div className="lets-feature-grid">
                      {optionalAddOns.map((item) => (
                        <label className="lets-feature" key={item.name}>
                          <input
                            type="checkbox"
                            checked={form.addons.includes(item.name)}
                            onChange={() => toggleAddon(item.name)}
                          />
                          <span>
                            {item.name}{" "}
                            <strong>(KES {item.price.toLocaleString()})</strong>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="lets-form-grid">
                    <Field label="Preferred Date" required>
                      <input
                        type="date"
                        value={form.meetingDate}
                        onChange={(event) => update("meetingDate", event.target.value)}
                      />
                    </Field>
                    <Field label="Preferred Time" required>
                      <input
                        type="time"
                        value={form.meetingTime}
                        onChange={(event) => update("meetingTime", event.target.value)}
                      />
                    </Field>
                  </div>
                  <div className="lets-review">
                    <p><strong>Client:</strong> {form.fullName || "Not added"}</p>
                    <p><strong>Company:</strong> {form.companyName || "Not added"}</p>
                    <p><strong>Service:</strong> {form.service || "Not selected"}</p>
                    <p><strong>Package:</strong> {form.packageName || "Not selected"}</p>
                    <p><strong>Budget:</strong> {form.budget || "Not selected"}</p>
                    <p><strong>Timeline:</strong> {form.timeline}</p>
                  </div>
                </section>
              )}

              {step === 5 && (
                <section className="lets-form-section lets-complete">
                  <FiCheckCircle />
                  <h2>{submitted ? "Booking request ready" : "Complete your booking"}</h2>
                  <p>
                    Send your booking details to Code Furnace on WhatsApp or
                    email so our team can confirm your consultation time.
                  </p>
                  <div className="lets-complete-actions">
                    <a className="lets-primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
                      <FiMessageCircle /> Send on WhatsApp
                    </a>
                    <a className="lets-outline-btn" href={emailUrl} target="_blank" rel="noreferrer">
                      <FiMail /> Send by Email
                    </a>
                  </div>
                </section>
              )}

              <div className="lets-form-footer">
                <button
                  className="lets-outline-btn"
                  type="button"
                  onClick={() => setStep((current) => Math.max(current - 1, 1))}
                  disabled={step === 1}
                >
                  <FiArrowLeft /> Back
                </button>
                <span>Step {step} of 5</span>
                {step < 5 ? (
                  <button
                    className="lets-primary-btn"
                    type="button"
                    onClick={nextStep}
                  >
                    {step === 4 ? "Submit Booking" : "Continue"} <FiArrowRight />
                  </button>
                ) : (
                  <button
                    className="lets-outline-btn"
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setForm(initialForm);
                      localStorage.removeItem("cf-lets-talk-progress");
                    }}
                  >
                    Start New Booking <FiSend />
                  </button>
                )}
              </div>
            </form>

            <div className="lets-stats">
              <div>
                <FiBox />
                <strong>120+</strong>
                <span>Projects Delivered</span>
              </div>
              <div>
                <FiHeart />
                <strong>98%</strong>
                <span>Client Satisfaction</span>
              </div>
              <div>
                <FiUsers />
                <strong>50+</strong>
                <span>Tech Experts</span>
              </div>
              <div>
                <FiStar />
                <strong>5+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
        <a className="lets-ai" href={whatsappUrl} target="_blank" rel="noreferrer">
          <FiMessageCircle /> Ask AI
        </a>
      </div>
    </section>
  );
}
