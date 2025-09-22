"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9873382317",
      action: "tel:+919873382317",
      description: "Available 9 AM - 9 PM",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 9873382317",
      action: "https://wa.me/919873382317",
      description: "Quick booking & queries",
    },
    {
      icon: Mail,
      title: "Email",
      details: "ds4393645@gmail.com",
      action: "mailto:ds4393645@gmail.com",
      description: "For detailed inquiries",
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: "@krishnamehandi2024",
      action: "https://www.instagram.com/krishnamehandi2024",
      description: "Follow for latest designs",
    },
  ];

  const workingHours = [
    { day: "Monday - Friday", time: "9:00 AM - 9:00 PM" },
    { day: "Saturday - Sunday", time: "8:00 AM - 10:00 PM" },
    { day: "Festivals & Events", time: "Extended Hours Available" },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-soft-beige to-warm-green"
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-traditional-gold mx-auto mb-6"></div>
            <p className="text-lg text-warm-green/80 max-w-2xl mx-auto">
              Ready to book your mehndi session? Contact us today for beautiful
              henna art
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-heading font-bold text-warm-green mb-6">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.action}
                      target={
                        info.action.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-warm-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-traditional-gold/20 hover:border-traditional-gold/40 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-traditional-gold/20 p-3 rounded-full group-hover:bg-traditional-gold/30 transition-colors duration-300">
                          <info.icon
                            className="text-traditional-gold"
                            size={24}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold text-warm-green mb-1">
                            {info.title}
                          </h4>
                          <p className="text-warm-green font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-warm-green/70 text-sm">
                            {info.description}
                          </p>
                        </div>
                        {info.action.startsWith("http") && (
                          <ExternalLink
                            size={16}
                            className="text-warm-green/50 group-hover:text-traditional-gold transition-colors duration-300"
                          />
                        )}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h4 className="text-2xl font-heading font-bold text-warm-green mb-6 flex items-center">
                  <Clock className="mr-3 text-traditional-gold" size={28} />
                  Working Hours
                </h4>
                <div className="bg-warm-white rounded-2xl p-6 shadow-lg border border-traditional-gold/20">
                  <div className="space-y-4">
                    {workingHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-traditional-gold/10 last:border-b-0"
                      >
                        <span className="font-medium text-warm-green">
                          {schedule.day}
                        </span>
                        <span className="text-traditional-gold font-semibold">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-traditional-gold/10 rounded-xl">
                    <p className="text-warm-green/80 text-sm">
                      <strong>Note:</strong> We also provide home visits across
                      Noida and nearby areas. Special arrangements available for
                      weddings and large events.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h4 className="text-2xl font-heading font-bold text-warm-green mb-6 flex items-center">
                  <MapPin className="mr-3 text-traditional-gold" size={28} />
                  Our Location
                </h4>
                <div className="bg-warm-white rounded-2xl p-6 shadow-lg border border-traditional-gold/20">
                  <div className="space-y-3">
                    <h5 className="font-heading font-semibold text-warm-green text-lg">
                      Krishna Mehandi Artist Studio
                    </h5>
                    <p className="text-warm-green/80">
                      Amrapali Zodiac Market, Sector-120
                      <br />
                      Near Apollo Medical
                      <br />
                      Noida, Uttar Pradesh - 201301
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <span className="bg-traditional-gold/20 text-traditional-gold px-3 py-1 rounded-full text-sm font-medium">
                        Easy Parking
                      </span>
                      <span className="bg-traditional-gold/20 text-traditional-gold px-3 py-1 rounded-full text-sm font-medium">
                        Metro Accessible
                      </span>
                      <span className="bg-traditional-gold/20 text-traditional-gold px-3 py-1 rounded-full text-sm font-medium">
                        Home Visits Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-heading font-bold text-warm-green">
                Find Us Here
              </h3>

              <div className="bg-warm-white rounded-2xl overflow-hidden shadow-lg border border-traditional-gold/20">
                <div className="aspect-[4/3] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8234567890123!2d77.3910!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456789abcd%3A0x1234567890abcdef!2sAmrapali%20Zodiac%20Market%2C%20Sector%20120%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-heading font-semibold text-warm-green mb-1">
                        Amrapali Zodiac Market
                      </h5>
                      <p className="text-warm-green/70 text-sm">
                        Sector-120, Near Apollo Medical, Noida
                      </p>
                    </div>
                    <motion.a
                      href="https://maps.google.com/?q=Amrapali+Zodiac+Market+Sector+120+Noida"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-traditional-gold text-warm-green px-4 py-2 rounded-full font-medium hover:bg-traditional-gold-light transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>Directions</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Quick Booking CTA */}
              <div className="bg-warm-white rounded-2xl p-8 shadow-lg border border-traditional-gold/20 text-center">
                <h4 className="text-2xl font-heading font-bold text-warm-green mb-4">
                  Ready to Book?
                </h4>
                <p className="text-warm-green/80 mb-6">
                  Contact us now for instant booking and consultation
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/919873382317"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-traditional-gold text-warm-green px-6 py-4 rounded-full font-semibold hover:bg-traditional-gold-light transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Now</span>
                  </motion.a>
                  <motion.a
                    href="tel:+919873382317"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-accent-maroon text-white px-6 py-4 rounded-full font-semibold hover:bg-accent-maroon-light transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
