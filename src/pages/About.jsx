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
            every moment — the quiet intimacy of a wedding vow, the raw energy
            of a live event, and the bold confidence of a fashion editorial.
            My work bridges artistry and authenticity, honouring real emotion
            while crafting images that stand the test of time.
          </p>
          <p className="about-intro__body">
            Based in Lagos, Nigeria, I collaborate with clients who value depth,
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
              Born and raised in Lagos, I picked up my first camera at age 16,
              captivated by the vibrant street life and rich cultural tapestry of
              West Africa. What started as a teenage curiosity quickly became a
              lifelong pursuit.
            </p>
            <p>
              After studying Visual Communication at the London College of
              Communication, I returned home to launch E.k Pic — a studio
              dedicated to authentic, people-first photography. Over the past
              decade, I've had the privilege of working across 12 African
              countries, documenting stories that celebrate heritage, resilience,
              and beauty.
            </p>
            <p>
              Today, I mentor emerging photographers and lead community-based
              photo projects that give voice to underrepresented narratives.
              My work has been featured in international publications, gallery
              exhibitions, and campaigns for brands that share my commitment to
              visual authenticity.
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
            "I believe every frame holds a truth waiting to be revealed — not
            just what is seen, but what is felt. I don't photograph people;
            I co-create moments with them."
          </blockquote>
          <p className="about-philosophy__body">
            My approach centres on empathy, respect, and collaboration.
            Light, texture, and emotion are my primary tools; narrative is my
            compass. I take the time to understand each client's story before
            the shutter clicks, because the best photographs aren't taken —
            they're built on trust.
          </p>
        </div>
      </section>

      {/* ── Experience / Statistics ── */}
      <section className="about-stats">
        <h2 className="about-section__title about-section__title--light">By the Numbers</h2>
        <div className="about-stats__grid">
          <div className="about-stats__card">
            <span className="about-stats__number">10+</span>
            <span className="about-stats__label">Years of Experience</span>
          </div>
          <div className="about-stats__card">
            <span className="about-stats__number">500+</span>
            <span className="about-stats__label">Published Images</span>
          </div>
          <div className="about-stats__card">
            <span className="about-stats__number">30+</span>
            <span className="about-stats__label">Exhibitions Worldwide</span>
          </div>
          <div className="about-stats__card">
            <span className="about-stats__number">120+</span>
            <span className="about-stats__label">Happy Clients</span>
          </div>
          <div className="about-stats__card">
            <span className="about-stats__number">12</span>
            <span className="about-stats__label">Countries Covered</span>
          </div>
          <div className="about-stats__card">
            <span className="about-stats__number">1</span>
            <span className="about-stats__label">African Photography Award</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="about-faq">
        <h2 className="about-section__title">Frequently Asked Questions</h2>
        <div className="about-faq__list">
          <details className="about-faq__item">
            <summary className="about-faq__question">
              What is your availability like?
              <span className="about-faq__icon">+</span>
            </summary>
            <div className="about-faq__answer">
              <p>
                I typically book 2–4 weeks in advance for portrait sessions and
                2–3 months for weddings and events. Peak season (October–March)
                fills up fast, so I recommend reaching out early. For last-minute
                requests, get in touch and I'll do my best to accommodate.
              </p>
            </div>
          </details>

          <details className="about-faq__item">
            <summary className="about-faq__question">
              Do you travel for shoots?
              <span className="about-faq__icon">+</span>
            </summary>
            <div className="about-faq__answer">
              <p>
                Absolutely! I've worked across 12 African countries and
                internationally. Travel fees vary depending on the location and
                duration of the project. Destination weddings and editorial trips
                are some of my favourite work — let's discuss the details.
              </p>
            </div>
          </details>

          <details className="about-faq__item">
            <summary className="about-faq__question">
              How does your pricing work?
              <span className="about-faq__icon">+</span>
            </summary>
            <div className="about-faq__answer">
              <p>
                I offer tailored packages for each category — weddings, portraits,
                events, and fashion. Pricing depends on the scope, location, and
                deliverables. After an initial consultation, I provide a detailed
                quote with no hidden costs. Sessions start from ₦150,000.
              </p>
            </div>
          </details>

          <details className="about-faq__item">
            <summary className="about-faq__question">
              How long until I receive my photos?
              <span className="about-faq__icon">+</span>
            </summary>
            <div className="about-faq__answer">
              <p>
                Portrait sessions are delivered within 7–10 business days.
                Weddings and events typically take 3–4 weeks due to the volume
                of images. Rush delivery is available for an additional fee if
                you need them sooner.
              </p>
            </div>
          </details>

          <details className="about-faq__item">
            <summary className="about-faq__question">
              What should I wear or prepare for a session?
              <span className="about-faq__icon">+</span>
            </summary>
            <div className="about-faq__answer">
              <p>
                Before every shoot, I send a detailed preparation guide covering
                wardrobe tips, colour palettes, and location advice. For fashion
                and editorial work, I collaborate closely with stylists and
                creative directors to nail the vision.
              </p>
            </div>
          </details>

          <details className="about-faq__item">
            <summary className="about-faq__question">
              Can I request specific edits or retouching?
              <span className="about-faq__icon">+</span>
            </summary>
            <div className="about-faq__answer">
              <p>
                Of course. All packages include professional colour grading and
                basic retouching. Advanced retouching — skin smoothing, background
                changes, composite edits — is available as an add-on. I always
                share a proof gallery before final delivery so you can flag any
                preferences.
              </p>
            </div>
          </details>
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
