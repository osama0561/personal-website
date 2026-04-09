"use client";

import { FadeIn } from "./motion-wrapper";
import { Bot, Workflow, Zap, User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Photo / Visual */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Photo placeholder */}
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/[0.06]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <User size={64} className="text-zinc-600 mx-auto mb-4" />
                    <p className="text-zinc-600 text-sm">Photo placeholder</p>
                  </div>
                </div>
                <div className="absolute inset-0 dot-pattern" />
              </div>

              {/* Floating accent cards */}
              <div className="absolute -bottom-4 -right-4 lg:right-8 bg-black/80 backdrop-blur-xl border border-white/[0.08] rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">AI Specialist</div>
                  <div className="text-xs text-zinc-500">Automation Expert</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Bio */}
          <FadeIn direction="right">
            <div>
              <span className="inline-block text-sm font-medium text-blue-400 mb-4 uppercase tracking-wider">
                Who I Am
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Osama Al-Kalthami{" "}
                <span className="block text-xl sm:text-2xl text-zinc-500 font-normal mt-2">
                  أسامة الكلثمي
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                I&apos;m an AI and automation consultant based in Saudi Arabia, helping
                businesses transform their operations through intelligent automation.
                From WhatsApp AI bots to complex workflow systems, I build solutions
                that eliminate manual work and drive measurable results.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                I&apos;ve helped companies automate fleet inspections, build AI shopping
                assistants, create content generation systems, and deploy smart
                coupon platforms — all designed to save time and increase revenue.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Bot, label: "AI & Chatbots" },
                  { icon: Workflow, label: "n8n Automation" },
                  { icon: Zap, label: "CRM & Lead Gen" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                  >
                    <Icon size={18} className="text-blue-400" />
                    <span className="text-sm text-zinc-300 font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
