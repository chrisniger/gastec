"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-emeraldDark via-brand-emerald to-brand-emeraldDark opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1),transparent_60%)]" />

      <div className="relative container-gastec text-center" ref={ref}>
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
            Let&apos;s Build the Future of Energy
          </h2>
          <p className="mt-6 text-lg text-brand-black/70 max-w-2xl mx-auto">
            Partner with Gastec Group to unlock integrated solutions across
            energy, resources, and artificial intelligence.
          </p>
          <div className="mt-10">
            <Link
              href="mailto:info@gastecgroup.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-brand-emerald bg-brand-black rounded-full hover:bg-brand-ink transition-colors duration-200 group"
            >
              Start a Conversation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
