"use client";

import { AnimatePresence, easeInOut, motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  // Responsive display logic - show 15 images initially, all on desktop when expanded
  const displayLimit = showAllImages ? galleryImages.length : 15;
  const displayedImages = galleryImages.slice(0, displayLimit);

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
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="gallery-header"
        >
          <h2 className="gallery-title">Our Gallery</h2>
          <div className="gallery-divider"></div>
          <p className="gallery-subtitle">
            Explore our stunning collection of mehndi designs and artistry
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="gallery-grid"
        >
          <AnimatePresence>
            {displayedImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layout
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="gallery-image"
                />

                {/* Overlay */}
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3 className="gallery-overlay-title">{image.title}</h3>
                    <div className="gallery-overlay-category">
                      {image.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        {galleryImages.length > 15 && (
          <div className="gallery-controls">
            <motion.button
              onClick={() => setShowAllImages(!showAllImages)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gallery-btn"
            >
              {showAllImages
                ? `Show Less Images`
                : `Show All ${galleryImages.length} Images`}
            </motion.button>
          </div>
        )}

        {/* Lightbox */}
         <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lightbox-backdrop"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={displayedImages[selectedImage].src}
              alt={displayedImages[selectedImage].alt}
              width={800}
              height={1000}
              className="lightbox-image"
            />

            {/* Close Button */}
            <button onClick={closeLightbox} className="lightbox-close">
              <X size={24} />
            </button>

            {/* Navigation */}
            <button onClick={prevImage} className="lightbox-prev">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImage} className="lightbox-next">
              <ChevronRight size={24} />
            </button>

            {/* Info */}
            <div className="lightbox-info">
              <h3>{displayedImages[selectedImage].title}</h3>
              <p>
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
