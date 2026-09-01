import { useState, useMemo, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GalleryItem from './GalleryItem'
import Lightbox from './Lightbox'
import portfolioImages from '../data/portfolio'

const filters = ['all', 'weddings', 'events', 'birthdays', 'others']

/**
 * Portfolio section — filterable image gallery with lightbox.
 * Uses reusable GalleryItem and Lightbox components.
 * Reads the URL hash to pre-select a category filter.
 */
function Portfolio() {
  const location = useLocation()
  const [activeFilter, setActiveFilter] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return filters.includes(hash) ? hash : 'all'
  })

  // Sync filter when hash changes (e.g. clicking a category card)
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (filters.includes(hash)) {
      setActiveFilter(hash)
    }
  }, [location.hash])
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') return portfolioImages
    return portfolioImages.filter((img) => img.category === activeFilter)
  }, [activeFilter])

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    )
  }, [filteredImages.length])

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    )
  }, [filteredImages.length])

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__header">
        <h2 className="portfolio__title">Portfolio</h2>
        <p className="portfolio__subtitle">A selection of our finest work</p>
      </div>

      <div className="portfolio__filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`portfolio__filter-btn ${activeFilter === filter ? 'portfolio__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="portfolio__grid">
        {filteredImages.map((image, index) => (
          <GalleryItem
            key={image.id}
            src={image.src}
            alt={image.alt}
            objectPosition={image.objectPosition}
            forceSquare={image.forceSquare}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </section>
  )
}

export default Portfolio
