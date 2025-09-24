"use client";

import { motion } from "framer-motion";
import {
    ExternalLink,
    Heart,
    Camera,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Bridal Mehndi",
    "Arabic Mehndi",
    "Rajasthani Mehndi",
    "Party Mehndi",
    "Festival Mehndi",
    "Custom Designs",
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="footer-brand"
          >
            <div className="footer-logo">Krishna Mehandi Artist</div>
            <p className="footer-tagline">
              Professional Bridal Mehndi Designer in Noida, specializing in
              traditional and modern henna art for weddings and special
              occasions.
            </p>
            <div className="footer-social">
              <motion.a
                href="https://www.instagram.com/krishnamehandi2024"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="footer-social-link"
              >
                <Camera size={20} />
              </motion.a>
              <motion.a
                href="https://wa.me/919873382317"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="footer-social-link"
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Section */}
          <div className="footer-links">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="footer-column"
            >
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="footer-column"
            >
              <h4>Our Services</h4>
              <ul>
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
            </ul>
          </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="footer-column"
            >
              <h4>Contact Info</h4>
              <div>
                <div className="footer-contact-item">
                  <MapPin size={16} className="footer-contact-icon" />
                  <span>
                    Amrapali Zodiac Market, Sector-120,
                    <br />
                    Near Apollo Medical, Noida, UP - 201301
                  </span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={16} className="footer-contact-icon" />
                  <a href="tel:+919873382317">+91 9873382317</a>
                </div>
                <div className="footer-contact-item">
                  <Mail size={16} className="footer-contact-icon" />
                  <a href="mailto:ds4393645@gmail.com">ds4393645@gmail.com</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="footer-bottom-content"
          >
            <div className="footer-copyright">
              © 2024 Krishna Mehandi Artist. All rights reserved. Owner: Dushyant Singh
            </div>

            <div className="footer-developer">
              <span>Designed & Developed with </span>
              <Heart size={14} className="text-accent-maroon fill-current inline" />
              <span> by </span>
              <motion.a
                href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                Kush Vardhan
                <ExternalLink size={12} className="inline ml-1" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
