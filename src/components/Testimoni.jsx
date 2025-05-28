import { useState } from 'react';
import { motion } from 'framer-motion';

const Testimoni = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const reviews = [
    {
      nama: "Dina A.",
      role: "Mahasiswa S1",
      komentar: "Pengerjaannya cepat dan hasilnya memuaskan. Website yang dibuatkan sangat sesuai dengan kebutuhan bisnis saya. Sukses selalu!",
      rating: 5,
      image: "DA"
    },
    {
      nama: "Rizky F.",
      role: "Pengusaha UMKM",
      komentar: "Terbantu banget buat pembuatan website toko online saya. Pelayanannya ramah dan profesional. Recommended banget!",
      rating: 5,
      image: "RF"
    },
    {
      nama: "Sarah M.",
      role: "Startup Founder",
      komentar: "Design yang dihasilkan sangat modern dan sesuai tren. Proses revisi yang mudah dan komunikatif. Thank you!",
      rating: 5,
      image: "SM"
    },
    {
      nama: "Ahmad R.",
      role: "Pemilik Toko Online",
      komentar: "Websitenya sangat responsif dan cepat. Fitur-fitur e-commerce yang diberikan lengkap sesuai kebutuhan. Top markotop!",
      rating: 5,
      image: "AR"
    },
    {
      nama: "Linda K.",
      role: "Content Creator",
      komentar: "Design portfolio yang dibuatkan keren banget! Responsive di semua device dan loading-nya cepat. Worth it!",
      rating: 5,
      image: "LK"
    },
    {
      nama: "Budi S.",
      role: "CEO Startup",
      komentar: "Team yang sangat profesional dan komunikatif. Hasil website melebihi ekspektasi. Highly recommended!",
      rating: 5,
      image: "BS"
    }
  ];

  const itemsPerGroup = 3;
  const totalGroups = Math.ceil(reviews.length / itemsPerGroup);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentGroup((prev) => {
      const next = (prev + 1) % totalGroups;
      setTimeout(() => setIsAnimating(false), 300);
      return next;
    });
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentGroup((prev) => {
      const next = (prev - 1 + totalGroups) % totalGroups;
      setTimeout(() => setIsAnimating(false), 300);
      return next;
    });
  };

  const QuoteIcon = () => (
    <svg className="w-8 h-8 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Testimoni Klien
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apa kata mereka yang telah menggunakan layanan kami
          </p>
        </div>        <div className="relative overflow-hidden px-4 md:px-16 mb-12">
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-8"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {reviews
              .slice(currentGroup * itemsPerGroup, (currentGroup + 1) * itemsPerGroup)
              .map((review, index) => (
                <motion.div
                  key={currentGroup * itemsPerGroup + index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >                  <div className="relative glass-effect p-8 rounded-2xl transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                    <div className="absolute -top-2 -left-2">
                      <QuoteIcon />
                    </div>

                    <div className="mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>

                    <p className="text-gray-700 mb-6 relative z-10 flex-grow">"{review.komentar}"</p>

                    <div className="flex items-center border-t border-gray-100 pt-6 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-medium text-lg">
                        {review.image}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">{review.nama}</p>
                        <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all z-10 disabled:opacity-50 focus:outline-none"
            onClick={handlePrev}
            disabled={isAnimating}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all z-10 disabled:opacity-50 focus:outline-none"
            onClick={handleNext}
            disabled={isAnimating}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute -bottom-6 left-0 right-0 h-1.5 bg-gray-200 mx-4">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentGroup + 1) / totalGroups) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;