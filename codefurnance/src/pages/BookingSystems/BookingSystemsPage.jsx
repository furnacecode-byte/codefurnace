import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate } from '../../components/common/ServicePageTemplate'
import { commonFaqs } from '../shared'

export function BookingSystemsPage() {
  useSeo('Booking Systems', 'Online booking systems with M-Pesa, reminders, and staff dashboards.')
  return <ServicePageTemplate title="Booking Systems Development" subtitle="Business-oriented booking flows that reduce manual work and increase attendance." features={[{ title: 'Online Appointments', text: 'Self-service booking with confirmation and calendar sync.' }, { title: 'M-Pesa Payments', text: 'Deposit and full-payment workflows integrated into booking.' }, { title: 'SMS Reminders', text: 'Automated reminders and reschedule notifications.' }, { title: 'Staff Dashboards', text: 'Role-based views for schedules, reporting and capacity.' }]} plans={[{ name: 'Starter Booking', price: '$900', setup: 'Setup: $300', features: ['Single location', 'Calendar', 'Basic reminders'] }, { name: 'Growth Booking', price: '$2,000', setup: 'Setup: $650', recommended: true, features: ['M-Pesa', 'Staff portal', 'Client dashboard'] }, { name: 'Enterprise Booking', price: 'Custom', setup: 'Setup: Scoped', features: ['Multi-branch', 'Advanced analytics', 'API integrations'] }]} comparison={[{ feature: 'Branches', starter: '1', growth: '3', enterprise: 'Unlimited' }, { feature: 'Payments', starter: 'Optional', growth: 'M-Pesa', enterprise: 'Multi-gateway' }, { feature: 'Reminders', starter: 'Email', growth: 'SMS + Email', enterprise: 'Omnichannel' }]} faqs={commonFaqs} />
}

