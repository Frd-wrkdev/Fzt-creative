import { track } from '@vercel/analytics';

const CTASection = () => {
  const handleClick = () => {
    track('CTA_Click', {
      location: 'CTA Section',
      timestamp: new Date().toISOString()
    });
    window.location.href = 'https://wa.me/0895370467172';
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[128px] -top-48 -left-48" />
          <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[128px] -bottom-48 -right-48" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="animate-fadeIn">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Siap Memulai Proyek?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran khusus
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp">
          <a
            href="https://wa.me/6289537046717"
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
            onClick={handleClick}
          >
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="relative">
              Hubungi via WhatsApp
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform" />
            </span>
          </a>

          <a
            href="mailto:kontak@email.com"
            className="group relative px-8 py-4 text-white rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 overflow-hidden"
          >
            {/* Glass effect background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full border border-white/20" />
            
            <svg className="w-6 h-6 relative z-10 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="relative z-10">
              Email Kami
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
