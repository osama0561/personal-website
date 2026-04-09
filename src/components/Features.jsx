import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Card 1: Diagnostic Shuffler ── */
const shufflerItems = [
  'Lead Intake → CRM Pipeline',
  'Invoice Generation → Delivery',
  'Client Onboarding → Fulfillment',
];

function DiagnosticShuffler() {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-40 w-full">
      {order.map((idx, pos) => (
        <div
          key={idx}
          className="absolute left-0 right-0 mx-auto w-[90%] px-5 py-4 rounded-2xl border border-ivory/[0.08] bg-obsidian/80 backdrop-blur-sm"
          style={{
            top: `${pos * 16}px`,
            zIndex: 3 - pos,
            opacity: 1 - pos * 0.2,
            transform: `scale(${1 - pos * 0.04})`,
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <p className="font-mono text-xs text-teal tracking-wider">
            {shufflerItems[idx]}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Card 2: Telemetry Typewriter ── */
const typewriterMessages = [
  '> Analyzing client acquisition data...',
  '> Routing lead to sales pipeline...',
  '> Generating proposal document...',
  '> Scheduling follow-up sequence...',
  '> Deploying automated workflow...',
  '> System optimization complete.',
];

function TelemetryTypewriter() {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (currentLine >= typewriterMessages.length) {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
        setDisplayText('');
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const msg = typewriterMessages[currentLine];
    if (currentChar < msg.length) {
      const timeout = setTimeout(() => {
        setDisplayText(msg.slice(0, currentChar + 1));
        setCurrentChar((c) => c + 1);
      }, 30 + Math.random() * 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, msg]);
        setDisplayText('');
        setCurrentChar(0);
        setCurrentLine((l) => l + 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine]);

  return (
    <div className="font-mono text-xs leading-relaxed h-40 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
        <span className="text-teal/70 text-[10px] uppercase tracking-widest">
          Live Feed
        </span>
      </div>
      {lines.slice(-4).map((line, i) => (
        <p key={i} className="text-ivory/30 mb-1">
          {line}
        </p>
      ))}
      {displayText && (
        <p className="text-ivory/70 mb-1">
          {displayText}
          <span className="cursor-blink text-teal ml-0.5">▊</span>
        </p>
      )}
    </div>
  );
}

/* ── Card 3: Cursor Protocol Scheduler ── */
const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function CursorScheduler() {
  const [activeDay, setActiveDay] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: -20, y: -20, visible: false });
  const [saved, setSaved] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const sequence = async () => {
      // Reset
      setActiveDay(null);
      setSaved(false);

      // Cursor enters
      setCursorPos({ x: 10, y: 30, visible: true });
      await sleep(600);

      // Move to Wednesday (index 3)
      setCursorPos({ x: 120, y: 50, visible: true });
      await sleep(500);

      // Click Wednesday
      setActiveDay(3);
      await sleep(400);

      // Move to Friday (index 5)
      setCursorPos({ x: 200, y: 50, visible: true });
      await sleep(500);

      // Click Friday
      setActiveDay(5);
      await sleep(400);

      // Move to Save button
      setCursorPos({ x: 100, y: 110, visible: true });
      await sleep(500);

      // Click Save
      setSaved(true);
      await sleep(800);

      // Cursor exits
      setCursorPos({ x: 260, y: 120, visible: false });
      await sleep(2000);
    };

    sequence();
    const interval = setInterval(sequence, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={gridRef} className="relative h-40 overflow-hidden">
      {/* Cursor */}
      <svg
        className="absolute z-20 pointer-events-none"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          opacity: cursorPos.visible ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
      >
        <path
          d="M1 1L1 15L5 11L9 19L12 17.5L8 10L13 9L1 1Z"
          fill="#C9A84C"
          stroke="#0D0D12"
          strokeWidth="1"
        />
      </svg>

      {/* Week Grid */}
      <div className="flex gap-2 mb-4">
        {days.map((d, i) => (
          <div
            key={i}
            className={`w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-mono font-medium transition-all duration-300 ${
              activeDay !== null && (i === 3 || i === 5)
                ? 'bg-teal text-obsidian scale-95'
                : 'bg-ivory/[0.04] text-ivory/30 border border-ivory/[0.06]'
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button
        className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-xl transition-all duration-300 ${
          saved
            ? 'bg-teal/20 text-teal border border-teal/30'
            : 'bg-ivory/[0.03] text-ivory/30 border border-ivory/[0.06]'
        }`}
      >
        {saved ? '✓ Saved' : 'Save Schedule'}
      </button>
    </div>
  );
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/* ── Features Section ── */
const features = [
  {
    title: 'Operations Automation',
    description:
      'We replace manual processes with intelligent systems that run your business 24/7. No spreadsheets. No bottlenecks.',
    Component: DiagnosticShuffler,
  },
  {
    title: 'Intelligent Systems',
    description:
      'AI trained on your business data that makes real decisions — routing tasks, generating documents, optimizing workflows.',
    Component: TelemetryTypewriter,
  },
  {
    title: 'Revenue Infrastructure',
    description:
      'Every system connects directly to revenue. Automated pipelines, client onboarding, fulfillment — infrastructure that compounds.',
    Component: CursorScheduler,
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
    <section id="work" ref={sectionRef} className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <p className="font-mono text-xs text-teal/60 uppercase tracking-[0.2em] mb-4">
          What we build
        </p>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ivory mb-20">
          Automation for{' '}
          <span className="font-display italic text-teal">
            real business
          </span>{' '}
          use cases.
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ title, description, Component }, i) => (
            <div key={i} className="feature-card card-surface p-8">
              {/* Interactive Artifact */}
              <div className="mb-8">
                <Component />
              </div>

              {/* Text */}
              <h3 className="font-sans font-semibold text-lg text-ivory tracking-tight mb-3">
                {title}
              </h3>
              <p className="text-sm text-ivory/40 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
