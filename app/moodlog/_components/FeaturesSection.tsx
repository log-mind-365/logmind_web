import { Card, CardContent } from '@/components/ui/card';
import { Heart, Smartphone, Brain, Users, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: '5단계 감정 기록',
    description: '매우 좋음부터 매우 나쁨까지 세밀한 감정 상태를 기록하고 추적할 수 있습니다.'
  },
  {
    icon: Brain,
    title: 'AI 개성 상담',
    description: '합리적 분석가, 균형적 조언자, 공감적 치유자 중 선택하여 맞춤형 조언을 받으세요.'
  },
  {
    icon: BarChart3,
    title: '감정 통계 분석',
    description: '감정 캘린더와 차트로 월별 기분 변화와 패턴을 시각적으로 확인하세요.'
  },
  {
    icon: Shield,
    title: '안전한 데이터 관리',
    description: 'Google/Kakao 소셜 로그인과 로컬 데이터베이스로 안전하게 관리됩니다.'
  },
  {
    icon: Users,
    title: '다국어 지원',
    description: '한국어, 영어, 일본어 등 9개 언어를 지원하여 글로벌 사용자가 이용 가능합니다.'
  },
  {
    icon: Smartphone,
    title: '직관적인 UI/UX',
    description: '부드러운 애니메이션과 접근성을 고려한 사용자 친화적 인터페이스를 제공합니다.'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            무드로그의 주요 기능
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            감정 기록부터 AI 상담까지, 정신 건강 관리에 필요한 
            모든 기능을 하나의 앱에서 경험하세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}