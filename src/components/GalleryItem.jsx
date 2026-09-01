import PropTypes from 'prop-types'

/**
 * Reusable gallery item — renders a single portfolio image
 * with a hover overlay and click handler for the lightbox.
 */
function GalleryItem({ src, alt, onClick, objectPosition, forceSquare }) {
  return (
    <div
      className={`gallery-item${forceSquare ? ' gallery-item--square' : ''}`}
      onClick={onClick}
    >
      <img
        className="gallery-item__image"
        src={src}
        alt={alt}
        loading="lazy"
        style={objectPosition ? { objectPosition } : undefined}
      />
      <div className="gallery-item__overlay">
        <svg
          className="gallery-item__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </div>
    </div>
  )
}

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  objectPosition: PropTypes.string,
  forceSquare: PropTypes.bool,
}

export default GalleryItem
