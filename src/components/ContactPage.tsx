import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
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
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>Contact Us | Metal Stickers India</title>
        <meta name="description" content="Get in touch with Metal Stickers India for quotes, custom orders, or inquiries. WhatsApp, Email, or Visit us in Faridabad." />
        <meta property="og:title" content="Contact Us | Metal Stickers India" />
        <meta property="og:description" content="Build your brand in metal. Contact us today for premium electroplated sticker solutions." />
      </Helmet>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32 md:pt-48">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-white mb-8 leading-tight">
            Let's Build Your Brand
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              in Metal.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Ready to elevate your brand with premium metal stickers? Get in touch
            with us today.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-12" />
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-8 md:space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Whether you're looking for a quick quote or want to discuss a
                  custom project, we're here to help. Reach out through any of the
                  channels below.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="https://wa.me/919999865558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-6 p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-600/10 hover:border-green-500/30 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">WhatsApp</h3>
                    <p className="text-gray-400">
                      Quick response, instant quotes
                    </p>
                    <p className="text-green-400 mt-2">+91 9999865558</p>
                  </div>
                </a>

                <a
                  href="tel:+919999865558"
                  className="group flex items-start space-x-6 p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/50 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Phone</h3>
                    <p className="text-gray-400">Mon - Sat, 10 AM - 6 PM IST</p>
                    <p className="text-amber-400 mt-2">+91 9999865558</p>
                    <p className="text-amber-400 mt-2">+91 9717163149</p>
                  </div>
                </a>

                <a
                  href="mailto:corporatemetalstickersindia@gmail.com"
                  className="group flex items-start space-x-4 sm:space-x-6 p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl text-white mb-2">Email</h3>
                    <p className="text-gray-400">For detailed inquiries</p>
                    <p className="text-blue-400 mt-2 break-all text-sm sm:text-base">corporatemetalstickersindia@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10">
              <h3 className="text-3xl font-light text-white mb-8">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="+91-98765-43210"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                      Inquiry Type *
                    </label>
                    <div className="relative">
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white appearance-none focus:outline-none focus:border-amber-500/50 transition-all duration-300 [&>option]:bg-slate-800 [&>option]:text-white"
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
                    <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="e.g., 10,000 pieces"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300 resize-none"
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
                      className="w-5 h-5 bg-white/5 border border-white/10 rounded focus:ring-amber-500 focus:ring-offset-0 text-amber-500"
                    />
                  </div>
                  <label htmlFor="consent" className="ml-3 text-sm text-gray-400">
                    I consent to having this website store my submitted information so they can respond to my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:scale-[1.02]"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-amber-900/10 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white mb-6">
              Visit Our Workshop
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9474536087383!2d72.87765631490248!3d19.01757698711701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee2f6d6e3e5%3A0x4b3e3e3e3e3e3e3e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-3xl"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/50">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Address</h3>
                  <p className="text-gray-400 leading-relaxed">
                    11/7 New Anangpur, Sector 37
                    <br />
                    Badarpur, Faridabad, Haryana 121003
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                <h4 className="text-lg text-white mb-4">Working Hours</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Monday - Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
