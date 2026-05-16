import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate, ServicePackagesTemplate } from '../../components/common/ServicePageTemplate'
import { QuoteRequestForm } from '../../components/common/QuoteRequestForm'
import { commonFaqs } from '../shared'

const features = [
  { title: 'Appointment Systems', text: 'Booking experiences for clinics, gyms, salons and consultation services.' },
  { title: 'Hotel & Reservation Systems', text: 'Availability, reservations, and customer confirmation workflows.' },
  { title: 'Payments & Reminders', text: 'M-Pesa integration, SMS reminders, and email confirmations.' },
  { title: 'Admin & Staff Tools', text: 'Booking calendar, client portal, and staff management dashboard.' },
]

const plans = [
  { name: 'Basic Package', price: 'KES 30,000', setup: 'Timeline: 1-2 weeks', features: ['Booking calendar', 'Email confirmations', 'Basic dashboard'] },
  { name: 'Standard Package', price: 'KES 55,000', setup: 'Timeline: 2-3 weeks', recommended: true, features: ['M-Pesa integration', 'SMS reminders', 'Client portal'] },
  { name: 'Professional Package', price: 'KES 70,000', setup: 'Timeline: 3-4 weeks', features: ['Admin dashboard', 'Staff management', 'Automation workflows'] },
  { name: 'Enterprise Package', price: 'KES 120,000', setup: 'Timeline: 4-6 weeks', features: ['Advanced analytics', 'Multi-branch setup', 'Priority support'] },
]

const comparison = [{ feature: 'Payments', starter: 'Optional', growth: 'M-Pesa', enterprise: 'Multi-gateway' }, { feature: 'Reminders', starter: 'Email', growth: 'SMS+Email', enterprise: 'Omnichannel' }, { feature: 'Users', starter: 'Single team', growth: 'Multi-team', enterprise: 'Enterprise' }]

export function BookingSystemsPage() {
  useSeo('Booking Systems', 'Appointment and reservation systems with M-Pesa, reminders and dashboards.')
  return <ServicePageTemplate title="Booking Systems" subtitle="Smart booking platforms for service businesses and high-volume operations." features={features} pricingRoute="/services/booking-systems/packages" />
}

export function BookingSystemsPackagesPage() {
  useSeo('Booking Packages', 'Booking systems package pricing and quote form.')
  return <ServicePackagesTemplate title="Booking System Packages" subtitle="Choose a package then send us your requirements." plans={plans} comparison={comparison} faqs={commonFaqs} quoteForm={<QuoteRequestForm />} />
}

