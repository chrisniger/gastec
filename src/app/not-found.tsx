"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function NotFound() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-black to-brand-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,83,0.06),transparent_60%)]" />

      <div className="relative container-gastec text-center px-4">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={reducedMotion ? {} : { duration: 0.5 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-brand-emerald/10 text-brand-emerald">
              <Search size={48} />
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-8xl md:text-9xl font-bold text-brand-emerald/20 mb-4">
            404
          </h1>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-brand-white mb-4">
            Page Not Found
          </h2>
          <p className="text-brand-grey max-w-lg mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. 
            Please check the URL or navigate back to our homepage.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-brand-black bg-brand-emerald rounded-full hover:bg-brand-emeraldDark transition-colors duration-200"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              href="/#focus"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-white border border-brand-white/20 rounded-full hover:border-brand-emerald hover:text-brand-emerald transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
