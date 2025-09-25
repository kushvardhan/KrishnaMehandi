"use client";

import { AnimatePresence, easeInOut, motion, Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  // const [isExpanded, setIsExpanded] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <section className="reviews-section">
      <div className="reviews-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="reviews-header">
            <h2>What Our Clients Say</h2>
            <div className="reviews-header-underline"></div>
            <p>Real experiences from our happy clients across Noida and NCR</p>
          </motion.div>

          {/* Main Review Carousel */}
          <motion.div variants={itemVariants} className="reviews-carousel">
            <div className="review-card-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="review-card"
                >
                  <div className="review-card-inner">
                    <div className="review-user-initials">
                      <div className="avatar-circle">
                        <span>{getInitials(reviews[currentReview].name)}</span>
                      </div>
                      <div className="quote-icon">
                        <Quote size={12} />
                      </div>
                    </div>

                    <div className="review-mehandi-image">
                      <div className="mehandi-wrapper">
                        <Image
                          src={reviews[currentReview].mehandiImage}
                          alt={`Mehandi work by Krishna for ${reviews[currentReview].name}`}
                          width={160}
                          height={160}
                          className="mehandi-img"
                        />
                      </div>
                    </div>

                    <div className="review-content">
                     
                      <blockquote>{reviews[currentReview].review}</blockquote>
                      <div className="review-author-info">
                        <h4>{reviews[currentReview].name}</h4>
                        <p>{reviews[currentReview].location}</p>
                        <div className="review-occasion">
                          {reviews[currentReview].occasion}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button onClick={prevReview} className="review-nav-btn left">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextReview} className="review-nav-btn right">
                <ChevronRight size={20} />
              </button>

              {/* Dots Indicator */}
              <div className="review-dots">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`dot ${index === currentReview ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Compact Review Grid */}
          <motion.div variants={itemVariants} className="reviews-grid">
            {reviews
              .slice(0, showAllReviews ? reviews.length : 6)
              .map((review) => (
                <motion.div key={review.id} className="review-mini-card">
                  <div className="mini-card-header">
                    <div className="avatar-circle-small">
                      {getInitials(review.name)}
                    </div>
                    <div className="mini-card-info">
                      <h4>{review.name}</h4>
                      
                      <div className="mini-card-meta">
                        {review.occasion} • {review.location}
                      </div>
                    </div>
                  </div>
                  <div className="mini-card-mehandi">
                    <Image
                      src={review.mehandiImage}
                      alt={`Mehandi work for ${review.name}`}
                      width={300}
                      height={128}
                      className="mehandi-img"
                    />
                  </div>
                  <p className="mini-card-text">{review.review}</p>
                </motion.div>
              ))}
            
          </motion.div>

          {/* WedMeGood CTA */}
          <motion.div variants={itemVariants} className="reviews-cta">
            <h3>Share Your Experience</h3>
            <p>
              Had a wonderful experience with Krishna Mehandi Artist? We&apos;d
              love to hear from you! Please share your review on our WedMeGood
              profile.
            </p>
            <a
              href="https://www.wedmegood.com/profile/Krishna-Mehandi-Art-1757982/reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Review on WedMeGood <ExternalLink size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
