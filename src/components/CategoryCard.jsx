import PropTypes from 'prop-types'

/**
 * Reusable card for displaying a photography category.
 * Renders an image, title, and description with a hover overlay effect.
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
        <h3 className="category-card__title">{title}</h3>
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
