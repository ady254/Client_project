import { Award, Users, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '300+', label: 'Business Clients' },
    { icon: Zap, value: '1L+', label: 'Stickers Produced' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>About Us | Metal Stickers India</title>
        <meta name="description" content="Learn about Metal Stickers India, the leading manufacturer of premium electroplated metal labels since 2014. We deliver excellence in every detail." />
        <meta property="og:title" content="About Us | Metal Stickers India" />
        <meta property="og:description" content="Crafting excellence since 2014. We specialize in high-quality gold, silver, and chrome metal branding solutions." />
      </Helmet>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-white mb-8 leading-tight">
            Our Story.
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Our Craft.
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Metal Stickers India has pioneered the art of electroplated branding
            solutions.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-12" />
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="/logo.webp"
                  alt="Founder & CEO"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full blur-3xl" />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-amber-400 text-sm tracking-widest uppercase mb-4">
                  Founder & CEO
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                  Crafting Excellence
                  <br />
                  Since 2021
                </h2>
              </div>

              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  Started with a small workshop and a vision to transform the way
                  Indian businesses approach premium branding. What began as a
                  passion for metalwork has evolved into India's leading
                  electroplating sticker manufacturer.
                </p>
                <p>
                  Today, we deliver premium electroplated stickers across India and
                  worldwide. Our commitment is unwavering: precision in every
                  detail, durability that lasts, and luxury that speaks for itself.
                </p>
                <p>
                  Every sticker we create carries the weight of our craftsmanship
                  and the promise of excellence. We don't just make metal stickers;
                  we create lasting impressions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-amber-900/10 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-6 p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-2xl shadow-amber-500/50">
                  <stat.icon className="w-10 h-10 text-slate-900" />
                </div>
                <div>
                  <div className="text-6xl font-light text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Premium Metal Stickers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Where Precision Meets
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Perfection
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every sticker tells a story of craftsmanship, dedication, and the
              pursuit of excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              Our Values
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description:
                  'Every sticker undergoes rigorous quality checks. We never compromise on standards.',
              },
              {
                title: 'Innovation',
                description:
                  'Constantly evolving our techniques to deliver cutting-edge branding solutions.',
              },
              {
                title: 'Customer Focus',
                description:
                  'Your vision drives our craft. We work closely with every client to bring ideas to life.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-10 space-y-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500"
              >
                <h3 className="text-2xl font-light text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
