import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'About Us',
  description:
    'Born on the trails. Built by the mountains. The story of IBEX Trekking — founded in 2014 in Dehradun, Uttarakhand.',
};

const TIMELINE = [
  { year: '2014', title: 'Founded in Dehradun', desc: 'Arjun Rawat and two certified guides launch IBEX from a small office on Rajpur Road with three routes and a clear manifesto.' },
  { year: '2016', title: 'Himalayan Certification', desc: 'Full certification from the Himalayan Mountaineering Institute. All guides pass the Advanced Mountain Course.' },
  { year: '2018', title: '1000th Trekker', desc: 'IBEX leads its 1000th trekker to a Himalayan summit — celebrated at the Kedarkantha summit at sunrise.' },
  { year: '2020', title: 'Sustainability Pledge', desc: 'Zero-waste trek policy introduced. Partnered with local communities in Uttarakhand and Sikkim for trail maintenance.' },
  { year: '2023', title: 'National Award', desc: 'Ministry of Tourism recognition for responsible adventure tourism and guide employment practices.' },
];

const TEAM = [
  { name: 'Arjun Rawat', role: 'Founder & Lead Guide', certs: ['HMI Advanced', 'WFR'], img: '/images/team/arjun.jpg' },
  { name: 'Priya Negi', role: 'Operations & Guest Experience', certs: ['First Aid', 'Trek Coordinator'], img: '/images/team/priya.jpg' },
  { name: 'Manish Bisht', role: 'Senior Trek Leader', certs: ['NIMAS', 'WFR'], img: '/images/team/arjun.jpg' },
  { name: 'Deepa Thakur', role: 'Conservation Lead', certs: ['LNT Trainer', 'Naturalist'], img: '/images/team/priya.jpg' },
];

const SUSTAINABILITY = [
  { icon: '♻', title: 'Zero Waste Treks', desc: "Every piece of waste — ours and others' — is packed out. We've removed over 2 tonnes of trail waste since 2020." },
  { icon: '🤝', title: 'Community Employment', desc: '100% of porters and local guides are from Himalayan communities. Fair wages, above-market rates, no exceptions.' },
  { icon: '🦅', title: 'Wildlife Respectful Routes', desc: 'We avoid nesting seasons, wildlife corridors, and fragile meadows. No camping within 100m of water sources.' },
];

const CERTIFICATIONS = [
  'Adventure Tour Operators Assoc.',
  'Himalayan Mountaineering Institute',
  'Leave No Trace India',
  'Ministry of Tourism',
  'Uttarakhand Tourism Board',
];

export default function AboutPage() {
  return (
    <>
      {/* HERO — split screen */}
      <section className="about-hero" aria-label="About IBEX hero">
        <div className="about-hero-image">
          <Image
            src="/images/about-guide.jpg"
            alt="Documentary portrait of an IBEX mountain guide in the Himalayas"
            fill
            priority
            sizes="55vw"
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        </div>
        <div className="about-hero-text topo-bg">
          <div className="about-hero-content">
            <span className="mono-label" style={{ color: 'var(--color-amber)', marginBottom: '1.5rem', display: 'block' }}>OUR STORY</span>
            <h1 className="headline-italic about-hero-heading">
              Born on the trails.<br />Built by the mountains.
            </h1>
            <p className="about-hero-desc">
              IBEX started with three routes, two guides, and a single belief: that the best way to see a mountain is slowly, intentionally, and with someone who calls it home.
            </p>
            <p className="about-hero-desc">
              A decade later, we&apos;ve led 12,000+ trekkers across 48 routes. The belief hasn&apos;t changed.
            </p>
          </div>
          <div className="about-hero-wave" aria-hidden="true" />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding" style={{ background: 'var(--color-snow)' }} aria-label="Company timeline">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>OUR JOURNEY</span>
            <h2 className="section-heading" style={{ fontSize: 'var(--text-5xl)', textAlign: 'center', marginBottom: '4rem' }}>
              A decade on the trail
            </h2>
          </ScrollReveal>

          <div className="timeline">
            <div className="timeline-line" aria-hidden="true" />
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-node" aria-hidden="true" />
                <div className="timeline-card">
                  <span className="mono-label timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="section-padding" style={{ background: 'var(--color-snow-dark)' }} aria-label="Our team">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>THE TEAM</span>
            <h2 className="section-heading" style={{ fontSize: 'var(--text-5xl)', textAlign: 'center', marginBottom: '3rem' }}>
              People who know these mountains
            </h2>
          </ScrollReveal>

          <div className="grid-4 team-grid">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1} className="team-card">
                <div className="team-avatar-wrap">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="team-avatar"
                    style={{ borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-certs">
                  {member.certs.map(c => (
                    <span
                      key={c}
                      className="pill"
                      style={{
                        background: 'rgba(200,96,42,0.1)',
                        color: 'var(--color-amber)',
                        border: '1px solid rgba(200,96,42,0.2)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="sustainability topo-bg section-padding" aria-label="Sustainability">
        <div className="container">
          <ScrollReveal>
            <span className="mono-label" style={{ color: 'var(--color-amber)', display: 'block', textAlign: 'center', marginBottom: '1rem' }}>CONSERVATION</span>
            <h2 className="headline-display" style={{ fontSize: 'var(--text-5xl)', color: 'var(--color-snow)', textAlign: 'center', marginBottom: '3rem' }}>
              We trek lightly.
            </h2>
          </ScrollReveal>
          <div className="grid-3 sustain-grid">
            {SUSTAINABILITY.map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1} className="sustain-block">
                <span className="sustain-icon">{icon}</span>
                <h3 className="sustain-title">{title}</h3>
                <p className="sustain-desc">{desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-padding" style={{ background: 'var(--color-snow)' }} aria-label="Certifications">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span className="mono-label" style={{ color: 'var(--color-amber)', display: 'block', marginBottom: '2rem' }}>
              CERTIFIED &amp; RECOGNISED
            </span>
            <div className="cert-row">
              {CERTIFICATIONS.map(name => (
                <div key={name} className="cert-badge">
                  <div className="cert-logo-placeholder">
                    {name.split(' ').map(w => w[0]).join('').slice(0, 3)}
                  </div>
                  <span className="cert-name">{name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
