import { useSeo } from "../../components/common/useSeo";
import {
  ServicePageTemplate,
  ServicePackagesTemplate,
} from "../../components/common/ServicePageTemplate";
import { QuoteRequestForm } from "../../components/common/QuoteRequestForm";
import { commonFaqs } from "../shared";

const features = [
  {
    title: "Android apps",
    text: "Native-quality Android applications for business and customer use cases.",
  },
  {
    title: "iOS apps",
    text: "Polished iOS apps engineered for smooth performance and reliability.",
  },
  {
    title: "Flutter development",
    text: "Cross-platform delivery with efficient code reuse and fast rollout.",
  },
  {
    title: "React Native apps",
    text: "Scalable mobile architecture with modern UI and backend connectivity.",
  },
  {
    title: "API integration",
    text: "Secure backend integrations for data, payments, and business systems.",
  },
  {
    title: "Push notifications",
    text: "Engagement messaging and event-driven updates to users.",
  },
  {
    title: "Real-time systems",
    text: "Live sync features for orders, chats, bookings, and status updates.",
  },
  {
    title: "App store deployment",
    text: "Professional release support for Google Play and Apple App Store.",
  },
];

const plans = [
  {
    name: "Basic Mobile App",
    price: "KES 100,000",
    setup: "Timeline: 4-6 weeks",
    features: ["Core app screens", "API integration", "Basic security"],
  },
  {
    name: "Standard Mobile App",
    price: "KES 250,000",
    setup: "Timeline: 6-8 weeks",
    recommended: true,
    features: ["Payments", "Push notifications", "Admin dashboard"],
  },
  {
    name: "Professional Mobile App",
    price: "KES 500,000",
    setup: "Timeline: 8-12 weeks",
    features: ["Advanced analytics", "Enhanced security", "Automation hooks"],
  },
  {
    name: "Advanced Mobile App",
    price: "KES 950,000",
    setup: "Timeline: 12-16 weeks",
    features: [
      "Enterprise APIs",
      "Scalable architecture",
      "Cross-platform support",
    ],
  },
  {
    name: "Enterprise Mobile Platform",
    price: "KES 2,000,000",
    setup: "Timeline: Enterprise phased rollout",
    features: [
      "Multi-app ecosystem",
      "Operations dashboard",
      "Governance and monitoring",
    ],
  },
];

const comparison = [
  {
    feature: "Platforms",
    starter: "Android",
    growth: "Android + iOS",
    enterprise: "Cross-platform suite",
  },
  {
    feature: "Integrations",
    starter: "Basic API",
    growth: "Payments + Analytics",
    enterprise: "Enterprise integrations",
  },
  {
    feature: "Security",
    starter: "Standard",
    growth: "Enhanced",
    enterprise: "Enterprise",
  },
];

export function MobileAppsPage() {
  useSeo(
    "Mobile App Development",
    "Android, iOS, and cross-platform app development for growing businesses.",
  );

  return (
    <>
      <ServicePageTemplate
        title="Mobile App Development"
        subtitle="Professional Android, iOS, and cross-platform mobile applications with secure APIs, modern interfaces, and scalable backend architecture."
        features={features}
        showPricingButton={false}
      />
      <ServicePackagesTemplate
        title="Mobile App Packages"
        subtitle="Choose a package then send us your requirements."
        plans={plans}
        comparison={comparison}
        faqs={commonFaqs}
        quoteForm={<QuoteRequestForm plans={plans} />}
      />
    </>
  );
}


