import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

export function SeoManager() {
  const { t } = useTranslation();
  const location = useLocation();
  const { theme } = useTheme();

  const [currentHash, setCurrentHash] = useState(window.location.hash);

  // Escuchar cambios de hash (activados por el scroll del Navbar)
  useEffect(() => {
    const handleHashUpdate = () => setCurrentHash(window.location.hash);
    window.addEventListener('scroll', handleHashUpdate);
    window.addEventListener('hashchange', handleHashUpdate);
    return () => {
      window.removeEventListener('scroll', handleHashUpdate);
      window.removeEventListener('hashchange', handleHashUpdate);
    };
  }, []);

  const getSeoData = () => {
    const { pathname } = location;
    const hash = currentHash; // Usamos el estado local que se actualiza con el scroll

    if (pathname === '/') {
      if (hash === '#about') return { title: t('seo.about_title'), desc: t('seo.about_desc') };
      if (hash === '#projects') return { title: t('seo.projects_title'), desc: t('seo.projects_desc') };
      if (hash === '#experience') return { title: t('seo.experience_title'), desc: t('seo.experience_desc') };
      if (hash === '#contact') return { title: t('seo.contact_title'), desc: t('seo.contact_desc') };
      return { title: t('seo.home_title'), desc: t('seo.home_desc') };
    }

  if (pathname === '/blog') {
    return { title: t('seo.blog_title'), desc: t('seo.blog_desc') };
  }
  if (pathname.startsWith('/blog/')) {
    return { title: `${t('seo.reading')}...`, desc: t('seo.blog_post_desc') };
  }
}
const { title, desc } = getSeoData();

  return (
    <>
      <title>idavid80 | Portfolio</title>
      <meta name="description" content={desc} />
      <meta name="theme-color" content={theme === 'dark' ? '#0f172a' : '#ffffff'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content="https://portfolio-idavid80.vercel.app.com" />
        <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "David Domínguez Bueno",
      "jobTitle": "Full Stack Developer",
      "url": "https://portfolio-idavid80.vercel.app.com",
      "sameAs": ["https://github.com/idavid80"]
    })}
  </script>
    </>
  );
}