import { SectionIntro, FeatureGrid } from '../../components/common/Sections'
import { useSeo } from '../../components/common/useSeo'

export function AboutPage() {
  useSeo('About', 'Learn Code Furnace mission, vision, values, and delivery approach.')
  return <section className="section"><SectionIntro title="We Are Code Furnace" text="A digital solutions company in Narok focused on trust, innovation, and scalable engineering." /><FeatureGrid items={[{ title: 'Mission', text: 'Deliver high-quality digital solutions that create measurable business value.' }, { title: 'Vision', text: 'Be East Africa’s most trusted technology growth partner.' }, { title: 'Core Values', text: 'Ownership, speed, quality, collaboration, and continuous improvement.' }, { title: 'Why Trust Us', text: 'Transparent communication, enterprise security, and predictable delivery.' }]} /></section>
}

