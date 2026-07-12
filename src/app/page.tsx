import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import FocusSection from "@/components/FocusSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import InnovationSection from "@/components/InnovationSection";
import InsightsSection from "@/components/InsightsSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <GlobalPresenceSection />
      <FocusSection />
      <CapabilitiesSection />
      <SustainabilitySection />
      <InnovationSection />
      <InsightsSection />
      <ContactCTA />
    </>
  );
}
