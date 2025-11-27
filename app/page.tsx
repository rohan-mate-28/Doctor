import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import AppointmentSection from "@/components/AppointmentSection";

export default function Home() {
  return (
     <div>  
     <HeroSection />
     <AboutSection />
     <ServicesSection />
     <TestimonialsSection />
     <FAQSection />
     <AppointmentSection/>
     
     </div>
  );
}
