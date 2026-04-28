import { motion } from 'framer-motion';
import { SectionHeading, ActionLink } from '../components/SitePrimitives';
import { useContent } from '../config/useContent';

function DivisionBand({ item, index }) {
  const dark = item.tone === 'dark';
  const textColor = dark ? 'var(--color-text-primary)' : 'var(--color-text-primary-inv)';
  const bodyColor = dark ? 'var(--color-text-secondary)' : '#3a3028';
  const eyebrowColor = dark ? 'var(--color-text-muted)' : '#6b5e52';
  const background = dark ? 'var(--color-bg)' : '#f0e8d8';

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

      {/* ── FOUNDER SECTION ── */}
      <FounderSection />
    </div>
  );
}

function FounderSection() {
  return (
    <section style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
      <div
        style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          padding: 'var(--section-padding-y) var(--section-padding-x)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative' }}
        >
          <div
            style={{
              borderRadius: 'var(--radius-card)',
              overflow: 'hidden',
              aspectRatio: '3/4',
              maxHeight: 560,
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
              border: '1px solid var(--color-border)',
            }}
          >
            <img
              src="https://media.base44.com/images/public/69f0a79701cf0cf0776bcacd/b635efc58_619901967_18087549233026863_321123122223403389_n1.jpg"
              alt="Alessio Gentile"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          {/* Accent tag */}
          <div
            style={{
              position: 'absolute',
              bottom: -16,
              right: 24,
              background: 'var(--color-accent)',
              color: 'var(--color-text-on-accent)',
              padding: '10px 20px',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <p className="text-label" style={{ margin: 0, fontSize: 10 }}>Founder & Visionary</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="gold-line" style={{ marginBottom: 20 }} />
          <p className="text-label" style={{ color: 'var(--color-text-muted)', marginBottom: 16 }}>
            THE MIND BEHIND OR NOIR
          </p>
          <h2
            className="text-heading"
            style={{ fontSize: 'var(--text-h2)', color: 'var(--color-text-primary)', margin: '0 0 8px' }}
          >
            ALESSIO
          </h2>
          <h2
            className="text-heading"
            style={{ fontSize: 'var(--text-h2)', color: 'var(--color-accent)', margin: '0 0 32px' }}
          >
            GENTILE.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body-lg)', margin: 0 }}>
              Alessio Gentile is not simply an artist — he is a builder of creative systems. With over two decades of mastery in tattooing, he expanded his vision far beyond the studio, assembling Or Noir Group as a deliberate multi-disciplinary enterprise rooted in dark elegance and relentless craft.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-body)', margin: 0 }}>
              His entrepreneurial journey spans tattoo studio franchising across Switzerland and Germany, the curation of fine sculptural art, and the commissioning of collector-grade miniature worlds — each venture a testament to his conviction that creative excellence and business discipline are not opposites but partners.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-body)', margin: 0 }}>
              Alessio leads Or Noir Group with a founder's mentality: building structures that outlast trends, cultures that attract the right talent, and brands that speak with uncompromising authority. His leadership is defined by atmosphere, precision, and a long-game vision that most are unwilling to play.
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
              marginTop: 40,
              paddingTop: 32,
              borderTop: '1px solid var(--color-border)',
            }}
          >
            {[
              { value: '20+', label: 'Years of Mastery' },
              { value: '3', label: 'Creative Divisions' },
              { value: '2', label: 'Studio Locations' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-display"
                  style={{ fontSize: 'clamp(28px,4vw,40px)', color: 'var(--color-accent)', margin: '0 0 4px' }}
                >
                  {stat.value}
                </p>
                <p className="text-label" style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 10 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}