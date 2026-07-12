"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Handle hash scrolling after route changes
    const hash = window.location.hash;
    if (hash) {
      // Delay to ensure DOM is fully rendered after navigation
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          // Use scrollTo with smooth behavior for reliable cross-page scrolling
          const headerOffset = 80; // Account for fixed header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
