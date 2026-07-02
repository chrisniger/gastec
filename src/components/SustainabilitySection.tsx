"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Droplets, ShieldCheck, Recycle } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const pillars = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "Minimizing our environmental footprint through cleaner operations, carbon reduction targets, and investment in renewable energy technologies across all business units.",
  },
  {
    icon: Droplets,
    title: "Responsible Resource Use",
    description:
      "Implementing circular economy principles and water stewardship programs to ensure resources are used efficiently and responsibly throughout their lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Governance",
    description:
      "Maintaining the highest standards of operational safety, ethical governance, and regulatory compliance in every market where we operate.",
  },
  {
    icon: Recycle,
    title: "Community Impact",
    description:
      "Creating lasting value for host communities through local employment, skills development, infrastructure investment, and transparent stakeholder engagement.",
  },
];

export default function SustainabilitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section id="sustainability" className="section bg-brand-black">
      <div className="container-gastec" ref={ref}>
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Our Commitment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white">
            Sustainability
          </h2>
          <p className="mt-4 text-brand-grey max-w-2xl mx-auto">
            ESG principles embedded into every decision, every operation, every
            partnership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
                animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
                transition={reducedMotion ? {} : { duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-brand-ink border border-brand-emerald/10 rounded-xl hover:border-brand-emerald/30 transition-colors duration-300"
              >
                <div className="p-3 rounded-lg bg-brand-emerald/10 text-brand-emerald inline-block mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-brand-grey leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
