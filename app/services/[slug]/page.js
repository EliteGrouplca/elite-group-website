import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/components/data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) return notFound();

  return (
    <main>
      <section className="section page-hero">
        <div className="container split-grid service-detail-top">
          <div>
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.name}</h1>
            <p className="lead smaller">{service.summary}</p>
            <div className="button-row">
              <Link href="/contact" className="button">
                Request a quote
              </Link>
              <Link href="/services" className="button button-secondary">
                Back to services
              </Link>
            </div>
          </div>
          <div className="detail-visual" />
        </div>
      </section>

      <section className="section compact-top">
        <div className="container split-grid">
          <div className="content-panel">
            <h2>What this page is for</h2>
            <p>{service.detail}</p>
            <p>
              Replace this placeholder copy with real product ranges,
              manufacturer partnerships, service levels, turnaround times, and
              proof points.
            </p>
          </div>
          <aside className="content-panel subtle">
            <h3>Suggested blocks</h3>
            <ul className="feature-list">
              <li>Recommended hardware or solution types</li>
              <li>Service response coverage</li>
              <li>Typical use cases</li>
              <li>Case study or testimonial</li>
              <li>Quote request form</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
