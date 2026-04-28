import { Link } from 'react-router-dom';
import { useContent } from '../config/useContent';
import { OR_NOIR_LOGO_URL } from '../config/brand';

export default function Footer() {
  const { FOOTER } = useContent();

  return (
    <footer style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--content-max-width)', padding: '72px var(--section-padding-x) 36px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <img
              src={OR_NOIR_LOGO_URL}
              alt="Or Noir Group"
              className="h-14 w-auto object-contain"
              style={{ maxWidth: '200px' }}
            />
            <p className="mt-6 text-body-lg" style={{ color: 'var(--color-text-secondary)', maxWidth: '460px' }}>
              {FOOTER.tagline}
            </p>
          </div>

          <div>
            <p className="text-label mb-4" style={{ color: 'var(--color-text-secondary)' }}>{FOOTER.linksTitle}</p>
            <div className="flex flex-col gap-3">
              {FOOTER.links.map((item) => (
                <Link key={item.path} to={item.path} style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-body)' }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-label mb-4" style={{ color: 'var(--color-text-secondary)' }}>{FOOTER.divisionsTitle}</p>
            <div className="flex flex-col gap-3">
              {FOOTER.divisions.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-body)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-caption)' }}>
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
