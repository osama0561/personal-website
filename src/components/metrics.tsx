"use client";

import { FadeIn } from "./motion-wrapper";

const metrics = [
  { value: "80+", label: "Vehicles Automated", suffix: "" },
  { value: "120K+", label: "SAR / Year Saved", suffix: "" },
  { value: "60K+", label: "Smart Coupons Deployed", suffix: "" },
  { value: "4+", label: "Completed Projects", suffix: "" },
];

export function Metrics() {
  return (
    <section className="relative py-16 border-y border-white/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/[0.03] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
