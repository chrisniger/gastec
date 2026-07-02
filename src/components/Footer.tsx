import Link from "next/link";
import { Globe, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

const businessUnits = [
  "AI & Agentic Intelligence",
  "Exploration & Production",
  "Rare Earth Mining",
  "Offshore & Marine",
  "Natural Gas & LNG",
  "Alternative Fuels",
  "Water & Environment",
  "Power & Transmission",
  "Energy Pipelines",
  "Innovation & Technology",
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Focus", href: "#focus" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-emerald/10">
      <div className="container-gastec py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight text-brand-white">
                GASTEC
              </span>
            </Link>
            <p className="text-sm text-brand-grey leading-relaxed mb-6">
              An integrated energy, resources, and AI conglomerate delivering
              world-class solutions across the global energy value chain.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-brand-grey hover:text-brand-emerald transition-colors"
                aria-label="LinkedIn"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="text-brand-grey hover:text-brand-emerald transition-colors"
                aria-label="Twitter"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-white uppercase tracking-wider mb-4">
              Business Units
            </h3>
            <ul className="space-y-2">
              {businessUnits.map((unit) => (
                <li key={unit}>
                  <span className="text-sm text-brand-grey hover:text-brand-white transition-colors cursor-default">
                    {unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-grey hover:text-brand-emerald transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-emerald mt-0.5 shrink-0" />
                <span className="text-sm text-brand-grey">info@gastecgroup.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-emerald mt-0.5 shrink-0" />
                <span className="text-sm text-brand-grey">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-emerald mt-0.5 shrink-0" />
                <span className="text-sm text-brand-grey">
                  Energy Tower, Business District
                  <br />
                  Houston, TX 77001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-emerald/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-greyDark">
            &copy; {new Date().getFullYear()} Gastec Group of Companies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-brand-greyDark hover:text-brand-grey transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-brand-greyDark hover:text-brand-grey transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-brand-greyDark hover:text-brand-grey transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
