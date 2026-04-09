const navigation = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#community", label: "Community" },
  { href: "#faq", label: "FAQ" },
];

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const social = [
  {
    href: "https://youtube.com/@kalthami0",
    label: "YouTube",
    icon: YoutubeIcon,
  },
  {
    href: "https://linkedin.com/in/osama-alkalthami",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center font-bold text-sm">
              O
            </div>
            <span className="font-semibold text-white text-lg tracking-tight">
              Osama Al-Kalthami
            </span>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-300 transition-colors"
                aria-label={item.label}
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Osama Al-Kalthami. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
