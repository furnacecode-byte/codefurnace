import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate, ServicePackagesTemplate } from '../../components/common/ServicePageTemplate'
import { QuoteRequestForm } from '../../components/common/QuoteRequestForm'
import { commonFaqs } from '../shared'

const features = [{ title: 'SaaS Platforms', text: 'Subscription-ready products with billing and user roles.' }, { title: 'CRM & ERP', text: 'Business process tools mapped to your operations.' }, { title: 'API Integrations', text: 'Connect payments, finance, logistics and third-party data.' }, { title: 'Security & Roles', text: 'Fine-grained access control and secure audit logs.' }]
const plans = [{ name: 'MVP Build', price: '$2,500', setup: 'Setup: $1,000', features: ['Core workflows', 'Admin dashboard', 'Documentation'] }, { name: 'Business Suite', price: '$6,500', setup: 'Setup: $2,000', recommended: true, features: ['Multiple modules', 'Integration layer', 'Role control'] }, { name: 'Enterprise Program', price: 'Custom', setup: 'Setup: Scoped', features: ['SLA support', 'Data migration', 'Compliance alignment'] }]
const comparison = [{ feature: 'Timeline', starter: '4-6 weeks', growth: '8-12 weeks', enterprise: 'Phased' }, { feature: 'Integrations', starter: '2', growth: '6', enterprise: 'Unlimited' }, { feature: 'Dashboards', starter: '1', growth: '3', enterprise: 'Custom' }]

export function SoftwareDevelopmentPage() {
  useSeo('Software Development', 'Custom software, SaaS, ERP and CRM development for enterprises.')
  return <ServicePageTemplate title="Software Development" subtitle="Enterprise-grade systems built for workflow, security and scale." features={features} pricingRoute="/services/software-development/packages" />
}

export function SoftwareDevelopmentPackagesPage() {
  useSeo('Software Packages', 'Software development package pricing and quote form.')
  return <ServicePackagesTemplate title="Software Development Packages" subtitle="Choose a package then send us your requirements." plans={plans} comparison={comparison} faqs={commonFaqs} quoteForm={<QuoteRequestForm />} />
}

