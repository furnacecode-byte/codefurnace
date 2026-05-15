import { SectionIntro, FeatureGrid, FaqList } from './Sections'
import { PricingCards, ComparisonTable } from '../pricing/PricingBlocks'

export function ServicePageTemplate({ title, subtitle, features, plans, comparison, faqs }) {
  return (
    <>
      <section className="section"><SectionIntro title={title} text={subtitle} /><FeatureGrid items={features} /></section>
      <section className="section alt"><SectionIntro title="Pricing Packages" text="Flexible plans for different business stages." /><PricingCards plans={plans} /></section>
      <section className="section"><SectionIntro title="Feature Comparison" text="A quick side-by-side view." /><ComparisonTable rows={comparison} /></section>
      <section className="section alt"><SectionIntro title="FAQ" text="Common client questions." /><FaqList faqs={faqs} /></section>
    </>
  )
}

