const KNOWLEDGE_BASE = [
  {
    id: "pricing",
    keywords: ["pricing", "price", "cost", "package", "plans", "rates", "budget"],
    phrases: ["how much", "pricing plans", "service cost", "package cost"],
    response:
      "You can compare all Code Furnace packages on the pricing page, including website, software, booking, mobile app, and AI plans.",
    link: "/pricing#pricing-packages",
    action: "navigate",
  },
  {
    id: "services",
    keywords: ["services", "solutions", "offer", "what do you do"],
    phrases: ["our services", "what services", "service list"],
    response:
      "You can explore our full service lineup, including web development, mobile apps, software, booking systems, and AI automation.",
    link: "/services#solutions",
    action: "navigate",
  },
  {
    id: "ai-automation",
    keywords: ["ai", "automation", "agent", "chatbot", "workflow", "intelligent"],
    phrases: ["ai automation", "ai services", "automation services"],
    response:
      "Code Furnace provides AI chatbots, workflow automation, AI agents, and business intelligence systems.",
    link: "/services/ai-automation#service-packages",
    action: "navigate",
  },
  {
    id: "mobile-apps",
    keywords: ["mobile", "app", "android", "ios", "react native", "flutter"],
    phrases: ["mobile app development", "build an app"],
    response:
      "Our mobile team builds Android, iOS, and cross-platform apps with secure integrations and scalable architecture.",
    link: "/services/mobile-apps#service-packages",
    action: "navigate",
  },
  {
    id: "web-development",
    keywords: ["website", "web", "frontend", "landing page"],
    phrases: ["web development", "website development"],
    response:
      "We build fast, secure, and conversion-focused websites and web applications.",
    link: "/services/web-development#service-packages",
    action: "navigate",
  },
  {
    id: "software",
    keywords: ["software", "saas", "erp", "crm", "system"],
    phrases: ["software development", "custom software"],
    response:
      "Code Furnace develops custom software platforms, SaaS products, and ERP/CRM systems tailored to business workflows.",
    link: "/services/software-development#service-packages",
    action: "navigate",
  },
  {
    id: "booking",
    keywords: ["booking", "appointments", "reservation", "calendar"],
    phrases: ["booking system", "appointment system"],
    response:
      "We build booking systems with calendar workflows, reminders, payments, and admin dashboards.",
    link: "/services/booking-systems#service-packages",
    action: "navigate",
  },
  {
    id: "projects",
    keywords: ["project", "portfolio", "case study", "work"],
    phrases: ["our projects", "past work"],
    response:
      "You can review our recent digital product and software projects on the projects page.",
    link: "/projects#projects-list",
    action: "navigate",
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "email", "location", "whatsapp", "reach"],
    phrases: ["contact us", "how to reach", "talk to team"],
    response:
      "You can contact Code Furnace by email, phone, or the contact form.",
    link: "/contact#contact-form",
    action: "navigate",
  },
  {
    id: "quote",
    keywords: ["quote", "consultation", "book", "booking", "inquiry", "estimate"],
    phrases: ["book consultation", "request quote", "project inquiry"],
    response:
      "You can submit your requirements through our quote booking flow and our team will follow up.",
    link: "/quote-booking#quote-booking-form",
    action: "navigate",
  },
  {
    id: "faq",
    keywords: ["faq", "question", "support", "timeline", "revisions"],
    phrases: ["frequently asked", "common questions"],
    response:
      "You can find common answers on timelines, support, hosting, and payments in our FAQ section.",
    link: "/faq#faq-section",
    action: "navigate",
  },
  {
    id: "careers",
    keywords: ["careers", "jobs", "hiring", "vacancy", "role"],
    phrases: ["join your team", "open positions"],
    response:
      "You can view current Code Furnace career opportunities on the careers page.",
    link: "/careers#open-roles",
    action: "navigate",
  },
  {
    id: "about",
    keywords: ["about", "company", "mission", "vision", "team"],
    phrases: ["about code furnace", "who are you"],
    response:
      "The about page covers our mission, vision, delivery standards, and technology approach.",
    link: "/about#about-company",
    action: "navigate",
  },
];

export const QUICK_ACTIONS = [
  { label: "View Pricing", link: "/pricing#pricing-packages" },
  { label: "Contact Us", link: "/contact#contact-form" },
  { label: "Our Services", link: "/services#solutions" },
  { label: "Book Consultation", link: "/quote-booking#quote-booking-form" },
  { label: "AI Automation", link: "/services/ai-automation#service-packages" },
  { label: "Mobile Apps", link: "/services/mobile-apps#service-packages" },
];

export default KNOWLEDGE_BASE;
