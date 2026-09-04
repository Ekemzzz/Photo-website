import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import services from '../data/services'
import testimonials from '../data/testimonials'
import addons from '../data/addons'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We discuss your vision, preferences, event details, and budget to find the perfect package.',
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'We finalize the schedule, locations, shot list, and any special requests before the big day.',
  },
  {
    number: '03',
    title: 'Shoot Day',
    description:
      'You relax and enjoy the moment while we capture every detail with professionalism and care.',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Your carefully edited gallery is delivered on time, ready to download, share, and print.',
  },
]

const WHY_CHOOSE = [
  {
    title: '5+ Years Experience',
    description:
      'Five years of capturing weddings, portraits, events, and editorials.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: 'Award-Winning Work',
    description:
      'Recognized by the African Photography Award and featured in international publications.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Personalized Approach',
    description:
      'No two clients are the same. Every shoot is tailored to your unique story and style.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Fast, Reliable Delivery',
    description:
      'We respect your time. Galleries are delivered on schedule with consistent communication.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero__overlay"></div>
        <div className="services-hero__content">
          <h1 className="services-hero__title">Services</h1>
          <p className="services-hero__subtitle">
            Premium photography packages tailored to your story
          </p>
        </div>
      </section>

      <section className="services-list" id="services">
        <div className="services-list__header">
          <h2 className="services-list__title">Choose Your Experience</h2>
          <p className="services-list__subtitle">
            From weddings and portraits to events, birthdays, and creative
            projects, each experience is designed to tell your story with
            intention. Choose the service that fits your vision, then work with
            us to tailor the coverage, details, and final gallery to your needs.
          </p>
        </div>

        <div className="services-list__grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              name={service.name}
              description={service.description}
              features={service.features}
              price={service.price}
              href={service.href}
            />
          ))}
        </div>
      </section>

      <section className="services-process">
        <div className="services-process__inner">
          <div className="services-section-header services-section-header--light">
            <h2 className="services-section-header__title">How It Works</h2>
            <p className="services-section-header__subtitle">
              A simple, stress-free process from first message to final gallery.
            </p>
          </div>

          <div className="process-steps">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="process-step">
                <span className="process-step__number">{step.number}</span>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__description">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-testimonials">
        <div className="services-testimonials__inner">
          <div className="services-section-header">
            <h2 className="services-section-header__title">Client Love</h2>
            <p className="services-section-header__subtitle">
              Hear from the people we have had the privilege of photographing.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <blockquote key={item.id} className="testimonial-card">
                <svg
                  className="testimonial-card__quote-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="testimonial-card__quote">{item.quote}</p>
                <footer className="testimonial-card__footer">
                  <cite className="testimonial-card__author">{item.author}</cite>
                  <span className="testimonial-card__meta">
                    {item.service} · {item.location}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="services-addons">
        <div className="services-addons__inner">
          <div className="services-section-header">
            <h2 className="services-section-header__title">Add-Ons</h2>
            <p className="services-section-header__subtitle">
              Enhance your package with these optional upgrades.
            </p>
          </div>

          <div className="addons-grid">
            {addons.map((addon) => (
              <div key={addon.id} className="addon-card">
                <div className="addon-card__header">
                  <h3 className="addon-card__name">{addon.name}</h3>
                  <span className="addon-card__price">{addon.price}</span>
                </div>
                <p className="addon-card__description">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-why">
        <div className="services-why__inner">
          <div className="services-section-header services-section-header--light">
            <h2 className="services-section-header__title">Why Choose E.k Pic</h2>
            <p className="services-section-header__subtitle">
              A commitment to artistry, professionalism, and storytelling that
              lasts.
            </p>
          </div>

          <div className="why-grid">
            {WHY_CHOOSE.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-card__icon-box">{item.icon}</div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-faq">
        <div className="services-faq__inner">
          <div className="services-section-header">
            <h2 className="services-section-header__title">Frequently Asked Questions</h2>
            <p className="services-section-header__subtitle">
              Quick answers to common questions about our packages and process.
            </p>
          </div>

          <div className="services-faq__list">
            <details className="services-faq__item">
              <summary className="services-faq__question">
                What is your availability like?
                <span className="services-faq__icon">+</span>
              </summary>
              <div className="services-faq__answer">
                <p>
                  I typically book 2–4 weeks in advance for any shooting sessions,
                  so I recommend reaching out early. For last-minute requests, get
                  in touch and I'll do my best to accommodate.
                </p>
              </div>
            </details>

            <details className="services-faq__item">
              <summary className="services-faq__question">
                Do you travel for shoots?
                <span className="services-faq__icon">+</span>
              </summary>
              <div className="services-faq__answer">
                <p>
                  Absolutely! I've worked across 5 states in Nigeria and I am also
                  open to working internationally whenever the opportunity comes.
                  Travel fees vary depending on the location and duration of the project.
                </p>
              </div>
            </details>

            <details className="services-faq__item">
              <summary className="services-faq__question">
                How does your pricing work?
                <span className="services-faq__icon">+</span>
              </summary>
              <div className="services-faq__answer">
                <p>
                  I offer tailored packages for each category — Weddings, Events,
                  Birthdays, and more. Prices vary depending on the scope, location,
                  and deliverables. After an initial consultation, I provide a
                  detailed quote with no hidden costs.
                </p>
              </div>
            </details>

            <details className="services-faq__item">
              <summary className="services-faq__question">
                How long until I receive my photos?
                <span className="services-faq__icon">+</span>
              </summary>
              <div className="services-faq__answer">
                <p>
                  Since I want to give you a satisfactory outcome of what you paid
                  for, your pictures are delivered within 72 hours. Rush delivery
                  is available for an additional fee if you need them sooner.
                </p>
              </div>
            </details>

            <details className="services-faq__item">
              <summary className="services-faq__question">
                Can I request specific edits or retouching?
                <span className="services-faq__icon">+</span>
              </summary>
              <div className="services-faq__answer">
                <p>
                  Of course. All packages include professional colour grading and
                  basic retouching. Advanced retouching, skin smoothing, background
                  changes, composite edits is available as an add-on. I always
                  share a proof gallery before final delivery so you can flag any
                  preferences.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="services-final-cta">
        <div className="services-final-cta__overlay"></div>
        <div className="services-final-cta__content">
          <h2 className="services-final-cta__title">
            Not Sure Which Package is Right?
          </h2>
          <p className="services-final-cta__body">
            Book a free 20-minute consultation. We will help you choose the
            perfect package for your story.
          </p>
          <Link to="/contact" className="services-final-cta__btn">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Services
