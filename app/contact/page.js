export const metadata = {
  title: 'Contact | Elite Group LCA',
};

export default function ContactPage() {
  return (
    <main>
      <section className="section page-hero">
        <div className="container center-intro narrow">
          <p className="eyebrow">Contact</p>
          <h1>A cleaner enquiry page with a clearer next step.</h1>
          <p>
            Replace the placeholder details below with your live form embed,
            phone number, service area, and support email.
          </p>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container split-grid">
          <div className="content-panel">
            <h2>Contact details</h2>
            <ul className="feature-list">
              <li>Phone: 01234 567 890</li>
              <li>Email: hello@elitegrouplca.com</li>
              <li>Coverage: London & South East</li>
            </ul>
          </div>
          <div className="content-panel subtle">
            <h2>Form placeholder</h2>
            <form className="fake-form">
              <input type="text" placeholder="Your name" readOnly />
              <input type="email" placeholder="Email address" readOnly />
              <input type="text" placeholder="Company name" readOnly />
              <textarea rows="5" placeholder="Tell us what you need" readOnly />
              <button type="button" className="button">Send enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
