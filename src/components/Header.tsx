"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/logo/KrishnaMehandiLogo.png"
              alt="Krishna Mehandi Artist Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-warm-green">
                Krishna Mehandi
              </h1>
              <p className="text-sm text-warm-green-light font-elegant">
                Artist
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-warm-green hover:text-traditional-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+919873382317"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-accent-maroon text-white px-4 py-2 rounded-full hover:bg-accent-maroon-light transition-colors duration-300"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call Now</span>
            </motion.a>
            <motion.a
              href="https://wa.me/919873382317"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-traditional-gold text-warm-green px-4 py-2 rounded-full hover:bg-traditional-gold-light transition-colors duration-300"
            >
              <MessageCircle size={16} />
              <span className="text-sm font-medium">WhatsApp</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-warm-green hover:text-traditional-gold transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-warm-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-6 py-3 text-warm-green hover:bg-soft-beige hover:text-traditional-gold transition-colors duration-300"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="px-6 py-4 border-t border-soft-beige">
                  <div className="flex flex-col space-y-3">
                    <motion.a
                      href="tel:+919873382317"
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 bg-accent-maroon text-white px-4 py-3 rounded-full hover:bg-accent-maroon-light transition-colors duration-300"
                    >
                      <Phone size={16} />
                      <span className="font-medium">Call Now</span>
                    </motion.a>
                    <motion.a
                      href="https://wa.me/919873382317"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 bg-traditional-gold text-warm-green px-4 py-3 rounded-full hover:bg-traditional-gold-light transition-colors duration-300"
                    >
                      <MessageCircle size={16} />
                      <span className="font-medium">WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
