import { DownloadCTASection } from "@/app/moodlog/_components/DownloadCTASection";
import { FeaturesSection } from "@/app/moodlog/_components/FeaturesSection";
import { HeroSection } from "@/app/moodlog/_components/HeroSection";
import { ReviewsSection } from "@/app/moodlog/_components/ReviewsSection";
import { ScreenshotsSection } from "@/app/moodlog/_components/ScreenshotsSection";
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function MoodLogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <ReviewsSection />
      <DownloadCTASection />
      <Footer />
    </div>
  );
}