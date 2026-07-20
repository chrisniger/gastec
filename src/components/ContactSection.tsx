"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Building2 } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const offices = [
  {
    region: "Corporate Headquarters",
    title: "North & South America Regional Corporate Office",
    address: ["1500 East Capitol,", "Northeast Ste, DC, USA"],
    email: null,
  },
  {
    region: "Asia",
    title: "China (Regional Corporate Office)",
    address: [
      "No.287 Zone D, 2nd Floor E District,",
      "32 Binhai Avenue, Longhua District,",
      "Haikou, Hainan, China",
    ],
    email: "asia@gastecgroup.com",
  },
  {
    region: "West Africa",
    title: "Regional Corporate Office",
    address: [
      "17 Kwameh Nkrumah Crescent Asokoro,",
      "FCT Abuja, Nigeria",
    ],
    email: "africa@gastecgroup.com",
  },
  {
    region: "Mozambique",
    title: "East Africa Regional Corporate Office",
    address: [
      "Rua de Chinyamapere No.1351, 2nd Andar,",
      "Malhangalene, Maputo,",
      "Republic of Mozambique",
    ],
    email: "africa@gastecgroup.com",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section className="section bg-brand-black">
      <div className="container-gastec" ref={ref}>
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
          transition={reducedMotion ? {} : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white">
            Our Global <span className="text-brand-emerald">Offices</span>
          </h1>
          <p className="mt-6 text-brand-grey max-w-3xl mx-auto leading-relaxed">
            Connect with Gastec Group across our regional corporate offices.
            Our teams are ready to support your energy, resources, and AI
            initiatives worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.region}
              initial={reducedMotion ? {} : { opacity: 0, y: 32 }}
              animate={reducedMotion || inView ? { opacity: 1, y: 0 } : {}}
              transition={
                reducedMotion ? {} : { duration: 0.5, delay: index * 0.1 }
              }
              className="group relative p-8 rounded-3xl border border-brand-emerald/25 bg-brand-ink/50 hover:border-brand-emerald/50 hover:bg-brand-ink/80 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-brand-emerald/10 text-brand-emerald shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-emerald uppercase tracking-wider">
                    {office.region}
                  </p>
                  <h2 className="text-xl font-bold text-brand-white mt-1">
                    {office.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-4 pl-[4.5rem]">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-brand-grey mt-0.5 shrink-0"
                  />
                  <address className="not-italic text-brand-grey leading-relaxed">
                    {office.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>

                {office.email && (
                  <div className="flex items-start gap-3">
                    <Mail
                      size={18}
                      className="text-brand-emerald mt-0.5 shrink-0"
                    />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-brand-white hover:text-brand-emerald transition-colors duration-200"
                    >
                      {office.email}
                    </a>
                  </div>
                )}
              </div>

              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-brand-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
