import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['Pricing', '/pricing'],
  ['Contact', '/contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('codefurnance-theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('codefurnance-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <NavLink to="/" className="brand">CODE FURNACE</NavLink>
      <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">?</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, to]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={() => setTheme((v) => (v === 'dark' ? 'light' : 'dark'))} aria-label="Toggle theme">
          {theme === 'dark' ? '?' : '?'}
        </button>
        <NavLink to="/contact" className="btn btn-primary">Get a Quote</NavLink>
      </div>
    </header>
  )
}

