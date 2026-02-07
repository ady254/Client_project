import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Navigation v2.0 — Fully animated premium navbar (Option A: Tall Premium)
 */

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Metal Stickers", path: "/metal-stickers" },
    { label: "Precious Metal Plating", path: "/precious-plating" },
    { label: "About Us", path: "/about" },
    // { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  // Scroll listener -> shrink navbar after threshold
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 48); // threshold
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Embedded styles for shimmer, slide, and logo tilt */}


      <nav
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 transform-gpu transition-all duration-300 ease-out
          ${scrolled ? "backdrop-blur-lg bg-[#071022]/85 shadow-[0_8px_30px_rgba(2,6,23,0.6)] h-16 md:h-[65px]" : "bg-transparent h-20 md:h-[80px]"}
          border-b border-white/6`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full">
          <div className="flex items-center justify-between h-full">
            {/* LEFT: Logo + Brand */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                aria-label="Go to homepage"
                onMouseEnter={() => setLogoHover(true)}
                onMouseLeave={() => setLogoHover(false)}
                className="flex items-center gap-3 focus:outline-none"
              >
                {/* LOGO */}
                <div
                  className={`relative flex items-center justify-center rounded-md transition-transform duration-400 will-change-transform
                    ${logoHover ? "translate-y-[-3px] rotate-[-2deg] scale-[1.03]" : "translate-y-0 rotate-0 scale-100"}
                    `}
                  style={{ perspective: 900 }}
                >
                  <img
                    src="/logo.webp"
                    alt="Metal Stickers India logo"
                    className={`block h-10 sm:h-14 md:h-16 lg:h-18 w-auto object-contain transition-all duration-500`}
                    style={{
                      filter: logoHover
                        ? "brightness(1.06) saturate(1.05) drop-shadow(0 10px 30px rgba(249,217,118,0.18))"
                        : "brightness(0.98)",
                    }}
                  />

                  {/* metallic shine overlay (subtle) */}
                  <div
                    aria-hidden
                    className={`absolute inset-0 pointer-events-none rounded-md opacity-0 ${logoHover ? "opacity-60 logo-shine" : ""}`}
                    style={{
                      mixBlendMode: "overlay",
                      transition: "opacity 320ms ease",
                    }}
                  />
                </div>

                {/* Brand text + ® + GST small */}
                <div className="hidden sm:flex flex-col leading-none">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm md:text-base font-semibold tracking-tight">Metal Stickers India</span>
                    <span className="text-amber-300 text-xs md:text-sm font-bold align-super">®</span>
                  </div>
                  <div className="text-xs text-gray-300">GST: <span className="text-gray-100 font-medium">06ABZFM3928P1Z7</span></div>
                </div>
              </Link>
            </div>

            {/* CENTER / RIGHT: Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
              {menuItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-1 py-2 text-sm tracking-wider transition-colors duration-250 focus:outline-none ${active ? "text-amber-300" : "text-gray-300 hover:text-white"
                      }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>

                    {/* animated golden underline */}
                    <span
                      aria-hidden
                      className={`absolute left-0 -bottom-2 h-[3px] rounded-full transition-all duration-400 ${active ? "w-full shimmer-underline" : "w-0 group-hover:w-full"
                        }`}
                      style={{ background: active ? "linear-gradient(90deg,#F9D976,#F39F23)" : undefined }}
                    />
                    {/* subtle shimmer bar for active */}
                    {active && (
                      <span
                        className="absolute -bottom-3 left-0 right-0 h-[1px] opacity-40"
                        style={{ background: "linear-gradient(90deg, rgba(249,217,118,0), rgba(249,217,118,0.55), rgba(249,217,118,0))" }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* RIGHT: actions (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/919999865558"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#0B2E14] hover:bg-[#083014] px-3 py-2 rounded-full text-sm text-[#CFF7DC] shadow-sm transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.88 11.88 0 0012.005.04C5.694.04.653 5.081.653 11.392c0 2.052.536 4.052 1.552 5.81L.024 24l6.958-2.152a11.34 11.34 0 005.023 1.2h.002c6.311 0 11.352-5.041 11.352-11.353 0-3.035-1.183-5.892-3.339-8.015z" />
                </svg>
                <span className="text-xs">WhatsApp</span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen((s) => !s)}
                aria-expanded={isMenuOpen}
                aria-label="Open menu"
                className="p-2 rounded-md text-white hover:bg-white/5 transition"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#071022] border-t border-white/6">
            <div className="mobile-slide px-4 py-4 space-y-3">
              {menuItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-3 py-3 rounded-lg transition-all duration-200 ${active ? "bg-gradient-to-r from-amber-500/15 to-amber-600/15 text-amber-300" : "text-gray-300 hover:bg-white/5"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-white/5">
                <a
                  href="https://wa.me/919999865558"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0B2E14] hover:bg-[#083014] px-3 py-2 rounded-full text-sm text-[#CFF7DC] shadow-sm transition"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.52 3.48A11.88 11.88 0 0012.005.04C5.694.04.653 5.081.653 11.392c0 2.052.536 4.052 1.552 5.81L.024 24l6.958-2.152a11.34 11.34 0 005.023 1.2h.002c6.311 0 11.352-5.041 11.352-11.353 0-3.035-1.183-5.892-3.339-8.015z" />
                  </svg>
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
