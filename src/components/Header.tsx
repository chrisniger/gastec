"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const aboutSubLinks = [
  { label: "Who We Are", href: "#about" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "Leadership", href: "#leadership" },
  { label: "Global Presence", href: "#global-presence" },
];

const focusSubLinks = [
  { label: "AI & Agentic Intelligence", href: "/focus/ai-agentic-intelligence" },
  { label: "Oil & Gas Exploration", href: "/focus/oil-gas-exploration-production" },
  { label: "Mining & Critical Minerals", href: "/focus/mining-critical-minerals" },
  { label: "Offshore & Marine", href: "/focus/offshore-marine" },
  { label: "Natural Gas", href: "/focus/natural-gas" },
  { label: "Alternative Fuels", href: "/focus/alternative-fuels" },
  { label: "Water & Environment", href: "/focus/water-environment" },
  { label: "Power & Transmission", href: "/focus/power-transmission" },
  { label: "Energy Pipelines", href: "/focus/pipelines-gas-infrastructure" },
  { label: "Integrated Urban–Rural System", href: "/focus/integrated-urban-rural-multimodal" },
];

const navLinks = [
  { label: "About", href: "#about", hasDropdown: true, subLinks: aboutSubLinks },
  { label: "Focus", href: "#focus", hasDropdown: true, subLinks: focusSubLinks },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [focusOpen, setFocusOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileFocusOpen, setMobileFocusOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
      if (focusRef.current && !focusRef.current.contains(e.target as Node)) {
        setFocusOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-emerald/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-gastec flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Gastec Group of Companies"
            width={120}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            if (link.hasDropdown && link.subLinks) {
              const isOpen = link.label === "About" ? aboutOpen : focusOpen;
              const setIsOpen = link.label === "About" ? setAboutOpen : setFocusOpen;
              const ref = link.label === "About" ? aboutRef : focusRef;

              return (
                <div key={link.href} className="relative" ref={ref}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-1 text-sm text-brand-grey hover:text-brand-white transition-colors duration-200"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-3 w-64 bg-brand-ink border border-brand-emerald/20 rounded-xl shadow-lg overflow-hidden"
                      >
                        <div className="py-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-5 py-2.5 text-sm text-brand-grey hover:text-brand-white hover:bg-brand-emerald/10 transition-colors duration-150"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-grey hover:text-brand-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-brand-black bg-brand-emerald rounded-full hover:bg-brand-emeraldDark transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="md:hidden text-brand-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brand-ink border-t border-brand-emerald/10"
          >
            <nav className="container-gastec py-6 flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                if (link.hasDropdown && link.subLinks) {
                  const isOpen = link.label === "About" ? mobileAboutOpen : mobileFocusOpen;
                  const setIsOpen = link.label === "About" ? setMobileAboutOpen : setMobileFocusOpen;

                  return (
                    <div key={link.href}>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-between w-full text-base text-brand-grey hover:text-brand-white transition-colors py-2"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                onClick={() => { setMobileOpen(false); setIsOpen(false); }}
                                className="block text-sm text-brand-grey hover:text-brand-white transition-colors py-2"
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base text-brand-grey hover:text-brand-white transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-brand-black bg-brand-emerald rounded-full hover:bg-brand-emeraldDark transition-colors mt-2"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
