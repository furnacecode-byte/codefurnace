import { Link } from 'react-router-dom'
import { useSeo } from '../../components/common/useSeo'

const projects = [
  { title: 'Safari Booking Platform', stack: 'React, Node, M-Pesa', industry: 'Travel', text: 'Custom reservation flow with payment automation and reporting dashboard.' },
  { title: 'Clinic Appointment System', stack: 'React, Express, SMS API', industry: 'Healthcare', text: 'Appointment scheduling, reminders, and secure patient communication modules.' },
  { title: 'Retail SaaS Dashboard', stack: 'React, API, Analytics', industry: 'Retail', text: 'Realtime inventory and sales analytics with role-based enterprise access.' },
  { title: 'Delivery Mobile App', stack: 'React Native, Firebase', industry: 'Logistics', text: 'Cross-platform order tracking, push notifications, and operations control panel.' },
  { title: 'AI Lead Automation Suite', stack: 'AI agents, CRM, WhatsApp', industry: 'Sales', text: 'Lead qualification automation and multichannel conversion workflows.' },
]

export function PortfolioPage() {
  useSeo('Portfolio', 'Selected website, app, AI, booking and SaaS projects by Code Furnance.')
  return (
    <section className="section">
      <div className="section-intro"><h1>Portfolio</h1><p>Enterprise-grade digital systems delivered across industries.</p></div>
      <div className="grid cols-3">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <div className="project-image" aria-hidden="true" />
            <h3>{project.title}</h3>
            <p><strong>Technologies:</strong> {project.stack}</p>
            <p><strong>Industry:</strong> {project.industry}</p>
            <p>{project.text}</p>
            <Link to="/quote-booking" className="btn btn-secondary">Start Similar Project</Link>
          </article>
        ))}
      </div>
    </section>
  )
}

