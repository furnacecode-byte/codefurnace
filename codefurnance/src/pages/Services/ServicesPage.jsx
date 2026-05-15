import { Link } from 'react-router-dom'
import { SectionIntro } from '../../components/common/Sections'
import { useSeo } from '../../components/common/useSeo'
import { serviceCards } from '../shared'

export function ServicesPage() {
  useSeo('Services', 'Explore web, software, booking systems, mobile apps, and AI automation services.')
  return <section className="section"><SectionIntro title="All Services" text="Choose the service line that matches your business stage." /><div className="grid cols-3">{serviceCards.map((s) => <article className="card" key={s.title}><h3>{s.title}</h3><p>{s.text}</p><Link className="btn btn-secondary" to={s.link}>Learn More</Link></article>)}</div></section>
}

