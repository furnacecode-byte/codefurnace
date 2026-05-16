import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate, ServicePackagesTemplate } from '../../components/common/ServicePageTemplate'
import { QuoteRequestForm } from '../../components/common/QuoteRequestForm'
import { commonFaqs } from '../shared'

const features = [
  { title: 'ERP systems', text: 'Centralized enterprise planning systems for operations, finance, and workflow visibility.' },
  { title: 'POS platforms', text: 'Reliable point-of-sale systems for transactions, inventory, and reporting.' },
  { title: 'CRM software', text: 'Customer relationship systems for lead tracking, engagement, and retention.' },
  { title: 'School management systems', text: 'Academic, attendance, fee, and communication portals for schools.' },
  { title: 'Hospital systems', text: 'Healthcare workflow platforms for appointments, records, and operations.' },
  { title: 'Inventory tracking', text: 'Stock visibility and movement control with alerts and analytics.' },
  { title: 'Enterprise dashboards', text: 'Executive-level dashboards for KPIs, operations, and decision support.' },
  { title: 'Multi-user role management', text: 'Secure role-based access for teams, departments, and management layers.' },
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
  return <ServicePageTemplate title="Software Development" subtitle="Custom business software including ERP systems, POS systems, CRM platforms, hospital management systems, school portals, inventory systems, and enterprise SaaS solutions." features={features} pricingRoute="/services/software-development/packages" />
}

export function SoftwareDevelopmentPackagesPage() {
  useSeo('Software Packages', 'Software development package pricing and quote form.')
  return <ServicePackagesTemplate title="Software Development Packages" subtitle="Choose a package then send us your requirements." plans={plans} comparison={comparison} faqs={commonFaqs} quoteForm={<QuoteRequestForm />} />
}

