import { motion } from 'framer-motion';
import { SectionHeading, ActionLink } from '../components/SitePrimitives';
import { useContent } from '../config/useContent';

function DivisionBand({ item, index }) {
  const dark = item.tone === 'dark';
  const textColor = dark ? 'var(--color-text-primary)' : 'var(--color-text-primary-inv)';
  const bodyColor = dark ? 'var(--color-text-secondary)' : 'var(--color-text-muted-inv)';
  const eyebrowColor = dark ? 'var(--color-text-secondary)' : 'var(--color-text-muted-inv)';
  const background = dark ? 'var(--color-bg)' : 'var(--color-bg-tertiary)';

  return (
    <section style={{ background, padding: 'var(--section-padding-y) 0' }}>
      <div className="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
          <p className="text-label mb-4" style={{ color: eyebrowColor }}>{item.eyebrow}</p>
          <div className="gold-line mb-5" />
          <h2 className="text-heading mb-5" style={{ fontSize: 'var(--text-h1)', color: textColor }}>{item.headline}</h2>
          <p className="text-body-lg mb-6" style={{ color: bodyColor }}>{item.body}</p>
          <div className="flex flex-col gap-3 mb-8">
            {item.highlights.map((highlight) => (
              <div key={highlight} className={dark ? 'surface-card' : 'surface-card-light'} style={{ padding: '16px 18px' }}>
                <p style={{ color: dark ? 'var(--color-text-secondary)' : 'var(--color-text-muted-inv)', fontSize: 'var(--text-body)' }}>{highlight}</p>
              </div>
            ))}
          </div>
          <ActionLink href={item.link} external secondary={!dark}>{item.cta}</ActionLink>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.48 }}
          className={index % 2 === 1 ? 'lg:order-1' : ''}
        >
          <div
            className="hero-panel"
            style={{
              minHeight: '520px',
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.76)), url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: dark ? '1px solid var(--color-border)' : '1px solid rgba(255,255,255,0.08)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function Divisions() {
  const { DIVISIONS } = useContent();

  return (
    <div>
      <section style={{ background: 'var(--color-bg-secondary)', padding: '140px 0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
          <SectionHeading eyebrow={DIVISIONS.hero.eyebrow} headline={DIVISIONS.hero.headline} body={DIVISIONS.hero.subheadline} />
        </div>
      </section>

      {DIVISIONS.items.map((item, index) => (
        <DivisionBand key={item.headline} item={item} index={index} />
      ))}
    </div>
  );
}
