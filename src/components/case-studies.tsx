"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "./motion-wrapper";
import { Truck, Gem, Video, ShoppingBag, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    icon: Truck,
    company: "Antifat Fleet",
    category: "Operations",
    metric: "80+",
    metricLabel: "Vehicles Automated",
    description:
      "Built an automated inspection workflow for an 80+ vehicle fleet, replacing manual paper-based processes with a digital system that saves hours daily.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Gem,
    company: "AV Jewelry — Nora AI",
    category: "Retail",
    metric: "24/7",
    metricLabel: "AI Assistant",
    description:
      "Created Nora, an AI-powered shopping assistant for luxury jewelry that guides customers through collections and handles inquiries around the clock.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Video,
    company: "Shortcut Company",
    category: "Marketing",
    metric: "120K+",
    metricLabel: "SAR / Year Generated",
    description:
      "Designed and deployed a UGC content system that generates over 120,000 SAR per year in automated content creation and distribution.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: ShoppingBag,
    company: "عبايات الحرائر",
    category: "E-commerce",
    metric: "60K+",
    metricLabel: "Smart Coupons",
    description:
      "Built an intelligent coupon system that deployed over 60,000 smart coupons, driving customer engagement and repeat purchases.",
    gradient: "from-pink-500 to-rose-500",
  },
];

export function CaseStudies() {
  return (
    <section id="results" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-blue-400 mb-4 uppercase tracking-wider">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Real Projects,{" "}
              <span className="gradient-text">Real Impact</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Every system I build is designed to deliver measurable ROI. Here
              are some of the results.
            </p>
          </div>
        </FadeIn>

        {/* Case Study Cards */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <StaggerItem key={study.company}>
              <div className="group card-gradient-border p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${study.gradient} bg-opacity-20`}
                    style={{
                      background: `linear-gradient(135deg, ${
                        study.gradient.includes("blue")
                          ? "rgba(59,130,246,0.15)"
                          : study.gradient.includes("violet")
                          ? "rgba(139,92,246,0.15)"
                          : study.gradient.includes("amber")
                          ? "rgba(245,158,11,0.15)"
                          : "rgba(236,72,153,0.15)"
                      }, transparent)`,
                    }}
                  >
                    <study.icon
                      size={24}
                      className={
                        study.gradient.includes("blue")
                          ? "text-blue-400"
                          : study.gradient.includes("violet")
                          ? "text-violet-400"
                          : study.gradient.includes("amber")
                          ? "text-amber-400"
                          : "text-pink-400"
                      }
                    />
                  </div>
                  <span className="text-xs font-medium text-zinc-600 uppercase tracking-wider border border-white/[0.06] rounded-full px-3 py-1">
                    {study.category}
                  </span>
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <span
                    className={`text-4xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
                  >
                    {study.metric}
                  </span>
                  <span className="block text-sm text-zinc-500 mt-1">
                    {study.metricLabel}
                  </span>
                </div>

                {/* Company */}
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
                  {study.company}
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-600 group-hover:text-blue-400 transition-colors"
                  />
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm">
                  {study.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
