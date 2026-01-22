import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  // -----------------------
  // Data
  // -----------------------
  const products = [
    {
      title: "Luxury Gold Finish Labels",
      description: "24K gold plating, premium finish, scratch resistant",
      image: "/gold-finish.png",
    },
    {
      title: "Premium Nickel Chrome Stickers",
      description: "Mirror finish, corrosion resistant, outdoor life 5+ years",
      image: "/chrome-finish.png",
    },
    {
      title: "Stainless Steel Silver Labels",
      description: "Brushed steel finish, industrial grade",
      image: "/silver-finish.png",
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

  const gallery = ["/12.png", "/13.png", "/11.png", "/gold-finish.png", "/rose-gold.png"];

  // -----------------------
  // Popup: show  logic (localStorage)
  // -----------------------
  const [showAlert, setShowAlert] = useState(true);

const closeAlert = () => {
  setShowAlert(false);
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
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradients & glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#111827] to-[#1C1F27]" />
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-[#F9D976] rounded-full blur-[140px] hidden md:block" />
          <div className="absolute bottom-1/4 right-1/6 w-[360px] h-[360px] bg-[#304FFE] rounded-full blur-[160px] hidden md:block" />
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto pt-12 pb-16">
          {/* logo + name + gst (responsive) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <img src="/logo.png" alt="Metal Stickers India logo" className="h-20 sm:h-24" />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-semibold tracking-tight">Metal Stickers India</span>
                <span className="text-amber-300 text-xl font-bold">®</span>
              </div>
              <div className="text-xs text-gray-300 mt-1">GSTIN: <span className="text-gray-100 font-medium">06ABZFM3928P1Z7</span></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4 leading-tight">
            Premium Electroplated
            <br />
            <span className="bg-gradient-to-r from-[#F9D976] via-[#F6C453] to-[#F39F23] bg-clip-text text-transparent font-normal">
              Metal Stickers
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-4 max-w-3xl mx-auto font-light leading-relaxed">
            Custom Gold, Silver & Chrome Branding Solutions for Businesses & Products.
          </p>

          {/* Typing / Typewriter line */}
          <p className="text-sm md:text-base text-[#F9D976] mt-1 h-8 md:h-9 font-medium tracking-wide">
            {displayText}
            <span className="inline-block ml-1 w-[8px] md:w-[10px] h-[20px] md:h-[22px] bg-white/90 animate-pulse align-middle" aria-hidden />
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              aria-label="Get quote on WhatsApp"
              href="https://wa.me/919876543210?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20metal%20stickers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#22C55E] to-[#16A34A]
                text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-medium transition-transform transform hover:scale-[1.03] shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Get Quote on WhatsApp</span>
            </a>

            <a
              aria-label="View product catalogue"
              href="/catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#F9D976] to-[#F39F23]
                text-[#071022] px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-medium transition-transform transform hover:scale-[1.03] shadow-lg"
            >
              <ArrowRight size={18} />
              <span>View Catalogue</span>
            </a>
          </div>

          <div className="mt-10">
            <div className="w-px h-14 bg-gradient-to-b from-transparent via-[#F9D976] to-transparent mx-auto" />
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
              <button
                key={index}
                onClick={() => onNavigate("products")}
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
              </button>
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
          <img src="/logo.png" alt="Premium Metal Sticker" className="w-full h-full object-cover opacity-10" />
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

      {/* ================= FOOTER ================= */}
      <footer className="relative bg-[#0A0F1F] border-t border-white/8 mt-10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-30" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo + GST + short */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="logo" className="h-16" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">Metal Stickers India</span>
                  <span className="text-amber-300 font-bold">®</span>
                </div>
                <div className="text-xs text-gray-300">GSTIN: <span className="text-gray-100">06ABZFM3928P1Z7</span></div>
              </div>
            </div>

            <p className="text-sm text-gray-300 mt-4 max-w-sm">
              Premium electroplated Gold, Silver, Chrome and custom metal stickers crafted with precision and durability for brands across India.
            </p>
          </div>

          {/* Middle: Contact */}
          <div>
            <h4 className="text-white font-medium mb-3">Contact</h4>
            <p className="text-gray-300 text-sm">📞 +91 99998 65558 +91 9717163149</p>
            <p className="text-gray-300 text-sm">✉️ corporatemetalstickersindia@gmail.com</p>
            <p className="text-gray-300 text-sm mt-2">📍 11/7 New Anangpur, Sector 37
                              Badarpur, Faridabad, Haryana 121003, India</p>
          </div>

          {/* Right: Socials */}
          <div>
            <h4 className="text-white font-medium mb-3">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/metalstickersindia/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#F9D976] transition">
                {/* instagram svg */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h.008v.008H16.5V7.5zM12 9.75A2.25 2.25 0 1 0 12 14.25A2.25 2.25 0 1 0 12 9.75z" />
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#F9D976] transition">
                {/* linkedin svg */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.52 1.248 1.327 1.248h.016zM13.458 13.394v-3.877c0-2.072-1.104-3.037-2.575-3.037-1.188 0-1.72.657-2.022 1.121v-.957H6.46c.03.633 0 7.225 0 7.225h2.401v-4.033c0-.216.016-.432.08-.586.175-.431.574-.878 1.243-.878 0 0 .983 0 .983 1.31v4.187h2.291z"/>
                </svg>
              </a>

              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#22C55E] transition">
                {/* whatsapp svg */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M20.52 3.48A11.88 11.88 0 0 0 12.005.04C5.694.04.653 5.081.653 11.392c0 2.052.536 4.052 1.552 5.81L.024 24l6.958-2.152a11.34 11.34 0 0 0 5.023 1.2h.002c6.311 0 11.352-5.041 11.352-11.353 0-3.035-1.183-5.892-3.339-8.015Zm-8.513 17.51h-.002a9.74 9.74 0 0 1-4.96-1.37l-.355-.21-4.13 1.278l1.31-4.02l-.23-.369a9.74 9.74 0 0 1-1.472-5.09c0-5.396 4.39-9.786 9.786-9.786a9.72 9.72 0 0 1 6.93 2.875a9.72 9.72 0 0 1 2.857 6.91c0 5.396-4.39 9.775-9.786 9.776Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="relative z-10 border-t border-white/8 py-4 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} Metal Stickers India. All Rights Reserved.
          <br />
         Built and  Maintained by{" "}
          <a href="https://innvox.in" target="_blank" rel="noreferrer" className="text-[#F9D976] hover:underline">
            innvox.in
          </a>
        </div>
      </footer>
    </div>
  );
}
