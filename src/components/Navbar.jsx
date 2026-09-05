import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isHomeActive = location.pathname === '/' && !location.hash
  const isPortfolioActive = location.pathname === '/' && location.hash === '#portfolio'

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/" onClick={closeMenu}>E.k Pic</Link>

        {/* Hamburger button — mobile only */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'is-open' : ''}`}>
          <li>
            <NavLink
              className={() => isHomeActive ? 'is-active' : ''}
              to="/"
              end
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={() => isPortfolioActive ? 'is-active' : ''}
              to="/#portfolio"
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive && !location.hash) ? 'is-active' : ''}
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive && !location.hash) ? 'is-active' : ''}
              to="/services"
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive && !location.hash) ? 'is-active' : ''}
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
