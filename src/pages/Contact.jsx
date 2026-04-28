import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { SectionHeading, ActionLink } from '../components/SitePrimitives';
import { useContent } from '../config/useContent';

export default function Contact() {
  const { CONTACT } = useContent();
  const { hero, info, form: formContent } = CONTACT;
  const { register, handleSubmit } = useForm();
  const [draftHref, setDraftHref] = useState(null);

  const inputStyle = {
    background: 'transparent',
    border: '1px solid var(--color-border)',
    padding: '14px 16px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body)',
    color: 'var(--color-text-primary)',
    width: '100%',
    outline: 'none',
    borderRadius: '8px',
    transition: 'border-color 200ms ease',
  };

  const onSubmit = (data) => {
    const body = [
      `${formContent.fields.name}: ${data.name || ''}`,
      `${formContent.fields.email}: ${data.email || ''}`,
      `${formContent.fields.organization}: ${data.organization || ''}`,
      `${formContent.fields.type}: ${data.type || ''}`,
      '',
      data.message || '',
    ].join('\n');

    const href = `mailto:${info.email}?subject=${encodeURIComponent(formContent.subject)}&body=${encodeURIComponent(body)}`;
    setDraftHref(href);
    window.location.href = href;
  };

  return (
    <div>
      <section style={{ background: 'var(--color-bg-secondary)', padding: '140px 0 80px' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
          <SectionHeading eyebrow={hero.eyebrow} headline={hero.headline} body={hero.subheadline} />
        </div>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: 'var(--section-padding-y) 0' }}>
        <div className="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]" style={{ maxWidth: 'var(--content-max-width)', padding: '0 var(--section-padding-x)' }}>
          <div className="surface-card" style={{ padding: 'var(--component-padding)' }}>
            <p className="text-label mb-4" style={{ color: 'var(--color-accent)' }}>{info.label}</p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} style={{ color: 'var(--color-accent)', marginTop: '3px' }} />
                  <div>
                  <p className="text-heading" style={{ fontSize: 'var(--text-h4)', color: 'var(--color-text-primary)' }}>{info.addressLabel}</p>
                  <p style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-body)', marginBottom: '4px' }}>{info.company}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)' }}>{info.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={18} style={{ color: 'var(--color-accent)', marginTop: '3px' }} />
                <div>
                  <p className="text-heading" style={{ fontSize: 'var(--text-h4)', color: 'var(--color-text-primary)' }}>{info.emailLabel}</p>
                  <a href={`mailto:${info.email}`} style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)' }}>{info.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={18} style={{ color: 'var(--color-accent)', marginTop: '3px' }} />
                <div>
                  <p className="text-heading" style={{ fontSize: 'var(--text-h4)', color: 'var(--color-text-primary)' }}>{info.phoneLabel}</p>
                  <a href={`tel:${info.phone}`} style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)' }}>{info.phone}</a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-label mb-4" style={{ color: 'var(--color-text-secondary)' }}>{info.routingLabel}</p>
              <div className="flex flex-col gap-3">
                {info.routing.map((item) => (
                  <div key={item} className="surface-card" style={{ padding: '14px 16px' }}>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow={formContent.eyebrow} headline={formContent.headline} body={formContent.helper} />
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit(onSubmit)}
              className="surface-card mt-8 flex flex-col gap-4"
              style={{ padding: 'var(--component-padding)' }}
            >
              <input {...register('name')} placeholder={formContent.fields.name} style={inputStyle} />
              <input {...register('email')} placeholder={formContent.fields.email} type="email" style={inputStyle} />
              <input {...register('organization')} placeholder={formContent.fields.organization} style={inputStyle} />
              <select {...register('type')} defaultValue="" style={{ ...inputStyle, appearance: 'none' }}>
                <option value="" disabled>{formContent.fields.type}</option>
                {formContent.fields.typeOptions.map((option) => (
                  <option key={option} value={option} style={{ background: '#161616', color: '#ffffff' }}>
                    {option}
                  </option>
                ))}
              </select>
              <textarea {...register('message')} placeholder={formContent.fields.message} rows={6} style={{ ...inputStyle, resize: 'vertical' }} />

              {draftHref ? (
                <div className="flex flex-col gap-3 pt-2">
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)' }}>{formContent.success}</p>
                  <ActionLink href={draftHref} external>{formContent.emailCta}</ActionLink>
                  <button
                    type="button"
                    onClick={() => setDraftHref(null)}
                    className="text-label inline-flex items-center gap-2"
                    style={{ color: 'var(--color-text-secondary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  >
                    <span>{formContent.resetCta}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              ) : (
                <button type="submit" className="action-link action-link-primary" style={{ border: 'none', justifyContent: 'center' }}>
                  {formContent.cta}
                </button>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
