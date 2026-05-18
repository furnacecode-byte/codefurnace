import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi'
import logo from '../../assets/logo.png'

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
      <NavLink to="/" className="brand">
        <img src={logo} alt="Code Furnance logo" className="brand-logo" />
        <span>CODE FURNANCE</span>
      </NavLink>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, to]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <NavLink to="/quote-booking" className="btn btn-primary">Get Started</NavLink>
        <div className="nav-controls">
          <button className="theme-toggle" onClick={() => setTheme((v) => (v === 'dark' ? 'light' : 'dark'))} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu"><FiMenu /></button>
        </div>
      </div>
    </header>
  )
}
