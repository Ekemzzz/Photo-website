import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isHomeActive = location.pathname === '/' && !location.hash
  const isPortfolioActive = location.pathname === '/' && location.hash === '#portfolio'

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link className="navbar__brand" to="/">E.k Pic</Link>
      <ul className="navbar__links">
        <li>
          <NavLink
            className={() => isHomeActive ? 'is-active' : ''}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={() => isPortfolioActive ? 'is-active' : ''}
            to="/#portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive && !location.hash) ? 'is-active' : ''}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive && !location.hash) ? 'is-active' : ''}
            to="/services"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive && !location.hash) ? 'is-active' : ''}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

