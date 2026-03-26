import Link from 'next/link';
import { services, stats, testimonials } from './data';

export function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Elite Group LCA</p>
          <h1>Print solutions that feel as professional as your business.</h1>
          <p className="lead">
            Managed print, copier, production print, and AV support presented in
            a cleaner, more premium way.
          </p>
          <div className="button-row">
            <Link href="/contact" className="button">
              Get a quote
            </Link>
            <Link href="/services" className="button button-secondary">
              Explore services
            </Link>
          </div>
        </div>
        <div className="hero-card glass">
          <div className="hero-card-top">
            <p className="eyebrow invert">Elite service</p>
            <h2>Cleaner layout. Stronger trust. Better enquiries.</h2>
            <p>
              This coded version is set up to feel more modern, spacious, and
              conversion-focused than a typical builder site.
            </p>
          </div>
          <div className="mini-grid">
            <div className="mini-card">
              <span>Navigation</span>
              <strong>Simplified</strong>
            </div>
            <div className="mini-card">
              <span>Messaging</span>
              <strong>Sharper</strong>
            </div>
            <div className="mini-card">
              <span>Style</span>
              <strong>More premium</strong>
            </div>
            <div className="mini-card">
              <span>CTAs</span>
              <strong>More visible</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section className="section compact-top">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="section" id="services">
      <div className="container center-intro narrow">
        <p className="eyebrow">Core services</p>
        <h2>Reframing your services with a cleaner, more premium presentation.</h2>
        <p>
          Each service gets space to breathe, a clear message, and a stronger
          visual hierarchy.
        </p>
      </div>
      <div className="container card-grid four-up">
        {services.map((service) => (
          <article className="service-card" key={service.slug}>
            <div className="image-placeholder" />
            <h3>{service.name}</h3>
            <p>{service.summary}</p>
            <Link href={`/services/${service.slug}`}>Learn more →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DarkValueSection() {
  return (
    <section className="section dark">
      <div className="container split-grid">
        <div>
          <p className="eyebrow invert">Why choose Elite</p>
          <h2>Experience, service, and support — presented with more confidence.</h2>
        </div>
        <div className="dark-panel">
          <p>
            Your trust signals deserve a better stage. This section is built for
            fast response, uptime, support quality, and long-term value.
          </p>
          <ul className="feature-list">
            <li>Fast-response engineers</li>
            <li>High uptime equipment</li>
            <li>Long-term cost control</li>
            <li>Trusted supplier relationships</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section">
      <div className="container center-intro narrow">
        <p className="eyebrow">Client confidence</p>
        <h2>Short, clean testimonials that keep the trust signal high.</h2>
      </div>
      <div className="container card-grid three-up">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.quote}>
            <p>“{item.quote}”</p>
            <strong>{item.name}</strong>
            <span>{item.company}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section last-section">
      <div className="container cta-box">
        <p className="eyebrow">Next step</p>
        <h2>Ready to upgrade your print setup?</h2>
        <p>
          Swap in your real phone number, email address, and enquiry form and
          this is ready to go live.
        </p>
        <div className="button-row center">
          <Link href="/contact" className="button">
            Get a quote
          </Link>
          <Link href="/contact" className="button button-secondary">
            Speak to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
