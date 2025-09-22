"use client";

import { easeInOut, motion, Variants } from "framer-motion";
import { Clock, Crown, Palette, Sparkles, Star } from "lucide-react";

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
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-cream to-warm-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-warm-green mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-traditional-gold mx-auto mb-6"></div>
            <p className="text-lg text-warm-green/80 max-w-2xl mx-auto">
              Professional mehndi services for every occasion, crafted with
              passion and precision
            </p>
          </motion.div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-accent-maroon text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star size={14} fill="currentColor" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="bg-warm-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-traditional-gold/10 hover:border-traditional-gold/30">
                  {/* Header with Gradient */}
                  <div
                    className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                    <div className="relative z-10">
                      <service.icon size={48} className="mb-4" />
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-3 text-warm-green/80"
                        >
                          <div className="w-2 h-2 bg-traditional-gold rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-heading font-bold text-warm-green">
                        {service.price}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-traditional-gold text-warm-green px-6 py-3 rounded-full font-medium hover:bg-traditional-gold-light transition-colors duration-300"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </div>
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
