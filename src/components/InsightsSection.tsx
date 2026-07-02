"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const insights = [
  {
    date: "June 2026",
    title: "Gastec Launches AI-Powered Predictive Maintenance Platform",
    excerpt:
      "Our new autonomous monitoring system reduces unplanned downtime by 40% across upstream oil and gas assets.",
    category: "AI & Technology",
  },
  {
    date: "May 2026",
    title: "Expanding Rare Earth Operations in Southeast Asia",
    excerpt:
      "Strategic partnership to develop sustainable extraction facilities for critical minerals essential to the energy transition.",
    category: "Mining",
  },
  {
    date: "April 2026",
    title: "Sustainability Report 2025: Achieving Carbon Reduction Targets",
    excerpt:
      "Gastec Group reports 22% reduction in Scope 1 & 2 emissions, on track to meet 2030 net-zero commitments.",
    category: "ESG",
  },
];

export default function InsightsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section id="insights" className="section bg-brand-black">
      <div className="container-gastec" ref={ref}>
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="eyebrow mb-4">Latest Updates</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white">
              Insights
            </h2>
          </div>
          <Link
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm text-brand-emerald hover:text-brand-emeraldDark transition-colors group"
          >
            View all insights
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
              animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
              transition={reducedMotion ? {} : { duration: 0.5, delay: index * 0.1 }}
              className="group bg-brand-ink border border-brand-emerald/10 rounded-xl overflow-hidden hover:border-brand-emerald/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-emerald/10 to-brand-black" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-brand-emerald font-medium uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <span className="text-xs text-brand-greyDark">•</span>
                  <div className="flex items-center gap-1 text-xs text-brand-greyDark">
                    <Calendar size={12} />
                    {insight.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-brand-white group-hover:text-brand-emerald transition-colors mb-2">
                  {insight.title}
                </h3>
                <p className="text-sm text-brand-grey leading-relaxed">
                  {insight.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
