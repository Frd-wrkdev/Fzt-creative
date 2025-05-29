// Cache strategies for different types of resources
export const cacheControl = {
  // Static assets like images, fonts, etc
  static: 'public, max-age=31536000, immutable',
  
  // Dynamic but relatively stable content
  dynamic: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
  
  // API responses
  api: 'private, no-cache, no-store, must-revalidate',
  
  // HTML documents
  document: 'public, max-age=0, must-revalidate'
};

// Helper function to determine cache strategy
export const getCacheStrategy = (path) => {
  if (/\.(js|css|jpg|jpeg|png|gif|webp|svg|mp3|woff2?)$/i.test(path)) {
    return cacheControl.static;
  }
  if (path.startsWith('/api/')) {
    return cacheControl.api;
  }
  return cacheControl.document;
};

// Resource hints for critical assets
export const resourceHints = [
  { rel: 'preconnect', href: 'https://rsms.me' },
  { rel: 'preload', href: '/logo.svg', as: 'image' },
  { rel: 'prefetch', href: '/projects/1.webp' }
];

// Function to add cache headers to response
export const addCacheHeaders = (res, path) => {
  const cacheStrategy = getCacheStrategy(path);
  res.setHeader('Cache-Control', cacheStrategy);
  return res;
};
