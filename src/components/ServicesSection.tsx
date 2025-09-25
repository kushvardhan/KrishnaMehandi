"use client";

import { easeInOut, motion, Variants } from "framer-motion";
import { ArrowRight, Clock, Crown, Palette, Sparkles } from "lucide-react";

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
          initial="visible"
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
                    <div className="service-price">Contact for pricing</div>
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

 <motion.div variants={itemVariants}>
      <h3 className="specialties-heading">Our Specialties</h3>
      <div className="specialties-grid">
        {specialties.map((specialty, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="specialty-card"
          >
            <div className="specialty-icon">{specialty.icon}</div>
            <h4 className="specialty-name">{specialty.name}</h4>
            <p className="specialty-desc">{specialty.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div variants={itemVariants} className="cta-section">
        <div className="cta-bg-pattern"></div>
        <div className="cta-content">
          <Clock size={48} className="cta-icon" />
          <h3 className="cta-heading">Ready to Book Your Session?</h3>
          <p className="cta-text">
            Contact us today to schedule your mehndi appointment. We&apos;re
            available for home visits and studio sessions across Noida and
            nearby areas.
          </p>
          <div className="cta-buttons">
            <motion.a
              href="https://wa.me/919873382317"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-btn-primary"
            >
              WhatsApp Booking
            </motion.a>
            <motion.a
              href="tel:+919873382317"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-btn-secondary"
            >
              Call Now
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
