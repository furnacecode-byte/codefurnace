import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export function SectionIntro({ title, text }) {
  return <div className="section-intro"><h2>{title}</h2><p>{text}</p></div>
}

export function FeatureGrid({ items }) {
  return (
    <div className="grid cols-4">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <article key={item.title} className="card">
            <h3>{Icon ? <Icon /> : null} {item.title}</h3>
            <p>{item.text}</p>
            {item.link ? <Link className="btn btn-secondary" to={item.link}>Learn More <FiArrowRight /></Link> : null}
          </article>
        )
      })}
    </div>
  )
}

export function StatGrid({ stats }) {
  return <div className="grid cols-4">{stats.map((item) => <article key={item.label} className="stat"><strong>{item.value}</strong><span>{item.label}</span></article>)}</div>
}

export function FaqList({ faqs }) {
  return <div className="faq-list">{faqs.map((item) => <details key={item.q} className="card"><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
}

