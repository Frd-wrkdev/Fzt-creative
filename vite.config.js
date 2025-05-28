import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin for security headers
const securityHeaders = () => ({
  name: 'security-headers',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), securityHeaders()],
  server: {
    hmr: false  // Disable HMR
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', '@vercel/analytics', 'react-query', 'axios']
  },
 
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor": ["react", "react-dom"],
          "ui": ["framer-motion"]
        }
      }
    }
  }
})
