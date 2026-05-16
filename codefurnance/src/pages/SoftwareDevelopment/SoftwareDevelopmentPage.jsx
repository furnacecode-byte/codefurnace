import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate, ServicePackagesTemplate } from '../../components/common/ServicePageTemplate'
import { QuoteRequestForm } from '../../components/common/QuoteRequestForm'
import { commonFaqs } from '../shared'

const features = [
  { title: 'ERP Systems', text: 'Integrated enterprise systems for planning, operations, and reporting.' },
  { title: 'CRM Systems', text: 'Lead, customer, and engagement systems with automation workflows.' },
  { title: 'SaaS Platforms', text: 'Subscription-ready products with scalable cloud architecture.' },
  { title: 'POS, School & Hospital Systems', text: 'Industry-tailored software for mission-critical operations.' },
]

const plans = [
  { name: 'Basic Software', price: 'KES 150,000', setup: 'Timeline: 4-6 weeks', features: ['Core module', 'Dashboard', 'Basic API', 'Authentication'] },
  { name: 'Standard Business Software', price: 'KES 350,000', setup: 'Timeline: 6-10 weeks', recommended: true, features: ['Multi-module setup', 'Management dashboard', 'Integrations', 'Reporting tools'] },
  { name: 'Professional Software', price: 'KES 700,000', setup: 'Timeline: 10-14 weeks', features: ['Automation systems', 'Advanced analytics', 'Payment integrations', 'Role control'] },
  { name: 'Advanced Software', price: 'KES 1,500,000', setup: 'Timeline: 14-18 weeks', features: ['Enterprise modules', 'API suite', 'Workflow engine', 'Security hardening'] },
  { name: 'Enterprise Software', price: 'From KES 3,500,000', setup: 'Timeline: Enterprise phased rollout', features: ['Full enterprise architecture', 'Unlimited integrations', 'Compliance controls', 'Dedicated support'] },
]

const comparison = [{ feature: 'Modules', starter: '1', growth: '3+', enterprise: 'Unlimited' }, { feature: 'Integrations', starter: 'Basic', growth: 'Advanced', enterprise: 'Enterprise' }, { feature: 'Automation', starter: 'Low', growth: 'Medium', enterprise: 'High' }]

export function SoftwareDevelopmentPage() {
  useSeo('Software Development', 'ERP, CRM, SaaS, POS and custom software development for businesses.')
  return <ServicePageTemplate title="Software Development" subtitle="Enterprise-grade software engineered for growth and operational excellence." features={features} pricingRoute="/services/software-development/packages" />
}

export function SoftwareDevelopmentPackagesPage() {
  useSeo('Software Packages', 'Software development package pricing and quote form.')
  return <ServicePackagesTemplate title="Software Development Packages" subtitle="Choose a package then send us your requirements." plans={plans} comparison={comparison} faqs={commonFaqs} quoteForm={<QuoteRequestForm />} />
}

