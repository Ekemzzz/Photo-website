import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const portfolioFilters = ['weddings', 'events', 'birthdays', 'others']

/**
 * Handles scrolling to hash anchors and scrolling to top on page navigation.
 */
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      // If hash is a portfolio filter, scroll to the portfolio section
      if (portfolioFilters.includes(hash)) {
        setTimeout(() => {
          const el = document.getElementById('portfolio')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
        return
      }
      // Otherwise try to find the element by id
      const el = document.getElementById(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        return
      }
    }
    // No hash — scroll to top on page change
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
