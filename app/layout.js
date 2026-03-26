import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Elite Group LCA',
  description: 'Modern print management, copier, and production print solutions.',
};

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-shell">
            <Link href="/" className="brand" aria-label="Elite Group home">
              <img
                src="/logo.png"
                alt="Elite Group"
                style={{ height: '40px', width: 'auto' }}
              />
            </Link>

            <nav className="nav">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="nav-actions">
              <Link className="button button-secondary hide-mobile" href="/contact">
                Get a quote
              </Link>
              <Link className="button" href="/contact">
                Request callout
              </Link>
            </div>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <img
                src="/logo.png"
                alt="Elite Group"
                style={{ height: '40px', width: 'auto' }}
              />
              <p>
                A modern, high-trust website concept for managed print, copier,
                production print, and AV services.
              </p>
            </div>

            <div>
              <h4>Pages</h4>
              <ul>
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li>hello@elitegrouplca.com</li>
                <li>01234 567 890</li>
                <li>London & South East coverage</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
