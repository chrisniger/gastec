"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Counter({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    const duration = reducedMotion ? 1 : 2000;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    let startTime: number | null = null;
    requestAnimationFrame(step);
  }, [inView, end, reducedMotion]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-brand-emerald">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-brand-grey uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

const stats = [
  { end: 25, suffix: "+", label: "Years of Excellence" },
  { end: 10, suffix: "", label: "Business Units" },
  { end: 30, suffix: "+", label: "Countries" },
  { end: 500, suffix: "+", label: "Projects Delivered" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="section bg-brand-ink">
      <div className="container-gastec" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
            transition={reducedMotion ? {} : { duration: 0.6 }}
          >
            <p className="eyebrow mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white leading-tight">
              A Group Built on{" "}
              <span className="text-brand-emerald"> Integrated Business Growth</span>
            </h2>
            <div className="mt-6 space-y-4 text-brand-grey leading-relaxed">
              <p>
                Gastec Group of Companies is a diversified industrial group
                operating at the intersection of energy, natural resources, and
                advanced technology. Our integrated model brings together ten
                specialized business units under one strategic umbrella.
              </p>
              <p>
                From upstream oil exploration and rare earth mining to AI-driven
                decision intelligence and sustainable aviation fuels, we deliver
                end-to-end solutions that span the entire energy and resources
                value chain. Our global footprint reaches across 30+ countries,
                serving governments, major operators, and industrial partners.
              </p>
              <p>
                With over two decades of operational excellence, Gastec combines
                deep domain expertise with cutting-edge innovation to address the
                world&apos;s most complex energy challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
            transition={reducedMotion ? {} : { duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat) => (
              <Counter
                key={stat.label}
                end={stat.end}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
