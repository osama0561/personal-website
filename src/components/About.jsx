import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      });

      gsap.from('.about-text > *', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <p className="font-mono text-xs text-teal/60 uppercase tracking-[0.2em] mb-16">
          Who I am
        </p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="about-image relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img
                src="/osama.jpg"
                alt="Osama Al-Kalthami"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-[1.5rem] border border-teal/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-[1rem] bg-teal/5 -z-10" />
          </div>

          {/* Text */}
          <div className="about-text">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ivory mb-4">
              Osama Al-Kalthami
            </h2>
            <p className="font-display italic text-xl text-teal mb-8">
              أسامة الكلثمي
            </p>

            <p className="text-lg text-ivory/50 leading-relaxed mb-6">
              I&apos;m an AI and automation consultant based in Saudi Arabia. I don&apos;t
              sell hype — I build real systems that automate real business operations.
            </p>

            <p className="text-lg text-ivory/50 leading-relaxed mb-6">
              From automating fleet inspections for 80+ vehicles, to building AI
              shopping assistants, to deploying smart coupon systems at scale — every
              project I take on is designed to eliminate manual work and drive
              measurable revenue.
            </p>

            <p className="text-lg text-ivory/50 leading-relaxed mb-10">
              I work with agencies, e-commerce brands, and service companies across
              Saudi Arabia who are ready to stop doing things the hard way.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '80+', label: 'Vehicles Automated' },
                { value: '120K+', label: 'SAR / Year Saved' },
                { value: '60K+', label: 'Smart Coupons' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-sans font-bold text-2xl sm:text-3xl text-teal">
                    {value}
                  </p>
                  <p className="font-mono text-[10px] text-ivory/25 uppercase tracking-widest mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
