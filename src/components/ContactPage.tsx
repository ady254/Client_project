import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hello, I'm ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-tight">
            Let's Build Your Brand
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              in Metal.
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Ready to elevate your brand with premium metal stickers? Get in touch
            with us today.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-12" />
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
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
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-6 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-600/10 hover:border-green-500/30 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">WhatsApp</h3>
                    <p className="text-gray-400">
                      Quick response, instant quotes
                    </p>
                    <p className="text-green-400 mt-2">+91 98765 43210</p>
                  </div>
                </a>

                <a
                  href="tel:+919876543210"
                  className="group flex items-start space-x-6 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/50 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Phone</h3>
                    <p className="text-gray-400">Mon - Sat, 9 AM - 7 PM IST</p>
                    <p className="text-amber-400 mt-2">+91 98765 43210</p>
                  </div>
                </a>

                <a
                  href="mailto:info@metalstickers.in"
                  className="group flex items-start space-x-6 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Email</h3>
                    <p className="text-gray-400">For detailed inquiries</p>
                    <p className="text-blue-400 mt-2">info@metalstickers.in</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
              <h3 className="text-3xl font-light text-white mb-8">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    placeholder="john@example.com"
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
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:scale-[1.02]"
                >
                  <Send size={20} />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-amber-900/10 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              Visit Our Workshop
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/50">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Address</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Industrial Estate, Andheri East
                    <br />
                    Mumbai, Maharashtra 400093
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                <h4 className="text-lg text-white mb-4">Working Hours</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img
                src="/Metal stickers India logo.png"
                alt="Metal Stickers India"
                className="h-10"
              />
            </div>

            <div className="flex space-x-8">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="tel:+919876543210"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                <Phone size={24} />
              </a>
              <a
                href="mailto:info@metalstickers.in"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Metal Stickers India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
