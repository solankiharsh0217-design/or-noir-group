import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../config/useContent';
import { OR_NOIR_LOGO_URL } from '../config/brand';
import LanguageSwitcher from './LanguageSwitcher';
import { ActionLink } from './SitePrimitives';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { NAV } = useContent();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navStyle = {
    background: scrolled ? 'rgba(13,13,13,0.92)' : 'rgba(13,13,13,0.42)',
    backdropFilter: 'blur(14px)',
    borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.32 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={navStyle}
      >
        <div
          className="mx-auto flex items-center justify-between gap-8"
          style={{ maxWidth: 'var(--content-max-width)', padding: '16px var(--section-padding-x)' }}
        >
          <Link to="/" className="flex items-center gap-4">
            <img
              src={OR_NOIR_LOGO_URL}
              alt="Or Noir Group"
              className="h-12 w-auto object-contain"
              style={{ maxWidth: '190px' }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV.links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-label"
                style={{
                  color: location.pathname === link.path ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  textDecoration: location.pathname === link.path ? 'underline' : 'none',
                  textUnderlineOffset: '5px',
                }}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <ActionLink to={NAV.ctaPath} secondary>{NAV.cta}</ActionLink>
          </div>

          <button
            className="lg:hidden"
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{ color: 'var(--color-text-primary)', background: 'none', border: 'none', padding: 0 }}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60]"
            style={{ background: 'rgba(13,13,13,0.98)' }}
          >
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6"
              style={{ color: 'var(--color-text-primary)', background: 'none', border: 'none' }}
            >
              <X size={28} />
            </button>

            <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
              {[{ label: NAV.homeLabel, path: '/' }, ...NAV.links].map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.28 }}
                >
                  <Link
                    to={link.path}
                    className="text-heading"
                    style={{ fontSize: 'var(--text-h2)', color: 'var(--color-text-primary)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <LanguageSwitcher />
              <ActionLink to={NAV.ctaPath}>{NAV.cta}</ActionLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}