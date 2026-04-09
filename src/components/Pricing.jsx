import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: 'Community',
    nameAr: 'مجلس الأتمتة',
    price: '$68',
    period: '/mo',
    description: 'Learn automation alongside Arabic-speaking builders and professionals.',
    features: [
      'Weekly live sessions & workshops',
      'Ready-to-use automation templates',
      'Private community of builders',
      'Direct access to Osama',
    ],
    cta: 'Join the Community',
    href: '#',
    highlighted: false,
  },
  {
    name: 'Consultancy',
    nameAr: null,
    price: 'Custom',
    period: '',
    description: 'A dedicated engagement to automate your operations end-to-end.',
    features: [
      'Full operations audit & diagnosis',
      'Custom system architecture',
      'n8n, CRM, and AI integration',
      'Ongoing optimization & scaling',
    ],
    cta: 'Book a Call',
    href: 'https://cal.com/osama-h5hzqs/60',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    nameAr: null,
    price: 'Custom',
    period: '',
    description: 'Full operations overhaul for organizations ready to go all-in on automation.',
    features: [
      'Everything in Consultancy',
      'Multi-department automation',
      'Team training & onboarding',
      'Priority support & SLA',
    ],
    cta: 'Book a Call',
    href: 'https://cal.com/osama-h5hzqs/60',
    highlighted: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-mono text-xs text-teal/60 uppercase tracking-[0.2em] mb-4">
            Work with me
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ivory">
            Choose your{' '}
            <span className="font-display italic text-teal">path.</span>
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`pricing-card rounded-[2rem] p-8 lg:p-10 transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-teal/[0.06] border-2 border-teal/20 ring-1 ring-teal/10 scale-[1.02]'
                  : 'card-surface'
              }`}
            >
              {/* Tier Name */}
              <div className="mb-6">
                <h3 className="font-sans font-semibold text-xl text-ivory tracking-tight">
                  {tier.name}
                </h3>
                {tier.nameAr && (
                  <p className="text-sm text-teal/60 mt-1 font-medium">
                    {tier.nameAr}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-sans font-bold text-4xl text-ivory">
                  {tier.price}
                </span>
                <span className="text-ivory/30 text-sm">{tier.period}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-ivory/40 leading-relaxed mb-8">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="text-teal mt-0.5 text-xs">◆</span>
                    <span className="text-ivory/50">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={tier.href}
                target={tier.href.startsWith('http') ? '_blank' : undefined}
                rel={tier.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`btn-magnetic w-full inline-flex items-center justify-center gap-2 font-semibold text-sm tracking-wide uppercase px-6 py-3.5 rounded-full ${
                  tier.highlighted
                    ? 'bg-teal text-obsidian'
                    : 'bg-ivory/[0.06] text-ivory border border-ivory/[0.08]'
                }`}
              >
                <span className={`btn-bg rounded-full ${tier.highlighted ? 'bg-ivory/20' : 'bg-ivory/[0.04]'}`} />
                <span className="relative z-10 flex items-center gap-2">
                  {tier.cta}
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
