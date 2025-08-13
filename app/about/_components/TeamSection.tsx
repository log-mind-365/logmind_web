import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const team = [
  {
    name: 'CEO',
    role: '대표이사',
    description: 'AI와 정신 건강 분야의 융합을 통해 혁신적인 솔루션을 개발하고 있습니다.'
  },
  {
    name: 'CTO',
    role: '기술이사',
    description: '최첨단 AI 기술을 활용하여 사용자 경험을 극대화하는 기술을 구현합니다.'
  },
  {
    name: 'CPO',
    role: '제품이사',
    description: '사용자 중심의 제품 설계와 전략을 통해 가치 있는 서비스를 만들어갑니다.'
  }
];

export function TeamSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            우리 팀
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 전문성을 가진 팀원들이 함께
            혁신적인 솔루션을 만들어가고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}