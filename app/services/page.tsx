import { CTASection } from "@/app/services/_components/CTASection";
import { CurrentSection } from "@/app/services/_components/CurrentSection";
import { HeroSection } from "@/app/services/_components/HeroSection";
import { UpcomingSection } from "@/app/services/_components/UpcomingSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ServicesPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			<Header />
			<HeroSection />
			<CurrentSection />
			<UpcomingSection />
			<CTASection />
			<Footer />
		</div>
	);
}
