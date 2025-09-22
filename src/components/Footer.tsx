'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  MessageCircle,
  Heart,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Bridal Mehndi',
    'Arabic Mehndi',
    'Rajasthani Mehndi',
    'Party Mehndi',
    'Festival Mehndi',
    'Custom Designs'
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-green text-warm-white mehndi-pattern-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Image
                src="/logo/KrishnaMehandiLogo.png"
                alt="Krishna Mehandi Artist Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-heading font-bold text-traditional-gold">
                  Krishna Mehandi
                </h3>
                <p className="text-sm font-elegant">Artist</p>
              </div>
            </div>
            <p className="text-sm text-warm-white/80 leading-relaxed">
              Professional Bridal Mehndi Designer in Noida, specializing in traditional and modern henna art for weddings and special occasions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/krishnamehandi2024"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-traditional-gold text-warm-green rounded-full hover:bg-traditional-gold-light transition-colors duration-300"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://wa.me/919873382317"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-traditional-gold text-warm-green rounded-full hover:bg-traditional-gold-light transition-colors duration-300"
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-heading font-semibold text-traditional-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-warm-white/80 hover:text-traditional-gold transition-colors duration-300 hover:translate-x-1 transform"
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
            className="space-y-4"
          >
            <h4 className="text-lg font-heading font-semibold text-traditional-gold">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-warm-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-heading font-semibold text-traditional-gold">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-traditional-gold mt-1 flex-shrink-0" />
                <p className="text-sm text-warm-white/80">
                  Amrapali Zodiac Market, Sector-120,<br />
                  Near Apollo Medical, Noida, UP - 201301
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-traditional-gold flex-shrink-0" />
                <a
                  href="tel:+919873382317"
                  className="text-sm text-warm-white/80 hover:text-traditional-gold transition-colors duration-300"
                >
                  +91 9873382317
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-traditional-gold flex-shrink-0" />
                <a
                  href="mailto:ds4393645@gmail.com"
                  className="text-sm text-warm-white/80 hover:text-traditional-gold transition-colors duration-300"
                >
                  ds4393645@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-warm-green-light"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-warm-white/80">
                © 2024 Krishna Mehandi Artist. All rights reserved.
              </p>
              <p className="text-xs text-warm-white/60 mt-1">
                Owner: Dushyant Singh
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-warm-white/80">
              <span>Designed & Developed with</span>
              <Heart size={14} className="text-accent-maroon fill-current" />
              <span>by</span>
              <motion.a
                href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-traditional-gold hover:text-traditional-gold-light transition-colors duration-300 font-medium flex items-center space-x-1"
              >
                <span>Kush Vardhan</span>
                <ExternalLink size={12} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
