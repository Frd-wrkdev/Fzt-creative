import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationPopup = () => {
  const [notifications] = useState([
    {
      text: "📦 Seseorang dari Makassar baru saja pesan website landing page",
      time: "Baru saja"
    },
    {
      text: "🎨 Pengusaha UMKM dari Bulukumba pesan jasa design logo & kemasan",
      time: "1 jam yang lalu"
    },
    {
      text: "💻 Project company profile sedang dikerjakan",
      time: "3 jam yang lalu"
    },
    {
      text: "🎨 Pesanan desain UI/UX dari Jakarta selesai",
      time: "1 hari yang lalu"
    },
    {
      text: "📱 Website toko online selesai tepat waktu",
      time: "2 hari yang lalu"
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Show notification for 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      // Wait 10 seconds before showing next notification
      const showNextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 10000);

      return () => clearTimeout(showNextTimer);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, notifications.length]);

  const handleClose = () => {
    setIsVisible(false);
    // Wait 10 seconds before showing next notification
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      setIsVisible(true);
    }, 10000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
          style={{ maxWidth: "350px", minWidth: "300px" }}
        >
          <div className="p-4">
            <div className="relative">
              <button
                onClick={handleClose}
                className="absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close notification"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-start space-x-3 pr-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800 leading-snug whitespace-normal" style={{ wordBreak: 'break-word' }}>
                    {notifications[currentIndex].text}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notifications[currentIndex].time}</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="h-1 bg-green-400"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 5, ease: "linear" }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationPopup;