"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const techKeywords = [
  "Machine Learning",
  "Autonomous Agents",
  "Digital Twins",
  "Predictive Analytics",
  "Edge Computing",
  "IoT Sensors",
  "Process Optimization",
  "Decision Intelligence",
  "Neural Networks",
  "Computer Vision",
  "Natural Language Processing",
  "Robotics",
  "Blockchain",
  "Quantum Computing",
  "5G Networks",
  "Cybersecurity",
];

export default function InnovationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section className="section bg-brand-ink overflow-hidden">
      <div className="container-gastec" ref={ref}>
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">R&D</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white">
            Innovation & Technology{" "}
            <span className="text-brand-emerald">360°</span>
          </h2>
          <p className="mt-4 text-brand-grey max-w-2xl mx-auto">
            Group-wide research and development driving the next generation of
            energy and industrial technology.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={reducedMotion || inView ? { opacity: 1 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-ink to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-ink to-transparent z-10" />

          <div className={reducedMotion ? "" : "animate-marquee"}>
            <div className="flex gap-4 whitespace-nowrap">
              {[...techKeywords, ...techKeywords].map((keyword, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-6 py-3 bg-brand-black border border-brand-emerald/20 rounded-full text-sm text-brand-grey hover:text-brand-emerald hover:border-brand-emerald/50 transition-colors duration-200 shrink-0"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-brand-emerald mb-2">120+</div>
            <div className="text-sm text-brand-grey">Patents Filed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-emerald mb-2">45</div>
            <div className="text-sm text-brand-grey">Active R&D Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-emerald mb-2">8</div>
            <div className="text-sm text-brand-grey">Innovation Labs</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
