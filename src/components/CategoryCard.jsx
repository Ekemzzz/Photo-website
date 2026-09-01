import PropTypes from 'prop-types'

/**
 * Reusable card for displaying a photography category.
 * Renders an image, title, description, and interactive arrow icon.
 */
function CategoryCard({ image, title, description, href }) {
  return (
    <a className="category-card" href={href || `#${title.toLowerCase()}`}>
      <img
        className="category-card__image"
        src={image}
        alt={title}
        loading="lazy"
      />
      <div className="category-card__overlay"></div>
      <div className="category-card__content">
        <div className="category-card__header-row">
          <h3 className="category-card__title">{title}</h3>
          <span className="category-card__arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
        {description && (
          <p className="category-card__description">{description}</p>
        )}
      </div>
    </a>
  )
}

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
}

export default CategoryCard

