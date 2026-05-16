import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiShield, FiZap, FiLayers, FiTrendingUp } from 'react-icons/fi'
import { Hero } from '../../components/hero/Hero'
import { SectionIntro } from '../../components/common/Sections'
import { useSeo } from '../../components/common/useSeo'
import { companyStats, serviceOverviewCards, processSteps } from '../shared'

const whyItems = [
  { icon: FiZap, title: 'Fast Delivery', text: 'Agile delivery cycles designed for momentum and measurable business outcomes.' },
  { icon: FiShield, title: 'Secure Systems', text: 'Security-first architecture with access controls, backups, and hardening workflows.' },
  { icon: FiLayers, title: 'Modern UI/UX', text: 'Premium interface design that balances brand identity, usability, and performance.' },
  { icon: FiTrendingUp, title: 'Scalable Architecture', text: 'Built for growth with modular systems, APIs, and cloud-ready deployment.' },
]

const projects = [
  'Corporate website platform',
  'Mobile commerce app',
  'SaaS analytics dashboard',
  'Clinic booking platform',
  'AI support automation suite',
]

export function HomePage() {
  useSeo('Home', 'Code Furnance builds modern digital solutions for businesses in Narok, Kenya and beyond.')

  return (
    <>
      <Hero
        eyebrow="WE BUILD DIGITAL EXCELLENCE"
        title="We Build Modern Digital Solutions For Your Business"
        text="We design, develop and automate powerful digital systems that help businesses grow, scale and succeed."
      />

      <section className="section">
        <SectionIntro title="Trusted By Growing Businesses" text="Enterprise-minded delivery with startup speed." />
        <div className="grid cols-4">
          {companyStats.map((s) => <article key={s.label} className="stat"><strong>{s.value}</strong><span>{s.label}</span></article>)}
        </div>
      </section>

      <section className="section alt">
        <SectionIntro title="Services" text="Premium digital capabilities built for scale and operational excellence." />
        <div className="grid cols-4">
          {serviceOverviewCards.map((item) => {
            const Icon = item.icon
            return (
              <article className="card" key={item.title}>
                <h3><Icon /> {item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.link} className="btn btn-secondary">Learn More <FiArrowRight /></Link>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section">
        <SectionIntro title="Why Choose Us" text="Business-focused engineering with premium execution standards." />
        <div className="grid cols-4">
          {whyItems.map((item) => {
            const Icon = item.icon
            return <article key={item.title} className="card"><h3><Icon /> {item.title}</h3><p>{item.text}</p></article>
          })}
          <article className="card"><h3><FiCheckCircle /> AI-Powered Solutions</h3><p>Automated workflows and intelligent systems that reduce cost and increase speed.</p></article>
          <article className="card"><h3><FiCheckCircle /> SEO Optimization</h3><p>Technical and on-page optimization to improve discoverability and conversion quality.</p></article>
          <article className="card"><h3><FiCheckCircle /> Mobile Responsive</h3><p>Every interface is designed for high quality performance across all device sizes.</p></article>
          <article className="card"><h3><FiCheckCircle /> Business-Focused</h3><p>Every feature aligns with growth, operational efficiency, and ROI objectives.</p></article>
        </div>
      </section>

      <section className="section alt">
        <SectionIntro title="Featured Projects" text="Websites, mobile apps, booking systems, and AI automation platforms." />
        <div className="grid cols-3">
          {projects.map((project) => <article className="card" key={project}><h3>{project}</h3><p>Built with premium UI, scalable architecture, and secure integrations.</p></article>)}
        </div>
      </section>

      <section className="section">
        <SectionIntro title="Our Process" text={processSteps.join(' • ')} />
        <div className="timeline">{processSteps.map((step, i) => <article className="timeline-step" key={step}><span>{String(i + 1).padStart(2, '0')}</span><h3>{step}</h3></article>)}</div>
      </section>

      <section className="section cta-banner">
        <h2>Ready To Build Your Next Digital Solution?</h2>
        <div className="row gap-sm">
          <Link to="/quote-booking" className="btn btn-primary">Book Consultation</Link>
          <Link to="/quote-booking" className="btn btn-secondary">Get Quote</Link>
        </div>
      </section>
    </>
  )
}

