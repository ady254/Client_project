

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0F1F] border-t border-white/10 mt-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-30" aria-hidden />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                {/* Left: Logo + GST + short */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <img src="/logo.webp" alt="logo" className="h-16 md:h-20" />
                        <div>
                            <div className="flex items-center gap-1">
                                <span className="font-black text-xl md:text-2xl text-white uppercase tracking-tighter leading-none">Metal Stickers India</span>
                                <span className="text-[#F9D976] font-bold text-lg">®</span>
                            </div>
                            <div className="text-[10px] tracking-[0.2em] uppercase font-black text-gray-400 mt-2">GSTIN: <span className="text-gray-100">06ABZFM3928P1Z7</span></div>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed max-w-sm">
                        Premium electroplated Gold, Silver, Chrome and custom metal stickers crafted with precision and durability for brands across India.
                    </p>
                </div>

                {/* Middle: Contact */}
                <div className="space-y-6">
                    <h4 className="text-lg font-black text-white uppercase tracking-tight border-b border-[#F9D976]/30 pb-2 inline-block">Contact Us</h4>
                    <div className="space-y-6">
                        {/* Metal Stickers Contact */}
                        <div className="space-y-3">
                            <p className="text-[10px] font-black text-[#F9D976] uppercase tracking-[0.2em]">Metal Stickers Orders</p>
                            <div className="flex items-start space-x-3 group">
                                <span className="text-[#F9D976] mt-1">📞</span>
                                <div className="text-gray-400 text-sm font-medium space-y-1">
                                    <p className="text-white font-bold tracking-tight">+91 99998 65558 | +91 9717163149</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-[#F9D976] mt-1">✉️</span>
                                <p className="text-gray-400 text-[11px] font-medium break-all tracking-tight leading-relaxed">
                                    corporatemetalstickersindia@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Precious Plating Contact */}
                        <div className="space-y-3">
                            <p className="text-[10px] font-black text-[#F9D976] uppercase tracking-[0.2em]">Precious Plating Orders</p>
                            <div className="flex items-start space-x-3 group">
                                <span className="text-[#F9D976] mt-1">📞</span>
                                <div className="text-gray-400 text-sm font-medium space-y-1">
                                    <p className="text-white font-bold tracking-tight">+91 9811018728</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-[#F9D976] mt-1">✉️</span>
                                <p className="text-gray-400 text-[11px] font-medium break-all tracking-tight leading-relaxed">
                                    Goldsilverplating@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3 pt-2 border-t border-white/5">
                            <span className="text-[#F9D976] mt-1">📍</span>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                11/7 New Anangpur, Sector 37<br />
                                Badarpur, Faridabad, Haryana 121003
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Socials & Map */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h4 className="text-lg font-black text-white uppercase tracking-tight border-b border-[#F9D976]/30 pb-2 inline-block">Our Location</h4>
                        <div className="relative h-40 w-full rounded-none overflow-hidden border border-white/10 shadow-xl group/map">
                            <iframe
                                src="https://maps.google.com/maps?q=Metal%20Stickers%20India%2C%20Anangpur%20Dairy%2C%20Sector%2037%2C%20Faridabad%2C%20Haryana%20121003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-none grayscale contrast-125 group-hover/map:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-black text-white uppercase tracking-tight border-b border-[#F9D976]/30 pb-2 inline-block">Follow Us</h4>
                        <div className="flex items-center space-x-5">
                            <a href="https://www.instagram.com/metalstickersindia/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F9D976] hover:border-[#F9D976]/50 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h.008v.008H16.5V7.5zM12 9.75A2.25 2.25 0 1 0 12 14.25A2.25 2.25 0 1 0 12 9.75z" />
                                </svg>
                            </a>

                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F9D976] hover:border-[#F9D976]/50 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.52 1.248 1.327 1.248h.016zM13.458 13.394v-3.877c0-2.072-1.104-3.037-2.575-3.037-1.188 0-1.72.657-2.022 1.121v-.957H6.46c.03.633 0 7.225 0 7.225h2.401v-4.033c0-.216.016-.432.08-.586.175-.431.574-.878 1.243-.878 0 0 .983 0 .983 1.31v4.187h2.291z" />
                                </svg>
                            </a>

                            <a href="https://wa.me/919999865558" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#22C55E] hover:border-[#22C55E]/50 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                    <path d="M20.52 3.48A11.88 11.88 0 0 0 12.005.04C5.694.04.653 5.081.653 11.392c0 2.052.536 4.052 1.552 5.81L.024 24l6.958-2.152a11.34 11.34 0 0 0 5.023 1.2h.002c6.311 0 11.352-5.041 11.352-11.353 0-3.035-1.183-5.892-3.339-8.015Zm-8.513 17.51h-.002a9.74 9.74 0 0 1-4.96-1.37l-.355-.21-4.13 1.278l1.31-4.02l-.23-.369a9.74 9.74 0 0 1-1.472-5.09c0-5.396 4.39-9.786 9.786-9.786a9.72 9.72 0 0 1 6.93 2.875a9.72 9.72 0 0 1 2.857 6.91c0 5.396-4.39 9.775-9.786 9.776Z" />
                                </svg>
                            </a>

                            <a href="https://www.youtube.com/@METALSTICKERSFACTORYFARIDABAD" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#FF0000] hover:border-[#FF0000]/50 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom line */}
            <div className="relative z-10 border-t border-white/10 py-8 px-4 text-center">
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">
                    © {new Date().getFullYear()} Metal Stickers India. All Rights Reserved.
                </p>
                <p className="mt-2 text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.1em] font-medium">
                    Built and Maintained by{" "}
                    <a href="https://innvox.in" target="_blank" rel="noreferrer" className="text-[#F9D976] hover:text-white transition-colors font-black">
                        innvox.in
                    </a>
                </p>
            </div>
        </footer>
    );
}
