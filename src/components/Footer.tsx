

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0F1F] border-t border-white/8 mt-10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-30" aria-hidden />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Logo + GST + short */}
                <div>
                    <div className="flex items-center gap-3">
                        <img src="/logo.webp" alt="logo" className="h-16" />
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-lg text-white">Metal Stickers India</span>
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
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.52 1.248 1.327 1.248h.016zM13.458 13.394v-3.877c0-2.072-1.104-3.037-2.575-3.037-1.188 0-1.72.657-2.022 1.121v-.957H6.46c.03.633 0 7.225 0 7.225h2.401v-4.033c0-.216.016-.432.08-.586.175-.431.574-.878 1.243-.878 0 0 .983 0 .983 1.31v4.187h2.291z" />
                            </svg>
                        </a>

                        <a href="https://wa.me/919999865558" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#22C55E] transition">
                            {/* whatsapp svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M20.52 3.48A11.88 11.88 0 0 0 12.005.04C5.694.04.653 5.081.653 11.392c0 2.052.536 4.052 1.552 5.81L.024 24l6.958-2.152a11.34 11.34 0 0 0 5.023 1.2h.002c6.311 0 11.352-5.041 11.352-11.353 0-3.035-1.183-5.892-3.339-8.015Zm-8.513 17.51h-.002a9.74 9.74 0 0 1-4.96-1.37l-.355-.21-4.13 1.278l1.31-4.02l-.23-.369a9.74 9.74 0 0 1-1.472-5.09c0-5.396 4.39-9.786 9.786-9.786a9.72 9.72 0 0 1 6.93 2.875a9.72 9.72 0 0 1 2.857 6.91c0 5.396-4.39 9.775-9.786 9.776Z" />
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
    );
}
