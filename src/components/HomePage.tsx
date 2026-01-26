import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useScrollDirection } from "../hooks/useScrollDirection";

// ────────────────────────────────────────────────
// Expertise Card – flicker-free version
// ────────────────────────────────────────────────
function ExpertiseCard({ product, index }: { product: any; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-60px 0px -120px 0px",
  });

  return (
    <Link
      to="/products"
      ref={ref}
      className={`
        group block will-change-transform transition-all duration-[1200ms] ease-out
        ${inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-24"}
      `}
      style={{ transitionDelay: `${index * 250}ms` }}
    >
      <div
        className="
          relative h-full rounded-2xl overflow-hidden
          bg-gradient-to-b from-white/6 to-white/[0.02]
          border border-white/10 backdrop-blur-md
          transition-all duration-500
          hover:border-[#F9D976]/50 hover:shadow-xl hover:shadow-[#F9D976]/15
        "
      >
        <div className="shine-overlay absolute inset-0 pointer-events-none z-10" />

        <div className="relative h-56 md:h-64 overflow-hidden bg-[#1A1F2E]">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-out transform-gpu
              group-hover:scale-110
            "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
        </div>

        <div className="p-6 md:p-8 space-y-4 relative z-20">
          <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-[#F9D976] transition-colors duration-300">
            {product.title}
          </h3>

          <p className="text-gray-300/90 text-base leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center text-[#F9D976] text-sm font-medium pt-3 group-hover:translate-x-3 transition-transform duration-300">
            <span>Discover more</span>
            <ArrowRight size={18} className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  // ────────────────────────────────────────────────
  // Data
  // ────────────────────────────────────────────────
  const products = [
    {
      title: "Luxury Gold Finish Labels",
      description: "24K gold plating, premium finish, scratch resistant",
      image: "/gold-finish.webp",
    },
    {
      title: "Premium Nickel Chrome Stickers",
      description: "Mirror finish, corrosion resistant, outdoor life 5+ years",
      image: "/chrome-finish.webp",
    },
    {
      title: "Stainless Steel Silver Labels",
      description: "Brushed steel finish, industrial grade",
      image: "/silver-finish.webp",
    },
  ];

  const categories = [
    "Luxury Gold Finish Labels",
    "Premium Nickel Chrome Stickers",
    "Stainless Steel Silver Labels",
    "Rose Gold Premium Stickers",
    "Matte Black Finish Stickers",
    "Custom Printed Stickers",
  ];

  const process = [
    { step: "01", title: "Share Your Design", desc: "Send us your logo or artwork" },
    { step: "02", title: "Electroplating & Molding", desc: "Precision manufacturing process" },
    { step: "03", title: "Quality Check", desc: "Rigorous inspection standards" },
    { step: "04", title: "Secure Packaging & Delivery", desc: "Fast and secure shipping" },
  ];

  const gallery = ["/12.webp", "/13.webp", "/11.webp", "/gold-finish.webp", "/rose-gold.webp"];

  const brands = [
    { name: "Cello", logo: "/images.png" },
    { name: "Panasonic", logo: "/panasonic.png" },
    { name: "Liebherr", logo: "/l.png" },
    { name: "Kelvinator", logo: "/k.png" },
    { name: "GEM", logo: "/g.png" },
    { name: "Voltas", logo: "/v.png" },
    { name: "Haier", logo: "/h.png" },
    { name: "Samsung", logo: "/s.png" },
  ];

  // ────────────────────────────────────────────────
  // Hero Background Carousel
  // ────────────────────────────────────────────────
  const heroImages = [
    
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1920&auto=format&fit=crop",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % heroImages.length;
        setIsTransitioning(true);
        return next;
      });
    }, 3500);
    return () => clearInterval(bgInterval);
  }, [heroImages.length]);

  // ────────────────────────────────────────────────
  // Scam Alert Popup
  // ────────────────────────────────────────────────
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("scamAlertSeen");
    if (!hasSeen) {
      setShowAlert(true);
    }
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
    localStorage.setItem("scamAlertSeen", "true");
  };

  // ────────────────────────────────────────────────
  // Typing Animation
  // ────────────────────────────────────────────────
  const typingText = [
    "Welcome to India’s Best Sticker Company",
    "Where You Get Premium Electroplated Labels",
    "Gold • Silver • Chrome • Custom Shapes",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    let timeout: number | undefined;
    const currentText = typingText[textIndex] || "";

    if (charIndex < currentText.length) {
      timeout = window.setTimeout(() => {
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((c) => c + 1);
      }, 45);
    } else {
      timeout = window.setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((t) => (t + 1) % typingText.length);
      }, 1400);
    }

    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, [charIndex, textIndex]);

  const scrollDirection = useScrollDirection();

  // ────────────────────────────────────────────────
  // Parallax Scroll for Expertise Header
  // ────────────────────────────────────────────────
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { ref: headerInViewRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: processInViewRef, inView: processInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: galleryInViewRef, inView: galleryInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: brandsInViewRef, inView: brandsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#0A0F1F] text-white min-h-screen">
      <Helmet>
        <title>Metal Stickers India | Custom Electroplated Metal Labels</title>
        <meta
          name="description"
          content="India's leading manufacturer of premium gold, silver, and nickel chrome metal stickers."
        />
      </Helmet>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shine {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-fade-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .shine-overlay {
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          background-size: 200% 100%;
          animation: shine 6s infinite linear;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .group:hover .shine-overlay { opacity: 0.18; }
      `}</style>

      {/* Scam Alert */}
      {showAlert && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-6"
          role="dialog"
        >
          <div className="bg-[#0F1724] border border-[#F9D976]/30 rounded-2xl p-6 max-w-xl w-full shadow-2xl relative">
            <button
              onClick={closeAlert}
              className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
            >
              ✕
            </button>
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-3">
              ⚠️ Beware of Scammers
            </h3>
            <p className="text-sm text-gray-300 text-center">
              The ONLY official website is{" "}
              <span className="font-bold">metalstickersindiaofficial.com</span>
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={closeAlert}
                className="bg-gradient-to-r from-[#F9D976] to-[#F39F23] text-[#0A0F1F] px-6 py-3 rounded-full font-medium hover:brightness-110 transition"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div
            className={`flex h-full w-full transition-transform duration-500 ease-in-out ${
              isTransitioning ? "" : "duration-0"
            }`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroImages.map((img, index) => (
              <div key={index} className="relative flex-shrink-0 w-full h-full">
                <img
                  src={img}
                  alt="Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F]/80 via-[#0A0F1F]/60 to-[#0A0F1F]" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto py-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-tight animate-fade-up">
            Premium Electroplated
            <br />
            <span className="bg-gradient-to-r from-[#F9D976] via-[#F6C453] to-[#F39F23] bg-clip-text text-transparent font-medium drop-shadow-sm">
              Metal Stickers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up [animation-delay:200ms] opacity-0">
            Custom Gold, Silver & Chrome Branding Solutions for Businesses & Products.
            <span className="hidden sm:inline">
              {" "}
              Elevate your brand identity with our exquisite craftsmanship.
            </span>
          </p>

          <div className="h-8 mb-10 flex items-center justify-center animate-fade-up [animation-delay:400ms] opacity-0">
            <p className="text-sm sm:text-base text-[#F9D976] font-medium tracking-wide">
              {displayText}
              <span
                className="inline-block ml-1 w-[2px] h-[16px] bg-[#F9D976] animate-pulse"
                aria-hidden
              />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-up [animation-delay:600ms] opacity-0">
            <a
              href="https://wa.me/919999865558?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#22C55E] to-[#15803d] text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              <MessageCircle size={20} className="group-hover:animate-bounce" />
              <span>Get Quote on WhatsApp</span>
            </a>

            <a
              href="/catalog.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md border border-[#F9D976]/30 text-[#F9D976] px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:bg-[#F9D976]/10 hover:border-[#F9D976] shadow-lg"
            >
              <ArrowRight size={20} />
              <span>View Catalogue</span>
            </a>
          </div>
        </div>
      </section>

      {/* Our Expertise Section – fixed version */}
      <section className="py-24 px-5 md:px-8 bg-gradient-to-b from-[#0A0F1F] to-[#0A0F1F]/90">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={headerInViewRef}
            className="text-center mb-16 md:mb-20"
          >
            {/* Reveal Wrapper */}
            <div className="inline-block overflow-hidden py-16 -my-16">
              <div 
                className={`transition-all duration-700 ease-out transform-gpu ${
                  headerInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{
                  transform: headerInView 
                    ? `translateY(${(scrollY - 100) * 0.05}px)` 
                    : "translateY(100%)"
                }}
              >
                <h2 className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tight">
                  Our <span className="text-[#F9D976] font-medium">Expertise</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F9D976] to-[#F39F23] mx-auto rounded-full" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {products.map((product, index) => (
              <ExpertiseCard
                key={index}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#0F1724]">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={processInViewRef}
            className="text-center mb-16"
          >
            {/* Reveal Wrapper */}
            <div className="inline-block overflow-hidden py-16 -my-16">
              <div 
                className={`transition-all duration-1000 ease-out transform-gpu ${
                  processInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{
                  transform: processInView 
                    ? `translateY(${(scrollY * 0.015) % 20 - 10}px)` 
                    : "translateY(100%)"
                }}
              >
                <h2 className="text-3xl sm:text-5xl font-light">Our Process</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F9D976] to-[#F39F23] mx-auto rounded-full mt-4" />
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-white/10 z-0">
              <div 
                className="h-full bg-gradient-to-r from-[#F9D976] to-[#F39F23] transition-all duration-[6000ms] ease-in-out"
                style={{ width: processInView ? "100%" : "0%" }}
              />
            </div>

            {/* Mobile Connecting Line */}
            <div className="md:hidden absolute left-8 top-8 bottom-8 w-0.5 bg-white/10 z-0">
              <div 
                className="w-full bg-gradient-to-b from-[#F9D976] to-[#F39F23] transition-all duration-[6000ms] ease-in-out"
                style={{ height: processInView ? "100%" : "0%" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
              {process.map((item, index) => (
                <div key={index} className="flex flex-row md:flex-col items-center md:text-center group">
                  <div className={`
                    flex-shrink-0 w-16 h-16 rounded-full bg-[#0A0F1F] border-2 flex items-center justify-center text-[#F9D976] font-bold text-xl mb-0 md:mb-6 relative z-10
                    transition-all duration-1000 ease-in-out
                    ${processInView 
                      ? 'border-[#F9D976] shadow-[0_0_20px_rgba(249,217,118,0.4)] scale-110' 
                      : 'border-[#F9D976]/30 shadow-none scale-100'}
                  `}>
                    <div 
                      className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#F9D976] to-[#F39F23] transition-all duration-1000 ease-in-out ${processInView ? 'opacity-100' : 'opacity-0'}`} 
                      style={{ transitionDelay: `${index * 1200}ms` }}
                    />
                    <span className="relative z-10 text-[#0A0F1F]">{item.step}</span>
                  </div>
                  <div className="ml-6 md:ml-0">
                    <h4 className="text-white font-medium mb-2 group-hover:text-[#F9D976] transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Brands */}
      <section className="py-24 bg-[#0A0F1F] overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div 
            ref={brandsInViewRef}
            className="text-center"
          >
            <div className="inline-block overflow-hidden py-16 -my-16">
              <div 
                className={`transition-all duration-1000 ease-out transform-gpu ${
                  brandsInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{
                  transform: brandsInView 
                    ? `translateY(${(scrollY * 0.015) % 20 - 10}px)` 
                    : "translateY(100%)"
                }}
              >
                <h2 className="text-3xl sm:text-5xl font-light">Trusted by Global Brands</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F9D976] to-[#F39F23] mx-auto rounded-full mt-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap py-8">
            {[...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center min-w-[180px] sm:min-w-[240px] group/brand"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-white/5 border-2 border-[#F9D976]/30 flex items-center justify-center mb-4 transition-all duration-500 group-hover/brand:border-[#F9D976] group-hover/brand:bg-[#F9D976]/10 group-hover/brand:shadow-[0_0_30px_rgba(249,217,118,0.4)] relative">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-400 text-sm font-medium tracking-wider uppercase group-hover/brand:text-[#F9D976] transition-colors duration-300">{brand.name}</span>
              </div>
            ))}
          </div>
          
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0F1F] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0F1F] to-transparent z-10" />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#0A0F1F] px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={galleryInViewRef}
            className="text-center mb-16"
          >
            {/* Reveal Wrapper */}
            <div className="inline-block overflow-hidden py-16 -my-16">
              <div 
                className={`transition-all duration-1000 ease-out transform-gpu ${
                  galleryInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{
                  transform: galleryInView 
                    ? `translateY(${(scrollY * 0.015) % 20 - 10}px)` 
                    : "translateY(100%)"
                }}
              >
                <h2 className="text-3xl sm:text-5xl font-light">Gallery</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F9D976] to-[#F39F23] mx-auto rounded-full mt-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 h-[700px] md:h-[550px]">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveGalleryIndex(idx)}
                className={`relative overflow-hidden rounded-2xl transition-all duration-700 ease-in-out cursor-pointer border border-white/10 ${
                  activeGalleryIndex === idx 
                    ? "flex-[4] md:flex-[5]" 
                    : "flex-[1] md:flex-[1] grayscale opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt="Gallery item"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay & Text */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                  activeGalleryIndex === idx ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="absolute bottom-8 left-8 whitespace-nowrap overflow-hidden">
                    <p className="text-[#F9D976] text-xs font-bold tracking-[0.2em] uppercase mb-1">
                      {idx === 0 ? "Chrome Finish" : idx === 1 ? "Gold Plated" : idx === 2 ? "Rose Gold" : idx === 3 ? "Silver Chrome" : "Matte Finish"}
                    </p>
                    <h3 className="text-xl md:text-2xl font-light text-white">
                      {idx === 0 ? "Premium Chrome" : idx === 1 ? "Royal Gold" : idx === 2 ? "Elegant Rose" : idx === 3 ? "Pure Silver" : "Sleek Matte"}
                    </h3>
                  </div>
                </div>

                {/* Vertical Text for collapsed items on Desktop */}
                <div className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
                  activeGalleryIndex === idx ? "opacity-0" : "opacity-100"
                }`}>
                  <p className="rotate-90 text-white/40 text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap">
                    EXPLORE MORE
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Banner */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A0F1F]">
        {/* Background Image with subtle parallax */}
        <div 
          className="absolute inset-0 z-0 opacity-20 grayscale brightness-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-transparent to-[#0A0F1F] z-1" />
        
        <div className="relative z-10 w-full flex flex-col items-center select-none pointer-events-none">
          {/* Top Layer: Precision. (Moves Left) */}
          <div 
            className="text-[20vw] md:text-[15vw] leading-none font-black italic tracking-tighter text-white opacity-20 transition-transform duration-75 ease-out whitespace-nowrap"
            style={{ transform: `translateX(${(scrollY - (typeof window !== 'undefined' && window.innerWidth < 768 ? 3500 : 2000)) * -0.6}px)` }}
          >
            PRECISION. PRECISION. PRECISION.
          </div>

          {/* Middle Layer: Durability. (Moves Right, Outline) */}
          <div 
            className="text-[20vw] md:text-[15vw] leading-none font-black italic tracking-tighter text-transparent transition-transform duration-75 ease-out whitespace-nowrap"
            style={{ 
              transform: `translateX(${(scrollY - (typeof window !== 'undefined' && window.innerWidth < 768 ? 3500 : 2000)) * 0.4}px)`,
              WebkitTextStroke: "1px rgba(249, 217, 118, 0.4)"
            }}
          >
            DURABILITY. DURABILITY. DURABILITY.
          </div>

          {/* Bottom Layer: Luxury. (Moves Left, Gold) */}
          <div 
            className="text-[20vw] md:text-[15vw] leading-none font-black italic tracking-tighter text-[#F9D976] opacity-30 transition-transform duration-75 ease-out whitespace-nowrap"
            style={{ transform: `translateX(${(scrollY - (typeof window !== 'undefined' && window.innerWidth < 768 ? 3500 : 2000)) * -0.5}px)` }}
          >
            LUXURY. LUXURY. LUXURY.
          </div>

          {/* Centered Main Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6 pointer-events-auto">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              PRECISION. DURABILITY. <span className="text-[#F9D976]">LUXURY.</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}