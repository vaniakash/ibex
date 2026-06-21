import ContactFormClient from '@/components/contact/ContactFormClient';
import FaqAccordion from '@/components/contact/FaqAccordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the IBEX team. We answer every query personally — no bots, no auto-replies.',
};

const FAQ_ITEMS = [
  {
    q: 'How difficult are IBEX treks for a first-timer?',
    a: "We label each trek clearly — Easy, Moderate, Hard, or Extreme. Kedarkantha and Valley of Flowers are excellent for first-timers with basic fitness. We never let an unprepared trekker attempt a hard route.",
  },
  {
    q: 'What is included in the price?',
    a: "All trek accommodation (camping or guesthouse), all meals from Day 1 to the last day, a certified guide, safety equipment, and all required forest and national park permits.",
  },
  {
    q: 'Can I cancel or reschedule my booking?',
    a: "Full refund if cancelled 30+ days before the trek. 50% refund for 15–29 days. No refund within 14 days, but you can reschedule once to any future date at no charge.",
  },
  {
    q: 'Do you arrange transport from Delhi or Dehradun?',
    a: "We can arrange transport at an additional cost. Just let us know when booking — we work with reliable operators who know the mountain roads.",
  },
  {
    q: 'Is travel insurance mandatory?',
    a: "Strongly recommended for Hard and Extreme treks. Mandatory for Chadar and Pin Parvati — we will not allow you to trek without proof of high-altitude insurance on those routes.",
  },
  {
    q: 'What fitness level do I need?',
    a: "For Easy treks: 45-minute jogging capacity. Moderate: 2–3 gym sessions per week. Hard: regular trekking experience with altitude exposure. Extreme: technical mountain experience required. We provide a detailed fitness guide on booking.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="contact-hero topo-bg" aria-label="Contact hero">
        <div className="container">
          <span className="mono-label contact-hero-label">GET IN TOUCH</span>
          <h1 className="headline-display contact-hero-heading">
            We answer every query<br />personally. No bots.
          </h1>
          <p className="contact-hero-sub">
            Whether you're planning your first trek or your fifteenth, drop us a message. Our team responds within 4 hours on working days.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-snow)' }}
        aria-label="Contact details and form"
      >
        <div className="container">
          <div className="contact-grid">
            {/* LEFT — Info */}
            <div className="contact-info">
              <ScrollReveal className="contact-block">
                <span className="mono-label contact-block-label">CALL US</span>
                <a href="tel:+918126000000" className="contact-value">+91 81260 00000</a>
                <p className="contact-sub">Mon–Sat, 9am–7pm IST</p>
              </ScrollReveal>

              <ScrollReveal className="contact-block" delay={0.08}>
                <span className="mono-label contact-block-label">EMAIL</span>
                <a href="mailto:hello@ibextrekking.com" className="contact-value contact-email">
                  hello@ibextrekking.com
                </a>
                <p className="contact-sub">Replies within 4 hours on working days</p>
              </ScrollReveal>

              <ScrollReveal className="contact-block" delay={0.12}>
                <span className="mono-label contact-block-label">VISIT US</span>
                <span className="contact-value">42, Rajpur Road</span>
                <p className="contact-sub">Dehradun, Uttarakhand 248001</p>
              </ScrollReveal>

              <ScrollReveal className="contact-block" delay={0.16}>
                <span className="mono-label contact-block-label">WHATSAPP</span>
                <a
                  href="https://wa.me/918126000000?text=Hi%20IBEX%21%20I%20have%20a%20question%20about%20a%20trek."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-amber wa-contact-btn"
                  id="contact-whatsapp-btn"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </ScrollReveal>

              {/* Map pin block */}
              <div className="map-block" aria-label="Office location map placeholder">
                <div className="map-inner">
                  <span className="map-pin" aria-hidden="true">📍</span>
                  <span className="mono-label" style={{ fontSize: '0.65rem', color: 'rgba(245,240,232,0.55)', textAlign: 'center' }}>
                    RAJPUR ROAD<br />DEHRADUN, UTTARAKHAND
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div>
              <ContactFormClient />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-padding"
        style={{ background: 'var(--color-snow-dark)' }}
        aria-label="Frequently asked questions"
      >
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>FAQ</span>
            <h2
              className="section-heading"
              style={{ fontSize: 'var(--text-4xl)', textAlign: 'center', marginBottom: '3rem' }}
            >
              Common Questions
            </h2>
          </ScrollReveal>
          <div className="faq-list" role="list" style={{ maxWidth: 760, margin: '0 auto' }}>
            {FAQ_ITEMS.map((item, i) => (
              <FaqAccordion key={i} question={item.q} answer={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
