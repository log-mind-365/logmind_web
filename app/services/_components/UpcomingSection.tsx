import { BarChart3, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getColorClasses } from "@/utils/get-color-classes";

const upcomingServices = [
	{
		icon: Brain,
		title: "MindCoach",
		description:
			"전문 상담사와 AI가 협력하여 제공하는 개인 맞춤형 정신 건강 코칭 서비스",
		features: [
			"전문가 매칭",
			"AI 어시스턴트",
			"목표 설정 및 추적",
			"진행 상황 분석",
		],
		status: "개발 예정",
		color: "blue",
	},
	{
		icon: Users,
		title: "TeamWell",
		description: "기업과 조직을 위한 집단 정신 건강 관리 및 팀 웰빙 솔루션",
		features: [
			"팀 감정 분석",
			"조직 문화 진단",
			"스트레스 관리",
			"생산성 향상",
		],
		status: "기획 중",
		color: "green",
	},
	{
		icon: BarChart3,
		title: "InsightPro",
		description: "의료진과 상담사를 위한 고급 감정 분석 및 진단 보조 도구",
		features: ["심화 분석", "진단 보조", "치료 계획", "환자 모니터링"],
		status: "연구 중",
		color: "orange",
	},
];

export function UpcomingSection() {
	return (
		<section className="py-20 px-4 bg-gray-50">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						개발 예정 서비스
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						로그마인드가 준비하고 있는 다양한 혁신 서비스들을 소개합니다.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{upcomingServices.map((service, index) => (
						<Card
							key={index}
							className="overflow-hidden hover:shadow-lg transition-shadow"
						>
							<div
								className={`h-2 bg-gradient-to-r ${getColorClasses(service.color)}`}
							></div>
							<CardContent className="p-6">
								<div className="text-center mb-6">
									<div
										className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${getColorClasses(service.color)} mb-4`}
									>
										<service.icon className="h-8 w-8 text-white" />
									</div>
									<div className="flex items-center justify-center gap-3 mb-3">
										<h3 className="text-xl font-bold text-gray-900">
											{service.title}
										</h3>
									</div>
									<span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
										{service.status}
									</span>
								</div>
								<p className="text-gray-600 mb-6 leading-relaxed">
									{service.description}
								</p>
								<div className="space-y-2 mb-6">
									{service.features.map((feature, idx) => (
										<div key={idx} className="flex items-center gap-2">
											<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
											<span className="text-sm text-gray-700">{feature}</span>
										</div>
									))}
								</div>
								<Button variant="outline" className="w-full">
									출시 알림 받기
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
