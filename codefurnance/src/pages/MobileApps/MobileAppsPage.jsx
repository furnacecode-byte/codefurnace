import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate, ServicePackagesTemplate } from '../../components/common/ServicePageTemplate'
import { QuoteRequestForm } from '../../components/common/QuoteRequestForm'
import { commonFaqs } from '../shared'

const features = [
  { title: 'Android Apps', text: 'High-performance business and consumer apps for Android ecosystems.' },
  { title: 'iOS Apps', text: 'Premium iOS experiences optimized for speed, UX, and reliability.' },
  { title: 'Cross-platform Apps', text: 'Unified architecture for faster releases and maintenance efficiency.' },
  { title: 'Business, Delivery & Booking Apps', text: 'Purpose-built mobile products connected to core operations.' },
]

const plans = [
  { name: 'Basic Mobile App', price: 'KES 100,000', setup: 'Timeline: 4-6 weeks', features: ['Core app screens', 'API integration', 'Basic security'] },
  { name: 'Standard Mobile App', price: 'KES 250,000', setup: 'Timeline: 6-8 weeks', recommended: true, features: ['Payments', 'Push notifications', 'Admin dashboard'] },
  { name: 'Professional Mobile App', price: 'KES 500,000', setup: 'Timeline: 8-12 weeks', features: ['Advanced analytics', 'Enhanced security', 'Automation hooks'] },
  { name: 'Advanced Mobile App', price: 'KES 950,000', setup: 'Timeline: 12-16 weeks', features: ['Enterprise APIs', 'Scalable architecture', 'Cross-platform support'] },
  { name: 'Enterprise Mobile Platform', price: 'KES 2,000,000', setup: 'Timeline: Enterprise phased rollout', features: ['Multi-app ecosystem', 'Operations dashboard', 'Governance and monitoring'] },
]

const comparison = [{ feature: 'Platforms', starter: 'Android', growth: 'Android + iOS', enterprise: 'Cross-platform suite' }, { feature: 'Integrations', starter: 'Basic API', growth: 'Payments + Analytics', enterprise: 'Enterprise integrations' }, { feature: 'Security', starter: 'Standard', growth: 'Enhanced', enterprise: 'Enterprise' }]

export function MobileAppsPage() {
  useSeo('Mobile App Development', 'Android, iOS, and cross-platform app development for growing businesses.')
  return <ServicePageTemplate title="Mobile App Development" subtitle="Modern mobile experiences that connect customers, teams, and operations." features={features} pricingRoute="/services/mobile-apps/packages" />
}

export function MobileAppsPackagesPage() {
  useSeo('Mobile App Packages', 'Mobile app package pricing and quote form.')
  return <ServicePackagesTemplate title="Mobile App Packages" subtitle="Choose a package then send us your requirements." plans={plans} comparison={comparison} faqs={commonFaqs} quoteForm={<QuoteRequestForm />} />
}

