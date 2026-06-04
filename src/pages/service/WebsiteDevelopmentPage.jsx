import { useSeo } from "../../components/common/useSeo";
import {
  ServicePageTemplate,
  ServicePackagesTemplate,
} from "../../components/common/ServicePageTemplate";
import { QuoteRequestForm } from "../../components/common/QuoteRequestForm";
import { commonFaqs } from "../shared";

const features = [
  {
    title: "Responsive web design",
    text: "Optimized layouts that adapt perfectly across mobile, tablet, and desktop devices.",
  },
  {
    title: "E-commerce integration",
    text: "Product catalogs, secure checkout flows, and payment-ready commerce architecture.",
  },
  {
    title: "Landing pages",
    text: "Conversion-driven pages for campaigns, offers, launches, and lead acquisition.",
  },
  {
    title: "SEO-ready architecture",
    text: "Technical SEO structure with optimized headings, metadata, and crawl readiness.",
  },
  {
    title: "Fast loading optimization",
    text: "Performance tuning for speed, engagement, and improved ranking potential.",
  },
  {
    title: "Admin dashboards",
    text: "Manage content, users, inquiries, and site updates from a clear control panel.",
  },
  {
    title: "CMS integration",
    text: "Easy content publishing workflows for blogs, services, and business updates.",
  },
  {
    title: "Modern UI/UX systems",
    text: "Premium visual systems designed to build trust and increase user action.",
  },
];

const oneTimePlans = [
  {
    name: "Starter Website ",
    price: "KES 25,000",
    setup: "Best for personal brands, startups, and small businesses.",
    ctaLabel: "Get Started",
    features: [
      "Up to 5 Pages",
      "Modern Custom Design",
      "Mobile Responsive Layout",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO Setup",
      "Google Maps Integration",
      "SSL Certificate Setup",
      "Social Media Integration",
      "30 Days Support",
      "Delivery 5-7 Days",
    ],
  },
  {
    name: "Standard Website ",
    price: "KES 55,000",
    setup: "Best balance for growing businesses.",
    recommended: true,
    ctaLabel: "Choose Standard",
    features: [
      "Up to 10 Pages",
      "Premium UI/UX Design",
      "Blog / News Section",
      "Contact Forms (Advanced)",
      "WhatsApp + Live Chat Integration",
      "SEO Optimization",
      "Google Analytics Setup",
      "Speed Optimization",
      "Domain Setup Support",
      "SSL Certificate",
      "Basic CMS Integration",
      "Email Setup (up to 5 accounts)",
      "60 Days Support",
      "Delivery 7-14 Days",
    ],
  },
  {
    name: "Business Website ",
    price: "KES 85,000",
    setup: "For businesses scaling operations and visibility.",
    ctaLabel: "Upgrade Business",
    features: [
      "Up to 15 Pages",
      "Advanced UI/UX Design",
      "CMS (Content Management System)",
      "Blog System",
      "Lead Capture Forms",
      "SEO Advanced Setup",
      "WhatsApp + Chatbot Integration",
      "Analytics Dashboard",
      "Marketing Integration Tools",
      "API Integrations (Basic)",
      "Performance Optimization",
      "90 Days Support",
      "Delivery 10-18 Days",
    ],
  },
  {
    name: "Corporate Website ",
    price: "KES 120,000",
    setup: "For established companies and organizations.",
    ctaLabel: "Go Corporate",
    features: [
      "Up to 20 Pages",
      "Enterprise-Level UI/UX Design",
      "Admin Dashboard",
      "CRM Integration (Basic)",
      "Staff / Team Management Pages",
      "Client Portal (Basic)",
      "Advanced SEO Strategy",
      "Automation Tools Integration",
      "Security Hardening",
      "Analytics & Reporting System",
      "Priority Support (120 Days)",
      "Delivery 14-25 Days",
    ],
  },
  {
    name: "Enterprise Website ",
    price: "KES 180,000+ (Custom Quote)",
    setup: "For large platforms, SaaS systems, and enterprise solutions.",
    ctaLabel: "Request Consultation",
    features: [
      "25+ Pages (Unlimited Scaling)",
      "Fully Custom Architecture",
      "SaaS / Platform Development",
      "Advanced CRM / ERP Integration",
      "Multi-role Access System",
      "API Ecosystem Integration",
      "Custom Dashboards",
      "Advanced Security Layer",
      "Cloud Deployment Setup",
      "Performance Scaling Optimization",
      "Dedicated Project Manager",
      "Training & Documentation",
      "Ongoing Priority Support",
    ],
  },
];

