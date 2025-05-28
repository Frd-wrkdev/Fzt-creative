import { useEffect } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import axios from 'axios';
import Hero from "./components/Hero";
import Layanan from "./components/Layanan";
import ProsesKerja from "./components/ProsesKerja";
import Projects from "./components/Projects";
import Testimoni from "./components/Testimoni";
import HargaPlan from "./components/HargaPlan";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import NotificationPopup from "./components/NotificationPopup";

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
        />

        <div className="relative overflow-x-hidden">
          <Hero />
          <Layanan />
          <ProsesKerja />
          <Projects />
          <Testimoni />
          <HargaPlan />
          <CTASection />
          <Footer />
          <NotificationPopup />
        </div>
        <Analytics />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;