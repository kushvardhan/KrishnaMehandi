"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Sector 62, Noida",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      review:
        "Krishna ji ne mere wedding ke liye bahut hi sundar mehndi lagayi! Design bilkul perfect thi aur color bhi bahut accha aaya. Highly recommended! 💕",
      occasion: "Wedding",
      language: "hinglish",
    },
    {
      id: 2,
      name: "Anjali Gupta",
      location: "Greater Noida",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      review:
        "Absolutely amazing work! The bridal mehndi was so intricate and beautiful. Krishna ji is very professional and the designs are unique. Best mehndi artist in Noida!",
      occasion: "Bridal",
      language: "english",
    },
    {
      id: 3,
      name: "Kavita Agarwal",
      location: "Sector 120, Noida",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      review:
        "मेरी बेटी की शादी के लिए कृष्णा जी से मेहंदी लगवाई थी। बहुत ही सुंदर और बारीक काम किया है। सभी guests ने तारीफ की। धन्यवाद!",
      occasion: "Wedding",
      language: "hindi",
    },
    {
      id: 4,
      name: "Sneha Verma",
      location: "Sector 18, Noida",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      review:
        "Karwa Chauth ke liye book kiya tha. Time pe aaye aur bahut jaldi aur sundar mehndi lagai. Price bhi reasonable hai. Will definitely book again for festivals!",
      occasion: "Festival",
      language: "hinglish",
    },
    {
      id: 5,
      name: "Ritu Singh",
      location: "Indirapuram",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      review:
        "Excellent service! The Arabic mehndi design was exactly what I wanted. Very clean work and the color stayed for more than 2 weeks. Highly professional!",
      occasion: "Party",
      language: "english",
    },
    {
      id: 6,
      name: "Meera Jain",
      location: "Sector 76, Noida",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      review:
        "Krishna ji ka kaam bahut hi badhiya hai! Mere engagement ke liye perfect mehndi lagai. Design unique thi aur sabko pasand aayi. Thank you so much! ✨",
      occasion: "Engagement",
      language: "hinglish",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

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
      id="reviews"
      className="py-20 bg-gradient-to-b from-warm-white to-soft-beige mehndi-pattern-bg"
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
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-traditional-gold mx-auto mb-6"></div>
            <p className="text-lg text-warm-green/80 max-w-2xl mx-auto">
              Real experiences from our happy clients across Noida and NCR
            </p>
          </motion.div>

          {/* Main Review Carousel */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto mb-16"
          >
            <div className="bg-warm-white rounded-3xl shadow-2xl overflow-hidden border border-traditional-gold/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Client Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-traditional-gold shadow-lg">
                        <Image
                          src={reviews[currentReview].image}
                          alt={reviews[currentReview].name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-traditional-gold text-warm-green rounded-full p-2">
                        <Quote size={16} />
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(reviews[currentReview].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              size={20}
                              className="text-traditional-gold fill-current"
                            />
                          )
                        )}
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-lg md:text-xl text-warm-green/90 mb-6 leading-relaxed font-medium">
                        " &ldquo;{reviews[currentReview].review}&rdquo;"
                      </blockquote>

                      {/* Client Info */}
                      <div className="space-y-2">
                        <h4 className="text-xl font-heading font-bold text-warm-green">
                          {reviews[currentReview].name}
                        </h4>
                        <p className="text-warm-green/70 text-sm">
                          {reviews[currentReview].location}
                        </p>
                        <div className="inline-block bg-traditional-gold/20 text-traditional-gold px-3 py-1 rounded-full text-sm font-medium">
                          {reviews[currentReview].occasion}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <motion.button
                  onClick={prevReview}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-warm-green/80 text-white p-3 rounded-full hover:bg-warm-green transition-colors duration-300 shadow-lg"
                >
                  <ChevronLeft size={20} />
                </motion.button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <motion.button
                  onClick={nextReview}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-warm-green/80 text-white p-3 rounded-full hover:bg-warm-green transition-colors duration-300 shadow-lg"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 pb-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview
                        ? "bg-traditional-gold scale-125"
                        : "bg-warm-green/30 hover:bg-warm-green/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Review Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {reviews.slice(0, 6).map((review) => (
                <motion.div
                  key={review.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-warm-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-traditional-gold/10"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-warm-green">
                        {review.name}
                      </h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-traditional-gold fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-warm-green/80 text-sm mb-3 line-clamp-3">
                    {review.review}
                  </p>
                  <div className="text-xs text-warm-green/60">
                    {review.occasion} • {review.location}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* WedMeGood CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-traditional-gold/10 rounded-2xl p-8 border border-traditional-gold/30"
          >
            <h3 className="text-2xl font-heading font-bold text-warm-green mb-4">
              Share Your Experience
            </h3>
            <p className="text-warm-green/80 mb-6 max-w-2xl mx-auto">
              Had a wonderful experience with Krishna Mehandi Artist? We&apos;d
              love to hear from you! Please share your review on our WedMeGood
              profile.
            </p>
            <motion.a
              href="https://www.wedmegood.com/profile/Krishna-Mehandi-Art-1757982/reviews"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-traditional-gold text-warm-green px-8 py-4 rounded-full font-semibold hover:bg-traditional-gold-light transition-colors duration-300 shadow-lg"
            >
              <span>Write a Review on WedMeGood</span>
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
