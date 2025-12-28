// import Image from "next/image";
import Hero from "@/components/current/Hero"; 
import ServicesSection from "@/components/current/ServiceSection"; 
import TimingsAppointment from "@/components/current/TimingsAppointment"; 
import WhyChooseUsTestimonials from "@/components/current/WhyChooseUsTestimonials";
import ContactMap from "@/components/current/ContactMap";
// import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
// import ServicesSection from "@/components/ServicesSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import FAQSection from "@/components/FAQSection";
// import AppointmentSection from "@/components/AppointmentSection";

export default function Home() {
  return (
     <div>  
      <Hero/>
      <ServicesSection/>
      <TimingsAppointment/>
      <WhyChooseUsTestimonials/>
      <ContactMap/>
     {/* <HeroSection />
     <AboutSection />
     <ServicesSection />
     <TestimonialsSection />
     <FAQSection />
     <AppointmentSection/> */}
     


     </div>
  );
}
