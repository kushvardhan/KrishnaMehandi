"use client";

import { AnimatePresence, easeInOut, motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");
  const [showAllImages, setShowAllImages] = useState(false);

  // Actual mehandi gallery images
  const galleryImages = [
    {
      id: 1,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.01.jpeg",
      alt: "Bridal Hand Mehndi Design",
      category: "bridal",
      title: "Intricate Bridal Hand Design",
      type: "hand",
    },
    {
      id: 2,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.02.jpeg",
      alt: "Arabic Mehndi Pattern",
      category: "arabic",
      title: "Arabic Floral Pattern",
      type: "hand",
    },
    {
      id: 3,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.05.jpeg",
      alt: "Traditional Hand Design",
      category: "traditional",
      title: "Traditional Mandala",
      type: "hand",
    },
    {
      id: 4,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.06.jpeg",
      alt: "Party Mehndi Design",
      category: "party",
      title: "Quick Party Design",
      type: "hand",
    },
    {
      id: 5,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.12.jpeg",
      alt: "Foot Mehndi Design",
      category: "bridal",
      title: "Bridal Foot Design",
      type: "foot",
    },
    {
      id: 6,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.14.jpeg",
      alt: "Modern Hand Design",
      category: "modern",
      title: "Contemporary Art",
      type: "hand",
    },
    {
      id: 7,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.15.jpeg",
      alt: "Arabic Foot Design",
      category: "arabic",
      title: "Arabic Foot Pattern",
      type: "foot",
    },
    {
      id: 8,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.16.jpeg",
      alt: "Traditional Foot Pattern",
      category: "traditional",
      title: "Heritage Foot Design",
      type: "foot",
    },
    {
      id: 9,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.18.jpeg",
      alt: "Bridal Hand Design",
      category: "bridal",
      title: "Elegant Bridal Pattern",
      type: "hand",
    },
    {
      id: 10,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.19.jpeg",
      alt: "Party Hand Design",
      category: "party",
      title: "Quick Party Pattern",
      type: "hand",
    },
    {
      id: 11,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.20.jpeg",
      alt: "Modern Foot Design",
      category: "modern",
      title: "Contemporary Foot Art",
      type: "foot",
    },
    {
      id: 12,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.31.jpeg",
      alt: "Arabic Hand Pattern",
      category: "arabic",
      title: "Bold Arabic Design",
      type: "hand",
    },
    {
      id: 13,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.34.jpeg",
      alt: "Traditional Hand Design",
      category: "traditional",
      title: "Classic Traditional Pattern",
      type: "hand",
    },
    {
      id: 14,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.35.jpeg",
      alt: "Bridal Foot Design",
      category: "bridal",
      title: "Delicate Bridal Foot Art",
      type: "foot",
    },
    {
      id: 15,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.36.jpeg",
      alt: "Party Foot Design",
      category: "party",
      title: "Festive Foot Pattern",
      type: "foot",
    },
    {
      id: 16,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.37.jpeg",
      alt: "Modern Hand Art",
      category: "modern",
      title: "Minimalist Hand Design",
      type: "hand",
    },
    {
      id: 17,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.40.jpeg",
      alt: "Arabic Foot Pattern",
      category: "arabic",
      title: "Elegant Arabic Foot Design",
      type: "foot",
    },
    {
      id: 18,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.41.jpeg",
      alt: "Traditional Foot Art",
      category: "traditional",
      title: "Heritage Foot Pattern",
      type: "foot",
    },
    {
      id: 19,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.12 (1).jpeg",
      alt: "Bridal Hand Design",
      category: "bridal",
      title: "Ornate Bridal Hand Art",
      type: "hand",
    },
    {
      id: 20,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.14 (1).jpeg",
      alt: "Party Hand Pattern",
      category: "party",
      title: "Festive Hand Design",
      type: "hand",
    },
    {
      id: 21,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.16 (1).jpeg",
      alt: "Modern Foot Design",
      category: "modern",
      title: "Contemporary Foot Pattern",
      type: "foot",
    },
    {
      id: 22,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.18 (1).jpeg",
      alt: "Arabic Hand Design",
      category: "arabic",
      title: "Intricate Arabic Hand Art",
      type: "hand",
    },
    {
      id: 23,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.20 (1).jpeg",
      alt: "Traditional Hand Pattern",
      category: "traditional",
      title: "Classic Hand Design",
      type: "hand",
    },
    {
      id: 24,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.35 (1).jpeg",
      alt: "Bridal Foot Art",
      category: "bridal",
      title: "Exquisite Bridal Foot Design",
      type: "foot",
    },
    {
      id: 25,
      src: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.41 (1).jpeg",
      alt: "Party Foot Pattern",
      category: "party",
      title: "Celebration Foot Design",
      type: "foot",
    },
  ];

  const categories = [
    { id: "all", name: "All Designs" },
    { id: "bridal", name: "Bridal" },
    { id: "arabic", name: "Arabic" },
    { id: "traditional", name: "Traditional" },
    { id: "modern", name: "Modern" },
    { id: "party", name: "Party" },
    { id: "hand", name: "Hand Designs" },
    { id: "foot", name: "Foot Designs" },
  ];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : filter === "hand" || filter === "foot"
      ? galleryImages.filter((img) => img.type === filter)
      : galleryImages.filter((img) => img.category === filter);

  // Responsive display logic - show 15 images initially, all on desktop when expanded
  const displayLimit = showAllImages ? filteredImages.length : 15;
  const displayedImages = filteredImages.slice(0, displayLimit);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % displayedImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? displayedImages.length - 1 : selectedImage - 1
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-soft-beige mehndi-mandala-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-warm-green mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-traditional-gold mx-auto mb-6"></div>
          <p className="text-lg text-warm-green/80 max-w-2xl mx-auto mb-8">
            Explore our stunning collection of mehndi designs and artistry
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-traditional-gold text-warm-green shadow-lg"
                    : "bg-warm-white text-warm-green hover:bg-traditional-gold/20 border border-traditional-gold/30"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {displayedImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layout
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-heading font-semibold text-lg mb-2">
                        {image.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-traditional-gold text-sm font-medium capitalize">
                          {image.category}
                        </span>
                        <div className="bg-traditional-gold text-warm-green p-2 rounded-full">
                          <Eye size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        {filteredImages.length > 15 && (
          <motion.div variants={itemVariants} className="text-center mt-8">
            <motion.button
              onClick={() => setShowAllImages(!showAllImages)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-traditional-gold text-warm-green px-8 py-3 rounded-full font-semibold hover:bg-traditional-gold-light transition-colors duration-300 shadow-lg"
            >
              {showAllImages
                ? `Show Less Images`
                : `Show All ${filteredImages.length} Images`}
            </motion.button>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={displayedImages[selectedImage].src}
                  alt={displayedImages[selectedImage].alt}
                  width={800}
                  height={1000}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-warm-green/80 text-white p-2 rounded-full hover:bg-warm-green transition-colors duration-300"
                >
                  <X size={24} />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-warm-green/80 text-white p-3 rounded-full hover:bg-warm-green transition-colors duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-warm-green/80 text-white p-3 rounded-full hover:bg-warm-green transition-colors duration-300"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-warm-green/90 text-white p-4 rounded-lg">
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {displayedImages[selectedImage].title}
                  </h3>
                  <p className="text-traditional-gold text-sm capitalize">
                    {displayedImages[selectedImage].category} •{" "}
                    {displayedImages[selectedImage].type} Design
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
