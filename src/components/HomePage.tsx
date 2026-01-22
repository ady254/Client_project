import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  // -----------------------
  // Data
  // -----------------------
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

  // -----------------------
  // Popup: show logic (localStorage)
  // -----------------------
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const hasSeenAlert = localStorage.getItem("scamAlertSeen");
    if (!hasSeenAlert) {
      setShowAlert(true);
    }
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
    localStorage.setItem("scamAlertSeen", "true");
  };


  // -----------------------
  // Typing animation logic
  // -----------------------
  const typingText = [
    "Welcome to India’s Best Sticker Company",
    "Where You Get Premium Electroplated Labels",
    "Gold • Silver • Chrome • Custom Shapes",
  ];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: number | undefined;

    const currentText = typingText[textIndex] || "";
    if (charIndex < currentText.length) {
      timeout = window.setTimeout(() => {
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((c) => c + 1);
      }, 45);
    } else {
      // pause and then clear and move to next
      timeout = window.setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((t) => (t + 1) % typingText.length);
      }, 1400);
    }

    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, textIndex]);

  // -----------------------
  // Render
  // -----------------------
  return (
    <div className="bg-[#0A0F1F] text-white min-h-screen">
      <Helmet>
        <title>Metal Stickers India | Premium Custom Electroplated Metal Labels</title>
        <meta name="description" content="India's leading manufacturer of premium gold, silver, and nickel chrome metal stickers. Custom electroplated labels for luxury branding. 5+ years durability." />
        <meta property="og:title" content="Metal Stickers India | Premium Custom Electroplated Metal Labels" />
        <meta property="og:description" content="Elevate your brand with 24K gold, silver, and chrome finished metal stickers. Durable, scratch-resistant, and premium quality." />
        <meta property="og:url" content="https://metalstickersindiaofficial.com/" />
        {/* Update image later with a representative home page image if available */}
        <meta property="og:image" content="/logo.webp" />
      </Helmet>

      {/* ================= SCAM ALERT POPUP (shows only once) ================= */}
      {showAlert && (
        <div
          role="dialog"
          aria-labelledby="scam-alert-title"
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-6"
        >
          <div className="bg-[#0F1724] border border-[#F9D976]/30 rounded-2xl p-6 max-w-xl w-full shadow-2xl relative">
            <button
              aria-label="Close scam alert"
              onClick={closeAlert}
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
            >
              ✕
            </button>

            <h3 id="scam-alert-title" className="text-xl sm:text-2xl font-semibold text-white text-center mb-2">
              ⚠️ Beware of Scammers
            </h3>

            <p className="text-sm text-gray-300 text-center leading-relaxed">
              Several fake websites claim to be Metal Stickers India such as{" "}
              <span className="text-red-400 font-medium">metalstickers.com</span>,{" "}
              <span className="text-red-400 font-medium">metalstickers.in</span>,{" "}
              <span className="text-red-400 font-medium">metalstickerstore.com</span>, and others.
            </p>

            <p className="text-center text-[#F9D976] font-semibold mt-4">The ONLY official website is</p>

            <p className="text-center text-white font-bold text-lg mt-1">metalstickersindiaofficial.com</p>

            <p className="text-gray-400 text-xs mt-4 text-center">Stay safe — always verify the domain before purchasing.</p>

            <div className="mt-6 text-center">
              <button
                onClick={closeAlert}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F9D976] to-[#F39F23] text-[#0A0F1F] px-4 py-2 rounded-full font-medium shadow"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradients & glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#111827] to-[#1C1F27]" />
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#F9D976] rounded-full blur-[120px] opacity-40 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-[#304FFE] rounded-full blur-[140px] opacity-30" />
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto pt-16 sm:pt-0 pb-16">
          {/* Logo Container with Glow */}
          <div className="relative inline-block mb-8 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-300/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                src="/logo.webp"
                alt="Metal Stickers India logo"
                className="h-24 sm:h-32 object-contain drop-shadow-2xl"
              />
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white text-xl sm:text-2xl font-semibold tracking-wide">Metal Stickers India</span>
                  <span className="text-amber-400 text-sm font-bold align-top">®</span>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 mt-1 tracking-widest uppercase">GSTIN: <span className="text-gray-200 font-medium">06ABZFM3928P1Z7</span></div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
            Premium Electroplated
            <br />
            <span className="bg-gradient-to-r from-[#F9D976] via-[#F6C453] to-[#F39F23] bg-clip-text text-transparent font-medium drop-shadow-sm">
              Metal Stickers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Custom Gold, Silver & Chrome Branding Solutions for Businesses & Products.
            <span className="hidden sm:inline"> Elevate your brand identity with our exquisite craftsmanship.</span>
          </p>

          {/* Typing / Typewriter line */}
          <div className="h-8 mb-10 flex items-center justify-center">
            <p className="text-sm sm:text-base text-[#F9D976] font-medium tracking-wide">
              {displayText}
              <span className="inline-block ml-1 w-[2px] h-[16px] bg-[#F9D976] animate-blink align-middle" aria-hidden />
            </p>
          </div>

          {/* Buttons Row - Enhanced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              aria-label="Get quote on WhatsApp"
              href="https://wa.me/919999865558?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20metal%20stickers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#22C55E] to-[#15803d]
                text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] shadow-lg group"
            >
              <MessageCircle size={20} className="group-hover:animate-bounce" />
              <span>Get Quote on WhatsApp</span>
            </a>

            <a
              aria-label="View product catalogue"
              href="/catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm border border-[#F9D976]/30
                text-[#F9D976] px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:bg-[#F9D976]/10 hover:border-[#F9D976] hover:shadow-[0_0_20px_rgba(249,217,118,0.2)] shadow-lg"
            >
              <ArrowRight size={20} />
              <span>View Catalogue</span>
            </a>
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="w-px h-16 sm:h-24 bg-gradient-to-b from-transparent via-[#F9D976]/50 to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section className="py-20 sm:py-28 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-[#111827] to-[#1C1F27]" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3">Our Expertise</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#F9D976] to-transparent mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 sm:px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/8 rounded-full text-gray-300 hover:bg-white/10 hover:border-[#F9D976]/40 hover:text-white transition-all duration-200 text-xs sm:text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-8 sm:space-y-10">
            {products.map((product, index) => (
              <Link
                key={index}
                to="/products"
                className="group w-full block"
                aria-label={`Open ${product.title}`}
              >
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/4 backdrop-blur-sm border border-white/8 hover:border-[#F9D976]/30 transition-all duration-500 hover:shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-6 md:p-10">
                    <div className="flex flex-col justify-center space-y-4 md:space-y-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white group-hover:text-[#F9D976] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{product.description}</p>

                      <div className="flex items-center space-x-2 text-[#F9D976]">
                        <span className="text-xs sm:text-sm tracking-wide">Explore</span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>

                    <div className="relative h-56 md:h-64 rounded-lg overflow-hidden">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/75 to-transparent" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 sm:py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-[#111827] to-[#0A0F1F]" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3">Our Process</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#F9D976] to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center px-4 py-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#F9D976] to-[#F39F23] text-[#0A0F1F] text-lg font-bold shadow-xl mb-4">
                  {item.step}
                </div>
                <h4 className="text-sm sm:text-base font-medium text-white">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 mt-2">{item.desc}</p>

                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#F9D976]/30 to-transparent" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-16 sm:py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-[#111827] to-[#0A0F1F]" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3">Gallery</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#F9D976] to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.map((image, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
                <img src={image} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CINEMATIC BANNER ================= */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/logo.webp" alt="Premium Metal Sticker" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-[#111827]/80 to-[#1C1F27]/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Sparkles className="w-14 h-14 text-[#F9D976] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-2 leading-tight">
            Precision. Durability.
            <br />
            <span className="bg-gradient-to-r from-[#F9D976] to-[#F39F23] bg-clip-text text-transparent">Luxury.</span>
          </h2>
        </div>
      </section>


    </div>
  );
}
