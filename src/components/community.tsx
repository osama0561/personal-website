"use client";

import { FadeIn } from "./motion-wrapper";
import {
  Play,
  FileCode,
  Users,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Weekly Live Sessions",
    description: "Live workshops and Q&A sessions on AI and automation",
  },
  {
    icon: FileCode,
    title: "Ready-to-Use Templates",
    description: "n8n workflows, prompt libraries, and automation blueprints",
  },
  {
    icon: Users,
    title: "Private Community",
    description: "Network with builders, share wins, and get feedback",
  },
  {
    icon: MessageCircle,
    title: "Direct Access",
    description: "Ask questions and get answers directly from Osama",
  },
];

export function Community() {
  return (
    <section id="community" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Info */}
          <FadeIn direction="left">
            <div>
              <span className="inline-block text-sm font-medium text-blue-400 mb-4 uppercase tracking-wider">
                Skool Community
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                مجلس الأتمتة
              </h2>
              <p className="text-xl text-zinc-500 font-medium mb-6">
                Majlis Al-Atmata
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                The Arabic-speaking community for mastering AI and automation.
                Whether you&apos;re a business owner, marketer, or aspiring automation
                builder — this is where you learn, build, and grow alongside
                like-minded professionals.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-white">$68</span>
                <span className="text-zinc-500">/month</span>
                <span className="ml-2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Star size={12} />
                  Promotional Price
                </span>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 text-base"
              >
                Join the Community
                <ArrowRight size={18} />
              </a>
              <p className="text-xs text-zinc-600 mt-3">
                Hosted on Skool · Cancel anytime
              </p>
            </div>
          </FadeIn>

          {/* Right — Features */}
          <FadeIn direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="card-gradient-border p-6 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 flex items-center justify-center mb-4">
                    <feature.icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
