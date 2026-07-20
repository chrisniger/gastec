import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Gastec Group of Companies",
  description:
    "Get in touch with Gastec Group. Discover our global offices and how our teams can support your energy, resources, and AI projects.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
