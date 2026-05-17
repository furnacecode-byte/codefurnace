import { Link } from 'react-router-dom'
import { useSeo } from '../../components/common/useSeo'
import { extendedServiceCards, companyStats } from '../shared'

export function ServicesPage() {
  useSeo('Services', 'Premium website, software, booking, mobile and AI solutions by Code Furnance.')

  return (
    <section className="section">
      <div className="section-intro">
        <p className="eyebrow">HOME / SERVICES</p>
        <h1>Our Digital <span className="gradient-word">Solutions</span></h1>
        <p>Premium enterprise services designed to help businesses scale with confidence.</p>
      </div>

      <div className="grid cols-4">
        {extendedServiceCards.map((service) => {
          const Icon = service.icon
          return (
            <article className="card" key={service.title}>
              <h3><Icon /> {service.title}</h3>
              <p>{service.text}</p>
              <Link to={service.link} className="btn btn-secondary">Open Service</Link>
            </article>
          )
        })}
      </div>

      <div className="section section-tight">
        <div className="grid cols-4">
          {companyStats.map((s) => <article key={s.label} className="stat"><strong>{s.value}</strong><span>{s.label}</span></article>)}
        </div>
      </div>
    </section>
  )
}


