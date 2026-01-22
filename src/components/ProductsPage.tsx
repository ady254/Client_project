import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

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
    {/* {
      id: 7,
      name: 'Rose Gold Badge',
      category: 'gold',
      description: 'Elegant rose gold finish for feminine luxury brands',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        size: 'A3 or A4 &Custom sizes available',
        thickness: '0.3mm - 0.5mm',
        finish: 'Rose gold electroplating',
        durability: '5+ years outdoor',
        adhesive: '6010 or 467h adhesive',
      },
    },
    {
      id: 8,
      name: 'Brushed Silver Plate',
      category: 'silver',
      description: 'Sophisticated brushed silver for professional applications',
      image: 'https://images.pexels.com/photos/163828/skate-board-skateboard-skateboarding-163828.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        size: 'A3 or A4 &Custom sizes available',
        thickness: '0.5mm - 0.8mm',
        finish: 'Brushed silver texture',
        durability: '6+ years outdoor',
        adhesive: 'Industrial-grade adhesive',
      },
    }, 
    {
      id: 9,
      name: '3D Chrome Emblem',
      category: '3d',
      description: 'Raised chrome design with dimensional depth',
      image: 'https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        size: 'A3 or A4 &Custom sizes available',
        thickness: '50 Sheets',
        finish: 'Chrome with resin coating',
        durability: '7+ years outdoor',
        adhesive: '6010 or 467',
      }, 
    }, */}
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleWhatsAppOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Hello, I want to order this metal sticker: ${productName}`
    );
    window.open(`https://wa.me/919999865558?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20 px-6">
      <Helmet>
        <title>Our Products | Metal Stickers India</title>
        <meta name="description" content="Browse our collection of 24K Gold, Silver, Nickel Chrome, and 3D metal stickers. Custom shapes and sizes available." />
        <meta property="og:title" content="Our Products | Metal Stickers India" />
        <meta property="og:description" content="Premium metal stickers collection: Gold, Silver, Chrome, and more." />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our complete range of premium electroplated metal stickers
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-full text-sm tracking-wider transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-2xl shadow-amber-500/50'
                : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-amber-500/50'
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
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-light text-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm hover:bg-white/10 transition-all duration-300"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleWhatsAppOrder(product.name ?? '')}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                    title="WhatsApp to Order"
                  >
                    <MessageCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/95 backdrop-blur-xl">
          <div className="relative max-w-4xl w-full bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-black/60 transition-all duration-300"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              <div className="p-6 md:p-12 space-y-6 md:space-y-8 bg-slate-800/50">
                <div>
                  <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl text-amber-400 font-medium">
                    Specifications
                  </h3>
                  {Object.entries(selectedProduct.specs ?? {}).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-3 border-b border-white/10"
                    >
                      <span className="text-gray-400 capitalize">
                        {key.replace('_', ' ')}
                      </span>
                      <span className="text-white text-right">{String(value ?? '')}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleWhatsAppOrder(selectedProduct.name ?? '')}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-green-500/50"
                >
                  <MessageCircle size={20} />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
