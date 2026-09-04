import { Link } from 'react-router-dom'
import { useState } from 'react'

const MINI_FAQ = [
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking 3–6 months ahead for weddings and 2–4 weeks for portraits and events. Last-minute requests are welcome when our calendar allows.',
  },
  {
    question: 'Do you travel outside Lagos?',
    answer:
      'Absolutely. We regularly shoot across Nigeria and West Africa. Travel fees are calculated based on location and included in your custom quote.',
  },
  {
    question: 'What is your payment structure?',
    answer:
      'We require a 50% retainer to secure your date, with the remaining balance due one week before the shoot. Flexible payment plans are available for large events.',
  },
]

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/ekpic',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/ekpic',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: 'https://pinterest.com/ekpic',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="8" x2="12" y2="21" />
        <path d="M5 12.5C5 12.5 6.5 11 9.5 11C13.5 11 15 13.5 15 16C15 18.5 13 21 9.5 21C6 21 4 18.5 4 15.5C4 12.5 6 8 12 5C12 5 19 2 19 9C19 12 16 13.5 14 13" />
      </svg>
    ),
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    location: '',
    budget: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: backend integration to be added later
    // eslint-disable-next-line no-console
    console.log('Booking inquiry:', formData)
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      location: '',
      budget: '',
      message: '',
    })
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__overlay"></div>
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Get in Touch</h1>
          <p className="contact-hero__subtitle">
            Ready to book? Let&apos;s create something beautiful together.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main__inner">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="contact-form__title">Book a Session</h2>
              <p className="contact-form__intro">
                Tell us a little about your event or project and we&apos;ll send
                you a custom quote within 24 hours.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span className="contact-form__label">Full Name *</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                    />
                  </label>
                  <label className="contact-form__field">
                    <span className="contact-form__label">Email Address *</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                    />
                  </label>
                </div>

                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span className="contact-form__label">Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 801 234 5678"
                    />
                  </label>
                  <label className="contact-form__field">
                    <span className="contact-form__label">Service Type *</span>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="birthday">Birthday Session</option>
                      <option value="event">Event Coverage</option>
                      <option value="fashion">Fashion & Editorial</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>

                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span className="contact-form__label">Event / Shoot Date</span>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="contact-form__field">
                    <span className="contact-form__label">Location</span>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Lagos, Nigeria"
                    />
                  </label>
                </div>

                <label className="contact-form__field">
                  <span className="contact-form__label">Budget Range</span>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a budget range
                    </option>
                    <option value="below-150k">Below ₦150,000</option>
                    <option value="150k-300k">₦150,000 – ₦300,000</option>
                    <option value="300k-500k">₦300,000 – ₦500,000</option>
                    <option value="500k-1m">₦500,000 – ₦1,000,000</option>
                    <option value="above-1m">Above ₦1,000,000</option>
                  </select>
                </label>

                <label className="contact-form__field">
                  <span className="contact-form__label">Tell us about your vision *</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Share details about your event, style preferences, or any questions..."
                    required
                  ></textarea>
                </label>

                <button type="submit" className="contact-form__submit">
                  Send Inquiry
                </button>

                <p className="contact-form__privacy">
                  Your information is kept private and only used to respond to
                  your inquiry.
                </p>
              </form>
            </div>

            <aside className="contact-info-card">
              <h3 className="contact-info-card__title">Contact Details</h3>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-item__label">Email</span>
                  <a
                    className="contact-info-item__value"
                    href="mailto:hello@ekpic.studio"
                  >
                    hello@ekpic.studio
                  </a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-item__label">Phone</span>
                  <a
                    className="contact-info-item__value"
                    href="tel:+2348012345678"
                  >
                    +234 801 234 5678
                  </a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-item__label">Studio</span>
                  <span className="contact-info-item__value">
                    12A Admiralty Way, Lekki Phase 1, Lagos, Nigeria
                  </span>
                </div>
              </div>

              <div className="contact-socials">
                <span className="contact-socials__label">Follow Us</span>
                <div className="contact-socials__links">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-socials__link"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-hours">
                <span className="contact-hours__label">Business Hours</span>
                <ul className="contact-hours__list">
                  <li>
                    <span>Mon – Fri</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>10:00 AM – 4:00 PM</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              <div className="contact-response">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>We reply within 24 hours</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-trust">
        <div className="contact-trust__inner">
          <div className="contact-trust__quote">
            <svg
              className="contact-trust__quote-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote>
              E.k captured our wedding with such artistry. Every image feels like
              a scene from a film. We couldn&apos;t have asked for a better
              storyteller.
            </blockquote>
            <cite>— Amara &amp; Chidi, Lagos Wedding</cite>
          </div>

          <div className="contact-trust__photographer">
            <img
              src="/src/assets/photographer.png"
              alt="E.k — Professional Photographer"
              className="contact-trust__avatar"
            />
            <div className="contact-trust__photographer-info">
              <span className="contact-trust__name">E.k</span>
              <span className="contact-trust__role">
                Founder &amp; Lead Photographer
              </span>
              <span className="contact-trust__award">
                African Photography Award Winner
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-faq">
        <div className="contact-faq__inner">
          <h2 className="contact-faq__title">Booking Questions</h2>
          <div className="contact-faq__list">
            {MINI_FAQ.map((item, index) => (
              <details key={index} className="contact-faq__item">
                <summary className="contact-faq__question">
                  {item.question}
                  <span className="contact-faq__icon">+</span>
                </summary>
                <div className="contact-faq__answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="contact-map__frame">
          <iframe
            title="E.k Pic Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.574780575681!2d3.458563314770544!3d6.44690489533367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d6a0e0c3c9%3A0x5e6c2e9b8d6e6c0e!2sLekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  )
}

export default Contact
