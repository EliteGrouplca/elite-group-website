import Link from 'next/link';
import { services } from '@/components/data';

export const metadata = {
  title: 'Services | Elite Group LCA',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section page-hero">
        <div className="container center-intro narrow">
          <p className="eyebrow">Services</p>
          <h1>Clearer service pages for stronger buying confidence.</h1>
          <p>
            This page gives you one place to present your core offers, each with
            a cleaner structure and clearer next step.
          </p>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container card-grid two-up">
          {services.map((service) => (
            <article key={service.slug} className="service-card large-card">
              <div className="image-placeholder tall" />
              <p className="eyebrow small">{service.eyebrow}</p>
              <h2>{service.name}</h2>
              <p>{service.detail}</p>
              <Link href={`/services/${service.slug}`}>Open service page →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
