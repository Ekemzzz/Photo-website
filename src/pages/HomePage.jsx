import heroImg from '../assets/hero-image.jpg'
import Categories from '../components/Categories'
import Portfolio from '../components/Portfolio'

function HomePage() {
  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <section className="hero-section" id="home">
        <div className="hero-section__overlay"></div>
        <img src={heroImg} alt="E.k Pic Photography" className="hero-section__image" />
        <div className="hero-section__content">
          <h1 className="hero-section__title">E.k Pic</h1>
          <p className="hero-section__subtitle">Capturing moments that tell stories</p>
          <p className="hero-section__description">Professional photography for weddings, events, birthdays and every unforgettable moment</p>
          <div className="hero-section__actions">
            <a href="#portfolio" className="hero-section__cta">View Portfolio</a>
            <a href="/contact" className="hero-section__cta hero-section__cta--secondary">Book a Session</a>
          </div>
        </div>
      </section>

      {/* ── Categories Section ── */}
      <Categories />

      {/* ── Portfolio Gallery Section ── */}
      <Portfolio />
    </div>
  )
}

export default HomePage
