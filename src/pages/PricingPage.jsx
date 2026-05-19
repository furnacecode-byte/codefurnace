import { useMemo, useState } from "react";
import { SectionIntro } from "../components/common/Sections";
import {
  PricingCards,
  ComparisonTable,
} from "../components/pricing/PricingBlocks";
import { useSeo } from "../components/common/useSeo";

const tabs = ["Website", "Software", "Booking", "Mobile App", "AI Automation"];

const plans = {
  Website: [
    {
      name: "Basic Website Package",
      price: "$20/mo (KES 2,600/mo)",
      setup: "Setup: $99 / KES 12,900",
      features: [
        "Up to 5 pages",
        "Custom design",
        "Mobile responsive",
        "SEO optimized",
      ],
    },
    {
      name: "Standard Website Package",
      price: "$48/mo (KES 6,200/mo)",
      setup: "Setup: $149 / KES 19,400",
      recommended: true,
      features: [
        "Up to 10 pages",
        "Free domain",
        "Hosting + SSL",
        "5 email accounts",
      ],
    },
    {
      name: "Corporate Website Package",
      price: "$140/mo (KES 18,200/mo)",
      setup: "Setup: Scoped",
      features: [
        "50 pages",
        "Enterprise security",
        "High-performance optimization",
        "Corporate integrations",
      ],
    },
  ],
  Software: [
    {
      name: "Basic Software",
      price: "KES 150,000",
      setup: "One-time",
      features: ["Core module", "Dashboard", "Basic API"],
    },
    {
      name: "Standard Business Software",
      price: "KES 350,000",
      setup: "One-time",
      recommended: true,
      features: ["Multi-module", "Integrations", "Reporting"],
    },
    {
      name: "Enterprise Software",
      price: "From KES 3,500,000",
      setup: "Enterprise scope",
      features: ["Full architecture", "Enterprise tools", "Support SLA"],
    },
  ],
  Booking: [
    {
      name: "Basic Booking Package",
      price: "KES 30,000",
      setup: "One-time",
      features: ["Calendar", "Email confirmations", "Basic dashboard"],
    },
    {
      name: "Professional Booking Package",
      price: "KES 70,000",
      setup: "One-time",
      recommended: true,
      features: ["M-Pesa", "SMS reminders", "Client portal"],
    },
    {
      name: "Enterprise Booking Package",
      price: "KES 120,000",
      setup: "One-time",
      features: ["Staff management", "Admin analytics", "Automation tools"],
    },
  ],
  "Mobile App": [
    {
      name: "Basic Mobile App",
      price: "KES 100,000",
      setup: "One-time",
      features: ["Core screens", "API connection", "Deployment support"],
    },
    {
      name: "Professional Mobile App",
      price: "KES 500,000",
      setup: "One-time",
      recommended: true,
      features: ["Notifications", "Analytics", "Payment integrations"],
    },
    {
      name: "Enterprise Mobile Platform",
      price: "KES 2,000,000",
      setup: "Enterprise scope",
      features: [
        "Cross-platform suite",
        "Security systems",
        "Admin dashboards",
      ],
    },
  ],
  "AI Automation": [
    {
      name: "Basic AI Package",
      price: "KES 90,000",
      setup: "One-time",
      features: ["AI chatbot", "Basic workflow", "Lead capture"],
    },
    {
      name: "Advanced AI Package",
      price: "KES 450,000",
      setup: "One-time",
      recommended: true,
      features: ["AI agents", "Voice AI", "Workflow automation"],
    },
    {
      name: "Enterprise AI Package",
      price: "From KES 2,500,000",
      setup: "Enterprise scope",
      features: [
        "Multi-channel automation",
        "AI dashboards",
        "Staff onboarding",
      ],
    },
  ],
};

const matrix = {
  Website: [
    { feature: "Pages", starter: "5", growth: "10+", enterprise: "50" },
    {
      feature: "SEO",
      starter: "Basic",
      growth: "Advanced",
      enterprise: "Enterprise",
    },
    {
      feature: "Support",
      starter: "Standard",
      growth: "Priority",
      enterprise: "SLA",
    },
  ],
  Software: [
    { feature: "Modules", starter: "1", growth: "3+", enterprise: "Unlimited" },
    {
      feature: "Integrations",
      starter: "Basic",
      growth: "Advanced",
      enterprise: "Enterprise",
    },
    {
      feature: "Automation",
      starter: "Low",
      growth: "Medium",
      enterprise: "High",
    },
  ],
  Booking: [
    {
      feature: "Payments",
      starter: "Optional",
      growth: "M-Pesa",
      enterprise: "Multi-gateway",
    },
    {
      feature: "Reminders",
      starter: "Email",
      growth: "SMS+Email",
      enterprise: "Omnichannel",
    },
    {
      feature: "Users",
      starter: "Single team",
      growth: "Multi-team",
      enterprise: "Enterprise",
    },
  ],
  "Mobile App": [
    {
      feature: "Platforms",
      starter: "Android",
      growth: "Android+iOS",
      enterprise: "Cross-platform suite",
    },
    {
      feature: "Analytics",
      starter: "Basic",
      growth: "Advanced",
      enterprise: "Executive",
    },
    {
      feature: "Security",
      starter: "Standard",
      growth: "Enhanced",
      enterprise: "Enterprise",
    },
  ],
  "AI Automation": [
    {
      feature: "Channels",
      starter: "Web",
      growth: "Web+WhatsApp",
      enterprise: "Omnichannel",
    },
    {
      feature: "Agents",
      starter: "1",
      growth: "Multiple",
      enterprise: "Enterprise mesh",
    },
    {
      feature: "Insights",
      starter: "Weekly",
      growth: "Realtime",
      enterprise: "Executive",
    },
  ],
};

export function PricingPage() {
  useSeo(
    "Pricing",
    "Service package pricing, comparisons and plans for websites, software, mobile and AI.",
  );
  const [active, setActive] = useState("Website");
  const currentPlans = useMemo(() => plans[active], [active]);
  const rows = useMemo(() => matrix[active], [active]);

  return (
    <section className="section">
      <SectionIntro
        title="Pricing"
        text="Compare plans, pick your package, and launch with confidence."
      />
      <div className="row gap-sm wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={active === tab ? "btn btn-primary" : "btn btn-secondary"}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="section section-tight">
        <PricingCards plans={currentPlans} />
      </div>
      <ComparisonTable rows={rows} />
    </section>
  );
}
