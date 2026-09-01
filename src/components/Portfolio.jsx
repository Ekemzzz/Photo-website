import { useState, useMemo, useCallback } from 'react'
import GalleryItem from './GalleryItem'
import Lightbox from './Lightbox'
import portfolioImages from '../data/portfolio'

const filters = ['all', 'weddings', 'portraits', 'events', 'fashion']

/**
 * Portfolio section — filterable image gallery with lightbox.
 * Uses reusable GalleryItem and Lightbox components.
 */
function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
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
