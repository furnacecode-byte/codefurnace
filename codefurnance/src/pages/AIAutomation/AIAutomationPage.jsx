import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate } from '../../components/common/ServicePageTemplate'
import { commonFaqs } from '../shared'

export function AIAutomationPage() {
  useSeo('AI Automation', 'AI chatbots, CRM automation, lead generation and intelligent business workflows.')
  return <ServicePageTemplate title="AI Business Automation" subtitle="Futuristic but practical automation systems that increase operational efficiency." features={[{ title: 'AI Chatbots', text: 'Website and WhatsApp bots for support and lead qualification.' }, { title: 'CRM Automation', text: 'Auto-tagging, routing, scoring, and follow-up sequences.' }, { title: 'Workflow AI', text: 'Document processing, alerts, and decision assistance.' }, { title: 'AI Dashboards', text: 'Live metrics for productivity, response time and conversion.' }]} plans={[{ name: 'AI Starter', price: '$1,200', setup: 'Setup: $500', features: ['1 bot', 'Basic workflow', 'Weekly reports'] }, { name: 'AI Growth', price: '$3,200', setup: 'Setup: $1,200', recommended: true, features: ['Multi-channel bot', 'CRM automation', 'Analytics dashboard'] }, { name: 'AI Enterprise', price: 'Custom', setup: 'Setup: Scoped', features: ['Custom models', 'Voice AI', 'Compliance controls'] }]} comparison={[{ feature: 'Channels', starter: 'Web', growth: 'Web + WhatsApp', enterprise: 'Omnichannel' }, { feature: 'Automations', starter: '3', growth: '10', enterprise: 'Unlimited' }, { feature: 'Insights', starter: 'Basic', growth: 'Advanced', enterprise: 'Executive' }]} faqs={commonFaqs} />
}

