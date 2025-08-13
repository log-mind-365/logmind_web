import { ContactFormSection } from "@/app/contact/_components/ContactFormSection";
import { ContactMethodsSection } from "@/app/contact/_components/ContactMethodsSection";
import { HeroSection } from "@/app/contact/_components/HeroSection";
import { InquiryTypesSection } from "@/app/contact/_components/InquiryTypesSection";
import { MapSection } from "@/app/contact/_components/MapSection";
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <Header />
      <HeroSection />
      <ContactMethodsSection />
      <InquiryTypesSection />
      <ContactFormSection />
      <MapSection />
      <Footer />
    </div>
  );
}