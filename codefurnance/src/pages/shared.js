import { FiCode, FiCpu, FiCalendar, FiSmartphone, FiZap, FiLayers, FiSearch, FiMessageSquare, FiCloud, FiDatabase } from 'react-icons/fi'

export const serviceOverviewCards = [
  { title: 'Website Design & Development', text: 'Conversion-focused websites, e-commerce platforms, landing pages, and SaaS sites.', link: '/services/web-development', icon: FiCode },
  { title: 'Software Development', text: 'ERP, CRM, POS, school and hospital systems, plus scalable SaaS platforms.', link: '/services/software-development', icon: FiCpu },
  { title: 'Booking Systems', text: 'Appointment and reservation systems for hotels, clinics, gyms, salons, and more.', link: '/services/booking-systems', icon: FiCalendar },
  { title: 'Mobile App Development', text: 'Android, iOS and cross-platform business apps with secure API integrations.', link: '/services/mobile-apps', icon: FiSmartphone },
  { title: 'AI Business Automation', text: 'AI agents, WhatsApp automation, workflow automation, and intelligent lead systems.', link: '/services/ai-automation', icon: FiZap },
]

export const extendedServiceCards = [
  ...serviceOverviewCards,
  { title: 'Digital Branding', text: 'Brand strategy, visual systems, and market-ready digital identity kits.', link: '/quote-booking', icon: FiLayers },
  { title: 'SEO & Optimization', text: 'Technical SEO, content structure, speed optimization and conversion improvements.', link: '/quote-booking', icon: FiSearch },
  { title: 'WhatsApp Automation', text: 'Automated support, lead capture, and sales conversation workflows on WhatsApp.', link: '/quote-booking', icon: FiMessageSquare },
  { title: 'Cloud Solutions', text: 'Cloud deployment, monitoring, backups, and infrastructure scaling strategy.', link: '/quote-booking', icon: FiCloud },
  { title: 'CRM & SaaS Platforms', text: 'Custom CRM and subscription products with enterprise role management.', link: '/quote-booking', icon: FiDatabase },
]

export const companyStats = [
  { value: '120+', label: 'Projects Completed' },
  { value: '80+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '15+', label: 'Team Members' },
]

export const processSteps = ['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Deployment', 'Support']

export const commonFaqs = [
  { q: 'How long does a project take?', a: 'Typical delivery ranges from 2 weeks to 12 weeks depending on scope and integrations.' },
  { q: 'Do you offer maintenance?', a: 'Yes. We provide SLA-backed support, updates, and security monitoring options.' },
  { q: 'Can you integrate AI and M-Pesa?', a: 'Yes. We implement tailored integrations for AI workflows and local payment systems.' },
  { q: 'Do you serve businesses outside Narok?', a: 'Yes. We work with teams across Kenya and East Africa through remote and hybrid delivery.' },
]

