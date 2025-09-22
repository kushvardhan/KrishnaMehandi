"use client";

import { AnimatePresence, easeInOut, motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  // Placeholder images - these will be replaced with actual gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=600&fit=crop",
      alt: "Bridal Mehndi Design",
      category: "bridal",
      title: "Intricate Bridal Design",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      alt: "Arabic Mehndi Pattern",
      category: "arabic",
      title: "Arabic Floral Pattern",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1583391733981-24c4ec8c3d8b?w=500&h=600&fit=crop",
      alt: "Traditional Rajasthani Design",
      category: "traditional",
      title: "Rajasthani Mandala",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=600&fit=crop",
      alt: "Modern Mehndi Art",
      category: "modern",
      title: "Contemporary Design",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      alt: "Party Mehndi Design",
      category: "party",
      title: "Festival Special",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1583391733981-24c4ec8c3d8b?w=500&h=600&fit=crop",
      alt: "Bridal Hand Art",
      category: "bridal",
      title: "Bridal Elegance",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=600&fit=crop",
      alt: "Arabic Style Mehndi",
      category: "arabic",
      title: "Arabic Geometric",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      alt: "Traditional Pattern",
      category: "traditional",
      title: "Heritage Design",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1583391733981-24c4ec8c3d8b?w=500&h=600&fit=crop",
      alt: "Modern Minimalist",
      category: "modern",
      title: "Minimalist Art",
    },
  ];

  const categories = [
    { id: "all", name: "All Designs" },
    { id: "bridal", name: "Bridal" },
    { id: "arabic", name: "Arabic" },
    { id: "traditional", name: "Traditional" },
    { id: "modern", name: "Modern" },
    { id: "party", name: "Party" },
  ];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
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
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
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
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-traditional-gold text-sm capitalize">
                    {filteredImages[selectedImage].category} Design
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Note for Admin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-traditional-gold/10 border border-traditional-gold/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-warm-green/80 text-sm">
              <strong>Note:</strong> This gallery currently shows placeholder
              images. You can easily update these with your actual mehndi work
              photos through the admin panel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
