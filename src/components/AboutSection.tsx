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
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-warm-white to-cream"
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
              About Krishna Mehandi Artist
            </h2>
            <div className="w-24 h-1 bg-traditional-gold mx-auto mb-6"></div>
            <p className="text-lg text-warm-green/80 max-w-2xl mx-auto">
              Bringing traditional artistry and modern elegance to every
              celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Owner Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/ownerImage/KrishnaMehandi-Owner.jpeg"
                  alt="Dushyant Singh - Krishna Mehandi Artist Owner"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-green/20 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-traditional-gold text-warm-green p-4 rounded-full shadow-xl"
              >
                <Award size={32} />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-3xl font-heading font-bold text-warm-green mb-2">
                  Meet Dushyant Singh
                </h3>
                <p className="text-xl font-elegant text-traditional-gold mb-4">
                  Master Mehandi Artist & Creative Director
                </p>
              </div>

              <div className="space-y-4 text-warm-green/80 leading-relaxed">
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
                className="bg-warm-white rounded-2xl p-6 shadow-lg border border-traditional-gold/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-traditional-gold/20 p-3 rounded-full">
                    <MapPin className="text-traditional-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-warm-green mb-2">
                      Our Studio Location
                    </h4>
                    <p className="text-warm-green/80">
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
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-heading font-bold text-warm-green text-center mb-8">
              Our Signature Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-warm-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-traditional-gold/10 hover:border-traditional-gold/30"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="font-medium text-warm-green text-sm">
                    {service.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-warm-green text-warm-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-traditional-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={32} className="text-traditional-gold" />
                  </div>
                  <div className="text-3xl font-heading font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium opacity-90">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
