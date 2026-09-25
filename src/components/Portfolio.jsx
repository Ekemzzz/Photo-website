import { useState, useMemo, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GalleryItem from './GalleryItem'
import Lightbox from './Lightbox'
import portfolioImages from '../data/portfolio'

const filters = ['all', 'weddings', 'events', 'birthdays', 'others']

/** Number of gallery items shown before "See More" is clicked */
const VISIBLE_COUNT = 4

/**
 * Portfolio section — filterable image gallery with lightbox.
 * Uses reusable GalleryItem and Lightbox components.
 * Reads the URL hash to pre-select a category filter.
 * Shows VISIBLE_COUNT images with a See More / Show Less toggle.
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
  const [showAll, setShowAll] = useState(false)

  // Collapse back to the first few images whenever the filter changes
  useEffect(() => {
    setShowAll(false)
  }, [activeFilter])

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') return portfolioImages
    return portfolioImages.filter((img) => img.category === activeFilter)
  }, [activeFilter])

  const visibleImages = useMemo(
    () => (showAll ? filteredImages : filteredImages.slice(0, VISIBLE_COUNT)),
    [filteredImages, showAll]
  )

  const hasMore = filteredImages.length > VISIBLE_COUNT

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === 0 ? visibleImages.length - 1 : prev - 1
    )
  }, [visibleImages.length])

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === visibleImages.length - 1 ? 0 : prev + 1
    )
  }, [visibleImages.length])

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
        {visibleImages.map((image, index) => (
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

      {hasMore && (
        <div className="portfolio__more">
          <button
            type="button"
            className="portfolio__more-btn"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
          >
            {showAll ? 'Show Less' : `See More (${filteredImages.length - VISIBLE_COUNT})`}
            <svg
              className={`portfolio__more-icon${showAll ? ' portfolio__more-icon--up' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={visibleImages}
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
