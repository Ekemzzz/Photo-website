import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link className="navbar__brand" to="/">E.k Pic</Link>
      <ul className="navbar__links">
        <li><NavLink className={({ isActive }) => isActive ? 'is-active' : ''} to="/" end>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'is-active' : ''} to="/#portfolio">Portfolio</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'is-active' : ''} to="/about">About</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'is-active' : ''} to="/services">Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'is-active' : ''} to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
