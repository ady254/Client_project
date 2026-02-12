

import { ArrowRight, ExternalLink, Instagram, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0F1F] border-t border-white/10 mt-8 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F9D976]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F39F23]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
                    {/* Column 1: Brand Identity */}
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <Link to="/" className="flex items-center gap-3 group">
                                <img src="/logo.webp" alt="logo" className="h-10 md:h-14 transition-transform duration-500 group-hover:scale-105" />
                                <div>
                                    <div className="flex items-center gap-1">
                                        <span className="font-black text-lg text-white uppercase tracking-tighter leading-none">Metal Stickers India</span>
                                        <span className="text-[#F9D976] font-bold text-base">®</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1.5 px-2 py-0.5 bg-white/5 border border-white/10 rounded-md w-fit">
                                        <ShieldCheck size={9} className="text-[#F9D976]" />
                                        <span className="text-[10px] tracking-[0.1em] uppercase font-bold text-gray-400">GSTIN: <span className="text-gray-100">06ABZFM3928P1Z7</span></span>
                                    </div>
                                </div>
                            </Link>
                            <p className="text-[13px] text-gray-400 font-medium leading-relaxed">
                                India's premier manufacturer of high-end electroplated metal stickers and precious metal plating solutions.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4 lg:pl-8">
                        <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
                            <div className="w-5 h-px bg-[#F9D976]/50" />
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Metal Stickers', path: '/metal-stickers' },
                                { name: 'Precious Metal Plating', path: '/precious-plating' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-[#F9D976] text-[12px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center group"
                                    >
                                        <ArrowRight size={10} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="space-y-4">
                        <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
                            <div className="w-5 h-px bg-[#F9D976]/50" />
                            Get In Touch
                        </h4>
                        <div className="space-y-3">
                            {/* Stickers Contact */}
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#F9D976]/30 transition-colors group">
                                <p className="text-[10px] font-black text-[#F9D976] uppercase tracking-[0.2em] mb-1.5">Metal Stickers</p>
                                <div className="space-y-1.5">
                                    <a href="tel:+919999865558" className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-[#F9D976]/10 flex items-center justify-center text-[#F9D976] group-hover:bg-[#F9D976] group-hover:text-[#0A0F1F] transition-all">
                                            <Phone size={10} />
                                        </div>
                                        <span className="text-[11px] font-bold tracking-tight">+91 99998 65558</span>
                                    </a>
                                    <a href="mailto:corporatemetalstickersindia@gmail.com" className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-[#F9D976]/10 flex items-center justify-center text-[#F9D976] group-hover:bg-[#F9D976] group-hover:text-[#0A0F1F] transition-all">
                                            <Mail size={10} />
                                        </div>
                                        <span className="text-[10px] font-bold break-all">corporatemetalstickersindia@gmail.com</span>
                                    </a>
                                </div>
                            </div>

                            {/* Plating Contact */}
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#F9D976]/30 transition-colors group">
                                <p className="text-[10px] font-black text-[#F9D976] uppercase tracking-[0.2em] mb-1.5">Precious Metal Plating</p>
                                <div className="space-y-1.5">
                                    <a href="tel:+919811018728" className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-[#F9D976]/10 flex items-center justify-center text-[#F9D976] group-hover:bg-[#F9D976] group-hover:text-[#0A0F1F] transition-all">
                                            <Phone size={10} />
                                        </div>
                                        <span className="text-[11px] font-bold tracking-tight">+91 9811018728</span>
                                    </a>
                                    <a href="mailto:Goldsilverplating@gmail.com" className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-[#F9D976]/10 flex items-center justify-center text-[#F9D976] group-hover:bg-[#F9D976] group-hover:text-[#0A0F1F] transition-all">
                                            <Mail size={10} />
                                        </div>
                                        <span className="text-[10px] font-bold break-all">Goldsilverplating@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Map & Socials */}
                    <div className="space-y-4">
                        <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
                            <div className="w-5 h-px bg-[#F9D976]/50" />
                            Find Us
                        </h4>
                        <div className="space-y-3">
                            <div className="relative h-24 w-full rounded-xl overflow-hidden border border-white/10 group/map">
                                <iframe
                                    src="https://maps.google.com/maps?q=Metal%20Stickers%20India%2C%20Anangpur%20Dairy%2C%20Sector%2037%2C%20Faridabad%2C%20Haryana%20121003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="grayscale-0 opacity-100"
                                />
                                <div className="absolute bottom-1.5 right-1.5">
                                    <a
                                        href="https://maps.google.com/maps?q=Metal%20Stickers%20India%2C%20Anangpur%20Dairy%2C%20Sector%2037%2C%20Faridabad%2C%20Haryana%20121003"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-1 bg-[#0A0F1F]/80 backdrop-blur-md border border-white/10 rounded-lg text-[#F9D976] hover:bg-[#F9D976] hover:text-[#0A0F1F] transition-all"
                                    >
                                        <ExternalLink size={10} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <MapPin size={14} className="text-[#F9D976] shrink-0" />
                                <p className="text-gray-400 text-[11px] font-medium leading-tight">
                                    11/7 New Anangpur, Sector 37<br />
                                    Badarpur, Faridabad, Haryana 121003, India
                                </p>
                            </div>

                            <div className="flex items-center gap-2 pt-0.5">
                                {[
                                    { icon: <Instagram size={14} />, url: "https://www.instagram.com/metalstickersindia/", color: "text-[#E4405F]" },
                                    // { icon: <Linkedin size={14} />, url: "https://linkedin.com", color: "text-[#0077B5]" },
                                    { icon: <MessageCircle size={14} />, url: "https://wa.me/919999865558", color: "text-[#25D366]" },
                                    { icon: <Youtube size={14} />, url: "https://www.youtube.com/@MetalStickersIndiaOfficial", color: "text-[#FF0000]" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${social.color} hover:bg-white/10 hover:border-white/20 transition-all duration-300`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Credit Section */}
            <div className="relative z-10 border-t border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] font-black">
                        © {new Date().getFullYear()} Metal Stickers India.
                    </p>
                    <p className="text-gray-500 text-[9px] uppercase tracking-[0.1em] font-medium flex items-center gap-2">
                        Crafted by
                        <a href="https://innvox.in" target="_blank" rel="noreferrer" className="text-[#F9D976] hover:text-white transition-colors font-black flex items-center gap-1">
                            innvox.in
                            <ExternalLink size={9} />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
