import { motion } from 'framer-motion';
import { SectionHeading, ActionLink } from '../components/SitePrimitives';
import { useContent } from '../config/useContent';

const snap = [0.16, 1, 0.3, 1];

function DivisionCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: snap }}
      className="surface-card overflow-hidden"
    >
      <div
        className="hero-panel"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.7)), url(${card.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute left-5 right-5 bottom-5 z-10">
          <p className="text-label mb-2" style={{ color: 'var(--color-text-secondary)' }}>{card.category}</p>
          <h3 className="text-heading" style={{ fontSize: 'var(--text-h3)', color: 'var(--color-text-primary)' }}>{card.name}</h3>
        </div>
      </div>

      <div style={{ padding: 'var(--component-padding)' }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)' }}>{card.description}</p>
        <div className="mt-6">
          <ActionLink href={card.link} external secondary>{card.cta}</ActionLink>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const { HOME } = useContent();

  return (
    <div style={{ overflow: 'hidden' }}>
      <section className="relative min-h-screen" style={{ background: 'var(--color-bg)' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.76) 40%, rgba(13,13,13,0.46) 100%), url(${HOME.hero.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(197,163,106,0.16), transparent 35%)' }} />

        <div
          className="relative z-10 mx-auto flex min-h-screen flex-col justify-center"
          style={{ maxWidth: 'var(--content-max-width)', padding: '120px var(--section-padding-x) 90px' }}
        >
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: snap }} className="text-label mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              {HOME.hero.eyebrow}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.1, ease: snap }} className="text-display" style={{ fontSize: 'var(--text-hero)', color: 'var(--color-text-primary)' }}>
              {HOME.hero.headline1}
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.18, ease: snap }} className="text-display mb-6" style={{ fontSize: 'var(--text-hero)', color: 'var(--color-text-primary)' }}>
              {HOME.hero.headline2}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.32, delay: 0.3 }} className="text-body-lg mb-5" style={{ color: 'var(--color-text-secondary)', maxWidth: '700px' }}>
              {HOME.hero.subheadline}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.32, delay: 0.38 }} style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)', maxWidth: '660px' }}>
              {HOME.hero.supporting}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: 0.48, ease: snap }} className="mt-10 flex flex-wrap gap-4">
              <ActionLink to="/divisions">{HOME.hero.cta}</ActionLink>
              <ActionLink to="/group" secondary>{HOME.hero.secondaryCta}</ActionLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.6, ease: snap }}
            className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {HOME.divisions.cards.map((card) => (
              <div key={card.name} className="surface-card" style={{ padding: '20px 22px' }}>
                <p className="text-label mb-2" style={{ color: 'var(--color-accent)' }}>{card.category}</p>
                <p className="text-heading" style={{ fontSize: 'var(--text-h4)', color: 'var(--color-text-primary)' }}>{card.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg-secondary)', padding: 'var(--section-padding-y) 0' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
          <SectionHeading eyebrow={HOME.statement.eyebrow} headline={HOME.statement.headline} body={HOME.statement.body} />
        </div>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: 'var(--section-padding-y) 0' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
          <SectionHeading eyebrow={HOME.divisions.eyebrow} headline={HOME.divisions.headline} body={HOME.divisions.subheadline} />
          <div className="grid grid-cols-1 gap-6 pt-12 lg:grid-cols-3">
            {HOME.divisions.cards.map((card, index) => (
              <DivisionCard key={card.name} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg-tertiary)', padding: 'var(--section-padding-y) 0' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
          <SectionHeading eyebrow={HOME.outlook.eyebrow} headline={HOME.outlook.headline} centered />
          <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-3">
            {HOME.outlook.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="surface-card"
                style={{ padding: 'var(--component-padding)' }}
              >
                <h3 className="text-heading mb-3" style={{ fontSize: 'var(--text-h4)', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)' }}>{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
