import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * Reusable premium service card.
 * Displays an image, service name, description, feature list,
 * starting price, and a "Book Now" link.
 */
function ServiceCard({ image, name, description, features, price, href }) {
  return (
    <article className="service-card">
      <div className="service-card__image-wrapper">
        <img
          className="service-card__image"
          src={image}
          alt={name}
          loading="lazy"
        />
        <div className="service-card__image-overlay"></div>
      </div>

      <div className="service-card__content">
        <h3 className="service-card__name">{name}</h3>
        <p className="service-card__description">{description}</p>

        <ul className="service-card__features">
          {features.map((feature, index) => (
            <li key={index} className="service-card__feature">
              <svg
                className="service-card__check"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="service-card__footer">
          <div className="service-card__price">
            <span className="service-card__price-label">Starting from</span>
            <span className="service-card__price-value">{price}</span>
          </div>
          <Link to={href} className="service-card__cta">
            Book Now
          </Link>
        </div>
      </div>
    </article>
  )
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default ServiceCard
