import { useLanguage } from '../config/useLanguage';

const LABELS = { en: 'EN', de: 'DE', it: 'IT' };

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, languages } = useLanguage();

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {languages.map((l, i) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => setLang(l)}
            className="text-label transition-opacity hover:opacity-65"
            style={{
              color: l === lang ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
              background: 'none',
              border: 'none',
              padding: '4px 6px',
              cursor: 'pointer',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textDecoration: l === lang ? 'underline' : 'none',
              textUnderlineOffset: '3px',
            }}
            aria-label={`Switch to ${LABELS[l]}`}
          >
            {LABELS[l]}
          </button>
          {i < languages.length - 1 && (
            <span style={{ color: 'var(--color-text-muted)', fontSize: '10px' }}>/</span>
          )}
        </span>
      ))}
    </div>
  );
}