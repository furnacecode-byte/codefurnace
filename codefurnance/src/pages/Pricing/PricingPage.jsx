import { SectionIntro } from '../../components/common/Sections'
import { PricingCards } from '../../components/pricing/PricingBlocks'
import { useSeo } from '../../components/common/useSeo'

export function PricingPage() {
  useSeo('Pricing', 'Master pricing across websites, software, mobile apps, booking systems and AI automation.')
  return <section className="section"><SectionIntro title="Master Pricing" text="Transparent plans designed for startups and enterprises." /><PricingCards plans={[{ name: 'Starter', price: '$499', setup: 'Setup: $300', features: ['Small business launch', 'Core pages', 'Basic SEO'] }, { name: 'Growth', price: '$1,200', setup: 'Setup: $500', recommended: true, features: ['Advanced features', 'Integrations', 'Analytics'] }, { name: 'Enterprise', price: 'Custom', setup: 'Setup: Project-based', features: ['SLA support', 'Security hardening', 'Scale architecture'] }]} /></section>
}

