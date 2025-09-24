"use client";

import { easeInOut, motion, Variants } from "framer-motion";
import { Award, Heart, MapPin, Palette, Users } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const services = [
    { name: "Colorful Mehandi", icon: "🌈" },
    { name: "Bombay Style", icon: "🏙️" },
    { name: "Marwari Designs", icon: "👑" },
    { name: "Arabian Patterns", icon: "🕌" },
    { name: "Silver Mehandi", icon: "✨" },
    { name: "Golden Mehandi", icon: "🌟" },
  ];

  const stats = [
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Palette, number: "1000+", label: "Designs Created" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" },
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

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="about-header">
            <h2 className="about-title">About Krishna Mehandi Artist</h2>
            <div className="about-divider"></div>
            <p className="about-subtitle">
              Bringing traditional artistry and modern elegance to every
              celebration
            </p>
          </motion.div>

          <div className="about-content-grid">
            {/* Owner Image */}
            <motion.div
              variants={itemVariants}
              className="about-image-container"
            >
              <div className="about-image-wrapper">
                <Image
                  src="/ownerImage/KrishnaMehandi-Owner.jpeg"
                  alt="Dushyant Singh - Krishna Mehandi Artist Owner"
                  width={500}
                  height={600}
                  className="about-image"
                  priority
                />
                <div className="about-image-overlay"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="about-badge"
              >
                <Award size={24} />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="about-content">
              <div>
                <h3 className="about-owner-title">Meet Dushyant Singh</h3>
                <p className="about-owner-subtitle">
                  Master Mehandi Artist & Creative Director
                </p>
              </div>

              <div className="about-description">
                <p>
                  With over a decade of experience in the art of Mehandi,
                  Dushyant Singh has established Krishna Mehandi Artist as one
                  of Noida&apos;s most trusted names in bridal and ceremonial
                  henna artistry.
                </p>
                <p>
                  <strong className="text-warm-green">
                    Specializing in arrangements for marriages & other
                    celebrations,
                  </strong>{" "}
                  our studio brings together traditional techniques with
                  contemporary designs to create stunning, personalized mehandi
                  experiences.
                </p>
                <p>
                  From intimate family gatherings to grand wedding celebrations,
                  we ensure every design tells a unique story and creates
                  lasting memories.
                </p>
              </div>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="about-location-card"
              >
                <div className="about-location-content">
                  <div className="about-location-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="about-location-title">
                      Our Studio Location
                    </h4>
                    <p className="about-location-text">
                      Amrapali Zodiac Market, Sector-120
                      <br />
                      Near Apollo Medical, Noida, UP - 201301
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={itemVariants}
            className="about-services-section"
          >
            <h3 className="about-services-title">Our Signature Services</h3>
            <div className="about-services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="about-service-card"
                >
                  <div className="about-service-icon">{service.icon}</div>
                  <h4 className="about-service-name">{service.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <div className="about-stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="about-stat-card"
                >
                  <div className="about-stat-icon-wrapper">
                    <stat.icon size={24} />
                  </div>
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
