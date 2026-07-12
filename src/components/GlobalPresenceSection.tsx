"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* ------------------------------------------------------------------ */
/*  Continent outline SVGs – simplified single-color line art          */
/* ------------------------------------------------------------------ */

function AfricaOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M100 10 C90 10, 78 14, 72 20 C66 26, 58 28, 52 34 C46 40, 40 48, 36 56 C32 64, 28 72, 26 80 C24 88, 22 96, 24 104 C26 112, 30 120, 28 128 C26 136, 20 140, 18 148 C16 156, 18 164, 22 172 C26 180, 32 186, 38 190 C44 194, 48 200, 52 208 C56 216, 58 222, 62 226 C66 230, 74 232, 80 230 C86 228, 92 224, 96 218 C100 212, 104 206, 110 200 C116 194, 122 188, 128 182 C134 176, 138 170, 142 164 C146 158, 150 150, 154 142 C158 134, 160 126, 162 118 C164 110, 166 102, 166 94 C166 86, 164 78, 162 70 C160 62, 156 54, 150 48 C144 42, 138 38, 132 34 C126 30, 120 26, 114 22 C108 18, 104 14, 100 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AsiaOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M40 40 C48 34, 56 30, 66 28 C76 26, 86 24, 96 22 C106 20, 116 18, 126 16 C136 14, 146 14, 156 16 C166 18, 176 22, 186 26 C196 30, 206 36, 214 44 C222 52, 228 62, 232 72 C236 82, 238 92, 236 102 C234 112, 230 122, 224 130 C218 138, 210 144, 202 148 C194 152, 186 156, 176 160 C166 164, 156 166, 146 168 C136 170, 126 172, 116 174 C106 176, 96 176, 86 174 C76 172, 66 168, 58 162 C50 156, 44 148, 40 140 C36 132, 32 122, 30 112 C28 102, 28 92, 30 82 C32 72, 34 62, 36 52 C38 46, 38 42, 40 40Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SouthAmericaOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M90 10 C82 10, 74 14, 68 20 C62 26, 58 34, 54 42 C50 50, 48 58, 46 66 C44 74, 42 82, 40 90 C38 98, 36 106, 34 114 C32 122, 28 130, 26 138 C24 146, 22 154, 24 162 C26 170, 30 178, 34 186 C38 194, 42 200, 48 206 C54 212, 58 218, 64 222 C70 226, 76 230, 82 232 C88 234, 94 234, 98 232 C102 230, 106 226, 110 222 C114 218, 118 212, 120 206 C122 200, 124 192, 126 184 C128 176, 130 168, 132 160 C134 152, 136 144, 138 136 C140 128, 142 120, 144 112 C146 104, 148 96, 148 88 C148 80, 146 72, 144 64 C142 56, 138 48, 134 42 C130 36, 124 30, 118 26 C112 22, 106 18, 100 14 C96 12, 92 10, 90 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CaribbeanOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cuba */}
      <path
        d="M20 50 C28 46, 40 44, 52 44 C64 44, 76 46, 88 48 C96 50, 100 52, 104 52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Hispaniola */}
      <path
        d="M110 54 C118 52, 128 50, 140 50 C148 50, 154 52, 160 54 C164 56, 166 58, 166 62 C166 66, 162 70, 156 72 C150 74, 142 74, 134 74 C126 74, 118 72, 114 68 C110 64, 110 58, 110 54Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Puerto Rico */}
      <path
        d="M174 56 C180 54, 188 54, 194 56 C198 58, 200 60, 200 64 C200 68, 196 70, 190 70 C184 70, 178 68, 176 64 C174 60, 174 58, 174 56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Jamaica */}
      <path
        d="M100 78 C106 76, 114 76, 120 78 C124 80, 126 82, 124 86 C122 88, 116 90, 110 90 C104 90, 100 88, 98 84 C96 80, 98 78, 100 78Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Lesser Antilles dots */}
      <circle cx="178" cy="80" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="184" cy="86" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="188" cy="92" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="192" cy="98" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Card data                                                          */
/* ------------------------------------------------------------------ */

const continents = [
  {
    name: "Africa",
    description:
      "Supporting upstream, downstream, natural gas, mining, infrastructure, environmental and digital transformation projects across the African continent.",
    Map: AfricaOutline,
  },
  {
    name: "Asia",
    description:
      "Providing engineering consulting, industrial AI, LNG, pipeline infrastructure and advanced technology solutions across Asian energy markets.",
    Map: AsiaOutline,
  },
  {
    name: "South America",
    description:
      "Partnering on exploration, mining, energy infrastructure, environmental sustainability and industrial innovation throughout South America.",
    Map: SouthAmericaOutline,
  },
  {
    name: "Caribbean",
    description:
      "Delivering energy consulting, gas infrastructure, environmental services and engineering support across Caribbean nations.",
    Map: CaribbeanOutline,
  },
];

/* ------------------------------------------------------------------ */
/*  Continent Card                                                     */
/* ------------------------------------------------------------------ */

function ContinentCard({
  continent,
  index,
  reducedMotion,
  inView,
}: {
  continent: (typeof continents)[number];
  index: number;
  reducedMotion: boolean;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const { Map } = continent;

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 32 }}
      animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
      transition={
        reducedMotion ? {} : { duration: 0.5, delay: index * 0.12 }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative p-8 rounded-3xl border border-brand-emerald/25 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        boxShadow: hovered
          ? "0 0 40px rgba(0,200,83,0.15), 0 8px 32px rgba(0,0,0,0.3)"
          : "0 2px 12px rgba(0,0,0,0.2)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        borderColor: hovered
          ? "rgba(0,200,83,0.45)"
          : "rgba(0,200,83,0.25)",
      }}
    >
      {/* Map outline */}
      <div className="flex justify-center mb-6">
        <Map
          className={`w-28 h-28 text-brand-emerald transition-transform duration-300 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-brand-white text-center mb-3">
        {continent.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-brand-grey leading-relaxed text-center">
        {continent.description}
      </p>

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(0,200,83,0.06), transparent 70%)",
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function GlobalPresenceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section id="global-presence" className="section bg-brand-black">
      <div className="container-gastec" ref={ref}>
        {/* Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Where We Operate</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white">
            Delivering Energy Solutions{" "}
            <span className="text-brand-emerald">Across Continents</span>
          </h2>
          <p className="mt-6 text-brand-grey max-w-3xl mx-auto leading-relaxed">
            Gastec Group of Companies delivers engineering, energy,
            environmental, and AI-driven solutions across multiple continents
            through strategic partnerships, regional expertise, and
            international project delivery. Our multidisciplinary teams support
            clients throughout the energy value chain, providing innovative
            solutions tailored to local industries and global standards.
          </p>
        </motion.div>

        {/* Continent cards — 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {continents.map((continent, index) => (
            <ContinentCard
              key={continent.name}
              continent={continent}
              index={index}
              reducedMotion={reducedMotion}
              inView={inView}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-brand-grey max-w-2xl mx-auto mb-8 leading-relaxed">
            Building trusted partnerships and delivering innovative engineering
            solutions across diverse regions and industries worldwide.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-brand-black bg-brand-emerald rounded-full hover:bg-brand-emeraldDark transition-colors duration-200 group"
          >
            Contact Our Team
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
