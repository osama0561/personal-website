import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveal for the manifesto lines
      const words = gsap.utils.toArray('.manifesto-word');
      gsap.from(words, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
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
    <section
      ref={sectionRef}
      className="relative py-40 lg:py-52 overflow-hidden"
      style={{ backgroundColor: '#0A0A0F' }}
    >
      {/* Parallax texture */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Line 1 — neutral */}
        <p className="text-lg sm:text-xl lg:text-2xl text-ivory/30 leading-relaxed mb-8">
          {'Most consultants sell you tools and dashboards.'.split(' ').map((word, i) => (
            <span key={i} className="manifesto-word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
        </p>

        {/* Line 2 — massive, accent keyword */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-display italic leading-[1] tracking-tight">
          {'We build infrastructure'.split(' ').map((word, i) => (
            <span
              key={i}
              className="manifesto-word inline-block mr-[0.3em] text-ivory"
            >
              {word}
            </span>
          ))}
          <br />
          {'that prints'.split(' ').map((word, i) => (
            <span
              key={`b-${i}`}
              className="manifesto-word inline-block mr-[0.3em] text-ivory"
            >
              {word}
            </span>
          ))}
          <span className="manifesto-word inline-block text-champagne">
            revenue.
          </span>
        </h2>
      </div>
    </section>
  );
}
