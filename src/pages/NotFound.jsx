import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__body">
          Looks like this page doesn't exist. It may have been moved or the URL
          might be incorrect.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="not-found__btn not-found__btn--primary">
            Go Home
          </Link>
          <Link to="/contact" className="not-found__btn not-found__btn--secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
