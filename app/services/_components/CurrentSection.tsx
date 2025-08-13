import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getColorClasses } from "@/utils/get-color-classes";

const currentServices = [
	{
		icon: Heart,
		title: "무드로그 (MoodLog)",
		description:
			"AI 기반 감정 일기 앱으로 일상의 감정을 기록하고 개인화된 상담을 받을 수 있습니다.",
		features: [
			"5단계 감정 기록",
			"AI 개성 상담",
			"감정 통계 분석",
			"다국어 지원",
		],
		status: "서비스 중",
		color: "blue",
	},
];

export function CurrentSection() {
	return (
		<section className="py-20 px-4">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						현재 제공 중인 서비스
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						지금 바로 이용할 수 있는 로그마인드의 서비스입니다.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
					{currentServices.map((service, index) => (
						<Card
							key={index}
							className="overflow-hidden hover:shadow-xl transition-shadow"
						>
							<div
								className={`h-2 bg-gradient-to-r ${getColorClasses(service.color)}`}
							></div>
							<CardContent className="p-8">
								<div className="flex items-start gap-6">
									<div
										className={`p-4 rounded-lg bg-gradient-to-r ${getColorClasses(service.color)}`}
									>
										<service.icon className="h-8 w-8 text-white" />
									</div>
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-3">
											<h3 className="text-2xl font-bold text-gray-900">
												{service.title}
											</h3>
											<span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
												{service.status}
											</span>
										</div>
										<p className="text-gray-600 mb-6 text-lg leading-relaxed">
											{service.description}
										</p>
										<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
											{service.features.map((feature, idx) => (
												<div key={idx} className="flex items-center gap-2">
													<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
													<span className="text-sm text-gray-700">
														{feature}
													</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
