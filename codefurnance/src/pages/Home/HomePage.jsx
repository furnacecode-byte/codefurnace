import { Link } from 'react-router-dom'
import { Hero } from '../../components/hero/Hero'
import { SectionIntro, FeatureGrid, StatGrid } from '../../components/common/Sections'
import { useSeo } from '../../components/common/useSeo'
import { serviceCards, processSteps } from '../shared'

export function HomePage() {
  useSeo('Home', 'Premium software agency in Narok, Kenya delivering web, mobile, software and AI automation.')

  return (
    <>
      <Hero eyebrow="WE BUILD DIGITAL EXCELLENCE" title="We Design. We Code. We Build Your Vision." text="Code Furnace engineers scalable digital systems for growing companies." />
      <section className="section">
        <SectionIntro title="What We Do" text="End-to-end digital solutions for modern businesses." />
        <FeatureGrid items={serviceCards} />
      </section>
      <section className="section alt"><SectionIntro title="Our Process" text={processSteps.join(' • ')} /></section>
      <section className="section">
        <SectionIntro title="Performance Metrics" text="Measured outcomes you can trust." />
        <StatGrid stats={[{ value: '120+', label: 'Projects Completed' }, { value: '80+', label: 'Happy Clients' }, { value: '5+', label: 'Years Experience' }, { value: '24/7', label: 'Support Coverage' }]} />
      </section>
      <section className="section cta-banner">
        <h2>Ready To Transform Your Business?</h2>
        <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
      </section>
    </>
  )
}

