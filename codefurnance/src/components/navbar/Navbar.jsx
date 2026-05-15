import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['Pricing', '/pricing'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">CODE FURNACE</NavLink>
      <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">Menu</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, to]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
      </nav>
      <NavLink to="/contact" className="btn btn-primary">Get a Quote</NavLink>
    </header>
  )
}

