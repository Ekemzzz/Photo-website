import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const portfolioFilters = ['weddings', 'events', 'birthdays', 'others']

/**
 * Handles scrolling to hash anchors and smooth section navigation.
 */
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    let hash = location.hash.replace('#', '')
    if (!hash) {
      if (location.pathname === '/about') hash = 'about'
      else if (location.pathname === '/services') hash = 'services'
      else if (location.pathname === '/contact') hash = 'contact'
    }

    if (hash) {
      if (portfolioFilters.includes(hash)) {
        setTimeout(() => {
          const el = document.getElementById('portfolio')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
        return
      }
      const el = document.getElementById(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        return
      }
    }
    if (location.pathname === '/') {
      window.scrollTo(0, 0)
    }
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
        <Route path="/about" element={<HomePage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
