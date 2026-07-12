"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
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
  ChevronRight,
  CheckCircle2,
  Target,
  Cpu,
  Building2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { FocusPageData, FocusIconName } from "@/data/focus-pages";
import ContactCTA from "@/components/ContactCTA";

const iconMap: Record<FocusIconName, LucideIcon> = {
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
};

/* ---------- helper ---------- */

function AnimateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
      animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
      transition={reducedMotion ? {} : { duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- main template ---------- */

export default function FocusPageTemplate({ data }: { data: FocusPageData }) {
  const Icon = iconMap[data.iconName];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-black to-brand-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,83,0.08),transparent_60%)]" />

        <div className="relative container-gastec">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-brand-grey mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-brand-greyDark" />
            <Link href="/#focus" className="hover:text-brand-white transition-colors">
              Our Focus
            </Link>
            <ChevronRight size={14} className="text-brand-greyDark" />
            <span className="text-brand-emerald">{data.shortTitle}</span>
          </nav>

          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-brand-emerald/10 text-brand-emerald">
                <Icon size={28} />
              </div>
              <p className="eyebrow">{data.eyebrow}</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-white leading-tight max-w-4xl">
              {data.title}
            </h1>
            <p className="mt-6 text-lg text-brand-grey max-w-3xl leading-relaxed">
              {data.heroDescription}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className="section bg-brand-black">
        <div className="container-gastec">
          <div className="grid lg:grid-cols-5 gap-12">
            <AnimateIn className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <Target size={18} className="text-brand-emerald" />
                <p className="eyebrow mb-0">Overview</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-white">
                Delivering Excellence in{" "}
                <span className="text-brand-emerald">{data.shortTitle}</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.1} className="lg:col-span-3">
              <p className="text-brand-grey leading-relaxed text-base">
                {data.overview}
              </p>
              <ul className="mt-6 space-y-3">
                {data.overviewBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-grey">
                    <CheckCircle2 size={16} className="text-brand-emerald mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== KEY SERVICES ===== */}
      <section className="section bg-brand-ink">
        <div className="container-gastec">
          <AnimateIn className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Cpu size={18} className="text-brand-emerald" />
              <p className="eyebrow mb-0">What We Deliver</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
              Key Services
            </h2>
            <p className="mt-4 text-brand-grey max-w-2xl mx-auto">
              Comprehensive solutions tailored to the unique demands of the{" "}
              {data.shortTitle.toLowerCase()} sector.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.keyServices.map((service, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="h-full p-6 bg-brand-black border border-brand-emerald/10 rounded-2xl hover:border-brand-emerald/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center text-sm font-bold mb-4 group-hover:bg-brand-emerald/20 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-white mb-2 group-hover:text-brand-emerald transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-grey leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="section bg-brand-black">
        <div className="container-gastec">
          <AnimateIn className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Cpu size={18} className="text-brand-emerald" />
              <p className="eyebrow mb-0">Technology</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
              Technologies &amp; Innovation
            </h2>
            <p className="mt-4 text-brand-grey max-w-2xl mx-auto">
              Leveraging advanced technologies to deliver measurable performance improvements.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.technologies.map((tech, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="h-full p-6 bg-brand-ink border border-brand-emerald/10 rounded-2xl hover:border-brand-emerald/30 transition-all duration-300 group">
                  <h3 className="text-lg font-semibold text-brand-white mb-2 group-hover:text-brand-emerald transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-brand-grey leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES SERVED ===== */}
      <section className="section bg-brand-ink">
        <div className="container-gastec">
          <AnimateIn className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Building2 size={18} className="text-brand-emerald" />
              <p className="eyebrow mb-0">Sectors</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
              Industries Served
            </h2>
          </AnimateIn>

          <AnimateIn>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {data.industries.map((industry, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 text-sm text-brand-white bg-brand-ink border border-brand-emerald/20 rounded-full hover:border-brand-emerald/50 hover:text-brand-emerald transition-all duration-200"
                >
                  {industry}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="section bg-brand-black">
        <div className="container-gastec">
          <AnimateIn className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ShieldCheck size={18} className="text-brand-emerald" />
              <p className="eyebrow mb-0">Impact</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
              Proven Benefits
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.benefits.map((benefit, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="h-full p-6 bg-brand-ink border border-brand-emerald/10 rounded-2xl hover:border-brand-emerald/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-brand-emerald mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-brand-grey leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE GASTEC ===== */}
      <section className="section bg-brand-ink">
        <div className="container-gastec">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-brand-emerald" />
                <p className="eyebrow mb-0">Why Gastec</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                Why Choose{" "}
                <span className="text-brand-emerald">Gastec Group</span>
              </h2>
              <p className="mt-4 text-brand-grey">
                A trusted partner delivering integrated solutions with proven expertise and measurable results.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <ul className="space-y-4">
                {data.whyChoose.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-emerald mt-0.5 shrink-0" />
                    <span className="text-brand-grey text-sm leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      <section className="section bg-brand-black">
        <div className="container-gastec">
          <AnimateIn className="text-center mb-12">
            <p className="eyebrow mb-3">Explore More</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
              Related Services
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {data.relatedServices.map((related, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <Link
                  href={`/focus/${related.slug}`}
                  className="block h-full p-6 bg-brand-ink border border-brand-emerald/10 rounded-2xl hover:border-brand-emerald/40 hover:shadow-glow transition-all duration-300 group"
                >
                  <h3 className="text-base font-semibold text-brand-white mb-2 group-hover:text-brand-emerald transition-colors">
                    {related.title}
                  </h3>
                  <span className="text-sm text-brand-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <ContactCTA />
    </>
  );
}
