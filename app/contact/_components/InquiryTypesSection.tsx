import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle, Building, Users } from 'lucide-react';

const inquiryTypes = [
  {
    icon: MessageCircle,
    title: '제품 문의',
    description: '무드로그 및 기타 서비스에 대한 문의',
    email: 'product@logmind.kr'
  },
  {
    icon: Building,
    title: '기업 협력',
    description: '비즈니스 파트너십 및 기업 솔루션 문의',
    email: 'business@logmind.kr'
  },
  {
    icon: Users,
    title: '채용 문의',
    description: '로그마인드와 함께할 인재 채용',
    email: 'careers@logmind.kr'
  }
];

export function InquiryTypesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            문의 유형별 연락처
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            문의 내용에 따라 적절한 담당자와 
            더 빠르게 연결됩니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inquiryTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <type.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {type.description}
                </p>
                <div className="flex items-center gap-2 text-indigo-600">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-medium">{type.email}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}