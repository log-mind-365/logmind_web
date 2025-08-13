import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
	return (
		<section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
			<div className="container mx-auto text-center text-white">
				<Smartphone className="h-16 w-16 mx-auto mb-6" />
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					지금 시작해보세요
				</h2>
				<p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
					로그마인드의 AI 기반 감정 분석 서비스로 더 나은 정신 건강 관리를
					시작해보세요.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button size="lg" variant="secondary" className="text-lg px-8 py-3">
						무드로그 다운로드
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
					>
						기업 문의
					</Button>
				</div>
			</div>
		</section>
	);
}
