import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate, ServicePackagesTemplate } from '../../components/common/ServicePageTemplate'
import { QuoteRequestForm } from '../../components/common/QuoteRequestForm'
import { commonFaqs } from '../shared'

const features = [{ title: 'SEO Architecture', text: 'On-page optimization, schema structure, and performance setup.' }, { title: 'Secure Hosting', text: 'SSL, backups, and deployment pipelines for stable uptime.' }, { title: 'Conversion UX', text: 'Intentional layouts that increase inquiries and revenue.' }, { title: 'Responsive UI', text: 'Consistent experience across desktop, tablet, and mobile.' }]
const plans = [{ name: 'Basic', price: '$600', setup: 'Setup: $250', features: ['Up to 5 pages', 'Mobile responsive', 'Basic SEO'] }, { name: 'Business', price: '$1,500', setup: 'Setup: $500', recommended: true, features: ['10+ pages', 'CMS + blog', 'Speed optimization'] }, { name: 'Enterprise', price: '$3,500+', setup: 'Setup: Custom', features: ['Custom dashboard', 'Multi-language', 'Advanced security'] }]
const comparison = [{ feature: 'Pages', starter: '5', growth: '12', enterprise: 'Unlimited' }, { feature: 'Hosting', starter: 'Shared', growth: 'Cloud', enterprise: 'Dedicated' }, { feature: 'SEO', starter: 'Basic', growth: 'Advanced', enterprise: 'Enterprise' }]

export function WebsiteDevelopmentPage() {
  useSeo('Web Design & Development', 'Professional website design, development, SEO and hosting services.')
  return <ServicePageTemplate title="Web Design & Development" subtitle="Professional websites optimized for growth, speed, and conversion." features={features} pricingRoute="/services/web-development/packages" />
}

export function WebsiteDevelopmentPackagesPage() {
  useSeo('Web Development Packages', 'Website development package pricing and quote form.')
  return <ServicePackagesTemplate title="Web Development Packages" subtitle="Choose a package then send us your requirements." plans={plans} comparison={comparison} faqs={commonFaqs} quoteForm={<QuoteRequestForm />} />
}

