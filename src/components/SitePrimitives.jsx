import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SectionHeading({ eyebrow, headline, body, centered = false, light = false }) {
  const textColor = light ? 'var(--color-text-primary-inv)' : 'var(--color-text-primary)';
  const bodyColor = light ? 'var(--color-text-muted-inv)' : 'var(--color-text-secondary)';
  const eyebrowColor = light ? 'var(--color-text-muted-inv)' : 'var(--color-text-secondary)';

  return (
    <div style={{ textAlign: centered ? 'center' : 'left', maxWidth: centered ? '820px' : '720px', margin: centered ? '0 auto' : 0 }}>
      <p className="text-label mb-4" style={{ color: eyebrowColor }}>{eyebrow}</p>
      <div className={centered ? 'mx-auto mb-5 gold-line' : 'mb-5 gold-line'} />
      <h2 className="text-heading mb-4" style={{ fontSize: 'var(--text-h2)', color: textColor }}>{headline}</h2>
      {body ? (
        <p className="text-body-lg" style={{ color: bodyColor }}>{body}</p>
      ) : null}
    </div>
  );
}

export function ActionLink({ to, href, children, secondary = false, external = false }) {
  const className = `action-link ${secondary ? 'action-link-secondary' : 'action-link-primary'}`;
  const icon = external ? <ArrowUpRight size={16} /> : <ArrowRight size={16} />;

  if (to) {
    return (
      <Link to={to} className={className}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={className}>
      <span>{children}</span>
      {icon}
    </a>
  );
}
