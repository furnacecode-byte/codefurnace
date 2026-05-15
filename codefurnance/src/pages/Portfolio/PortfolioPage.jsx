import { SectionIntro, FeatureGrid } from '../../components/common/Sections'
import { useSeo } from '../../components/common/useSeo'

export function PortfolioPage() {
  useSeo('Portfolio', 'Selected website, app, AI, booking and dashboard projects by Code Furnace.')
  return <section className="section"><SectionIntro title="Recent Projects" text="Websites, apps, booking platforms and AI systems." /><FeatureGrid items={[{ title: 'AfriCo Safari Platform', text: 'Travel website with itinerary booking and payment flow.' }, { title: 'FitLife Gym System', text: 'Membership app with attendance and subscription management.' }, { title: 'SmartPOS Dashboard', text: 'Retail analytics, role-based access, and reporting automation.' }, { title: 'MediBook Appointments', text: 'Healthcare bookings with SMS reminders and client portal.' }]} /></section>
}

