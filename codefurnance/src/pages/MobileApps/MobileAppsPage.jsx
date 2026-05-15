import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate } from '../../components/common/ServicePageTemplate'
import { commonFaqs } from '../shared'

export function MobileAppsPage() {
  useSeo('Mobile App Development', 'Android, iOS and cross-platform mobile app engineering services.')
  return <ServicePageTemplate title="Mobile App Development" subtitle="Modern apps with seamless UX, backend APIs, and reliable deployment." features={[{ title: 'Android & iOS', text: 'Native-like performance and clean interface standards.' }, { title: 'Cross-Platform', text: 'Faster release cycles with unified architecture.' }, { title: 'Push Notifications', text: 'Engagement workflows, campaigns and behavioral triggers.' }, { title: 'API Integration', text: 'Secure auth and data sync with your core systems.' }]} plans={[{ name: 'Launch App', price: '$2,200', setup: 'Setup: $800', features: ['MVP screens', 'Core API', 'Store deployment'] }, { name: 'Growth App', price: '$5,800', setup: 'Setup: $1,600', recommended: true, features: ['Advanced UX', 'Analytics', 'Push automation'] }, { name: 'Enterprise App', price: 'Custom', setup: 'Setup: Scoped', features: ['Scalable architecture', 'Security hardening', 'Long-term support'] }]} comparison={[{ feature: 'Platforms', starter: '1', growth: '2', enterprise: '2+' }, { feature: 'APIs', starter: 'Basic', growth: 'Advanced', enterprise: 'Enterprise' }, { feature: 'Support', starter: '30 days', growth: '90 days', enterprise: 'SLA' }]} faqs={commonFaqs} />
}

