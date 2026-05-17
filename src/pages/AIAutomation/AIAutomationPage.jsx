import { useSeo } from '../../components/common/useSeo'
import { ServicePageTemplate, ServicePackagesTemplate } from '../../components/common/ServicePageTemplate'
import { QuoteRequestForm } from '../../components/common/QuoteRequestForm'
import { commonFaqs } from '../shared'

const features = [
  { title: 'AI chatbots', text: 'Automated support and sales assistants for instant customer interaction.' },
  { title: 'Lead automation', text: 'Smart capture, qualification, and routing for high-value leads.' },
  { title: 'Workflow automation', text: 'Automate repetitive processes and approvals across departments.' },
  { title: 'Smart responses', text: 'Context-aware responses for faster and more accurate communication.' },
  { title: 'AI agents', text: 'Task-driven agents that assist teams in operations and service delivery.' },
  { title: 'Data processing', text: 'AI-powered processing for structured and unstructured business data.' },
  { title: 'Customer automation', text: 'Automated customer journeys across support, sales, and follow-up.' },
  { title: 'Business intelligence systems', text: 'Insight dashboards for performance, trends, and decision-making.' },
]

const plans = [
  { name: 'Basic AI Package', price: 'KES 90,000', setup: 'Timeline: 2-4 weeks', features: ['AI chatbot', 'Basic workflow automation', 'Lead routing'] },
  { name: 'Standard AI Package', price: 'KES 180,000', setup: 'Timeline: 4-6 weeks', recommended: true, features: ['WhatsApp automation', 'CRM automation', 'AI insights panel'] },
  { name: 'Advanced AI Package', price: 'KES 450,000', setup: 'Timeline: 6-10 weeks', features: ['AI agents', 'Voice AI', 'Multi-channel setup'] },
  { name: 'Elite AI Package', price: 'KES 1,200,000', setup: 'Timeline: 10-14 weeks', features: ['Advanced integrations', 'Automation dashboards', 'Staff onboarding'] },
  { name: 'Enterprise AI Package', price: 'From KES 2,500,000', setup: 'Timeline: Enterprise phased rollout', features: ['Enterprise AI platform', 'Governance controls', 'Dedicated AI ops support'] },
]

const comparison = [{ feature: 'Channels', starter: 'Web', growth: 'Web+WhatsApp', enterprise: 'Omnichannel' }, { feature: 'Automation depth', starter: 'Basic', growth: 'Advanced', enterprise: 'Enterprise' }, { feature: 'Insights', starter: 'Weekly', growth: 'Realtime', enterprise: 'Executive' }]

export function AIAutomationPage() {
  useSeo('AI Automation', 'AI chatbots, WhatsApp automation, CRM automation and intelligent workflows.')
  return <ServicePageTemplate title="AI Business Automation" subtitle="Automate business operations using AI agents, workflow automation, intelligent customer support, and smart lead generation systems." features={features} pricingRoute="/services/ai-automation/packages" />
}

export function AIAutomationPackagesPage() {
  useSeo('AI Packages', 'AI automation package pricing and quote form.')
  return <ServicePackagesTemplate title="AI Automation Packages" subtitle="Choose a package then send us your requirements." plans={plans} comparison={comparison} faqs={commonFaqs} quoteForm={<QuoteRequestForm />} />
}

