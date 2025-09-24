"use client";

import { AnimatePresence, easeInOut, motion, Variants } from "framer-motion";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Function to get user initials
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Sector 62, Noida",
      rating: 5,
      review:
        "Krishna ji ne mere wedding ke liye bahut hi sundar mehndi lagayi! Design bilkul perfect thi aur color bhi bahut accha aaya. Highly recommended! 💕",
      occasion: "Wedding",
      language: "hinglish",
      mehandiImage: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.01.jpeg",
    },
    {
      id: 2,
      name: "Anjali Gupta",
      location: "Greater Noida",
      rating: 5,
      review:
        "Absolutely amazing work! The bridal mehndi was so intricate and beautiful. Krishna ji is very professional and the designs are unique. Best mehndi artist in Noida!",
      occasion: "Bridal",
      language: "english",
      mehandiImage: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.02.jpeg",
    },
    {
      id: 3,
      name: "Kavita Agarwal",
      location: "Sector 120, Noida",
      rating: 5,
      review:
        "मेरी बेटी की शादी के लिए कृष्णा जी से मेहंदी लगवाई थी। बहुत ही सुंदर और बारीक काम किया है। सभी guests ने तारीफ की। धन्यवाद!",
      occasion: "Wedding",
      language: "hindi",
      mehandiImage: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.05.jpeg",
    },
    {
      id: 4,
      name: "Sneha Verma",
      location: "Sector 18, Noida",
      rating: 5,
      review:
        "Karwa Chauth ke liye book kiya tha. Time pe aaye aur bahut jaldi aur sundar mehndi lagai. Price bhi reasonable hai. Will definitely book again for festivals!",
      occasion: "Festival",
      language: "hinglish",
      mehandiImage: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.06.jpeg",
    },
    {
      id: 5,
      name: "Ritu Singh",
      location: "Indirapuram",
      rating: 5,
      review:
        "Excellent service! The Arabic mehndi design was exactly what I wanted. Very clean work and the color stayed for more than 2 weeks. Highly professional!",
      occasion: "Party",
      language: "english",
      mehandiImage: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.12.jpeg",
    },
    {
      id: 6,
      name: "Meera Jain",
      location: "Sector 76, Noida",
      rating: 5,
      review:
        "Krishna ji ka kaam bahut hi badhiya hai! Mere engagement ke liye perfect mehndi lagai. Design unique thi aur sabko pasand aayi. Thank you so much! ✨",
      occasion: "Engagement",
      language: "hinglish",
      mehandiImage: "/mehandi/WhatsApp Image 2025-09-23 at 21.28.14.jpeg",
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
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    {/* User Initials */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-traditional-gold flex items-center justify-center border-4 border-traditional-gold shadow-lg">
                        <span className="text-warm-green font-bold text-lg md:text-xl">
                          {getInitials(reviews[currentReview].name)}
                        </span>
                      </div>
                      <div className="absolute -top-2 -right-2 bg-warm-green text-white rounded-full p-1.5">
                        <Quote size={12} />
                      </div>
                    </div>

                    {/* Mehandi Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-traditional-gold shadow-lg">
                        <Image
                          src={reviews[currentReview].mehandiImage}
                          alt={`Mehandi work by Krishna for ${reviews[currentReview].name}`}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1 text-center lg:text-left">
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
                        &ldquo;{reviews[currentReview].review}&rdquo;
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

          {/* Compact Review Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {reviews
                .slice(0, showAllReviews ? reviews.length : 6)
                .map((review) => (
                  <motion.div
                    key={review.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-warm-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-traditional-gold/10"
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      {/* User Initials */}
                      <div className="w-10 h-10 rounded-full bg-traditional-gold flex items-center justify-center flex-shrink-0">
                        <span className="text-warm-green font-semibold text-sm">
                          {getInitials(review.name)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-warm-green text-sm truncate">
                          {review.name}
                        </h4>
                        <div className="flex mb-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className="text-traditional-gold fill-current"
                            />
                          ))}
                        </div>
                        <div className="text-xs text-warm-green/60 mb-2">
                          {review.occasion} • {review.location}
                        </div>
                      </div>
                    </div>

                    {/* Mehandi Image */}
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={review.mehandiImage}
                        alt={`Mehandi work for ${review.name}`}
                        width={300}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-warm-green/80 text-xs leading-relaxed line-clamp-2">
                      {review.review}
                    </p>
                  </motion.div>
                ))}
            </div>

            {/* Show More/Less Button */}
            {reviews.length > 6 && (
              <div className="text-center">
                <motion.button
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-traditional-gold text-warm-green px-6 py-2 rounded-full font-semibold hover:bg-traditional-gold-light transition-colors duration-300 shadow-md"
                >
                  {showAllReviews
                    ? "Show Less Reviews"
                    : `Show All ${reviews.length} Reviews`}
                </motion.button>
              </div>
            )}
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
