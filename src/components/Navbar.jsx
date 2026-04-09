import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#community', label: 'Community' },
  { href: '#book', label: 'Book' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 px-6 py-3 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/60 backdrop-blur-xl border border-ivory/[0.06] rounded-full shadow-lg shadow-black/20'
          : 'bg-transparent border border-transparent rounded-full'
      }`}
      style={{ width: 'min(90vw, 720px)' }}
    >
      {/* Logo */}
      <a href="#" className="font-semibold text-ivory tracking-tight text-sm whitespace-nowrap">
        Osama<span className="text-teal">.</span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="link-lift text-xs font-medium tracking-wide uppercase text-ivory/50 hover:text-ivory"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="https://cal.com/osama-h5hzqs/60"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-magnetic hidden md:inline-flex items-center gap-2 bg-teal text-obsidian text-xs font-semibold tracking-wide uppercase px-5 py-2 rounded-full"
      >
        <span className="btn-bg bg-ivory/20 rounded-full" />
        <span className="relative z-10">Book a Call</span>
      </a>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-ivory p-1"
        aria-label="Menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileOpen ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-obsidian/90 backdrop-blur-xl border border-ivory/[0.06] rounded-2xl p-6 flex flex-col gap-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-ivory/60 hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://cal.com/osama-h5hzqs/60"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic bg-teal text-obsidian text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
