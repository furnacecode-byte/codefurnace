import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Solutions", "/services#solutions"],
  ["Projects", "/projects"],
  ["About", "/about"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme] = useState(() => localStorage.getItem("codefurnace-theme") || "dark");

  useEffect(() => {
    // keep theme attribute in sync with existing preference (no toggle UI)
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        <img src={logo} alt="Code furnace logo" className="brand-logo" />
        <span>CODE furnace</span>
      </NavLink>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, to]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <div className="mobile-nav-cta">
          <NavLink to="/contact" className="btn btn-secondary" onClick={() => setOpen(false)}>
            Contact Us
          </NavLink>
          <NavLink to="/quote-booking" className="btn btn-primary" onClick={() => setOpen(false)}>
            Let's Talk
          </NavLink>
        </div>
      </nav>

      <div className="nav-actions">
        <NavLink to="/contact" className="btn btn-secondary">
          Contact Us
        </NavLink>
        <NavLink to="/quote-booking" className="btn btn-primary desktop-nav-cta">
          Let's Talk
        </NavLink>
        <div className="nav-controls">
          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
