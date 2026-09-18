import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const closeMenu = () => setMenuOpen(false)

  // Track scroll position to dynamically highlight current section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'portfolio', 'about', 'services', 'contact']
      const scrollPosition = window.scrollY + 140

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update active section if URL hash changes
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && ['home', 'portfolio', 'about', 'services', 'contact'].includes(hash)) {
      setActiveSection(hash)
    }
  }, [location.hash])

  const handleNavClick = (id) => {
    closeMenu()
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#home" onClick={() => handleNavClick('home')}>
          E.k Pic
        </a>

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
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                className={activeSection === item.id ? 'is-active' : ''}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  window.history.pushState(null, '', item.href)
                  handleNavClick(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
