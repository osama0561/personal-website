import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play, FileText, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const perks = [
  { icon: Play, text: 'Beginner-friendly video courses' },
  { icon: FileText, text: 'Step-by-step automation templates' },
  { icon: Users, text: 'Arabic-speaking community of builders' },
  { icon: Zap, text: 'Go from zero to building AI tools in 7 days' },
];

export default function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.community-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="community" ref={sectionRef} className="py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="card-surface p-10 sm:p-14 lg:p-20 community-content text-center">
          {/* Label */}
          <p className="font-mono text-xs text-teal/60 uppercase tracking-[0.2em] mb-6">
            مجلس الأتمتة
          </p>

          {/* Headline */}
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ivory mb-6">
            Learn AI in{' '}
            <span className="font-display italic text-teal">7 days.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-ivory/45 leading-relaxed max-w-2xl mx-auto mb-12">
            Simple, practical courses designed for beginners. No fluff, no
            prerequisites — just real skills you can use to automate your
            work and build AI-powered tools from day one.
          </p>

          {/* Perks Grid */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto mb-14 text-left">
            {perks.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-ivory/[0.03] border border-ivory/[0.05]"
              >
                <Icon size={18} className="text-teal flex-shrink-0" />
                <span className="text-sm text-ivory/50">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://majlis-landing-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-3 bg-teal text-obsidian font-semibold text-sm tracking-wide uppercase px-10 py-4 rounded-full"
          >
            <span className="btn-bg bg-ivory/20 rounded-full" />
            <span className="relative z-10 flex items-center gap-3">
              Join the Community
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
