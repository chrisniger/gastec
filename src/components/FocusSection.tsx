"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Droplets,
  Mountain,
  Ship,
  Flame,
  Leaf,
  Waves,
  Zap,
  CircleDot,
  Lightbulb,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const focusItems = [
  {
    number: "01",
    title: "AI & Agentic Intelligence Service",
    description: "Autonomous agents and decision intelligence for industrial operations.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Exploration and Production Oil Service",
    description: "Upstream oil E&P, reservoir studies, and field optimization.",
    icon: Droplets,
  },
  {
    number: "03",
    title: "Rare Earth Mining & Development Studies",
    description: "Critical minerals exploration, feasibility, and sustainable extraction.",
    icon: Mountain,
  },
  {
    number: "04",
    title: "Offshore and Marine",
    description: "Offshore platforms, subsea engineering, and marine support services.",
    icon: Ship,
  },
  {
    number: "05",
    title: "Natural Gas, LNG, CNG and LPG",
    description: "Integrated gas value chain from processing to distribution.",
    icon: Flame,
  },
  {
    number: "06",
    title: "Alternative Fuels (SAF & Chemical Trading)",
    description: "Sustainable aviation fuel and global chemical trading.",
    icon: Leaf,
  },
  {
    number: "07",
    title: "Water & Environment",
    description: "Water management, treatment, and environmental remediation.",
    icon: Waves,
  },
  {
    number: "08",
    title: "Power and Transmission",
    description: "Power generation and high-voltage transmission infrastructure.",
    icon: Zap,
  },
  {
    number: "09",
    title: "Energy Pipelines & Gas Infrastructure",
    description: "Pipeline engineering and gas infrastructure networks.",
    icon: CircleDot,
  },
  {
    number: "10",
    title: "Innovation & Technology 360 Degrees",
    description: "Group-wide R&D and technology commercialization.",
    icon: Lightbulb,
  },
];

export default function FocusSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section id="focus" className="section bg-brand-black">
      <div className="container-gastec" ref={ref}>
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white">
            Our Focus
          </h2>
          <p className="mt-4 text-brand-grey max-w-2xl mx-auto">
            Ten specialized business unit assets operating across  Energy, Natural resources ( rare earth minerals), Future Mobility &amp; Green Transportation , Power, Water &amp; Environment, AI and a few more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {focusItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
                animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
                transition={reducedMotion ? {} : { duration: 0.4, delay: index * 0.05 }}
                className="group relative p-6 bg-brand-ink border border-brand-emerald/10 rounded-xl hover:border-brand-emerald/50 hover:bg-brand-ink/80 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-brand-emerald/10 text-brand-emerald group-hover:bg-brand-emerald/20 transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="text-2xl font-bold text-brand-emerald/20 group-hover:text-brand-emerald/40 transition-colors">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-white mb-2 group-hover:text-brand-emerald transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-grey leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 text-sm text-brand-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
