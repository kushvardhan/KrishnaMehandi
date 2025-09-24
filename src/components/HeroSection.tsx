"use client";

import { easeInOut, motion, Variants } from "framer-motion";
import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
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

  return (
    <section id="home" className="hero-section">
      {/* Background with Mehndi Pattern */}
      <div className="hero-background">
        {/* Background Image */}
        <div className="hero-background-image">
          <Image
            src="/mehandi/WhatsApp Image 2025-09-23 at 21.28.01.jpeg"
            alt="Beautiful Mehandi Design Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="hero-pattern-overlay"></div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hero-floating-element hero-floating-1"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="hero-floating-element hero-floating-2"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="hero-floating-element hero-floating-3"
        />
      </div>

      <div className="hero-content">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <motion.div variants={itemVariants} className="hero-logo">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hero-logo-container"
              >
                <Image
                  src="/logo/KrishnaMehandiLogo.png"
                  alt="Krishna Mehandi Artist Logo"
                  width={120}
                  height={120}
                />
                <div className="hero-logo-badge">
                  <Star size={16} fill="currentColor" />
                </div>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="hero-title">
              Krishna Mehandi
              <span className="hero-title-highlight">Artist</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="hero-tagline">
              From Designs to Celebrations
            </motion.p>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="hero-subtitle">
              Professional Bridal Mehndi Designer in Noida • Specializing in
              Arabic, Rajasthani & Modern Designs
            </motion.p>

            {/* Location Badge */}
            <motion.div variants={itemVariants} className="hero-location-badge">
              <MapPin size={16} />
              <span>Noida, Sector-120</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="hero-cta-buttons">
              <motion.a
                href="https://wa.me/919873382317"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hero-cta-whatsapp"
              >
                <MessageCircle size={24} />
                <span>Book on WhatsApp</span>
              </motion.a>

              <motion.a
                href="tel:+919873382317"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hero-cta-call"
              >
                <Phone size={24} />
                <span>Call Now</span>
              </motion.a>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="hero-features">
              {[
                {
                  icon: "🎨",
                  title: "Expert Artistry",
                  desc: "10+ Years Experience",
                },
                {
                  icon: "👰",
                  title: "Bridal Specialist",
                  desc: "Wedding Perfection",
                },
                { icon: "⭐", title: "Top Rated", desc: "500+ Happy Clients" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="hero-feature"
                >
                  <div className="hero-feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
