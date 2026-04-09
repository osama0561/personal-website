import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── SVG Animation 1: Rotating Concentric Circles ── */
function RotatingMotif() {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-20">
      <g className="origin-center" style={{ animation: 'spin 20s linear infinite' }}>
        <circle cx="100" cy="100" r="80" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="20" fill="none" stroke="#C9A84C" strokeWidth="1" />
      </g>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  );
}

/* ── SVG Animation 2: Scanning Laser Grid ── */
function LaserGrid() {
  return (
    <svg viewBox="0 0 200 120" className="w-48 h-28 opacity-20">
      {/* Dot grid */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 16}
            cy={10 + row * 14}
            r="1.5"
            fill="#FAF8F5"
            opacity="0.3"
          />
        ))
      )}
      {/* Scanning line */}
      <rect
        x="0"
        y="0"
        width="200"
        height="2"
        fill="#C9A84C"
        opacity="0.6"
        style={{ animation: 'laser-scan 3s ease-in-out infinite alternate' }}
      />
      <style>{`@keyframes laser-scan { 0% { transform: translateY(0); } 100% { transform: translateY(112px); } }`}</style>
    </svg>
  );
}

/* ── SVG Animation 3: Pulsing Waveform ── */
function Waveform() {
  return (
    <svg viewBox="0 0 200 60" className="w-48 h-16 opacity-20">
      <path
        d="M0,30 Q10,30 20,30 T40,10 T60,50 T80,20 T100,40 T120,15 T140,45 T160,25 T180,35 T200,30"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeDasharray="400"
        strokeDashoffset="0"
        style={{ animation: 'waveform-draw 4s ease-in-out infinite alternate' }}
      />
      <style>{`@keyframes waveform-draw { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 80; } }`}</style>
    </svg>
  );
}

const steps = [
  {
    num: '01',
    title: 'Diagnose',
    description:
      'We audit your operations to find the highest-ROI automation opportunities. No guesswork — just data-driven analysis of where manual work is costing you.',
    Visual: RotatingMotif,
  },
  {
    num: '02',
    title: 'Architect',
    description:
      'We design systems that integrate with your existing stack — n8n, CRM, WhatsApp, databases. Everything connected, nothing siloed.',
    Visual: LaserGrid,
  },
  {
    num: '03',
    title: 'Deploy & Scale',
    description:
      'We build, launch, and optimize. Then we scale what works across your entire operation until the systems run without you.',
    Visual: Waveform,
  },
];

export default function Protocol() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            endTrigger: cards[i + 1],
            end: 'top top',
            pin: true,
            pinSpacing: false,
          });

          gsap.to(card, {
            scale: 0.9,
            filter: 'blur(12px)',
            opacity: 0.4,
            ease: 'none',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: 0.5,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <p className="font-mono text-xs text-champagne/60 uppercase tracking-[0.2em] mb-4">
          The Process
        </p>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ivory">
          Three phases to{' '}
          <span className="font-display italic text-champagne">operational freedom.</span>
        </h2>
      </div>

      {/* Stacking Cards */}
      {steps.map(({ num, title, description, Visual }, i) => (
        <div
          key={num}
          className="protocol-card h-[100dvh] flex items-center will-change-transform"
          style={{ backgroundColor: i === 0 ? '#0D0D12' : i === 1 ? '#0F0F18' : '#11111E' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div>
                <span className="font-mono text-champagne/40 text-sm tracking-widest">
                  {num}
                </span>
                <h3 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ivory mt-4 mb-6">
                  {title}
                </h3>
                <p className="text-lg text-ivory/40 leading-relaxed max-w-md">
                  {description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex items-center justify-center">
                <Visual />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
