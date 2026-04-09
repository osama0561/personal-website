const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#community', label: 'Community' },
  { href: '#book', label: 'Book a Call' },
];

const socialLinks = [
  { href: 'https://youtube.com/@kalthami0', label: 'YouTube' },
  { href: 'https://linkedin.com/in/osama-alkalthami', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#08080C] rounded-t-[4rem] mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <p className="font-sans font-semibold text-xl text-ivory tracking-tight mb-3">
              Osama Al-Kalthami
            </p>
            <p className="text-sm text-ivory/30 leading-relaxed">
              AI & Automation Consultant.<br />
              Building intelligent systems for real businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] text-ivory/20 uppercase tracking-[0.2em] mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="link-lift text-sm text-ivory/40 hover:text-ivory w-fit"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://cal.com/osama-h5hzqs/60"
                target="_blank"
                rel="noopener noreferrer"
                className="link-lift text-sm text-teal/60 hover:text-teal w-fit"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Social + Status */}
          <div>
            <p className="font-mono text-[10px] text-ivory/20 uppercase tracking-[0.2em] mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-lift text-sm text-ivory/40 hover:text-ivory w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* System Operational */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span className="font-mono text-[10px] text-ivory/25 uppercase tracking-widest">
                System Operational
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-ivory/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-ivory/15 tracking-wider">
            &copy; {new Date().getFullYear()} Osama Al-Kalthami. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-ivory/15 tracking-wider">
            osama-alkalthami.com
          </p>
        </div>
      </div>
    </footer>
  );
}
