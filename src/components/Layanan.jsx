import ScrollAnimation from './ScrollAnimation';
import { motion } from 'framer-motion';

const Layanan = () => {
  const layanan = [
    {
      title: "Pembuatan Website Profesional",
      description: "Website modern, responsif, dan optimal untuk bisnis Anda. Dilengkapi dengan fitur SEO dan performa tinggi.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      features: ["Responsif Mobile-First", "SEO Optimized", "Fast Loading Speed"]
    },
    {
      title: "Desain UI/UX & Konten",
      description: "Desain yang menarik, modern, dan user-friendly untuk meningkatkan engagement pengguna.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: ["UI Modern", "UX Research", "Design System"]
    },
    {
      title: "Pengerjaan Tugas Kuliah",
      description: "Bantuan profesional untuk tugas pemrograman, IT, dan proyek perkuliahan dengan garansi kepuasan.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Garansi Revisi", "Anti Plagiarisme", "Konsultasi"]
    },
    {
      title: "Bantuan Skripsi & Laporan",
      description: "Konsultasi dan pengerjaan proyek akhir perkuliahan dengan metodologi yang terstruktur.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: ["Metodologi Ilmiah", "Original Research", "Free Konsultasi"]
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation delay={0.2}>
          <h2 className="text-4xl font-bold text-center mb-12">
            Layanan <span className="text-blue-600">Kami</span>
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {layanan.map((item, index) => (
            <ScrollAnimation key={item.title} delay={0.2 * (index + 1)}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl mb-4">{item.icon}</div>                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
