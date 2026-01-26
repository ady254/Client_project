import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [scrollY, setScrollY] = useState(0);

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
    { id: 'all', label: 'All Products' },
    { id: 'gold', label: 'Gold Stickers' },
    { id: 'silver', label: 'Silver Stickers' },
    { id: 'chrome', label: 'Chrome Stickers' },
    { id: '3d', label: '3D Stickers' },
    { id: 'A3 or A4 &custom', label: 'A3 or A4 &Custom Requests' },
  ];

  const products = [
    {
      id: 1,
      name: 'Luxury Gold Finish Labels',
      category: 'gold',
      description: 'Luxurious 24K gold electroplated sticker for high-end branding',
      image: '/gold-finish.webp',
      specs: {
        size: 'A3 or A4 & Custom sizes available',
        MinOrder: '50 Sheets',
        finish: '24K Gold Electroplating',
        durability: '5+ years outdoor',
        adhesive: '6010 or 467h adhesive',
      },
    },
    {
      id: 2,
      name: 'Stainless Steel Silver Labels',
      category: 'silver',
      description: 'Sleek silver finish perfect for modern tech branding',
      image: '/silver-finish.webp',
      specs: {
        size: 'A3 or A4 & Custom sizes available',
        Minorder: '50 Sheets',
        finish: 'Brushed steel finish, industrial grade and Mirror Chrome Silver',
        durability: '5+ years outdoor',
        adhesive: '6010 or 467h adhesive',
      },
    },
    {
      id: 3,
      name: 'Premium Nickel Chrome Stickers',
      category: 'Nickel Chrome',
      description: 'Premium raised design with crystal-clear resin coating',
      image: '/chrome-finish.webp',
      specs: {
        size: 'A3 or A4 & Custom sizes available',
        Minorder: '50 Sheets',
        finish: 'Polyurethane resin coating',
        durability: '7+ years outdoor',
        adhesive: '6010 or 467h adhesive',
      },
    },
    {
      id: 4,
      name: 'Rose Gold Premium Stickers',
      category: 'gold',
      description: 'Textured gold finish for premium automotive applications',
      image: 'rose-gold.webp',
      specs: {
        size: 'A3 or A4 & Custom sizes available',
        Minorder: '50 Sheets',
        finish: 'Brushed gold texture',
        durability: '6+ years outdoor',
        adhesive: '6010 or 467h adhesive',
      },
    },
    {
      id: 5,
      name: 'Matte Black Finish Stickers',
      category: 'Matte Black',
      description: 'High-polish chrome for luxury product branding',
      image: '/gem-finished.webp',
      specs: {
        size: 'A3 or A4 & Custom sizes available',
        Minorder: '50 Sheets',
        finish: 'High-gloss chrome',
        durability: '5+ years outdoor',
        adhesive: '6010 or 467h adhesive',
      },
    },
    {
      id: 6,
      name: 'Custom Printed Metal Labels',
      category: 'Printed',
      description: 'Any shape, any design - fully A3 or A4 &customizable metal stickers',
      image: '/custom-printed.webp',
      specs: {
        size: 'Fully A3 or A4 &customizable',
        Minorder: '50 Sheets',
        finish: 'Choice of gold, silver, or chrome',
        durability: '5+ years outdoor',
        adhesive: 'Multiple options available',
      },
    },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleWhatsAppOrder = (product: typeof products[0]) => {
    const message = encodeURIComponent(
      `New Order Inquiry\n\n` +
      `Product: ${product.name}\n` +
      `Category: ${product.category}\n` +
      `Description: ${product.description}\n\n` +
      `Specifications:\n` +
      `• Size: ${product.specs.size}\n` +
      `• Min Order: ${product.specs.MinOrder ?? product.specs.Minorder}\n` +
      `• Finish: ${product.specs.finish}\n` +
      `• Durability: ${product.specs.durability}\n` +
      `• Adhesive: ${product.specs.adhesive}\n\n` +
      `I am interested in this product. Please provide a quote.`
    );
    window.open(`https://wa.me/919999865558?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0F1F] pt-32 pb-20 px-6 font-sans">
      <Helmet>
        <title>Our Products | Metal Stickers India</title>
        <meta name="description" content="Browse our collection of 24K Gold, Silver, Nickel Chrome, and 3D metal stickers. Custom shapes and sizes available." />
        <meta property="og:title" content="Our Products | Metal Stickers India" />
        <meta property="og:description" content="Premium metal stickers collection: Gold, Silver, Chrome, and more." />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div ref={headerInViewRef} className="text-center mb-20 relative py-10">
          <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none select-none overflow-hidden">
            <span 
              className="text-[15vw] font-black italic text-white/5 whitespace-nowrap transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(${(scrollY - 100) * -0.3}px)`,
                opacity: headerInView ? 0.05 : 0 
              }}
            >
              PREMIUM PRODUCTS PREMIUM PRODUCTS
            </span>
          </div>
          
          <div className="relative overflow-hidden">
            <h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-700 ease-out uppercase tracking-tighter"
              style={{
                transform: headerInView 
                  ? `translateY(${(scrollY - 100) * 0.05}px)` 
                  : 'translateY(50px)',
                opacity: headerInView ? 1 : 0
              }}
            >
              Our <span className="text-[#F9D976]">Products</span>
            </h1>
          </div>

          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-700 delay-100 ease-out uppercase tracking-widest text-sm font-bold"
            style={{
              transform: headerInView 
                ? `translateY(${(scrollY - 100) * 0.02}px)` 
                : 'translateY(20px)',
              opacity: headerInView ? 1 : 0
            }}
          >
            Explore our complete range of premium electroplated metal stickers
          </p>
          <div className={`h-px bg-[#F9D976]/30 mx-auto mt-8 transition-all duration-1000 delay-500 ${headerInView ? 'w-40 opacity-100' : 'w-0 opacity-0'}`} />
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
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#1A1F2E]/40 backdrop-blur-md border border-white/10 grid grid-cols-2 grid-rows-[auto_1fr_auto] overflow-hidden group transition-all duration-500 hover:border-[#F9D976]/30 hover:shadow-2xl hover:shadow-[#F9D976]/5"
            >
              {/* Header Cells */}
              <div className="border-r border-b border-white/10 p-4 flex items-center justify-center bg-white/5">
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white truncate uppercase">
                  {product.name ? `${product.name.split(' ')[0]}.` : 'Product.'}
                </h3>
              </div>
              <div className="border-b border-white/10 p-4 flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#F9D976] mb-0.5 font-bold">Category</span>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{product.category}</span>
              </div>

              {/* Main Content Cells */}
              <div className="border-r border-white/10 p-6 relative overflow-hidden bg-white/5 flex items-center justify-center aspect-square">
                <img
                  src={product.image}
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

              {/* Footer Cells */}
              <div className="col-span-2 border-t border-white/10 p-3 flex justify-between items-center bg-white/5">
                <span className="text-[8px] text-white/20 font-bold tracking-[0.2em] uppercase">www.metalstickers.in</span>
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
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#0A0F1F]/95 backdrop-blur-xl">
          <div className="relative max-w-5xl w-full bg-[#0F1724] border border-white/10 rounded-none overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-20 p-2 hover:bg-white/5 rounded-full text-white transition-all duration-300"
            >
              <X size={24} />
            </button>

            <div className="md:w-1/2 bg-white/5 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F9D976] block mb-4">Product Details</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F9D976] border-b border-white/10 pb-2">
                    Specifications
                  </h3>
                  <div className="grid gap-4">
                    {Object.entries(selectedProduct.specs ?? {}).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center text-xs"
                      >
                        <span className="text-gray-400 uppercase tracking-widest font-bold">
                          {key.replace('_', ' ')}
                        </span>
                        <span className="text-white font-black uppercase tracking-wider">{String(value ?? '')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <button
                  onClick={() => handleWhatsAppOrder(selectedProduct)}
                  className="w-full bg-gradient-to-r from-[#F9D976] to-[#F39F23] text-[#0A0F1F] text-[10px] font-black uppercase tracking-[0.4em] py-5 hover:brightness-110 transition-all duration-300"
                >
                  Contact for Order
                </button>
                <p className="text-center text-[9px] text-gray-400 mt-4 uppercase tracking-widest">
                  Custom sizes and bulk pricing available upon request
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
