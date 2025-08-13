import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: '사용자 중심',
    description: '사용자의 정신 건강과 행복을 최우선으로 생각하며, 모든 서비스를 설계합니다.'
  },
  {
    icon: Lightbulb,
    title: '혁신',
    description: '최신 AI 기술과 창의적 아이디어로 정신 건강 관리의 새로운 패러다임을 제시합니다.'
  },
  {
    icon: Users,
    title: '접근성',
    description: '누구나 쉽게 이용할 수 있는 직관적이고 포용적인 서비스를 만들어갑니다.'
  },
  {
    icon: Target,
    title: '신뢰성',
    description: '과학적 근거와 전문성을 바탕으로 신뢰할 수 있는 솔루션을 제공합니다.'
  }
];

export function ValuesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            우리의 가치
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            로그마인드가 추구하는 핵심 가치들이
            모든 제품과 서비스의 기반이 됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <value.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}