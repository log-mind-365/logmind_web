import { ContactCTASection } from "@/app/about/_components/ContactCTASection";
import { HeroSection } from "@/app/about/_components/HeroSection";
import { MissionSection } from "@/app/about/_components/MissionSection";
import { TeamSection } from "@/app/about/_components/TeamSection";
import { ValuesSection } from "@/app/about/_components/ValuesSection";
import { VisionSection } from "@/app/about/_components/VisionSection";
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <VisionSection />
      <TeamSection />
      <ContactCTASection />
      <Footer />
    </div>
  );
}
