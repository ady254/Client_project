import { Award, Users, Zap } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  start?: number;
}

function Counter({ start = 0, end, duration = 2000, suffix = "", startAnimation }: { start?: number; end: number; duration?: number; suffix?: string; startAnimation: boolean }) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startAnimation) {
      setCount(start);
      countRef.current = start;
      startTimeRef.current = null;
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Power4 easeOut formula
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(start + (end - start) * easeOut);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, startAnimation]);

  return <>{count.toLocaleString()}{suffix}</>;
}

function ScatterText({ text, inView, className = "", style = {} }: { text: string; inView: boolean; className?: string; style?: React.CSSProperties }) {
  // Responsive check
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`} style={style}>
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, cIndex) => {
            // Reduced scatter distance for mobile to prevent overflow
            const scatterRange = isMobile ? 30 : 100;
            const x = (Math.random() - 0.5) * scatterRange;
            const y = (Math.random() - 0.5) * scatterRange;
            const rotate = (Math.random() - 0.5) * (isMobile ? 45 : 90);

            return (
              <span
                key={cIndex}
                className="inline-block transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  display: 'inline-block',
                  whiteSpace: 'pre',
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? 'translate(0, 0) rotate(0deg) scale(1)'
                    : `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(0)`,
                  transitionDelay: `${(wIndex * 5 + cIndex) * 20}ms`,
                  filter: inView ? 'blur(0px)' : 'blur(10px)'
                }}
              >
                {char}
              </span>
            );
          })}
          {/* Add space after word if it's not the last one */}
          {wIndex < words.length - 1 && (
            <span className="inline-block transition-all duration-[1500ms]" style={{ opacity: inView ? 1 : 0 }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}

function TypingText({ text, inView, className = "", style = {} }: { text: string; inView: boolean; className?: string; style?: React.CSSProperties }) {
  const words = text.split(' ');
  return (
    <span className={className} style={style}>
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, cIndex) => {
            // Calculate global index for consistent delay
            const globalIndex = wIndex * 5 + cIndex;
            return (
              <span
                key={cIndex}
                className="transition-opacity duration-75 inline-block"
                style={{
                  opacity: inView ? 1 : 0,
                  transitionDelay: inView ? `${800 + (globalIndex * 20)}ms` : '0ms',
                  whiteSpace: 'pre'
                }}
              >
                {char}
              </span>
            );
          })}
          {wIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  // Responsive check for scroll animations
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { ref: headerInViewRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: founderInViewRef, inView: founderInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: statsInViewRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: valuesInViewRef, inView: valuesInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: precisionRef, inView: precisionInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const stats: Stat[] = [
    { icon: Award, value: 5, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 300, suffix: '+', label: 'Business Clients' },
    { icon: Zap, start: 10000, value: 100000, suffix: '+', label: 'Stickers Produced' },
  ];

  const shadowTextStyle = {
    textShadow: `
      1px 1px 0px rgba(255,255,255,0.1),
      2px 2px 0px rgba(0,0,0,0.2),
      3px 3px 0px rgba(0,0,0,0.3),
      4px 4px 0px rgba(0,0,0,0.4),
      5px 5px 0px rgba(0,0,0,0.5),
      6px 6px 10px rgba(0,0,0,0.8)
    `,
    background: 'linear-gradient(to bottom, #ffffff 0%, #e0e0e0 50%, #888888 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.1))'
  };

  return (
    <div className="min-h-screen bg-[#0A0F1F] font-sans overflow-x-hidden">
      <Helmet>
        <title>About Us | Metal Stickers India</title>
        <meta name="description" content="Learn about Metal Stickers India, the leading manufacturer of premium electroplated metal labels since 2014. We deliver excellence in every detail." />
        <meta property="og:title" content="About Us | Metal Stickers India" />
        <meta property="og:description" content="Crafting excellence since 2014. We specialize in high-quality gold, silver, and chrome metal branding solutions." />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1F] pt-20">
        {/* Background with subtle parallax */}
        <div
          className="absolute inset-0 z-0 opacity-20 grayscale brightness-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-transparent to-[#0A0F1F] z-1" />

        <div className="relative z-10 w-full flex flex-col items-center select-none pointer-events-none">
          {/* Vertical Blinds Transition Container */}
          <div ref={headerInViewRef} className="relative py-24 px-6 overflow-hidden pointer-events-auto w-full">
            {/* The Blinds Overlay - Increased to 24 strips for much smoother look */}
            <div className="absolute inset-0 flex z-20 pointer-events-none">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="h-full bg-[#0A0F1F] transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    width: `${100 / 24}%`,
                    transform: headerInView ? 'scaleY(0)' : 'scaleY(1)',
                    transformOrigin: i % 2 === 0 ? 'top' : 'bottom',
                    transitionDelay: `${i * 40}ms`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center max-w-6xl mx-auto">
              <h1
                className="text-5xl md:text-7xl lg:text-9xl font-black italic tracking-tighter uppercase mb-8 leading-none select-none"
                style={{
                  ...shadowTextStyle,
                  opacity: headerInView ? 1 : 0,
                  transform: headerInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                  transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s'
                }}
              >
                <span className="text-white" style={{ background: 'none', WebkitBackgroundClip: 'border-box', WebkitTextFillColor: 'white' }}>Our Story.</span> <br className="md:hidden" />
                <span className="text-[#F9D976] filter-none bg-none" style={{ WebkitTextFillColor: '#F9D976' }}>Our Craft.</span>
              </h1>
              <p
                className="text-lg md:text-3xl text-gray-400 leading-relaxed max-w-4xl mx-auto uppercase tracking-[0.2em] font-bold"
                style={{
                  opacity: headerInView ? 1 : 0,
                  transform: headerInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.8s'
                }}
              >
                Metal Stickers India has pioneered the art of electroplated branding solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={founderInViewRef} className="py-32 px-6 relative bg-[#0A0F1F] overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className="relative transition-all duration-1000 ease-out"
              style={{
                transform: founderInView ? 'translateX(0)' : 'translateX(-50px)',
                opacity: founderInView ? 1 : 0
              }}
            >
              <div className="aspect-square border border-white/10 overflow-hidden bg-white/5 relative group">
                <img
                  src="/logo.webp"
                  alt="Founder & CEO"
                  className="w-full h-full object-cover opacity-80 transition-transform duration-[2000ms] ease-out"
                  style={{
                    transform: founderInView
                      ? `scale(1.1) translateY(${(scrollY - 500) * -0.05}px)`
                      : 'scale(1) translateY(0)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-transparent to-transparent opacity-60" />
              </div>
              <div
                className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#F9D976]/10 rounded-full blur-3xl transition-transform duration-1000"
                style={{
                  transform: `translate(${(scrollY - 500) * 0.1}px, ${(scrollY - 500) * 0.1}px)`
                }}
              />
            </div>

            <div className="space-y-8">
              <div
                className="transition-all duration-1000 delay-300 ease-out"
                style={{
                  transform: founderInView ? 'translateY(0)' : 'translateY(30px)',
                  opacity: founderInView ? 1 : 0
                }}
              >
                <p className="text-[#F9D976] text-[10px] tracking-[0.4em] uppercase mb-4 font-black">
                  Founder & CEO
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                  Crafting Excellence
                  <br />
                  Since 2021
                </h2>
              </div>

              <div
                className="space-y-6 text-gray-400 leading-relaxed font-medium transition-all duration-1000 delay-500 ease-out"
                style={{
                  transform: founderInView ? 'translateY(0)' : 'translateY(30px)',
                  opacity: founderInView ? 1 : 0
                }}
              >
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



      <section ref={statsInViewRef} className="py-32 px-6 relative bg-[#0F1724]">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {(stats as Stat[]).map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-6 p-12 bg-[#1A1F2E]/40 backdrop-blur-md border border-white/10 group hover:border-[#F9D976]/30 transition-all duration-1000 ease-out"
                style={{
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${index * 300}ms`
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-none bg-white/5 border border-white/10 group-hover:border-[#F9D976]/50 transition-colors duration-500">
                  <stat.icon className="w-6 h-6 text-[#F9D976] group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter transition-all duration-700 group-hover:text-[#F9D976]">
                    <Counter
                      start={stat.start || 0}
                      end={stat.value}
                      suffix={stat.suffix}
                      startAnimation={statsInView}
                    />
                  </div>
                  <div className="text-[10px] text-gray-400 tracking-[0.3em] uppercase font-bold group-hover:text-white transition-colors duration-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Premium Metal Stickers"
          className="w-full h-full object-cover opacity-40 transition-transform duration-100 ease-out"
          style={{
            transform: `scale(1.1) translateY(${(scrollY - 1500) * 0.05}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-[#0A0F1F]/60 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl mx-auto" ref={precisionRef}>
            <h2
              className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tighter px-4 flex flex-col items-center justify-center"
              style={{
                transform: `translateY(${(scrollY - 1500) * -0.05}px)`
              }}
            >
              <ScatterText text="Where Precision Meets" inView={precisionInView} />
              <br className="hidden md:block" />
              <ScatterText text="Perfection" inView={precisionInView} className="text-[#F9D976]" />
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed uppercase tracking-[0.2em] font-bold px-6 max-w-2xl mx-auto"
              style={{
                transform: `translateY(${(scrollY - 1500) * -0.02}px)`
              }}
            >
              <TypingText
                text="Every sticker tells a story of craftsmanship, dedication, and the pursuit of excellence."
                inView={precisionInView}
              />
            </p>
          </div>
        </div>
      </section>

      <section ref={valuesInViewRef} className="py-32 px-6 relative bg-[#0A0F1F] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center -z-0 pointer-events-none select-none overflow-hidden">
          <span
            className="text-[15vw] font-black italic text-white/5 whitespace-nowrap transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${(scrollY - 2000) * -0.3}px)`,
              opacity: valuesInView ? 0.05 : 0
            }}
          >
            OUR VALUES OUR VALUES OUR VALUES
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20 relative">
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter transition-all duration-700 ease-out"
              style={{
                transform: valuesInView
                  ? `translateY(${(scrollY - 2000) * 0.05}px)`
                  : 'translateY(50px)',
                opacity: valuesInView ? 1 : 0
              }}
            >
              Our <span className="text-[#F9D976]">Values</span>
            </h2>
            <div
              className={`h-px bg-[#F9D976]/30 mx-auto transition-all duration-1000 delay-300 ${valuesInView ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
            {[
              {
                title: 'Quality First',
                description:
                  'Every sticker undergoes rigorous quality checks. We never compromise on standards.',
                slideDir: isMobile ? 0 : -1 // Slide from bottom on mobile, left on desktop
              },
              {
                title: 'Innovation',
                description:
                  'Constantly evolving our techniques to deliver cutting-edge branding solutions.',
                slideDir: 0 // Always slide from bottom
              },
              {
                title: 'Customer Focus',
                description:
                  'Your vision drives our craft. We work closely with every client to bring ideas to life.',
                slideDir: isMobile ? 0 : 1 // Slide from bottom on mobile, right on desktop
              },
            ].map((value, index) => {
              // Calculate scroll-linked parallax offset - reduced for mobile
              const multiplier = isMobile ? 0.02 : 0.05;
              const offset = (scrollY - 2200) * multiplier;

              return (
                <div
                  key={index}
                  className="p-6 md:p-10 space-y-4 bg-[#1A1F2E]/40 backdrop-blur-md border border-white/10 group hover:border-[#F9D976]/50 transition-all duration-1000 ease-out hover:-translate-y-2 relative overflow-hidden"
                  style={{
                    opacity: valuesInView ? 1 : 0,
                    transform: valuesInView
                      ? `translate(${value.slideDir * offset}px, ${value.slideDir === 0 ? offset : 0}px)`
                      : `translate(${value.slideDir * (isMobile ? 20 : 50)}px, ${isMobile ? 20 : 50}px)`,
                    transitionDelay: `${index * 150}ms`,
                    transitionProperty: valuesInView ? 'opacity, border-color, background-color, transform, box-shadow' : 'all'
                  }}
                >
                  {/* Background Gold Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F9D976]/0 via-[#F9D976]/0 to-[#F9D976]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -inset-full bg-gradient-to-br from-transparent via-[#F9D976]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#F9D976] transition-colors duration-500">{value.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors duration-500">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
