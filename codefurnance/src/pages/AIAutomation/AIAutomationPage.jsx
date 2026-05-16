import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate, ServicePackagesTemplate } from '../../components/common/ServicePageTemplate'
import { QuoteRequestForm } from '../../components/common/QuoteRequestForm'
import { commonFaqs } from '../shared'

const features = [{ title: 'AI Chatbots', text: 'Website and WhatsApp bots for support and lead qualification.' }, { title: 'CRM Automation', text: 'Auto-tagging, routing, scoring, and follow-up sequences.' }, { title: 'Workflow AI', text: 'Document processing, alerts, and decision assistance.' }, { title: 'AI Dashboards', text: 'Live metrics for productivity, response time and conversion.' }]
const plans = [{ name: 'AI Starter', price: '$1,200', setup: 'Setup: $500', features: ['1 bot', 'Basic workflow', 'Weekly reports'] }, { name: 'AI Growth', price: '$3,200', setup: 'Setup: $1,200', recommended: true, features: ['Multi-channel bot', 'CRM automation', 'Analytics dashboard'] }, { name: 'AI Enterprise', price: 'Custom', setup: 'Setup: Scoped', features: ['Custom models', 'Voice AI', 'Compliance controls'] }]
const comparison = [{ feature: 'Channels', starter: 'Web', growth: 'Web + WhatsApp', enterprise: 'Omnichannel' }, { feature: 'Automations', starter: '3', growth: '10', enterprise: 'Unlimited' }, { feature: 'Insights', starter: 'Basic', growth: 'Advanced', enterprise: 'Executive' }]

export function AIAutomationPage() {
  useSeo('AI Automation', 'AI chatbots, CRM automation, lead generation and intelligent business workflows.')
  return <ServicePageTemplate title="AI Business Automation" subtitle="Futuristic but practical automation systems that increase operational efficiency." features={features} pricingRoute="/services/ai-automation/packages" />
}

export function AIAutomationPackagesPage() {
  useSeo('AI Packages', 'AI automation package pricing and quote form.')
  return <ServicePackagesTemplate title="AI Automation Packages" subtitle="Choose a package then send us your requirements." plans={plans} comparison={comparison} faqs={commonFaqs} quoteForm={<QuoteRequestForm />} />
}

