import { Link } from 'react-router-dom'
import photographerImg from '../assets/photographer.png'
import aboutHeroBg from '../assets/about-hero-bg.jpg'

function About() {
  return (
    <main className="about-page">
      {/* ── Hero Banner ── */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
      >
        <div className="about-hero__overlay"></div>
        <div className="about-hero__content">
          <h1 className="about-hero__title">About Me</h1>
          <p className="about-hero__subtitle">The story behind the lens</p>
        </div>
      </section>

      {/* ── Introduction + Photo ── */}
      <section className="about-intro">
        <div className="about-intro__image-wrapper">
          <img
            src={photographerImg}
            alt="E.k — Professional Photographer"
            className="about-intro__image"
          />
        </div>
        <div className="about-intro__text">
          <span className="about-intro__label">Photographer & Visual Storyteller</span>
          <h2 className="about-intro__heading">Hello, I'm E.k</h2>
          <p className="about-intro__body">
            I'm a passionate visual storyteller whose lens captures the soul of
            every moment, the quiet intimacy of a wedding vow, the raw energy
            of a live event, and the bold confidence of a fashion editorial.
            My work bridges artistry and authenticity, honouring real emotion
            while crafting images that stand the test of time.
          </p>
          <p className="about-intro__body">
            Based in Akwa-Ibom, Nigeria, I collaborate with clients who value depth,
            integrity, and visual narratives that go beyond the surface.
            Whether it's a couple's first dance or a brand campaign, I bring the
            same dedication to every frame.
          </p>
        </div>
      </section>

      {/* ── Biography ── */}
      <section className="about-bio">
        <div className="about-bio__inner">
          <h2 className="about-section__title">My Journey</h2>
          <div className="about-bio__content">
            <p>
              Born and raised in Akwa-Ibom (Nigeria), I picked up my first camera at age 18,
              captivated by the vibrant street life and beauty of my surroundings,
              what started as a teenage curiosity quickly became a lifelong pursuit.
            </p>
            <p>
              After six months of camera training, I was finally able to launch
              E.k Pic, a studio where realistic images capture real views and stories.
            </p>
            <p>
              Today, I mentor emerging photographers and lead community-based
              photo projects that give voice to underrepresented narratives.
            </p>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="about-philosophy">
        <div className="about-philosophy__inner">
          <span className="about-philosophy__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </span>
          <h2 className="about-section__title">My Philosophy</h2>
          <blockquote className="about-philosophy__quote">
            "I believe every frame holds a truth waiting to be revealed, not
            just what is seen, but what is felt. I don't photograph people;
            I co-create moments with them."
          </blockquote>
          <p className="about-philosophy__body">
            My approach centres on empathy, respect, and collaboration.
            Light, texture, and emotion are my primary tools; narrative is my
            compass. I take the time to understand each client's story before
            the shutter clicks, because the best photographs aren't taken, they're built on trust.
          </p>
        </div>
      </section>

      {/* ── Experience / Statistics ── */}
      <section className="about-stats">
        <h2 className="about-section__title about-section__title--light">By the Numbers</h2>
        <div className="about-stats__grid">
          <div className="about-stats__card">
            <span className="about-stats__number">5+</span>
            <span className="about-stats__label">Years of Experience</span>
          </div>
          <div className="about-stats__card">
            <span className="about-stats__number">300+</span>
            <span className="about-stats__label">Published Images</span>
          </div>
          <div className="about-stats__card">
            <span className="about-stats__number">10+</span>
            <span className="about-stats__label">Exhibitions Worldwide</span>
          </div>
          <div className="about-stats__card">
            <span className="about-stats__number">100+</span>
            <span className="about-stats__label">Happy Clients</span>
          </div>
          <div className="about-stats__card">
            <span className="about-stats__number">4</span>
            <span className="about-stats__label">States Covered</span>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="about-cta">
        <h2 className="about-cta__title">Ready to Tell Your Story?</h2>
        <p className="about-cta__body">
          Let's create something unforgettable together. Reach out for a
          consultation, portfolio review, or custom project proposal.
        </p>
        <div className="about-cta__actions">
          <Link to="/contact" className="about-cta__btn about-cta__btn--primary">
            Contact Me
          </Link>
          <Link to="/#portfolio" className="about-cta__btn about-cta__btn--secondary">
            View Portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}

export default About
