import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  const features = [
    { icon: "⚡", text: "Pengerjaan Cepat" },
    { icon: "🛡️", text: "Garansi 1 Tahun" },
    { icon: "💬", text: "Support 24/7" }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -left-24 -top-24 rounded-full bg-blue-500/10 animate-blob mix-blend-multiply blur-xl"></div>
        <div className="absolute w-[500px] h-[500px] -right-24 -bottom-24 rounded-full bg-purple-500/10 animate-blob animation-delay-2000 mix-blend-multiply blur-xl"></div>
        <div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 animate-blob animation-delay-4000 mix-blend-multiply blur-xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 glass-effect" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 glass-effect" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block animate-slide-in-right">
            <span className="px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 text-sm font-medium bg-blue-500/10">
              Website Development & Academic Services
            </span>
          </div>            
          <ScrollAnimation delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 relative z-10">
              FZT <span className="text-blue-500">Services</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl relative z-10 text-gray-300">
              Solusi digital terpercaya untuk bisnis dan akademik Anda
            </p>
          </ScrollAnimation>
          
          {/* Features list */}
          <ScrollAnimation delay={0.6} className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span>{feature.icon}</span>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.8}>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <a
                href="#layanan"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Lihat Layanan
              </a>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
