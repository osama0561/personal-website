"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "./motion-wrapper";
import { MessageSquare, GitBranch, Users, Brain } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp AI Bots",
    description:
      "Intelligent conversational AI on WhatsApp that handles customer inquiries, booking, and sales 24/7 — no human needed.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: GitBranch,
    title: "Workflow Automation",
    description:
      "End-to-end n8n automation that connects your tools, eliminates manual processes, and runs your operations on autopilot.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Users,
    title: "CRM & Lead Systems",
    description:
      "Automated lead capture, scoring, and nurturing that fills your pipeline with qualified prospects while you sleep.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Brain,
    title: "Custom AI Assistants",
    description:
      "Purpose-built AI solutions designed specifically for your industry — trained on your data, speaking your language.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-blue-400 mb-4 uppercase tracking-wider">
              What I Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              AI Solutions That{" "}
              <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              From concept to deployment, I build automation systems that
              transform how your business operates.
            </p>
          </div>
        </FadeIn>

        {/* Service Cards */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group card-gradient-border p-8 h-full">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}
                >
                  <service.icon size={24} className={service.iconColor} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
