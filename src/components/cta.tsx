"use client";

import { FadeIn } from "./motion-wrapper";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-500/15 via-violet-500/15 to-blue-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="card-gradient-border px-8 py-16 sm:px-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to{" "}
              <span className="gradient-text">Automate Your Business?</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 30-minute consultation and discover how AI automation
              can transform your operations, save time, and drive revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://cal.com/osama-h5hzqs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-10 py-4 text-lg"
              >
                Book Your Free Call
                <ArrowRight size={20} />
              </a>
            </div>
            <p className="text-xs text-zinc-600 mt-4">
              No commitment required · 30 min · Free
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
