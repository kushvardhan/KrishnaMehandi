"use client";

import { easeInOut, motion, Variants } from "framer-motion";
import { ArrowRight, Clock, Crown, Palette, Sparkles, Star } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Crown,
      title: "Bridal Mehndi",
      description:
        "Exquisite bridal designs that make your special day unforgettable. Traditional and contemporary patterns crafted with love.",
      features: [
        "Full Hand & Feet Design",
        "Intricate Patterns",
        "Long-lasting Color",
        "Personalized Motifs",
      ],
      price: "Starting from ₹2,500",
      popular: true,
      gradient: "from-accent-maroon to-accent-maroon-light",
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Party Mehndi",
      description:
        "Perfect for festivals, celebrations, and special occasions. Beautiful designs that complement your festive look.",
      features: [
        "Quick Application",
        "Elegant Patterns",
        "Festival Specials",
        "Group Bookings",
      ],
      price: "Starting from ₹500",
      popular: false,
      gradient: "from-traditional-gold to-traditional-gold-light",
    },
    {
      id: 3,
      icon: Palette,
      title: "Custom Designs",
      description:
        "Unique, personalized mehndi art tailored to your preferences. From modern minimalist to traditional elaborate designs.",
      features: [
        "Personalized Consultation",
        "Unique Patterns",
        "Name & Date Inclusion",
        "Photo-inspired Designs",
      ],
      price: "Starting from ₹1,000",
      popular: false,
      gradient: "from-warm-green to-warm-green-light",
    },
  ];

  const specialties = [
    {
      name: "Arabic Mehndi",
      icon: "🕌",
      description: "Bold, flowing patterns with geometric elements",
    },
    {
      name: "Rajasthani Style",
      icon: "👑",
      description: "Intricate traditional designs with fine details",
    },
    {
      name: "Modern Fusion",
      icon: "✨",
      description: "Contemporary patterns blending tradition with innovation",
    },
    {
      name: "Colorful Mehndi",
      icon: "🌈",
      description: "Vibrant designs with colored henna and glitter",
    },
    {
      name: "Silver & Gold",
      icon: "🌟",
      description: "Metallic accents for extra glamour and elegance",
    },
    {
      name: "Minimalist",
      icon: "🎨",
      description: "Simple, elegant designs for modern preferences",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="services-header">
            <h2 className="services-title">Our Services</h2>
            <div className="services-divider"></div>
            <p className="services-subtitle">
              Professional mehndi services for every occasion, crafted with
              passion and precision
            </p>
          </motion.div>

          {/* Main Services */}
          <div className="services-grid">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`service-card ${service.popular ? "popular" : ""}`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="service-popular-badge">
                    <Star size={14} fill="currentColor" />
                    <span>Most Popular</span>
                  </div>
                )}
                {/* Header with Gradient */}
                <div
                  className={`service-header bg-gradient-to-r ${service.gradient}`}
                >
                  <service.icon className="service-icon" />
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>

                {/* Content */}
                <div className="service-content">
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="service-feature">
                        <div className="service-feature-icon">•</div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-pricing">
                    <div className="service-price">{service.price}</div>
                    <div className="service-price-note">Starting from</div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="service-cta"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Specialties */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-heading font-bold text-warm-green text-center mb-12">
              Our Specialties
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-warm-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-traditional-gold/10 hover:border-traditional-gold/30 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-warm-green mb-2">
                    {specialty.name}
                  </h4>
                  <p className="text-warm-green/70 text-sm">
                    {specialty.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-warm-green rounded-3xl p-12 text-warm-white relative overflow-hidden"
          >
            <div className="absolute inset-0 mehndi-pattern-bg opacity-20"></div>
            <div className="relative z-10">
              <Clock size={48} className="mx-auto mb-6 text-traditional-gold" />
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Book Your Session?
              </h3>
              <p className="text-warm-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to schedule your mehndi appointment. We&apos;re
                available for home visits and studio sessions across Noida and
                nearby areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/919873382317"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-traditional-gold text-warm-green px-8 py-4 rounded-full font-semibold hover:bg-traditional-gold-light transition-colors duration-300"
                >
                  WhatsApp Booking
                </motion.a>
                <motion.a
                  href="tel:+919873382317"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-traditional-gold text-traditional-gold px-8 py-4 rounded-full font-semibold hover:bg-traditional-gold hover:text-warm-green transition-all duration-300"
                >
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
