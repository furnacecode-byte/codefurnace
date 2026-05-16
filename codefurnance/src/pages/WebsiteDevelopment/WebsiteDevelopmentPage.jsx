import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate, ServicePackagesTemplate } from '../../components/common/ServicePageTemplate'
import { QuoteRequestForm } from '../../components/common/QuoteRequestForm'
import { commonFaqs } from '../shared'

const features = [
  { title: 'Responsive web design', text: 'Optimized layouts that adapt perfectly across mobile, tablet, and desktop devices.' },
  { title: 'E-commerce integration', text: 'Product catalogs, secure checkout flows, and payment-ready commerce architecture.' },
  { title: 'Landing pages', text: 'Conversion-driven pages for campaigns, offers, launches, and lead acquisition.' },
  { title: 'SEO-ready architecture', text: 'Technical SEO structure with optimized headings, metadata, and crawl readiness.' },
  { title: 'Fast loading optimization', text: 'Performance tuning for speed, engagement, and improved ranking potential.' },
  { title: 'Admin dashboards', text: 'Manage content, users, inquiries, and site updates from a clear control panel.' },
  { title: 'CMS integration', text: 'Easy content publishing workflows for blogs, services, and business updates.' },
  { title: 'Modern UI/UX systems', text: 'Premium visual systems designed to build trust and increase user action.' },
]

const plans = [
  { name: 'Basic Website Package', price: '$20/mo | KES 2,600/mo', setup: 'Setup Fee: $99 / KES 12,900', features: ['Up to 5 pages', 'Custom design', 'Mobile responsive', 'SEO optimized', 'Hosting included', 'SSL certificate', 'Social media integration', 'Google Maps', 'Business profile setup', 'Basic chatbot'] },
  { name: 'Standard Website Package', price: '$48/mo | KES 6,200/mo', setup: 'Setup Fee: $149 / KES 19,400', recommended: true, features: ['Up to 10 pages', 'Free domain', 'Hosting included', 'SSL', '5 email accounts', 'SEO', 'Client portal', 'Chatbot', '3 revisions'] },
  { name: 'Advanced Website Package', price: '$65/mo | KES 8,500/mo', setup: 'Setup Fee: Scoped', features: ['15 pages', 'Marketing support', 'SEO', 'Hosting', 'Client portal', 'Business integrations'] },
  { name: 'Professional Website Package', price: '$85/mo | KES 11,100/mo', setup: 'Setup Fee: Scoped', features: ['20 pages', 'Admin dashboard', 'Marketing tools', 'Advanced SEO', 'Client management tools'] },
  { name: 'Business Website Package', price: '$120/mo | KES 15,600/mo', setup: 'Setup Fee: Scoped', features: ['40 pages', 'Enterprise customization', 'Multi-language', 'Priority support', 'Advanced dashboards'] },
  { name: 'Corporate Website Package', price: '$140/mo | KES 18,200/mo', setup: 'Setup Fee: Scoped', features: ['50 pages', 'Enterprise-grade security', 'High-performance optimization', 'Corporate integrations'] },
]

const comparison = [{ feature: 'Pages', starter: '5', growth: '10-20', enterprise: '40-50' }, { feature: 'SEO', starter: 'Basic', growth: 'Advanced', enterprise: 'Enterprise' }, { feature: 'Support', starter: 'Standard', growth: 'Priority', enterprise: 'Corporate SLA' }]

export function WebsiteDevelopmentPage() {
  useSeo('Web Design & Development', 'Professional websites that build trust and drive growth.')
  return <ServicePageTemplate title="Professional Websites That Build Trust & Drive Growth" subtitle="Build high-converting websites, e-commerce platforms, landing pages, portfolios, and scalable SaaS applications designed for performance, user engagement, and business growth." features={features} pricingRoute="/services/web-development/packages" />
}

export function WebsiteDevelopmentPackagesPage() {
  useSeo('Web Development Packages', 'Website development package pricing and quote form.')
  return <ServicePackagesTemplate title="Website Pricing Packages" subtitle="Choose a package then send us your requirements." plans={plans} comparison={comparison} faqs={commonFaqs} quoteForm={<QuoteRequestForm />} />
}

