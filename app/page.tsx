import { ContactSection } from "@/components/contact";
import { FAQSection } from "@/components/faq";
import { FooterSection } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { FeaturesSection } from "@/components/services";
import { TeamSection } from "@/components/teams";
import { TestimonialSection } from "@/components/testomonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}