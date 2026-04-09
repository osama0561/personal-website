"use client";

import { useState } from "react";
import { FadeIn } from "./motion-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What industries do you work with?",
    answer:
      "I primarily work with marketing agencies, events services, media production companies, and e-commerce businesses in Saudi Arabia. However, my automation systems can be adapted to virtually any industry that relies on repetitive manual processes.",
  },
  {
    question: "How long does a typical automation project take?",
    answer:
      "Most projects are delivered within 2-6 weeks depending on complexity. Simple WhatsApp bots and workflow automations can be up in a week, while comprehensive CRM and multi-system integrations may take up to 6 weeks for full deployment and testing.",
  },
  {
    question: "What's included in the مجلس الأتمتة community?",
    answer:
      "Members get access to weekly live sessions, ready-to-use automation templates (n8n workflows, prompt libraries), a private community of builders and professionals, and direct access to me for questions and guidance. Everything is in Arabic.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Simply click the 'Book a Call' button anywhere on this page. You'll be taken to my calendar where you can pick a free 30-minute slot. During the call, we'll discuss your business needs and I'll outline how automation can help.",
  },
  {
    question: "Do you work with businesses outside Saudi Arabia?",
    answer:
      "Yes! While my primary focus is the Saudi market, I work with Arabic-speaking businesses across the GCC and MENA region. The consultancy is conducted remotely, so location is not a barrier.",
  },
  {
    question: "What is the pricing for your consultancy services?",
    answer:
      "I offer flexible retainer packages tailored to your business size and needs. The best way to get started is to book a free 30-minute consultation where we can discuss your requirements and I'll recommend the right plan for you.",
  },
];

function FAQItem({
  faq,
  isOpen,
  toggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-medium text-white group-hover:text-blue-300 transition-colors pr-4">
          {faq.question}
        </span>
        <span className="flex-shrink-0 text-zinc-500">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-blue-400 mb-4 uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </div>
        </FadeIn>

        {/* FAQ Items */}
        <FadeIn delay={0.2}>
          <div className="border-t border-white/[0.06]">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
