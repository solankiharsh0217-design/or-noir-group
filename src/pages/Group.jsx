import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SitePrimitives';
import { useContent } from '../config/useContent';

export default function Group() {
  const { GROUP } = useContent();

  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: 'var(--color-bg)', minHeight: '56vh' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(197,163,106,0.08), transparent 30%), radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05), transparent 30%)' }} />
        <div className="relative z-10 mx-auto flex min-h-[56vh] items-end" style={{ maxWidth: 'var(--content-max-width)', padding: '140px var(--section-padding-x) 70px' }}>
          <div className="max-w-4xl">
            <p className="text-label mb-4" style={{ color: 'var(--color-text-secondary)' }}>{GROUP.hero.eyebrow}</p>
            <div className="gold-line mb-5" />
            <h1 className="text-display mb-5" style={{ fontSize: 'var(--text-h1)', color: 'var(--color-text-primary)' }}>{GROUP.hero.headline}</h1>
            <p className="text-body-lg" style={{ color: 'var(--color-text-secondary)', maxWidth: '760px' }}>{GROUP.hero.subheadline}</p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg-secondary)', padding: 'var(--section-padding-y) 0' }}>
        <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr]" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
          <div>
            <SectionHeading eyebrow={GROUP.story.eyebrow} headline={GROUP.story.headline} />
            <div className="mt-8 flex flex-col gap-6">
              {GROUP.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="surface-card"
            style={{ padding: 'var(--component-padding)' }}
          >
            <p className="text-label mb-3" style={{ color: 'var(--color-accent)' }}>{GROUP.founder.eyebrow}</p>
            <h2 className="text-heading mb-4" style={{ fontSize: 'var(--text-h3)', color: 'var(--color-text-primary)' }}>{GROUP.founder.headline}</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)', marginBottom: '18px' }}>{GROUP.founder.body}</p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)' }}>{GROUP.founder.body2}</p>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: 'var(--section-padding-y) 0' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
          <SectionHeading eyebrow={GROUP.values.eyebrow} headline={GROUP.values.headline} centered />
          <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 xl:grid-cols-4">
            {GROUP.values.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="surface-card"
                style={{ padding: 'var(--component-padding)' }}
              >
                <p className="text-label mb-3" style={{ color: 'var(--color-accent)' }}>0{index + 1}</p>
                <h3 className="text-heading mb-3" style={{ fontSize: 'var(--text-h4)', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)' }}>{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg-tertiary)', padding: 'var(--section-padding-y) 0' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
          <SectionHeading eyebrow={GROUP.connections.eyebrow} headline={GROUP.connections.headline} centered />
          <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-3">
            {GROUP.connections.items.map((item) => (
              <div key={item.title} className="surface-card-light" style={{ padding: 'var(--component-padding)' }}>
                <h3 className="text-heading mb-3" style={{ fontSize: 'var(--text-h4)', color: 'var(--color-text-primary-inv)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted-inv)', fontSize: 'var(--text-body)' }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
