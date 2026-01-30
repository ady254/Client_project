import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
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

function ServiceDetailBlock({ product, index }: { product: Product; index: number }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isReversed = index % 2 !== 0;
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`
        relative w-full mb-20 last:mb-0 transition-all duration-1000 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      {/* Background Decorative Glow */}
      <div
        className={`absolute -z-10 w-[500px] h-[500px] bg-[#F9D976]/5 blur-[120px] rounded-full pointer-events-none transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        style={{
          top: '50%',
          [isReversed ? 'left' : 'right']: '-10%',
          transform: 'translateY(-50%)'
        }}
      />

      <div className={`
        flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
        bg-[#1A1F2E]/30 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden
        shadow-2xl shadow-black/50 hover:border-[#F9D976]/30 transition-colors duration-500
      `}>
        {/* Left/Right: Image Showcase */}
        <div className="lg:w-[45%] bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="relative aspect-square flex items-center justify-center p-4 bg-[#0A0F1F]/40 rounded-3xl border border-white/5 overflow-hidden group">
            {/* Main Image */}
            <img
              src={product.image[activeImageIndex]}
              alt={product.name}
              className="w-full h-full object-contain transform transition-all duration-700 group-hover:scale-105"
            />
            {/* Subtle light effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F9D976]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>

          {/* Enhanced Thumbnails */}
          {product.image.length > 1 && (
            <div className="flex gap-3 mt-8 overflow-x-auto pb-2 justify-center scrollbar-hide">
              {product.image.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`
                    group/thumb relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden transition-all duration-300
                    ${activeImageIndex === idx
                      ? "ring-2 ring-[#F9D976] ring-offset-4 ring-offset-[#0A0F1F] scale-110"
                      : "opacity-50 hover:opacity-100 hover:scale-105"
                    }
                  `}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-[#F9D976]/20 transition-opacity duration-300 ${activeImageIndex === idx ? 'opacity-0' : 'opacity-0 group-hover/thumb:opacity-100'}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right/Left: Detailed Content */}
        <div className="lg:w-[55%] p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle gold accent corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F9D976]/5 to-transparent -mr-16 -mt-16 rounded-full blur-2xl" />

          <div className="space-y-10 relative z-10">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="h-px w-8 bg-[#F9D976]/50" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F9D976]">Premium Service {index + 1}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9] drop-shadow-sm">
                {product.name}
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg md:text-xl font-medium max-w-2xl">
                {product.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Applications */}
              {product.Application && (
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#F9D976]/80 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F9D976] mr-2" />
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.Application.map((app: string, i: number) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[9px] text-gray-300 font-bold uppercase tracking-widest rounded-md hover:bg-[#F9D976]/10 hover:border-[#F9D976]/30 transition-colors duration-300">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#F9D976]/80 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F9D976] mr-2" />
                  Technical Specs
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.specs ?? {}).map(([key, value]) => (
                    <div key={key} className="flex flex-col border-b border-white/5 pb-2">
                      <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1">
                        {key.replace(/([A-Z])/g, ' $1').replace('_', ' ').trim()}
                      </span>
                      <span className="text-white font-black text-sm uppercase tracking-tight">
                        {Array.isArray(value) ? value.join(', ') : String(value ?? '')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 group/btn">
            <a
              href={`https://wa.me/${product.category === 'gold' && product.name.includes('Sticker') || product.id >= 4 ? '919999865558' : '919811018728'}?text=${encodeURIComponent(`New Inquiry\n\nProduct: ${product.name}\n\nI interested in this service. Please provide a quote.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-gradient-to-r from-[#F9D976] to-[#F39F23] text-[#0A0F1F] text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-300 rounded-2xl shadow-xl shadow-[#F9D976]/10 hover:scale-[1.02] hover:shadow-[#F9D976]/20 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center">
                Contact for Quick Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Typing Animation Data
// ────────────────────────────────────────────────
const typingText = [
  "Welcome to India’s Best Sticker Company",
  "Where You Get Premium Electroplated Labels",
  "Gold • Silver • Chrome • Custom Shapes",
];

export default function HomePage() {
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
      description: 'Gold plating is a premium electroplating process that coats metal surfaces with a thin layer of 24K gold. It enhances the product’s appearance while improving corrosion resistance, durability, and electrical performance. Ideal for luxury, industrial, and precision components that require both beauty and reliability.',
      image: ['gold-plating.webp', '/electro.webp', '/24k-gold-plating-jewellery-ring-sticker.webp', '/24k-gold-plating-watch-branding-sticker.webp',],
      specs: {
        finish: '24K Gold Electroplating',
        serviceLocation: 'Pan India',
        paymentMode: 'Online/Offline',
        benefits: 'Corrosion Resistance | High Durability | Aesthetic Appeal | Cost-Effective',
      },
      Application: ['Jewellery', 'Watch Parts', 'Electronics & Electrical Components', 'Medical Equipments'],
    },
    {
      id: 202,
      name: 'Silver Plating',
      category: 'silver',
      description: 'Sleek silver finish perfect for modern tech branding. Offers excellent conductivity and a clean, professional aesthetic.',
      image: ['/stainless-steel-silver-plating-connectors.webp'],
      specs: {
        platingThickness: 'As per requirements',
        serviceLocation: 'Pan India',
        paymentMode: 'Online/Offline',
        benefits: 'Electrical Conductivity | High Durability | Corrosion Resistance',
      },
      Application: ['printed circuit board (PCB)', 'Bus Bar', 'Contacts', 'Medical Equipments'],
    },
    {
      id: 203,
      name: 'Nickel Chrome Plating',
      category: 'chrome',
      description: 'Premium raised design with crystal-clear resin coating. Creates a durable, high-gloss finish that stands out.',
      image: ['/silver-automobile.webp', '/chrome-plating-taps.webp', '/silver-plating.webp'],
      specs: {
        platingThickness: 'As per requirements',
        finish: 'Polyurethane resin coating',
        serviceLocation: 'Pan India',
        benefits: 'Corrosion Resistance | High Durability | Aesthetic Appeal | Cost-Effective',
      },
      Application: ['Automobile Industry', 'Household and Plumbing', 'Electronics & Electrical Components', 'Medical Equipments'],
    },
  ];

  const process = [
    { step: "01", title: "Share Your Design", desc: "Send us your logo or artwork" },
    { step: "02", title: "Electroplating & Molding", desc: "Precision manufacturing process" },
    { step: "03", title: "Quality Check", desc: "Rigorous inspection standards" },
    { step: "04", title: "Secure Packaging & Delivery", desc: "Fast and secure shipping" },
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
    "/silver-automobile.webp",
    "/gold-plating.webp",
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
    <div className="bg-[#0A0F1F] text-white min-h-screen overflow-x-hidden">
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
              Precious Plating Solutions
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
            <div className="space-y-20">
              {stickerProducts.map((product, index) => (
                <ServiceDetailBlock
                  key={product.id}
                  product={product}
                  index={index}
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

          {/* Section 2: Precious Plating */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center border-b border-white/10 pb-6">
              <span className="text-[#F9D976]">02.</span> Precious Plating Services
            </h3>
            <div className="space-y-20">
              {platingProducts.map((product, index) => (
                <ServiceDetailBlock
                  key={product.id}
                  product={product}
                  index={index}
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
                className={`transition-all duration-1000 ease-out transform-gpu ${processInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
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
            className="text-[15vw] md:text-[15vw] leading-none font-black italic tracking-tighter text-white opacity-20 transition-transform duration-75 ease-out whitespace-nowrap"
            style={{
              transform: `translateX(${(scrollY - (typeof window !== 'undefined' && window.innerWidth < 768 ? 3500 : 2000)) * (typeof window !== 'undefined' && window.innerWidth < 768 ? -0.3 : -0.6)}px)`
            }}
          >
            PRECISION. PRECISION. PRECISION.
          </div>

          {/* Middle Layer: Durability. (Moves Right, Outline) */}
          <div
            className="text-[15vw] md:text-[15vw] leading-none font-black italic tracking-tighter text-transparent transition-transform duration-75 ease-out whitespace-nowrap"
            style={{
              transform: `translateX(${(scrollY - (typeof window !== 'undefined' && window.innerWidth < 768 ? 3500 : 2000)) * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.4)}px)`,
              WebkitTextStroke: "1px rgba(249, 217, 118, 0.4)"
            }}
          >
            DURABILITY. DURABILITY. DURABILITY.
          </div>

          {/* Bottom Layer: Luxury. (Moves Left, Gold) */}
          <div
            className="text-[15vw] md:text-[15vw] leading-none font-black italic tracking-tighter text-[#F9D976] opacity-30 transition-transform duration-75 ease-out whitespace-nowrap"
            style={{ transform: `translateX(${(scrollY - (typeof window !== 'undefined' && window.innerWidth < 768 ? 3500 : 2000)) * (typeof window !== 'undefined' && window.innerWidth < 768 ? -0.25 : -0.5)}px)` }}
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

    </div>
  );
}