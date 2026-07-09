"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 10,
        y: (e.clientY / innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [reducedMotion]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background_video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-black z-10" />

      <div className="relative z-20 container-gastec w-full">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={
            reducedMotion
              ? {}
              : {
                  transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                  transition: "transform 0.3s ease-out",
                }
          }
        >
          <p className="eyebrow mb-4">Gastec Group of Companies</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl">
            Energy. Resources.{" "}
            <span className="text-brand-emerald">Intelligence.</span> Unified.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-grey max-w-2xl leading-relaxed">
            A diversified industrial group powering the future through innovation in
            energy, natural resources, and artificial intelligence — delivering
            sustainable solutions across the global value chain.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#focus"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-black bg-brand-emerald rounded-full hover:bg-brand-emeraldDark transition-colors duration-200"
          >
            Explore Our Focus
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-white border border-brand-white/20 rounded-full hover:border-brand-emerald hover:text-brand-emerald transition-colors duration-200"
          >
            About the Group
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={reducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={reducedMotion ? {} : { repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={28} className="text-brand-emerald/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
