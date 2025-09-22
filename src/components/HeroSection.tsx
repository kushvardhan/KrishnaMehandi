'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MessageCircle, Star, MapPin } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Mehndi Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-cream to-soft-beige">
        <div className="absolute inset-0 mehndi-pattern-bg opacity-30"></div>
        <div className="absolute inset-0 mehndi-mandala-bg"></div>
        
        {/* Decorative Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-traditional-gold/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-32 right-16 w-32 h-32 bg-warm-green/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-1/3 right-20 w-16 h-16 bg-accent-maroon/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Image
                src="/logo/KrishnaMehandiLogo.png"
                alt="Krishna Mehandi Artist Logo"
                width={120}
                height={120}
                className="rounded-full shadow-2xl border-4 border-traditional-gold"
              />
              <div className="absolute -top-2 -right-2 bg-traditional-gold text-warm-green rounded-full p-2">
                <Star size={16} fill="currentColor" />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-warm-green mb-6"
          >
            Krishna Mehandi
            <span className="block text-traditional-gold gold-shimmer bg-clip-text text-transparent">
              Artist
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-elegant text-warm-green-light mb-4"
          >
            From Designs to Celebrations
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-warm-green/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Professional Bridal Mehndi Designer in Noida • Specializing in Arabic, Rajasthani & Modern Designs
          </motion.p>

          {/* Location Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-warm-green/10 text-warm-green px-4 py-2 rounded-full mb-8"
          >
            <MapPin size={16} />
            <span className="text-sm font-medium">Noida, Sector-120</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="https://wa.me/919873382317"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 bg-traditional-gold text-warm-green px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-traditional-gold-light"
            >
              <MessageCircle size={24} className="group-hover:animate-bounce" />
              <span>Book on WhatsApp</span>
            </motion.a>
            
            <motion.a
              href="tel:+919873382317"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 bg-accent-maroon text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-accent-maroon-light"
            >
              <Phone size={24} className="group-hover:animate-pulse" />
              <span>Call Now</span>
            </motion.a>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: '🎨', title: 'Expert Artistry', desc: '10+ Years Experience' },
              { icon: '👰', title: 'Bridal Specialist', desc: 'Wedding Perfection' },
              { icon: '⭐', title: 'Top Rated', desc: '500+ Happy Clients' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-warm-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-traditional-gold/20"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-heading font-semibold text-warm-green mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-warm-green/70">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-warm-green rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-warm-green rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
