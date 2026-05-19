import { useSeo } from "../../components/common/useSeo";
import {
  ServicePageTemplate,
  ServicePackagesTemplate,
} from "../../components/common/ServicePageTemplate";
import { QuoteRequestForm } from "../../components/common/QuoteRequestForm";
import { commonFaqs } from "../shared";

const features = [
  {
    title: "Appointment scheduling",
    text: "Automated appointment setup for service teams and customers.",
  },
  {
    title: "Reservation management",
    text: "Reliable reservation workflows for hotels, restaurants, and events.",
  },
  {
    title: "SMS/email reminders",
    text: "Automated reminders that reduce no-shows and missed bookings.",
  },
  {
    title: "Payment integration",
    text: "M-Pesa and online payment support for frictionless booking checkout.",
  },
  {
    title: "Calendar syncing",
    text: "Real-time schedule synchronization across calendars and teams.",
  },
  {
    title: "Admin analytics",
    text: "Dashboard insights on bookings, cancellations, and peak demand hours.",
  },
  {
    title: "Customer management",
    text: "Track customer records, preferences, and booking history.",
  },
  {
    title: "Multi-location support",
    text: "Operate branches and location-based schedules from one system.",
  },
];

const plans = [
  {
    name: "Basic Package",
    price: "KES 30,000",
    setup: "Timeline: 1-2 weeks",
    features: ["Booking calendar", "Email confirmations", "Basic dashboard"],
  },
  {
    name: "Standard Package",
    price: "KES 55,000",
    setup: "Timeline: 2-3 weeks",
    recommended: true,
    features: ["M-Pesa integration", "SMS reminders", "Client portal"],
  },
  {
    name: "Professional Package",
    price: "KES 70,000",
    setup: "Timeline: 3-4 weeks",
    features: ["Admin dashboard", "Staff management", "Automation workflows"],
  },
  {
    name: "Enterprise Package",
    price: "KES 120,000",
    setup: "Timeline: 4-6 weeks",
    features: ["Advanced analytics", "Multi-branch setup", "Priority support"],
  },
];

const comparison = [
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
];

export function BookingSystemsPage() {
  useSeo(
    "Booking Systems",
    "Appointment and reservation systems with M-Pesa, reminders and dashboards.",
  );

  return (
    <>
      <ServicePageTemplate
        title="Booking Systems"
        subtitle="Smart appointment and reservation systems for hotels, clinics, salons, gyms, restaurants, and service-based businesses with automated scheduling and notifications."
        features={features}
        showPricingButton={false}
      />
      <ServicePackagesTemplate
        title="Booking System Packages"
        subtitle="Choose a package then send us your requirements."
        plans={plans}
        comparison={comparison}
        faqs={commonFaqs}
        quoteForm={<QuoteRequestForm plans={plans} />}
      />
    </>
  );
}


