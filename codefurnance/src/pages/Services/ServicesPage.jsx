import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCode, FiCpu, FiCalendar, FiSmartphone, FiZap } from 'react-icons/fi'
import { useSeo } from '../../components/common/useSeo'
import './ServicesPage.css'

const navAnchor = (id) => `#${id}`

const coreServices = [
  { title: 'Website Design & Development', icon: FiCode, link: '/services/web-development', description: 'High-converting company websites with fast performance, SEO foundations, and premium brand presentation.', features: ['Custom UI system', 'CMS-ready architecture', 'Performance + SEO baseline'], cta: 'Open Service' },
  { title: 'Software Development', icon: FiCpu, link: '/services/software-development', description: 'Business-focused software platforms engineered for automation, operations visibility, and secure scale.', features: ['Custom dashboards', 'Role-based access', 'Third-party integrations'], cta: 'Open Service' },
  { title: 'Booking Systems', icon: FiCalendar, link: '/services/booking-systems', description: 'Smart booking systems with reminders, M-Pesa or card checkout, and scheduling intelligence.', features: ['Calendar and slots', 'Automated reminders', 'Payment workflows'], cta: 'Open Service' },
  { title: 'Mobile App Development', icon: FiSmartphone, link: '/services/mobile-apps', description: 'Cross-platform mobile apps for Android and iOS with robust APIs and polished product experiences.', features: ['Native-grade UI', 'Realtime analytics', 'Push notifications'], cta: 'Open Service' },
  { title: 'AI Business Automation', icon: FiZap, link: '/services/ai-automation', description: 'Deploy AI assistants, workflow automations, and smart decision systems that reduce repetitive work.', features: ['Chatbot assistants', 'Workflow triggers', 'Insight dashboards'], cta: 'Open Service' },
]

const processSteps = ['Discovery', 'Planning', 'UI/UX Design', 'Development', 'Testing', 'Deployment', 'Support']
const stats = [['Projects Completed', 120], ['Happy Clients', 80], ['Years Experience', 5], ['Team Members', 15], ['Narok, Kenya', 1]]

function Counter({ end, label }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf
    const duration = 1200
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.floor(end * progress))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end])

  return (
    <article className="service-stat reveal">
      <h3>{label === 'Narok, Kenya' ? 'Narok, Kenya' : `${value}+`}</h3>
      <p>{label === 'Narok, Kenya' ? 'We are local, we understand your business.' : label}</p>
    </article>
  )
}

export function ServicesPage() {
  useSeo('Services', 'Premium digital services for websites, software, booking systems, mobile apps, and AI automation.')
  const topFeatures = useMemo(() => ['Modern Technology', 'Secure & Scalable', 'Reliable Support'], [])

  return (
    <div className="services-premium-page">
      <section className="hero-premium section" id="home">
        <div className="hero-content reveal">
          <span className="premium-badge">HOME / SERVICES</span>
          <h1>Our Digital <span className="gradient-word">Solutions</span></h1>
          <p>Powerful digital solutions to help your business grow, automate processes and deliver an exceptional experience.</p>
          <div className="hero-actions">
            <a href={navAnchor('services-grid')} className="btn btn-primary">Explore Services</a>
            <Link to="/contact" className="btn btn-secondary">Start Project</Link>
          </div>
          <div className="hero-points">{topFeatures.map((feature) => <span key={feature}>? {feature}</span>)}</div>
        </div>

        <div className="hero-visual reveal" aria-hidden="true">
          <div className="float-card card-code">&lt;/&gt;</div>
          <div className="float-card card-mobile">Mobile</div>
          <div className="float-card card-ai">AI</div>
          <div className="float-card card-booking">Booking</div>
          <div className="hero-ring" />
        </div>
      </section>

      <section className="section" id="services-grid">
        <div className="services-grid">{coreServices.map((service) => {
          const Icon = service.icon
          return (
            <article className="service-card reveal" key={service.title}>
              <span className="service-icon"><Icon /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <div className="service-card-foot"><Link to={service.link} className="btn btn-secondary">{service.cta}</Link></div>
            </article>
          )
        })}</div>
      </section>

      <section className="section stats-zone"><div className="stats-grid">{stats.map(([label, value]) => <Counter key={label} end={value} label={label} />)}</div></section>
      <section className="section"><div className="section-head reveal"><h2>Our Process</h2></div><div className="timeline">{processSteps.map((step, i) => <article className="timeline-step reveal" key={step}><span>{String(i + 1).padStart(2, '0')}</span><h3>{step}</h3></article>)}</div></section>
      <section className="section"><div className="premium-cta reveal"><h2>Ready To Build Something Amazing?</h2><div className="hero-actions"><Link to="/contact" className="btn btn-primary">Get Free Consultation</Link><Link to="/contact" className="btn btn-secondary">Contact Us</Link></div></div></section>
    </div>
  )
}

