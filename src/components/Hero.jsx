import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 });

      tl.from('.hero-line-1', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
        .from(
          '.hero-line-2',
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          '.hero-sub',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          '.hero-cta',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100dvh] flex items-end overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 to-transparent" />
      </div>

      {/* Content — bottom-left third */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28">
        <div className="max-w-3xl">
          {/* Line 1 — Bold Sans */}
          <p className="hero-line-1 font-sans font-bold text-lg sm:text-xl lg:text-2xl tracking-tight text-ivory/70 mb-2">
            Ambition meets
          </p>

          {/* Line 2 — Massive Serif Italic */}
          <h1 className="hero-line-2 font-display italic font-bold text-6xl sm:text-7xl lg:text-[8rem] xl:text-[9rem] leading-[0.9] tracking-tight text-ivory mb-8">
            Automation<span className="text-champagne">.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-sub text-base sm:text-lg lg:text-xl text-ivory/50 max-w-xl leading-relaxed mb-10">
            I build intelligent systems that run your operations — so you can focus on what actually moves the needle.
          </p>

          {/* CTA */}
          <a
            href="https://cal.com/osama-h5hzqs/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta btn-magnetic inline-flex items-center gap-3 bg-champagne text-obsidian font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full"
          >
            <span className="btn-bg bg-ivory/20 rounded-full" />
            <span className="relative z-10 flex items-center gap-3">
              Book a Call
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
