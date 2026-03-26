export const metadata = {
  title: 'About | Elite Group LCA',
};

export default function AboutPage() {
  return (
    <main>
      <section className="section page-hero">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">About Elite</p>
            <h1>A more credible, modern way to tell your company story.</h1>
          </div>
          <div className="content-panel subtle">
            <p>
              This page is designed to present your history, service culture, and
              technical credibility without feeling dated or text-heavy.
            </p>
          </div>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container split-grid">
          <div className="content-panel">
            <h2>What to add here</h2>
            <ul className="feature-list">
              <li>Company background and years trading</li>
              <li>Areas covered</li>
              <li>Engineer and support team strengths</li>
              <li>Approach to long-term client relationships</li>
            </ul>
          </div>
          <div className="content-panel">
            <h2>Why it works</h2>
            <p>
              Buyers often judge competence from presentation first. A cleaner
              About page helps the company feel stable, modern, and easier to
              trust before they ever speak to sales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
