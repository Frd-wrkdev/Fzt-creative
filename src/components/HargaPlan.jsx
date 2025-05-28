const HargaPlan = () => {
  const plans = [
    {
      name: "Basic",
      price: "999K",
      description: "Cocok untuk personal website atau blog",
      features: [
        "Custom Design Modern",
        "3-5 Halaman Website",
        "Mobile Responsive",
        "SEO Dasar",
        "Free Domain (.com/.id)",
        "Free Hosting 1 Tahun",
        "Free SSL Certificate",
        "Revisi 2x",
        "Support 6 Bulan"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "2.499K",
      description: "Sempurna untuk bisnis dan UMKM",
      features: [
        "Semua fitur Basic",
        "5-10 Halaman Website",
        "Design Premium & UI/UX Pro",
        "SEO Optimization",
        "Database Integration",
        "Admin Dashboard",
        "Google Analytics",
        "Whatsapp Integration",
        "Training Admin Panel",
        "Revisi 5x",
        "Support 1 Tahun"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Solusi lengkap untuk perusahaan",
      features: [
        "Semua fitur Professional",
        "Unlimited Pages",
        "Custom Functionality",
        "Payment Gateway",
        "API Integration",
        "Multi-language Support",
        "Advanced Security",
        "Performance Optimization",
        "Backup System",
        "Revisi Unlimited",
        "Support Priority 24/7"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="harga" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
          Pilihan Paket Website
        </h2>
        <p className="text-gray-600">
          Kami menawarkan berbagai paket layanan yang dapat disesuaikan dengan kebutuhan dan budget Anda
        </p>
      </div>

      {/* Plans Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 ${
              plan.isPopular
                ? 'glass-effect rounded-2xl shadow-xl transform hover:-translate-y-1 md:scale-110'
                : 'bg-white rounded-2xl shadow-lg hover:shadow-xl'
            } transition-all duration-300 animate-fade-in-up`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Rp {plan.price}
              </div>
              <p className="text-gray-600">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <svg
                    className={`w-5 h-5 mt-1 ${
                      plan.isPopular ? 'text-blue-500' : 'text-teal-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href="#contact"
                className={`inline-flex items-center justify-center w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:shadow-lg hover:shadow-blue-500/25 hover-scale'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover-scale'
                }`}
              >
                {plan.price === 'Custom' ? 'Hubungi Kami' : 'Pilih Paket'}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-24">
        <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Berapa lama proses pembuatan website?</h4>
            <p className="text-gray-600">Rata-rata pengerjaan website membutuhkan waktu 1-3 minggu, tergantung kompleksitas dan revisi yang diperlukan.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Apakah ada biaya maintenance bulanan?</h4>
            <p className="text-gray-600">Tidak ada biaya bulanan di tahun pertama. Untuk tahun berikutnya, biaya maintenance dan hosting mulai dari Rp 500K/tahun.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Apakah bisa request design khusus?</h4>
            <p className="text-gray-600">Ya, kami menerima request design khusus sesuai kebutuhan Anda. Konsultasikan kebutuhan Anda dengan tim kami.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HargaPlan;
