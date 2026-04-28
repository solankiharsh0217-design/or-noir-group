import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { LanguageProvider } from '../config/useLanguage';

export default function Layout() {
  return (
    <LanguageProvider>
      <Navigation />
      <main style={{ paddingTop: '72px' }}>
        <Outlet />
      </main>
      <Footer />
    </LanguageProvider>
  );
}