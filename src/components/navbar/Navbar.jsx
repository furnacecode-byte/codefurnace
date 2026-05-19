import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiSun, FiMoon, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Solutions", "/services#solutions"],
  ["Technologies", "/services#technologies"],
  ["Projects", "/projects"],
  ["About Us", "/about"],
  ["Careers", "/careers"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("codefurnance-theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("codefurnance-theme", theme);
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
        <img src={logo} alt="Code Furnance logo" className="brand-logo" />
        <span>CODE FURNANCE</span>
      </NavLink>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, to]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <NavLink
          to="/quote-booking"
          className="btn btn-primary mobile-nav-cta"
          onClick={() => setOpen(false)}
        >
          Let's Talk
        </NavLink>
      </nav>

      <div className="nav-actions">
        <NavLink
          to="/quote-booking"
          className="btn btn-primary desktop-nav-cta"
        >
          Let's Talk
        </NavLink>
        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
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
