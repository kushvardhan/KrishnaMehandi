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
  className={`header ${isScrolled ? "scrolled" : "transparent"}`}
>
  <nav className="header-nav">
    <div className="container">
      <div className="header-content">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="header-logo">
          <Image
            src="/logo/KrishnaMehandiLogo.png"
            alt="Krishna Mehandi Artist Logo"
            width={50}
            height={50}
          />
          <div className="header-logo-text">
            <h1>Krishna Mehandi</h1>
            <p>Artist</p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="header-nav-menu">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="header-nav-link"
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="header-cta-buttons">
          <motion.a
            href="tel:+919873382317"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="header-cta-call"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </motion.a>
          <motion.a
            href="https://wa.me/919873382317"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="header-cta-whatsapp"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="header-mobile-toggle"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="header-mobile-menu"
        >
          <div>
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="header-mobile-link"
              >
                {item.name}
              </motion.button>
            ))}

            <div style={{ padding: "1.5rem", borderTop: "1px solid var(--soft-beige)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <motion.a
                  href="tel:+919873382317"
                  whileTap={{ scale: 0.95 }}
                  className="header-cta-call"
                  style={{ justifyContent: "center", padding: "0.75rem 1rem" }}
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/919873382317"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="header-cta-whatsapp"
                  style={{ justifyContent: "center", padding: "0.75rem 1rem" }}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
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
