import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  // Responsive check for scroll animations
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { ref: heroInViewRef, inView: heroInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'Request Quote',
    quantity: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please accept the privacy policy to continue.');
      return;
    }
    const whatsappMessage = encodeURIComponent(
      `*New Inquiry Received*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Company:* ${formData.company}\n*Phone:* ${formData.phone}\n*Inquiry Type:* ${formData.inquiryType}\n*Estimated Quantity:* ${formData.quantity}\n\n*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/919999865558?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value =
      e.target.type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0F1F] overflow-x-hidden">
      <Helmet>
        <title>Contact Us | Metal Stickers India</title>
        <meta name="description" content="Get in touch with Metal Stickers India for quotes, custom orders, or inquiries. WhatsApp, Email, or Visit us in Faridabad." />
        <meta property="og:title" content="Contact Us | Metal Stickers India" />
        <meta property="og:description" content="Build your brand in metal. Contact us today for premium electroplated sticker solutions." />
      </Helmet>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @media (max-width: 768px) {
          .parallax-text { font-size: 20vw !important; }
        }
      `}</style>

      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0A0F1F] sticky top-0 z-0 w-full">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#0A0F1F] to-[#F9D976]/10"
          style={{
            transform: `translateY(${scrollY * (isMobile ? 0.2 : 0.5)}px)`,
            opacity: Math.max(0, 1 - scrollY / 700)
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * (isMobile ? 0.1 : 0.3)}px)`,
            opacity: Math.max(0, 0.1 - scrollY / 5000)
          }}
        >
          <div className="absolute top-1/3 left-1/3 w-64 md:w-96 h-64 md:h-96 bg-[#F9D976] rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-64 md:w-96 h-64 md:h-96 bg-[#F9D976] rounded-full blur-3xl" />
        </div>

        {/* Home-style Parallax Background Text */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center select-none pointer-events-none opacity-20 overflow-hidden w-full">
          {/* Top Layer: BRAND (Moves Left) */}
          <div
            className="parallax-text text-[15vw] leading-none font-black italic tracking-tighter text-white whitespace-nowrap"
            style={{
              transform: `translateX(${scrollY * (isMobile ? -0.2 : -0.4)}px)`,
              opacity: Math.max(0, 1 - scrollY / 600)
            }}
          >
            BRAND. BRAND. BRAND. BRAND. BRAND.
          </div>

          {/* Middle Layer: METAL (Moves Right, Outline) */}
          <div
            className="parallax-text text-[15vw] leading-none font-black italic tracking-tighter text-transparent whitespace-nowrap"
            style={{
              transform: `translateX(${(scrollY - 200) * (isMobile ? 0.15 : 0.3)}px)`,
              WebkitTextStroke: "1px rgba(249, 217, 118, 0.4)",
              opacity: Math.max(0, 1 - scrollY / 600)
            }}
          >
            METAL. METAL. METAL. METAL. METAL.
          </div>

          {/* Bottom Layer: STICKERS (Moves Left, Gold) */}
          <div
            className="parallax-text text-[15vw] leading-none font-black italic tracking-tighter text-[#F9D976] whitespace-nowrap"
            style={{
              transform: `translateX(${(scrollY - 400) * (isMobile ? -0.25 : -0.5)}px)`,
              opacity: Math.max(0, 1 - scrollY / 600)
            }}
          >
            STICKERS. STICKERS. STICKERS. STICKERS.
          </div>
        </div>

        <div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 w-full"
          ref={heroInViewRef}
          style={{
            transform: `translateY(${scrollY * (isMobile ? 0.1 : 0.2)}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
            filter: `blur(${scrollY / 100}px)`
          }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase mb-6 md:mb-8 leading-[0.9] text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] animate-fade-up [animation-delay:200ms] opacity-0">
            Let's Build <br /> Your Brand <br />
            <span className="text-[#F9D976]">in Metal.</span>
          </h1>
          <p
            className="text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold animate-fade-up [animation-delay:600ms] opacity-0"
          >
            Ready to elevate your brand with premium metal stickers? <br className="hidden md:block" /> Get in touch with us today.
          </p>
          <div className={`w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-[#F9D976] to-transparent mx-auto mt-8 md:mt-12 transition-all duration-1000 animate-fade-up [animation-delay:1000ms] opacity-0 ${heroInView ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </section>

      <div className="relative z-10 bg-[#0A0F1F] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
        <section className="py-16 md:py-32 px-4 md:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-[#1A1F2E] to-[#0A0F1F]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-8 md:space-y-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                    Get in Touch
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg font-medium">
                    Whether you're looking for a quick quote or want to discuss a
                    custom project, we're here to help. Reach out through any of the
                    channels below.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/919999865558"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 md:p-5 bg-[#1A1F2E]/40 backdrop-blur-md border border-white/10 rounded-none hover:bg-gradient-to-r hover:from-[#F9D976]/5 hover:to-[#F9D976]/10 hover:border-[#F9D976]/30 transition-all duration-500"
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-none bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-grow w-full">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#F9D976] transition-colors duration-500">WhatsApp</h3>
                        <p className="text-green-400 font-bold">+91 9999865558</p>
                      </div>
                      <p className="text-gray-400 text-xs md:text-sm font-medium">Quick response, instant quotes</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919999865558"
                    className="group flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 md:p-5 bg-[#1A1F2E]/40 backdrop-blur-md border border-white/10 rounded-none hover:bg-white/10 hover:border-[#F9D976]/30 transition-all duration-500"
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-none bg-gradient-to-br from-[#F9D976] to-amber-600 flex items-center justify-center shadow-2xl shadow-[#F9D976]/50 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-grow w-full">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#F9D976] transition-colors duration-500">Phone</h3>
                        <div className="text-right">
                          <p className="text-[#F9D976] font-bold">+91 9999865558</p>
                          <p className="text-[#F9D976] font-bold">+91 9811018728</p>
                          <p className="text-[#F9D976] font-bold text-xs md:text-sm">+91 9717163149</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs md:text-sm font-medium">Mon - Sat, 10 AM - 6 PM IST</p>
                    </div>
                  </a>

                  <a
                    href="mailto:corporatemetalstickersindia@gmail.com"
                    className="group flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 md:p-5 bg-[#1A1F2E]/40 backdrop-blur-md border border-white/10 rounded-none hover:bg-white/10 hover:border-[#F9D976]/30 transition-all duration-500"
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-none bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-grow min-w-0 w-full">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#F9D976] transition-colors duration-500">Email</h3>
                      </div>
                      <p className="text-blue-400 font-bold truncate text-xs md:text-base">corporatemetalstickersindia@gmail.com</p>
                      <p className="text-blue-400 font-bold truncate text-xs md:text-base">Goldsilverplating@gmail.com</p>
                      <p className="text-gray-400 text-xs md:text-sm font-medium">For detailed inquiries</p>
                    </div>
                  </a>

                  {/* Integrated Workshop Content */}
                  <div className="pt-8 mt-8 border-t border-white/10">
                    <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">
                      Visit Our Workshop
                    </h3>

                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-none bg-gradient-to-br from-[#F9D976] to-amber-600 flex items-center justify-center shadow-2xl shadow-[#F9D976]/50">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-grow w-full">
                          <h4 className="text-base font-black text-white uppercase tracking-tight">Address</h4>
                          <p className="text-gray-400 text-sm leading-relaxed font-medium mb-4">
                            11/7 New Anangpur, Sector 37
                            <br />
                            Badarpur, Faridabad, Haryana 121003
                            <br />
                            India
                          </p>

                          {/* Integrated Map */}
                          <div className="relative h-48 md:h-64 w-full rounded-none overflow-hidden border border-white/10 shadow-xl shadow-[#F9D976]/5 group/map">
                            <iframe
                              src="https://maps.google.com/maps?q=Metal%20Stickers%20India%2C%20Anangpur%20Dairy%2C%20Sector%2037%2C%20Faridabad%2C%20Haryana%20121003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              className="rounded-none grayscale contrast-125 group-hover/map:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 pointer-events-none border border-white/5" />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 md:p-5 bg-[#1A1F2E]/40 backdrop-blur-md border border-white/10 rounded-none">
                        <h4 className="text-xs md:text-sm font-black text-white mb-3 uppercase tracking-[0.2em]">Working Hours</h4>
                        <div className="space-y-1 text-gray-400 text-xs md:text-sm font-medium">
                          <p>Monday - Saturday: 10:00 AM - 6:00 PM</p>
                          <p className="text-red-400/80">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1F2E]/40 backdrop-blur-md border border-white/10 rounded-none p-6 md:p-10">
                <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2 text-[10px] tracking-[0.3em] uppercase font-black">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-[#F9D976]/50 transition-all duration-300 font-medium"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-2 text-[10px] tracking-[0.3em] uppercase font-black">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-[#F9D976]/50 transition-all duration-300 font-medium"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-2 text-[10px] tracking-[0.3em] uppercase font-black">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-[#F9D976]/50 transition-all duration-300 font-medium"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-2 text-[10px] tracking-[0.3em] uppercase font-black">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-[#F9D976]/50 transition-all duration-300 font-medium"
                        placeholder="+91-98765-43210"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-2 text-[10px] tracking-[0.3em] uppercase font-black">
                        Inquiry Type
                      </label>
                      <div className="relative">
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-none text-white appearance-none focus:outline-none focus:border-[#F9D976]/50 transition-all duration-300 [&>option]:bg-slate-800 [&>option]:text-white font-medium"
                        >
                          <option value="Request Quote">Request Quote</option>
                          <option value="Sample Request">Sample Request</option>
                          <option value="Bulk Order">Bulk Order</option>
                          <option value="Custom Design">Custom Design</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-2 text-[10px] tracking-[0.3em] uppercase font-black">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-[#F9D976]/50 transition-all duration-300 font-medium"
                        placeholder="e.g., 10,000 pieces"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-[10px] tracking-[0.3em] uppercase font-black">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-[#F9D976]/50 transition-all duration-300 resize-none font-medium"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="w-5 h-5 bg-white/5 border border-white/10 rounded-none focus:ring-[#F9D976] focus:ring-offset-0 text-[#F9D976]"
                      />
                    </div>
                    <label htmlFor="consent" className="ml-3 text-sm text-gray-400 font-medium">
                      I consent to having this website store my submitted information so they can respond to my inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-[#F9D976] to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-8 py-5 rounded-none text-lg font-black uppercase tracking-tighter transition-all duration-300 shadow-2xl hover:shadow-[#F9D976]/50 transform hover:scale-[1.02]"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
