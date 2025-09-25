/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion, Variants } from "framer-motion";
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

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.8,
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // const itemVariants: Variants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: easeInOut },
  //   },
  // };

  return (
     <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          variants={{ hidden: {}, visible: {} }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Ready to book your mehndi session? Contact us today for beautiful henna art
            </p>
          </div>

          <div className="contact-content-wrapper">
            {/* Left Side: Contact Info + Working Hours */}
            <div className="contact-left">
              {/* Contact Info */}
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-details">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.action}
                      target={info.action.startsWith("http") ? "_blank" : undefined}
                      rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="contact-detail"
                    >
                      <div className="contact-detail-header">
                        <div className="contact-detail-icon">
                          <info.icon size={24} />
                        </div>
                        <div>
                          <h4 className="contact-detail-title">{info.title}</h4>
                          <p className="contact-detail-content">{info.details}</p>
                          <p className="contact-detail-desc">{info.description}</p>
                        </div>
                        {info.action.startsWith("http") && (
                          <ExternalLink className="ml-auto" size={16} />
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="working-hours">
                <h3 className="section-subtitle-icon">
                  
                </h3>
                <div className="hours-card">
                 <h1 className="yo"> <Clock className="icon" size={28} /> Working Hours</h1>
                  <div className="hours-list">
                    {workingHours.map((schedule, idx) => (
                      <div key={idx} className="hour-row">
                        <span>{schedule.day}</span>
                        <span>{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="hours-note">
                    We also provide home visits across Noida and nearby areas. Special arrangements available for weddings and large events.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Location + Map + Quick Booking */}
            <div className="contact-right">
              {/* Location */}
              <div className="location">
                <h3 className="section-subtitle-icon">
                  <MapPin className="icon" size={28} /> Our Location
                </h3>
                <div className="location-card">
                  <h4 className="location-title">Krishna Mehandi Artist Studio</h4>
                  <p className="location-address">
                    Amrapali Zodiac Market, Sector-120<br />
                    Near Apollo Medical<br />
                    Noida, Uttar Pradesh - 201301
                  </p>
                  <div className="location-tags">
                    <span>Easy Parking</span>
                    <span>Metro Accessible</span>
                    <span>Home Visits Available</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <h3 className='map-col' >Find Us Here</h3>
              <div className="map-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8234567890123!2d77.3910!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456789abcd%3A0x1234567890abcdef!2sAmrapali%20Zodiac%20Market%2C%20Sector%20120%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Quick Booking CTA */}
              <div className="quick-booking">
                <h4>Ready to Book?</h4>
                <p>Contact us now for instant booking and consultation</p>
                <div className="cta-buttons">
                  <a href="https://wa.me/919873382317" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <MessageCircle size={20} /> WhatsApp Now
                  </a>
                  <a href="tel:+919873382317" className="btn btn-call">
                    <Phone size={20} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
