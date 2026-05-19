import { useMemo, useState } from "react";
import {
  FiBriefcase,
  FiTarget,
  FiGrid,
  FiClock,
  FiMapPin,
  FiUser,
  FiSend,
  FiMessageCircle,
  FiMail,
} from "react-icons/fi";

const addOns = [
  { name: "M-Pesa integration", price: 15000, aliases: ["m-pesa", "payments"] },
  {
    name: "Client login system",
    price: 12000,
    aliases: ["client portal", "client login"],
  },
  {
    name: "Management dashboard",
    price: 18000,
    aliases: ["dashboard", "admin dashboard", "management dashboard"],
  },
  {
    name: "Email automation",
    price: 10000,
    aliases: ["email automation"],
  },
  {
    name: "Analytics dashboard",
    price: 16000,
    aliases: ["analytics", "advanced analytics", "insights panel"],
  },
  { name: "Training session", price: 8000, aliases: ["training"] },
  {
    name: "Card / online payment gateway",
    price: 18000,
    aliases: ["payment gateway", "online payment", "payments"],
  },
  { name: "Booking system", price: 25000, aliases: ["booking"] },
  {
    name: "Login system",
    price: 10000,
    aliases: ["authentication", "login"],
  },
  {
    name: "Employee management",
    price: 20000,
    aliases: ["staff management", "employee management"],
  },
  {
    name: "Digital marketing",
    price: 22000,
    aliases: ["marketing support", "marketing tools", "digital marketing"],
  },
  { name: "Branding services", price: 25000, aliases: ["branding"] },
  { name: "SEO setup", price: 12000, aliases: ["seo", "seo optimized"] },
  {
    name: "WhatsApp automation",
    price: 18000,
    aliases: ["whatsapp automation"],
  },
];

const formatKes = (value) => `KES ${value.toLocaleString()}`;

const parseKesPrice = (priceText = "") => {
  const match = priceText.match(/KES\s*([\d,]+)/i);
  return match ? Number(match[1].replace(/,/g, "")) : 0;
};

const getIncludedAddOns = (plan) => {
  const featureText = (plan?.features || []).join(" ").toLowerCase();
  const included = new Set();
  addOns.forEach((addon) => {
    if (addon.aliases.some((alias) => featureText.includes(alias.toLowerCase()))) {
      included.add(addon.name);
    }
  });
  return included;
};

export function QuoteRequestForm({ plans = [] }) {
  const [selectedPlanName, setSelectedPlanName] = useState(plans[0]?.name || "");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.name === selectedPlanName) || null,
    [plans, selectedPlanName],
  );
  const basePrice = parseKesPrice(selectedPlan?.price);
  const includedAddOns = getIncludedAddOns(selectedPlan);
  const billableAddOns = selectedAddOns.filter(
    (name) => !includedAddOns.has(name),
  );
  const addOnTotal = billableAddOns.reduce((sum, name) => {
    const addon = addOns.find((item) => item.name === name);
    return sum + (addon?.price || 0);
  }, 0);
  const estimatedTotal = basePrice + addOnTotal;

  const toggleAddOn = (name) => {
    setSelectedAddOns((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  };

  return (
    <form className="card quote-form">
      <h2>Get A Quote</h2>
      <p>Fill in your details and reach out to us.</p>
      <section className="quote-step">
        <h3>Select Package</h3>
        <select
          value={selectedPlanName}
          onChange={(e) => setSelectedPlanName(e.target.value)}
        >
          <option value="">Select package</option>
          {plans.map((plan) => (
            <option key={plan.name} value={plan.name}>
              {plan.name} ({plan.price})
            </option>
          ))}
        </select>
        <p>
          <strong>Current package:</strong>{" "}
          {selectedPlan ? `${selectedPlan.name} (${selectedPlan.price})` : "Not selected"}
        </p>
      </section>

      <section className="quote-step">
        <h3>
          <FiBriefcase /> 01 Business information
        </h3>
        <input placeholder="Company name" />
        <input placeholder="Industry / sector (Hotel, clinic, school, shop...)" />
        <textarea
          rows="4"
          placeholder="Describe your business and what you sell"
        />
      </section>

      <section className="quote-step">
        <h3>
          <FiTarget /> 02 Your need
        </h3>
        <input placeholder="What do you need right now? (website, booking system, mobile app...)" />
        <select defaultValue="">
          <option value="" disabled>
            Main goal
          </option>
          <option>Sales growth</option>
          <option>Automation</option>
          <option>Lead generation</option>
          <option>Brand visibility</option>
        </select>
        <select defaultValue="No">
          <option>No</option>
          <option>Yes</option>
        </select>
        <input placeholder="If yes, paste the link and what is not working" />
      </section>

      <section className="quote-step">
        <h3>
          <FiGrid /> 03 Add-ons you may need
        </h3>
        <p>
          Select extra features. If an add-on is already in your selected package,
          it will not be charged again.
        </p>
        <div className="addons-grid">
          {addOns.map((item) => (
            <label key={item.name} className="addon-item">
              <input
                type="checkbox"
                checked={selectedAddOns.includes(item.name)}
                onChange={() => toggleAddOn(item.name)}
              />{" "}
              {item.name} ({formatKes(item.price)})
              {includedAddOns.has(item.name) && selectedPlan ? " - Included" : ""}
            </label>
          ))}
        </div>
        <div className="card" style={{ marginTop: "0.75rem" }}>
          <p>
            <strong>Selected package:</strong> {selectedPlan?.name || "Not selected"}
          </p>
          <p>
            <strong>Base package price:</strong>{" "}
            {basePrice ? formatKes(basePrice) : "N/A"}
          </p>
          <p>
            <strong>Billable add-ons:</strong> {billableAddOns.length} ({formatKes(addOnTotal)})
          </p>
          <p>
            <strong>Estimated total:</strong>{" "}
            {basePrice ? formatKes(estimatedTotal) : "Select a package first"}
          </p>
        </div>
      </section>

      <section className="quote-step">
        <h3>
          <FiClock /> 04 Timeline and budget
        </h3>
        <select defaultValue="Immediately">
          <option>Immediately</option>
          <option>Within 1 month</option>
          <option>1-3 months</option>
          <option>Flexible</option>
        </select>
        <select defaultValue="">
          <option value="" disabled>
            Estimated budget
          </option>
          <option>Under $1,000</option>
          <option>$1,000 - $5,000</option>
          <option>$5,000 - $15,000</option>
          <option>$15,000+</option>
        </select>
      </section>

      <section className="quote-step">
        <h3>
          <FiMapPin /> 05 Location and contact
        </h3>
        <input placeholder="City of operation" />
        <select defaultValue="WhatsApp">
          <option>WhatsApp</option>
          <option>Phone call</option>
          <option>Email</option>
        </select>
      </section>

      <section className="quote-step">
        <h3>
          <FiUser /> 06 Your details
        </h3>
        <input placeholder="Full name" />
        <input placeholder="WhatsApp number (+254...)" />
        <input type="email" placeholder="Email" />
        <select defaultValue="Yes">
          <option>Yes</option>
          <option>No</option>
        </select>
      </section>

      <div className="row gap-sm">
        <button className="btn btn-primary" type="submit">
          <FiSend /> Click to send
        </button>
        <button className="btn btn-secondary" type="button">
          <FiMessageCircle /> Talk to us now
        </button>
        <button className="btn btn-secondary" type="button">
          <FiMail /> Send by email instead
        </button>
      </div>
    </form>
  );
}