const monthlyPlans = [
  {
    name: "Basic Website Package",
    price: "$20/mo | KES 2,600/mo",
    setup: "Setup Fee: $99 / KES 12,900",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Mobile responsive",
      "SEO optimized",
      "Hosting included",
      "SSL certificate",
      "Social media integration",
      "Google Maps",
      "Business profile setup",
      "Basic chatbot",
    ],
  },
  {
    name: "Standard Website Package",
    price: "$48/mo | KES 6,200/mo",
    setup: "Setup Fee: $149 / KES 19,400",
    recommended: true,
    features: [
      "Up to 10 pages",
      "Free domain",
      "Hosting included",
      "SSL",
      "5 email accounts",
      "SEO",
      "Client portal",
      "Chatbot",
      "3 revisions",
    ],
  },
  {
    name: "Advanced Website Package",
    price: "$65/mo | KES 8,500/mo",
    setup: "Setup Fee: Scoped",
    features: [
      "15 pages",
      "Marketing support",
      "SEO",
      "Hosting",
      "Client portal",
      "Business integrations",
    ],
  },
  {
    name: "Professional Website Package",
    price: "$85/mo | KES 11,100/mo",
    setup: "Setup Fee: Scoped",
    features: [
      "20 pages",
      "Admin dashboard",
      "Marketing tools",
      "Advanced SEO",
      "Client management tools",
    ],
  },
  {
    name: "Business Website Package",
    price: "$120/mo | KES 15,600/mo",
    setup: "Setup Fee: Scoped",
    features: [
      "40 pages",
      "Enterprise customization",
      "Multi-language",
      "Priority support",
      "Advanced dashboards",
    ],
  },
  {
    name: "Corporate Website Package",
    price: "$140/mo | KES 18,200/mo",
    setup: "Setup Fee: Scoped",
    features: [
      "50 pages",
      "Enterprise-grade security",
      "High-performance optimization",
      "Corporate integrations",
    ],
  },
];

const pricingModes = {
  oneTime: {
    label: "One-Time Payment",
    title: "One-Time Website Packages",
    text: "Pay once and own your website, with included support for the launch period.",
    plans: oneTimePlans,
  },
  subscription: {
    label: "Monthly Subscription",
    title: "Monthly Subscription Packages",
    text: "Keep your website hosted, maintained, updated, and monitored every month.",
    plans: monthlyPlans.slice(0, 4),
  },
};

export function WebsiteDevelopmentPage() {
  useSeo(
    "Web Design & Development",
    "Professional websites that build trust and drive growth.",
  );

  return (
    <>
      <ServicePageTemplate
        title="Professional Websites That Build Trust & Drive Growth"
        subtitle="Build high-converting websites, e-commerce platforms, landing pages, portfolios, and scalable SaaS applications designed for performance, user engagement, and business growth."
        features={features}
        showPricingButton={false}
      />
      <ServicePackagesTemplate
        title="Website Pricing Packages"
        subtitle="Choose a one-time website build or a monthly managed plan that fits your business."
        pricingModes={pricingModes}
        defaultMode="oneTime"
        faqs={commonFaqs}
        quoteForm={<QuoteRequestForm plans={[...oneTimePlans, ...monthlyPlans]} />}
      />
    </>
  );
}
