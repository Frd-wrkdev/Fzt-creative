import { useEffect, lazy, Suspense, memo } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

// Performance monitoring
const reportWebVitals = ({ id, name, label, value }) => {
  // Send to analytics
  window.gtag?.('event', name, {
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Performance Metrics',
    event_label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    non_interaction: true,
  });
};
import axios from 'axios';

// Import Hero component eagerly as it's above the fold
import Hero from "./components/Hero";

// Lazy load other components
const Layanan = lazy(() => import("./components/Layanan"));
const ProsesKerja = lazy(() => import("./components/ProsesKerja"));
const Projects = lazy(() => import("./components/Projects"));
const Testimoni = lazy(() => import("./components/Testimoni"));
const HargaPlan = lazy(() => import("./components/HargaPlan"));
const CTASection = lazy(() => import("./components/CTASection"));
const Footer = lazy(() => import("./components/Footer"));
const NotificationPopup = lazy(() => import("./components/NotificationPopup"));

// Initialize React Query with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

// Configure Axios defaults
axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common['X-Powered-By'] = 'FZT Services';

function App() {
  const { scrollYProgress } = useScroll() || { scrollYProgress: 0 };
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll events if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const clickHandler = function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', clickHandler);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', clickHandler);
      });
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Helmet>
          <meta name="generator" content="Vite 4.4" />
          <meta name="framework" content="React 18.2.0" />
          <meta name="ui" content="Tailwind CSS 3.x" />
          <meta name="animation" content="Framer Motion" />
          <meta name="state-management" content="React Query" />
          <meta name="analytics" content="Vercel Analytics" />
          <meta name="http-client" content="Axios" />
          <meta name="deployment" content="Vercel" />
          <link rel="preconnect" href="https://vitejs.dev" />
          <link rel="preconnect" href="https://tailwindcss.com" />
        </Helmet>

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform origin-left z-50"
          style={{ scaleX }}
        />        <div className="relative overflow-x-hidden">
          <Hero />
          <Suspense fallback={<div className="h-screen flex items-center justify-center">
            <div className="animate-pulse text-blue-500">Loading...</div>
          </div>}>
            <Layanan />
            <ProsesKerja />
            <Projects />
            <Testimoni />
            <HargaPlan />
            <CTASection />
            <Footer />
          </Suspense>
          <Suspense fallback={null}>
            <NotificationPopup />
          </Suspense>
        </div>
        <Analytics />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;