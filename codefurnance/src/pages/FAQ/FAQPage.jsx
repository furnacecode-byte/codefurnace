import { SectionIntro, FaqList } from '../../components/common/Sections'
import { useSeo } from '../../components/common/useSeo'
import { commonFaqs } from '../shared'

export function FAQPage() {
  useSeo('FAQ', 'Common questions on timelines, support, hosting, payments, and revisions.')
  return <section className="section"><SectionIntro title="Frequently Asked Questions" text="Everything you need before project kickoff." /><FaqList faqs={commonFaqs} /></section>
}

