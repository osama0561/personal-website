import { useEffect, useRef } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CalEmbed() {
  const sectionRef = useRef(null);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          dark: {
            'cal-brand': '#4ECDC4',
          },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cal-wrapper', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="book" ref={sectionRef} className="py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-teal/60 uppercase tracking-[0.2em] mb-4">
            Let&apos;s talk
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ivory mb-4">
            Book a{' '}
            <span className="font-display italic text-teal">call.</span>
          </h2>
          <p className="text-ivory/40 text-lg max-w-xl mx-auto">
            Pick a time that works for you. We&apos;ll discuss your operations and
            how automation can change the way you run your business.
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="cal-wrapper card-surface p-2 sm:p-4">
          <Cal
            calLink="osama-h5hzqs/60"
            style={{ width: '100%', height: '100%', overflow: 'auto' }}
            config={{
              layout: 'month_view',
              theme: 'dark',
            }}
          />
        </div>
      </div>
    </section>
  );
}
