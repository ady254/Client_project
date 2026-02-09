import { ArrowRight, Award, Clock, Headphones, MessageCircle, Smile, Truck, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// ────────────────────────────────────────────────
// Service Detail Block - Full width detail view
// ────────────────────────────────────────────────
interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string[];
  specs: Record<string, unknown>;
  Application?: string[];
}

function ServiceDetailBlock({ product, index, onClick }: { product: Product; index: number; onClick: (product: Product) => void }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      onClick={() => onClick(product)}
      ref={ref}
      className={`
        group relative block bg-[#1A1F2E]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#F9D976]/30 hover:shadow-[0_0_40px_rgba(249,217,118,0.1)]
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden bg-white/5 p-8 flex items-center justify-center relative">
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#F9D976]">0{index + 1}</span>
          <div className="h-px w-4 bg-[#F9D976]/30" />
        </div>
        <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#F9D976] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="pt-4 flex items-center justify-between">
          <div className="px-3 py-1.5 bg-[#F9D976]/10 border border-[#F9D976]/20 rounded-lg text-[9px] font-bold uppercase tracking-widest text-[#F9D976]">
            View Details
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-[#F9D976] group-hover:border-[#F9D976]/30 transition-all">
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Typing Animation Data
// ────────────────────────────────────────────────


// ────────────────────────────────────────────────
// Counter Component for animated numbers
// ────────────────────────────────────────────────
function Counter({ target, duration = 2000, suffix = "", startAnimation, decimals = 0 }: { target: number, duration?: number, suffix?: string, startAnimation: boolean, decimals?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const currentCount = percentage * target;
      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, startAnimation]);

  return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>;
}

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // ────────────────────────────────────────────────
  // Data
  // ────────────────────────────────────────────────
  const stickerProducts = [
    {
      id: 7,
      name: 'Nickel Chrome Stickers',
      category: 'chrome',
      description: 'Nickel chrome stickers are premium metal stickers made using an electroforming process. They have a thin profile, smooth finish, and a modern metallic look. These stickers are very strong, long-lasting, and resistant to wear and tear.',
      image: ['/chrome-finish.webp'],
      specs: {
        priceRange: '₹45-85/piece',
        minOrder: '50 Sheets',
        size: 'A3 or A4',
        adhesive: '6010 or 467',
        benefits: 'Premium chrome finish | Thin and lightweight design | High durability and long life',
      },
      Application: ['Automotive: Emblems, interior trim, and dashboard logos', 'Electronics: Laptop branding, smartphones, and camera labels', 'Luxury Goods: Perfume bottles, wine bottles, and jewelry boxes', 'Appliances: Logos on kitchen appliances, washing machines, and fridges'],
    },
    {
      id: 8,
      name: 'Gold Finish Labels',
      category: 'gold',
      description: 'Gold finish labels are designed to give products a luxurious and premium appearance. Their shiny, reflective surface instantly attracts attention and improves brand value. These labels are widely used for premium packaging, seals, logos, and product branding.',
      image: ['/gold-finish.webp'],
      specs: {
        purity: '24K gold plating',
        priceRange: '₹65-120/piece',
        minOrder: '50 Sheets',
        size: 'A3 or A4',
        benefits: 'Rich & elegant gold appearance | Waterproof and scratch-resistant | Long-lasting & durable',
      },
      Application: ['Luxury goods', 'Electronics', 'Automobile Parts'],
    },
    {
      id: 9,
      name: 'Stainless Steel Silver Sticker',
      category: 'silver',
      description: 'Stainless steel silver stickers offer maximum strength, corrosion resistance, and a clean metallic finish. They are ideal for industrial, commercial, and premium branding applications where durability is essential.',
      image: ['/silver-finish.webp'],
      specs: {
        priceRange: '₹45-85',
        minOrder: '50 Sheets',
        size: 'A3 or A4',
        adhesive: '6010 or 467',
        benefits: 'Durability & Longevity | Strong stainless steel material | Long-lasting premium silver finish',
      },
      Application: ['Branding & Labeling: Electronics, high-end consumer goods, and furniture', 'Industrial Identification: Machinery, equipment, and tools', 'Automotive & Outdoor: Car badges, vehicle branding, or outdoor equipment'],
    },
  ];

  const platingProducts = [
    {
      id: 201,
      name: 'Gold Plating',
      category: 'gold',
      description: 'Gold plating is a premium electroplating process that coats metal surfaces with any number of microns of 24K gold. It enhances the product’s appearance while improving corrosion resistance, durability, and electrical performance. Ideal for luxury, industrial, and precision components that require both beauty and reliability.',
      image: ['gold-plating.webp', '/gold-pcb-plating.webp', '/24k-gold-plating-jewellery-ring-sticker.webp', '/24k-gold-plating-watch-branding-sticker.webp'],
      specs: {
        finish: '24K Gold Electroplating',
        serviceLocation: 'Pan India',
        paymentMode: 'Online/Offline',
        benefits: 'Corrosion Resistance | High Durability | Aesthetic Appeal | Cost-Effective',
      },
      Application: ['Electronics & Electrical Components', 'PTH Boards', 'Printed Circuit Boards (PCBs)', 'Watch Industry', 'Medical Equipments', 'Automobile Industry', 'Jewellery', 'Artificial Jewellery'],
    },
    {
      id: 202,
      name: 'Silver Plating',
      category: 'silver',
      description: 'Silver plating is a metal finishing process where a thin layer of silver is applied to a surface to improve conductivity, corrosion resistance, and appearance. It provides a clean, bright finish and is widely used in electronics, industrial components, decorative items, and precision parts where performance and reliability are important.',
      image: ['/silver_plating1.webp', '/silver_plating.webp', '/silver-plating-contact.webp'],
      specs: {
        platingThickness: 'As per requirements',
        serviceLocation: 'Pan India',
        paymentMode: 'Online/Offline',
        benefits: 'Electrical Conductivity | High Durability | Corrosion Resistance',
      },
      Application: ['Bus Bar', 'Contacts', 'Medical Equipments'],
    },
    {
      id: 203,
      name: 'Nickel Chrome Plating',
      category: 'chrome',
      description: 'Nickel chrome plating is a protective metal finishing process that gives surfaces a bright, mirror-like finish along with excellent corrosion resistance and durability. It is widely used for products that require a strong surface, long life, and a premium metallic appearance.',
      image: ['/nickel-chrome.webp'],
      specs: {
        platingThickness: 'As per requirements',
        finish: 'Nickel Chrome Plating',
        serviceLocation: 'Pan India',
        benefits: 'Corrosion Resistance | High Durability | Aesthetic Appeal | Cost-Effective',
      },
      Application: ['Automobile Industry', 'Household and Plumbing', 'Electronics & Electrical Components', 'Medical Equipments'],
    },
  ];


  const gallery = ["/12.webp", "/13.webp", "/11.webp", "/gold-finish.webp", "/rose-gold.webp"];

  const brands = [
    { name: "Cello", logo: "/Cello.webp" },
    { name: "Panasonic", logo: "/panasonic.png" },
    { name: "Liebherr", logo: "/l.webp" },
    { name: "Kelvinator", logo: "/k.webp" },

    { name: "Voltas", logo: "/Voltas.webp" },
    { name: "Haier", logo: "/h.webp" },
    { name: "Samsung", logo: "/Samsung.webp" },

  ];

  // ────────────────────────────────────────────────
  // Hero Background Carousel
  // ────────────────────────────────────────────────
  const heroImages = [
    "/01.webp",
    "/02.webp",
    "/silver_plating.webp",
    "/gold-plating.webp",
    "/gem-finished.webp",
    "/chrome-finish.webp",
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

  const typingText = [
    "Metal Sticker India",
    "Precision in Every Detail",
    "Luxury Metal Branding",
    "Durability Meets Elegance"
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const [showSplash, setShowSplash] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [splashText, setSplashText] = useState("");

  // Splash Typing Effect
  useEffect(() => {
    const fullText = "Metal Sticker India";
    let currentIdx = 0;

    // Disable scroll while splash is active
    document.body.style.overflow = 'hidden';

    // Fast typing speed
    const typingInterval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setSplashText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(typingInterval);
        // Increased pause before exit for a more cinematic feel
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setShowSplash(false);
            document.body.style.overflow = 'unset';
          }, 1500); // Slower, more engaging fade out
        }, 800);
      }
    }, 75); // Balanced typing speed

    return () => {
      clearInterval(typingInterval);
      document.body.style.overflow = 'unset';
    };
  }, []);

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

  // ────────────────────────────────────────────────
  // Parallax Scroll for Expertise Header
  // ────────────────────────────────────────────────
  const [scrollY, setScrollY] = useState(0);
  const [bannerScroll, setBannerScroll] = useState(0);
  const bannerRef = useRef<HTMLElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        setBannerScroll(window.innerHeight - rect.top);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { ref: headerInViewRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const { ref: galleryInViewRef, inView: galleryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: brandsInViewRef, inView: brandsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: testimonialsInViewRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whyChooseUsInViewRef, inView: whyChooseUsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#0A0F1F] text-white min-h-screen overflow-x-hidden">
      {/* Splash Screen */}
      {showSplash && (
        <div className={`fixed inset-0 z-[100000] flex items-center justify-center transition-all duration-[1500ms] ease-in-out ${isExiting ? 'opacity-0 scale-110 blur-md' : 'opacity-100 scale-100 blur-0'}`}>
          <div className="absolute inset-0 bg-[#0A0F1F] flex items-center justify-center">
            {/* Optimized Background */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${isExiting ? 'opacity-0' : 'opacity-20'} bg-[radial-gradient(circle_at_center,_#F9D976_0%,_transparent_70%)]`} />

            {/* Text Content */}
            <div className={`relative z-10 text-center transition-all duration-[1200ms] ${isExiting ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter italic">
                <span className="bg-gradient-to-r from-[#F9D976] via-[#F6C453] to-[#F39F23] bg-clip-text text-transparent will-change-transform">
                  {splashText}
                </span>
                {!isExiting && <span className="inline-block w-1 md:w-2 h-8 md:h-14 bg-[#F9D976] ml-2 animate-pulse" />}
              </h1>
              <div className={`mt-4 flex items-center justify-center space-x-2 transition-all duration-1000 ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-[#F9D976]/50" />
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#F9D976]/70 font-bold">Excellence in Metal</span>
                <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-[#F9D976]/50" />
              </div>
            </div>
          </div>
        </div>
      )}

      <Helmet>
        <title>Metal Stickers India | Custom Electroplated Metal Labels</title>
        <meta
          name="description"
          content="India's leading manufacturer of premium gold, silver, and nickel chrome metal stickers."
        />
      </Helmet>

      {/* Custom Styles */}


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
            className={`flex h-full w-full transition-transform duration-500 ease-in-out ${isTransitioning ? "" : "duration-0"
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

        <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl mx-auto py-12 sm:py-20">
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-tight animate-fade-up">
            Premium Metal Stickers &
            <br />
            <span className="bg-gradient-to-r from-[#F9D976] via-[#F6C453] to-[#F39F23] bg-clip-text text-transparent font-medium drop-shadow-sm">
              Precious Metal Plating
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up [animation-delay:200ms] opacity-0">
            Two specialized services tailored for branding and industrial excellence.
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

          <div className="flex flex-col items-center gap-8 animate-fade-up [animation-delay:600ms] opacity-0">
            {/* Primary CTAs Side by Side */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              <Link
                to="/metal-stickers"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#F9D976] to-[#F39F23] text-[#0A0F1F] px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <span className="text-xl">🟡</span>
                <span>Explore Metal Stickers</span>
              </Link>

              <Link
                to="/precious-plating"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:bg-white/20 hover:scale-105 shadow-lg"
              >
                <span className="text-xl">⚪</span>
                <span>Explore Plating Services</span>
              </Link>
            </div>

            {/* Secondary CTAs Below */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium">
              <a
                href="https://wa.me/919999865558"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F9D976] hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
                Order Stickers on WhatsApp: +91 99998 65558
              </a>
              <span className="hidden sm:block text-gray-600">|</span>
              <a
                href="https://wa.me/919811018728"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#F9D976] transition-colors"
              >
                <MessageCircle size={16} />
                Order Plating on WhatsApp: +91 9811018728
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section – fixed version */}
      <section className="py-24 px-5 md:px-8 bg-gradient-to-b from-[#0A0F1F] to-[#0A0F1F]/90 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            ref={headerInViewRef}
            className="text-center mb-16 md:mb-20"
          >
            {/* Reveal Wrapper */}
            <div className="inline-block overflow-hidden py-16 -my-16">
              <div
                className={`transition-all duration-700 ease-out transform-gpu ${headerInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
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

          {/* Section 1: Metal Stickers */}
          <div className="mb-32">
            <h3 className="text-3xl font-bold text-white mb-12 text-center border-b border-white/10 pb-6">
              <span className="text-[#F9D976]">01.</span> Premium Metal Stickers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stickerProducts.map((product, index) => (
                <ServiceDetailBlock
                  key={product.id}
                  product={product}
                  index={index}
                  onClick={setSelectedProduct}
                />
              ))}
            </div>
            {/* Explore More Services Button */}
            <div className="text-center mt-12 flex justify-center">
              <Link
                to="/metal-stickers"
                className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#F9D976] to-[#F39F23] text-[#0A0F1F] px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#F9D976]/30 group"
              >
                <span>Explore All Metal Stickers</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Section 2: Precious Metal Plating */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center border-b border-white/10 pb-6">
              <span className="text-[#F9D976]">02.</span> Precious Metal Plating Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platingProducts.map((product, index) => (
                <ServiceDetailBlock
                  key={product.id}
                  product={product}
                  index={index}
                  onClick={setSelectedProduct}
                />
              ))}
            </div>
            {/* Explore More Services Button */}
            <div className="text-center mt-12 flex justify-center">
              <Link
                to="/precious-plating"
                className="inline-flex items-center justify-center space-x-3 bg-white/5 border border-white/20 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:bg-white/10 hover:scale-105 group"
              >
                <span>Explore All Plating Services</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
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
                className={`transition-all duration-1000 ease-out transform-gpu ${brandsInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
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

      {/* Client Testimonials */}
      <section className="py-24 bg-[#0A0F1F] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={testimonialsInViewRef}
            className="text-center mb-20"
          >
            <div className="inline-block overflow-hidden py-16 -my-16">
              <div
                className={`transition-all duration-1000 ease-out transform-gpu ${testimonialsInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                style={{
                  transform: testimonialsInView
                    ? `translateY(${(scrollY * 0.015) % 20 - 10}px)`
                    : "translateY(100%)"
                }}
              >
                <h2 className="text-3xl sm:text-5xl font-light text-white">Client Testimonials</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F9D976] to-[#F39F23] mx-auto rounded-full mt-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Client Satisfaction */}
            <div
              className={`group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-700 hover:duration-300 hover:border-[#F9D976]/40 hover:shadow-[0_0_40px_rgba(249,217,118,0.15)] hover:bg-white/10 hover:-translate-y-1 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: testimonialsInView ? '0ms' : '200ms' }}
            >
              <div className="w-16 h-16 bg-[#F9D976]/10 rounded-full flex items-center justify-center mb-6 border border-[#F9D976]/20 shadow-[0_0_20px_rgba(249,217,118,0.1)] group-hover:border-[#F9D976]/50 group-hover:shadow-[0_0_30px_rgba(249,217,118,0.3)] transition-all duration-300">
                <Smile className="text-[#F9D976] w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-[#F9D976] text-sm font-bold uppercase tracking-widest mb-2">Client Satisfaction</h3>
              <p className="text-4xl font-black text-white group-hover:text-[#F9D976] transition-colors duration-300">
                <Counter target={100} suffix="%" startAnimation={testimonialsInView} />
              </p>
            </div>

            {/* Clients */}
            <div
              className={`group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-700 hover:duration-300 hover:border-[#F9D976]/40 hover:shadow-[0_0_40px_rgba(249,217,118,0.15)] hover:bg-white/10 hover:-translate-y-1 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: testimonialsInView ? '0ms' : '400ms' }}
            >
              <div className="w-16 h-16 bg-[#F9D976]/10 rounded-full flex items-center justify-center mb-6 border border-[#F9D976]/20 shadow-[0_0_20px_rgba(249,217,118,0.1)] group-hover:border-[#F9D976]/50 group-hover:shadow-[0_0_30px_rgba(249,217,118,0.3)] transition-all duration-300">
                <Users className="text-[#F9D976] w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-[#F9D976] text-sm font-bold uppercase tracking-widest mb-2">Clients</h3>
              <p className="text-4xl font-black text-white group-hover:text-[#F9D976] transition-colors duration-300">
                <Counter target={100} suffix="+" startAnimation={testimonialsInView} />
              </p>
            </div>

            {/* Quality Rate */}
            <div
              className={`group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-700 hover:duration-300 hover:border-[#F9D976]/40 hover:shadow-[0_0_40px_rgba(249,217,118,0.15)] hover:bg-white/10 hover:-translate-y-1 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: testimonialsInView ? '0ms' : '600ms' }}
            >
              <div className="w-16 h-16 bg-[#F9D976]/10 rounded-full flex items-center justify-center mb-6 border border-[#F9D976]/20 shadow-[0_0_20px_rgba(249,217,118,0.1)] group-hover:border-[#F9D976]/50 group-hover:shadow-[0_0_30px_rgba(249,217,118,0.3)] transition-all duration-300">
                <Award className="text-[#F9D976] w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-[#F9D976] text-sm font-bold uppercase tracking-widest mb-2">Quality Rate</h3>
              <p className="text-4xl font-black text-white group-hover:text-[#F9D976] transition-colors duration-300">
                <Counter target={99.9} decimals={1} suffix="%" startAnimation={testimonialsInView} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-24 bg-[#0A0F1F] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={whyChooseUsInViewRef}
            className="text-center mb-20"
          >
            <div className="inline-block overflow-hidden py-16 -my-16">
              <div
                className={`transition-all duration-1000 ease-out transform-gpu ${whyChooseUsInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                style={{
                  transform: whyChooseUsInView
                    ? `translateY(${(scrollY * 0.015) % 20 - 10}px)`
                    : "translateY(100%)"
                }}
              >
                <h2 className="text-3xl sm:text-5xl font-light text-white">Why Choose Us?</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F9D976] to-[#F39F23] mx-auto rounded-full mt-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pan-India Delivery */}
            <div
              className={`group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-700 hover:duration-300 hover:border-[#F9D976]/40 hover:shadow-[0_0_40px_rgba(249,217,118,0.15)] hover:bg-white/10 hover:-translate-y-1 ${whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: whyChooseUsInView ? '0ms' : '200ms' }}
            >
              <div className="w-16 h-16 bg-[#F9D976]/10 rounded-full flex items-center justify-center mb-6 border border-[#F9D976]/20 shadow-[0_0_20px_rgba(249,217,118,0.1)] group-hover:border-[#F9D976]/50 group-hover:shadow-[0_0_30px_rgba(249,217,118,0.3)] transition-all duration-300">
                <Truck className="text-[#F9D976] w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F9D976] transition-colors duration-300">Pan-India Delivery</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Fast, Secure Shipping across all major cities</p>
            </div>

            {/* 24/7 Support */}
            <div
              className={`group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-700 hover:duration-300 hover:border-[#F9D976]/40 hover:shadow-[0_0_40px_rgba(249,217,118,0.15)] hover:bg-white/10 hover:-translate-y-1 ${whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: whyChooseUsInView ? '0ms' : '400ms' }}
            >
              <div className="w-16 h-16 bg-[#F9D976]/10 rounded-full flex items-center justify-center mb-6 border border-[#F9D976]/20 shadow-[0_0_20px_rgba(249,217,118,0.1)] group-hover:border-[#F9D976]/50 group-hover:shadow-[0_0_30px_rgba(249,217,118,0.3)] transition-all duration-300">
                <Headphones className="text-[#F9D976] w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F9D976] transition-colors duration-300">24/7 Support</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Always available</p>
            </div>

            {/* Fast Delivery */}
            <div
              className={`group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-700 hover:duration-300 hover:border-[#F9D976]/40 hover:shadow-[0_0_40px_rgba(249,217,118,0.15)] hover:bg-white/10 hover:-translate-y-1 ${whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: whyChooseUsInView ? '0ms' : '600ms' }}
            >
              <div className="w-16 h-16 bg-[#F9D976]/10 rounded-full flex items-center justify-center mb-6 border border-[#F9D976]/20 shadow-[0_0_20px_rgba(249,217,118,0.1)] group-hover:border-[#F9D976]/50 group-hover:shadow-[0_0_30px_rgba(249,217,118,0.3)] transition-all duration-300">
                <Clock className="text-[#F9D976] w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F9D976] transition-colors duration-300">Fast Delivery</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Quick turnaround</p>
            </div>
          </div>
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
                className={`transition-all duration-1000 ease-out transform-gpu ${galleryInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
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
                className={`relative overflow-hidden rounded-2xl transition-all duration-700 ease-in-out cursor-pointer border border-white/10 ${activeGalleryIndex === idx
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
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${activeGalleryIndex === idx ? "opacity-100" : "opacity-0"
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
                <div className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${activeGalleryIndex === idx ? "opacity-0" : "opacity-100"
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
      <section ref={bannerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A0F1F]">
        {/* Background Image with subtle parallax */}
        <div
          className="absolute inset-0 z-0 opacity-20 grayscale brightness-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${bannerScroll * 0.1}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-transparent to-[#0A0F1F] z-1" />

        <div className="relative z-10 w-full flex flex-col items-center select-none pointer-events-none">
          {/* Top Layer: Precision */}
          <div
            className="text-[15vw] md:text-[15vw] leading-none font-black italic tracking-tighter text-white opacity-20 whitespace-nowrap transition-transform duration-75 ease-out"
            style={{
              transform: `translateX(${bannerScroll * (isMobile ? -0.2 : -0.4)}px)`
            }}
          >
            PRECISION. PRECISION. PRECISION.
          </div>

          {/* Middle Layer: Durability (Outline) */}
          <div
            className="text-[15vw] md:text-[15vw] leading-none font-black italic tracking-tighter text-transparent whitespace-nowrap transition-transform duration-75 ease-out"
            style={{
              transform: `translateX(${(bannerScroll - 200) * (isMobile ? 0.15 : 0.3)}px)`,
              WebkitTextStroke: "1px rgba(249, 217, 118, 0.4)"
            }}
          >
            DURABILITY. DURABILITY. DURABILITY.
          </div>

          {/* Bottom Layer: Luxury (Gold) */}
          <div
            className="text-[15vw] md:text-[15vw] leading-none font-black italic tracking-tighter text-[#F9D976] opacity-30 whitespace-nowrap transition-transform duration-75 ease-out"
            style={{
              transform: `translateX(${(bannerScroll - 400) * (isMobile ? -0.25 : -0.5)}px)`
            }}
          >
            LUXURY. LUXURY. LUXURY.
          </div>

          {/* Centered Main Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6 pointer-events-auto">
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black italic tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              PRECISION. DURABILITY. <span className="text-[#F9D976]">LUXURY.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

function ProductModal({ selectedProduct, onClose }: { selectedProduct: any; onClose: () => void }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-[#0A0F1F]/95 backdrop-blur-xl"
        onClick={onClose}
      />
      <div className="relative bg-[#0A0F1F] border border-white/5 w-full max-w-5xl h-[100dvh] md:h-[90vh] rounded-none md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
        {/* Close Button - More visible and positioned better */}
        <div className="absolute top-4 right-4 z-[110]">
          <button
            onClick={onClose}
            className="w-10 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content Wrapper */}
        <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto custom-scrollbar md:overflow-hidden">

          {/* Left: Image Showcase */}
          <div className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col md:flex-row gap-6 items-center justify-center border-b md:border-b-0 md:border-r border-white/10 bg-white/5 md:overflow-hidden min-h-[40vh] md:min-h-0">
            {/* Thumbnails - Order 2 on Mobile (Bottom), Order 1 on Desktop (Left) */}
            {selectedProduct.image.length > 1 && (
              <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto w-full md:w-24 md:h-full scrollbar-hide flex-shrink-0 justify-center md:justify-start py-2 md:py-4 px-1">
                {selectedProduct.image.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveImageIndex(idx)}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg border overflow-hidden bg-white/5 transition-all duration-200 ${activeImageIndex === idx
                      ? 'border-[#F9D976] ring-2 ring-[#F9D976] opacity-100'
                      : 'border-white/10 hover:border-[#F9D976]/50 opacity-70 hover:opacity-100'
                      }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image - Order 1 on Mobile, Order 2 on Desktop */}
            <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
              <img
                src={selectedProduct.image[activeImageIndex]}
                alt={selectedProduct.name}
                className="w-auto h-auto max-w-full max-h-[50vh] md:max-h-full object-contain mx-auto drop-shadow-[0_0_30px_rgba(249,217,118,0.2)] transition-all duration-500 cursor-zoom-in group-hover:scale-150"
                onMouseMove={(e) => {
                  const target = e.currentTarget;
                  const rect = target.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  target.style.transformOrigin = `${x}% ${y}%`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transformOrigin = 'center';
                }}
              />
              {/* Navigation Arrows for Mobile Gallery */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none md:hidden">
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImageIndex(prev => (prev - 1 + selectedProduct.image.length) % selectedProduct.image.length) }}
                  className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 pointer-events-auto"
                >
                  ←
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImageIndex(prev => (prev + 1) % selectedProduct.image.length) }}
                  className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 pointer-events-auto"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right: Detailed Info */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 md:h-full md:overflow-y-auto custom-scrollbar bg-[#0A0F1F]">
            <div className="flex-1 space-y-10 pb-32">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="h-px w-6 bg-[#F9D976]/50" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F9D976]">Premium Product</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {/* Applications */}
                {selectedProduct.Application && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#F9D976] flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F9D976] mr-2" />
                      Common Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.Application.map((app: string, i: number) => (
                        <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[9px] text-gray-300 font-bold uppercase tracking-widest rounded-md">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Specs */}
                {selectedProduct.specs && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#F9D976] flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F9D976] mr-2" />
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(selectedProduct.specs).map(([key, value]) => (
                        <div key={key} className="flex flex-col border-b border-white/5 pb-2">
                          <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1">
                            {key.replace(/([A-Z])/g, ' $1').replace('_', ' ').trim()}
                          </span>
                          <span className="text-white font-bold text-sm uppercase tracking-tight">
                            {Array.isArray(value) ? value.join(' | ') : String(value)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>


            </div>

            {/* Floating Footer for CTA */}
            <div className="sticky bottom-0 left-0 right-0 pt-6 pb-2 bg-[#0A0F1F] border-t border-white/5 mt-auto">
              <a
                href={`https://wa.me/${selectedProduct.category === 'gold' && selectedProduct.name.includes('Sticker') || selectedProduct.id >= 4 ? '919999865558' : '919811018728'}?text=${encodeURIComponent(`New Inquiry\n\nProduct: ${selectedProduct.name}\n\nI interested in this service. Please provide a quote.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-8 py-5 bg-gradient-to-r from-[#F9D976] to-[#F39F23] text-[#0A0F1F] text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl shadow-lg shadow-[#F9D976]/10 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Contact for Quick Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}