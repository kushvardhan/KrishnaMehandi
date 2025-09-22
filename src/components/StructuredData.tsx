import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Krishna Mehandi Artist",
    "alternateName": "Krishna Mehandi",
    "description": "Professional Bridal Mehndi Designer in Noida specializing in Arabic, Rajasthani, and Modern Mehndi designs for weddings and special occasions.",
    "url": "https://krishnamehandi.vercel.app",
    "telephone": "+919873382317",
    "email": "ds4393645@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Dushyant Singh"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Amrapali Zodiac Market, Sector-120, Near Apollo Medical",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.5355",
      "longitude": "77.3910"
    },
    "openingHours": "Mo-Su 09:00-21:00",
    "priceRange": "₹₹",
    "image": [
      "https://krishnamehandi.vercel.app/logo/KrishnaMehandiLogo.png",
      "https://krishnamehandi.vercel.app/ownerImage/KrishnaMehandi-Owner.jpeg"
    ],
    "logo": "https://krishnamehandi.vercel.app/logo/KrishnaMehandiLogo.png",
    "sameAs": [
      "https://www.instagram.com/krishnamehandi2024",
      "https://www.wedmegood.com/profile/Krishna-Mehandi-Art-1757982/reviews",
      "https://wa.me/919873382317"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "28.5355",
        "longitude": "77.3910"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mehndi Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bridal Mehndi",
            "description": "Traditional and modern bridal mehndi designs for weddings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arabic Mehndi",
            "description": "Beautiful Arabic mehndi patterns and designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rajasthani Mehndi",
            "description": "Traditional Rajasthani mehndi designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Party Mehndi",
            "description": "Mehndi designs for festivals and special occasions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Amazing bridal mehndi work! Krishna ji created the most beautiful designs for my wedding. Highly recommended!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Anjali Gupta"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best mehndi artist in Noida! Professional service and stunning Arabic designs."
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
