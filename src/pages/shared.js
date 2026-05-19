import {
  FiCode,
  FiCpu,
  FiCalendar,
  FiSmartphone,
  FiZap,
  FiLayers,
  FiSearch,
  FiMessageSquare,
  FiCloud,
  FiDatabase,
} from "react-icons/fi";

export const serviceOverviewCards = [
  {
    title: "Website Design & Development",
    text: "Build high-converting websites, e-commerce platforms, landing pages, portfolios, and scalable SaaS applications designed for performance, user engagement, and business growth.",
    link: "/services/web-development",
    icon: FiCode,
  },
  {
    title: "Software Development",
    text: "Custom business software including ERP systems, POS systems, CRM platforms, hospital management systems, school portals, inventory systems, and enterprise SaaS solutions.",
    link: "/services/software-development",
    icon: FiCpu,
  },
  {
    title: "Booking Systems",
    text: "Smart appointment and reservation systems for hotels, clinics, salons, gyms, restaurants, and service-based businesses with automated scheduling and notifications.",
    link: "/services/booking-systems",
    icon: FiCalendar,
  },
  {
    title: "Mobile App Development",
    text: "Professional Android, iOS, and cross-platform mobile applications with secure APIs, modern interfaces, and scalable backend architecture.",
    link: "/services/mobile-apps",
    icon: FiSmartphone,
  },
];

export const extendedServiceCards = [
  ...serviceOverviewCards,
  {
    title: "Digital Branding",
    text: "Build strong digital identities with strategic branding, logo systems, social kits, visual assets, and market-ready brand experiences.",
    link: "/quote-booking",
    icon: FiLayers,
  },
  {
    title: "SEO & Optimization",
    text: "Improve search rankings, speed performance, technical SEO, and conversion optimization for maximum online visibility and business growth.",
    link: "/quote-booking",
    icon: FiSearch,
  },
  {
    title: "WhatsApp Automation",
    text: "Automate customer communication, lead capture, support systems, and sales workflows directly on WhatsApp using intelligent automation.",
    link: "/quote-booking",
    icon: FiMessageSquare,
  },

];

export const companyStats = [
  { value: "120+", label: "Projects Completed" },
  { value: "80+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Team Members" },
];

export const processSteps = [
  "Discovery",
  "Planning",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Support",
];

export const commonFaqs = [
  {
    q: "How long does a project take?",
    a: "Typical delivery ranges from 2 weeks to 12 weeks depending on scope and integrations.",
  },
  {
    q: "Do you offer maintenance?",
    a: "Yes. We provide SLA-backed support, updates, and security monitoring options.",
  },
  {
    q: "Can you integrate AI and M-Pesa?",
    a: "Yes. We implement tailored integrations for AI workflows and local payment systems.",
  },
  {
    q: "Do you serve businesses outside Narok?",
    a: "Yes. We work with teams across Kenya and East Africa through remote and hybrid delivery.",
  },
];
