import { Brain, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
	{
		icon: Brain,
		title: "자연어 처리 (NLP)",
		description:
			"사용자의 텍스트를 분석하여 감정과 의도를 정확하게 파악합니다.",
	},
	{
		icon: Shield,
		title: "프라이버시 보호",
		description:
			"최신 암호화 기술로 사용자의 민감한 정보를 안전하게 보호합니다.",
	},
	{
		icon: Target,
		title: "개인화 알고리즘",
		description: "각 사용자의 고유한 특성에 맞춘 개인화된 서비스를 제공합니다.",
	},
];

export function TechnologySection() {
	return (
		<section className="py-20 px-4">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						핵심 기술
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						로그마인드 서비스의 기반이 되는 최첨단 AI 기술들을 소개합니다.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{technologies.map((tech, index) => (
						<Card
							key={index}
							className="text-center hover:shadow-lg transition-shadow"
						>
							<CardContent className="p-6">
								<tech.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									{tech.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{tech.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
