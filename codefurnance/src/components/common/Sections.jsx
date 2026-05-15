export function SectionIntro({ title, text }) {
  return <div className="section-intro"><h2>{title}</h2><p>{text}</p></div>
}

export function FeatureGrid({ items }) {
  return <div className="grid cols-4">{items.map((item) => <article key={item.title} className="card"><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
}

export function StatGrid({ stats }) {
  return <div className="grid cols-4">{stats.map((item) => <article key={item.label} className="stat"><strong>{item.value}</strong><span>{item.label}</span></article>)}</div>
}

export function FaqList({ faqs }) {
  return <div className="faq-list">{faqs.map((item) => <details key={item.q} className="card"><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
}

