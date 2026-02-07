import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';

export default function PreciousPlatingPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [heroSlide, setHeroSlide] = useState(0);

    const heroImages = [
        "/gold-plating.webp",
        "/silver_plating.webp",
        "/nickel-chrome.webp",
        "/gold-finish.webp"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (selectedProduct) {
            setActiveImageIndex(0);
        }
    }, [selectedProduct]);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { ref: headerInViewRef, inView: headerInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const categories = [
        { id: 'all', label: 'All Services' },
        { id: 'gold', label: 'Gold Plating' },
        { id: 'silver', label: 'Silver Plating' },
        { id: 'chrome', label: 'Chrome Plating' },
    ];

    const products = [
        {
            id: 1,
            name: 'Gold Plating',
            category: 'gold',
            description: 'Gold plating is a premium electroplating process that coats metal surfaces with any number of microns of 24K gold. It enhances the product’s appearance while improving corrosion resistance, durability, and electrical performance. Ideal for luxury, industrial, and precision components that require both beauty and reliability.',
            image: ['/gold-plating.webp', '/24k-gold-plating-jewellery-ring-sticker.webp', '/24k-gold-plating-watch-branding-sticker.webp', '/gold-pcb-plating.webp'],
            specs: {
                finish: '24K Gold Electroplating',
                Benefits: ['Corrosion Resistance', 'High Durability', 'Aesthetic Appeal', 'Cost-Effective'],
                serviceLocation: 'Pan India',
                paymentMode: 'Online/Offline',
            },
            Application: ['Electronics & Electrical Components', 'PTH', 'Printed Circuit Boards (PCBs)', 'Watch Industry', 'Medical Equipments', 'Automobile Industry', 'Jewellery', 'Artificial Jewellery',],
        },
        {
            id: 2,
            name: 'Silver Plating',
            category: 'silver',
            description: 'Silver plating is a metal finishing process where a thin layer of silver is applied to a surface to improve conductivity, corrosion resistance, and appearance. It provides a clean, bright finish and is widely used in electronics, industrial components, decorative items, and precision parts where performance and reliability are important.',
            image: ['/silver_plating1.webp', '/silver_plating.webp', '/silver-plating-contact.webp'],
            specs: {
                platingThickness: 'As per requirements',
                Benefits: ['Electrical Conductivity', 'High Durability', 'Corrosion Resistance'],
                serviceLocation: 'Pan India',
                paymentMode: 'Online/Offline',
            },
            Application: ['Bus Bar', 'Contacts', 'Medical Equipments'],
        },
        {
            id: 3,
            name: 'Nickel Chrome Plating',
            category: 'chrome',
            description: 'Nickel chrome plating is a protective metal finishing process that gives surfaces a bright, mirror-like finish along with excellent corrosion resistance and durability. It is widely used for products that require a strong surface, long life, and a premium metallic appearance.',
            image: ['/nickel-chrome.webp'],
            specs: {
                platingThickness: 'As per requirements',
                Benefits: ['Corrosion Resistance', 'High Durability', 'Aesthetic Appeal', 'Cost-Effective'],
                finish: 'Nickel Chrome Plating',
                serviceLocation: 'Pan India',
                paymentMode: 'Online/Offline',
            },
            Application: ['Automobile Industry', 'Household and Plumbing', 'Electronics & Electrical Components', 'Medical Equipments'],
        },
    ];

    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter((p) => p.category === selectedCategory);

    const handleWhatsAppOrder = (product: typeof products[0]) => {
        const message = encodeURIComponent(
            `New Inquiry for Precious Metal Plating\n\n` +
            `Service: ${product.name}\n` +
            `Category: ${product.category}\n` +
            `Description: ${product.description}\n\n` +
            `I am interested in this service. Please provide a quote.`
        );
        window.open(`https://wa.me/919811018728?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#0A0F1F] pt-32 pb-20 px-6 font-sans overflow-x-hidden">
            <Helmet>
                <title>Precious Metal Plating Services | Metal Stickers India</title>
                <meta name="description" content="Premium gold, silver, and nickel chrome electroplating services for industrial and retail excellence." />
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <div className="absolute inset-0 -z-20 overflow-hidden">
                    {heroImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-1000 ${heroSlide === idx ? 'opacity-20' : 'opacity-0'}`}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover scale-110 active:scale-100 transition-transform duration-[10000ms]" style={{ transform: `scale(${1.1 + scrollY * 0.0002}) translateY(${scrollY * 0.1}px)` }} />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-transparent to-[#0A0F1F]" />
                </div>

                <div ref={headerInViewRef} className="text-center mb-20 relative py-20">
                    <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none select-none overflow-hidden">
                        <span
                            className="text-[15vw] font-black italic text-white/5 whitespace-nowrap transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(${(scrollY - 100) * -0.3}px)`,
                                opacity: headerInView ? 0.05 : 0
                            }}
                        >
                            PRECIOUS METAL PLATING PRECIOUS METAL PLATING
                        </span>
                    </div>

                    <div className="relative overflow-hidden">
                        <h1
                            className="text-6xl md:text-8xl font-black text-white mb-6 transition-all duration-700 ease-out uppercase tracking-tighter"
                            style={{
                                transform: headerInView
                                    ? `translateY(${(scrollY - 100) * 0.05}px)`
                                    : 'translateY(50px)',
                                opacity: headerInView ? 1 : 0
                            }}
                        >
                            Precious Metal <span className="text-[#F9D976] bg-gradient-to-r from-[#F9D976] to-[#F39F23] bg-clip-text text-transparent">Plating</span>
                        </h1>
                    </div>

                    <p
                        className="text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-700 delay-100 ease-out uppercase tracking-[0.3em] text-xs font-black"
                        style={{
                            transform: headerInView
                                ? `translateY(${(scrollY - 100) * 0.02}px)`
                                : 'translateY(20px)',
                            opacity: headerInView ? 1 : 0
                        }}
                    >
                        Specialized electroplating solutions tailored for luxury and industrial durability
                    </p>
                    <div className={`h-1 bg-gradient-to-r from-transparent via-[#F9D976] to-transparent mx-auto mt-10 transition-all duration-1000 delay-500 ${headerInView ? 'w-60 opacity-100' : 'w-0 opacity-0'}`} />
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${selectedCategory === category.id
                                ? 'bg-[#F9D976] text-[#0A0F1F] border-[#F9D976]'
                                : 'bg-transparent text-gray-400 border-white/10 hover:border-[#F9D976] hover:text-[#F9D976]'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, idx) => (
                        <div
                            key={product.id}
                            className={`bg-[#1A1F2E]/40 backdrop-blur-md border border-white/10 grid grid-cols-2 grid-rows-[auto_1fr_auto] overflow-hidden group transition-all duration-700 hover:border-[#F9D976]/30 hover:shadow-2xl hover:shadow-[#F9D976]/5 translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-8`}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <div className="border-r border-b border-white/10 p-4 flex items-center justify-center bg-white/5">
                                <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white truncate uppercase">
                                    {product.name ? `${product.name.split(' ')[0]}.` : 'Service.'}
                                </h3>
                            </div>
                            <div className="border-b border-white/10 p-4 flex flex-col justify-center">
                                <span className="text-[9px] uppercase tracking-[0.2em] text-[#F9D976] mb-0.5 font-bold">Category</span>
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">{product.category}</span>
                            </div>

                            <div className="border-r border-white/10 p-6 relative overflow-hidden bg-white/5 flex items-center justify-center aspect-square">
                                <img
                                    src={product.image[0]}
                                    alt={product.name}
                                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F9D976] mb-2">About</h4>
                                    <p className="text-[11px] text-gray-300 leading-snug font-medium line-clamp-3">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="space-y-1 mt-4">
                                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F9D976]">Specs</h4>
                                    <div className="flex flex-wrap gap-1">
                                        <span className="text-[8px] px-1.5 py-0.5 bg-white/10 text-white font-bold uppercase tracking-tighter">Premium</span>
                                        <span className="text-[8px] px-1.5 py-0.5 bg-white/10 text-white font-bold uppercase tracking-tighter">Durable</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 border-t border-white/10 p-3 flex justify-between items-center bg-white/5">
                                <span className="text-[8px] text-white/20 font-bold tracking-[0.2em] uppercase">Premium Plating Solutions</span>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="text-[9px] font-black uppercase tracking-[0.1em] text-white hover:text-[#F9D976] transition-colors"
                                    >
                                        Details
                                    </button>
                                    <button
                                        onClick={() => handleWhatsAppOrder(product)}
                                        className="text-[9px] font-black uppercase tracking-[0.1em] text-[#F9D976] hover:underline underline-offset-4 transition-all"
                                    >
                                        Inquiry
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0F1F]/95 backdrop-blur-xl">
                    <div className="relative bg-[#0A0F1F] border border-white/5 w-full max-w-7xl h-[100dvh] md:h-[90vh] rounded-none md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
                        {/* Close Button - More visible and positioned better */}
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 z-[110] w-10 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        >
                            ✕
                        </button>

                        <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto custom-scrollbar md:overflow-hidden">
                            {/* Left: Image Showcase */}
                            <div className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col md:flex-row gap-6 items-center justify-center border-b md:border-b-0 md:border-r border-white/10 bg-white/5 md:overflow-hidden shrink-0">
                                {/* Thumbnails */}
                                {selectedProduct.image.length > 1 && (
                                    <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto w-full md:w-24 md:h-full scrollbar-hide flex-shrink-0 justify-center md:justify-start py-2 md:py-4 px-1 z-10">
                                        {selectedProduct.image.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onMouseEnter={() => setActiveImageIndex(idx)}
                                                onClick={() => setActiveImageIndex(idx)}
                                                className={`relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0 rounded-lg border overflow-hidden bg-white/5 transition-all duration-200 ${activeImageIndex === idx
                                                    ? 'border-[#F9D976] ring-2 ring-[#F9D976] opacity-100'
                                                    : 'border-white/10 hover:border-[#F9D976]/50 opacity-70 hover:opacity-100'
                                                    }`}
                                            >
                                                <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Main Image */}
                                <div className="order-1 md:order-2 relative flex-1 w-full flex items-center justify-center bg-[#0A0F1F]/40 rounded-2xl border border-white/5 p-4 overflow-hidden aspect-square md:aspect-auto md:h-full group/main">
                                    {selectedProduct.image.length > 1 && (
                                        <div className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md z-10 border border-white/10 shadow-lg">
                                            {activeImageIndex + 1} / {selectedProduct.image.length}
                                        </div>
                                    )}
                                    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                                        <img
                                            src={selectedProduct.image[activeImageIndex]}
                                            alt={selectedProduct.name}
                                            className="w-auto h-auto max-w-full max-h-[50vh] md:max-h-full object-contain mx-auto transition-all duration-500 cursor-zoom-in group-hover/main:scale-150"
                                            onMouseMove={(e) => {
                                                const target = e.currentTarget;
                                                const rect = target.getBoundingClientRect();
                                                const x = ((e.clientX - rect.left) / rect.width) * 100;
                                                const y = ((e.clientY - rect.top) / rect.height) * 100;
                                                target.style.transformOrigin = `${x}% ${y}%`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transformOrigin = 'center';
                                            }}
                                        />
                                    </div>

                                    {/* Navigation Arrows for Mobile Gallery */}
                                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none md:hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setActiveImageIndex(prev => (prev - 1 + selectedProduct.image.length) % selectedProduct.image.length) }}
                                            className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 pointer-events-auto"
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setActiveImageIndex(prev => (prev + 1) % selectedProduct.image.length) }}
                                            className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 pointer-events-auto"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Detailed Info */}
                            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col md:h-full md:overflow-y-auto custom-scrollbar bg-[#0A0F1F]">
                                <div className="flex-1 space-y-10 pb-32">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F9D976] block mb-4">Service Details</span>
                                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                                            {selectedProduct.name}
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed font-medium text-sm md:text-base">
                                            {selectedProduct.description}
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        {selectedProduct.Application && (
                                            <div className="mb-6">
                                                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F9D976] border-b border-white/10 pb-2 mb-3">
                                                    Applications
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProduct.Application.map((app, i) => (
                                                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-300 font-bold uppercase tracking-wider">
                                                            {app}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F9D976] border-b border-white/10 pb-2">
                                            Specifications
                                        </h3>
                                        <div className="grid gap-4">
                                            {Object.entries(selectedProduct.specs ?? {}).map(([key, value]) => (
                                                <div
                                                    key={key}
                                                    className="flex flex-col sm:flex-row sm:justify-between items-start text-xs border-b border-white/5 pb-2 last:border-0"
                                                >
                                                    <span className="text-gray-400 uppercase tracking-widest font-bold whitespace-nowrap pt-1">
                                                        {key.replace(/([A-Z])/g, ' $1').replace('_', ' ').trim()}
                                                    </span>
                                                    <span className="text-white font-black uppercase tracking-wider text-left sm:text-right mt-1 sm:mt-0 sm:ml-8 leading-relaxed max-w-full sm:max-w-[60%]">
                                                        {Array.isArray(value) ? value.join(' | ') : String(value ?? '')}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Footer for CTA on Mobile/Desktop */}
                                <div className="sticky bottom-0 left-0 right-0 pt-6 pb-2 bg-[#0A0F1F] border-t border-white/5 mt-auto">
                                    <button
                                        onClick={() => handleWhatsAppOrder(selectedProduct)}
                                        className="w-full bg-gradient-to-r from-[#F9D976] to-[#F39F23] text-[#0A0F1F] text-[11px] font-black uppercase tracking-[0.4em] py-5 hover:brightness-110 active:scale-[0.98] transition-all duration-300 rounded-2xl shadow-lg shadow-[#F9D976]/10"
                                    >
                                        Contact for Business Inquiry
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
