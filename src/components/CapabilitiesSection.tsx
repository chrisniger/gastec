"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Brain, Flame, Mountain, CircleDot } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const capabilities = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Deploying autonomous agents and machine learning models that transform industrial decision-making. Our AI division delivers predictive maintenance, process optimization, and real-time operational intelligence across energy assets.",
    image: "/images/capabilities/artificial-intelligence.jpg",
  },
  {
    icon: Flame,
    title: "Gas & LNG Value Chain",
    description:
      "End-to-end expertise in natural gas processing, LNG liquefaction, and distribution infrastructure. We engineer solutions from wellhead to end-user, optimizing every node in the gas supply chain.",
    image: "/images/capabilities/gas-lng-value-chain.jpg",
  },
  {
    icon: Mountain,
    title: "Mining & Critical Minerals",
    description:
      "Exploration, feasibility, and sustainable extraction of rare earth elements and critical minerals essential for the global energy transition. Our mining division balances resource development with environmental stewardship.",
    image: "/images/capabilities/mining-critical-minerals.jpg",
  },
  {
    icon: CircleDot,
    title: "Pipeline & Gas Infrastructure",
    description:
      "Designing, building, and maintaining high-pressure pipeline networks and gas infrastructure that form the backbone of regional and international energy systems. Safety and reliability are engineered into every mile.",
    image: "/images/capabilities/pipeline-gas-infrastructure.jpg",
  },
];

export default function CapabilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section id="capabilities" className="section bg-brand-ink">
      <div className="container-gastec" ref={ref}>
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Depth & Expertise</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white">
            Capabilities
          </h2>
          <p className="mt-4 text-brand-grey max-w-2xl mx-auto">
            Deep domain expertise across our core capabilities, delivering integrated
            solutions at scale.
          </p>
        </motion.div>

        <div className="space-y-12">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={cap.title}
                initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
                animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
                transition={reducedMotion ? {} : { duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  !isEven ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-brand-emerald/10 text-brand-emerald">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-white">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-brand-grey leading-relaxed text-lg">
                    {cap.description}
                  </p>
                </div>
                <div
                  className={`relative h-64 rounded-xl overflow-hidden border border-brand-emerald/10 ${
                    !isEven ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
