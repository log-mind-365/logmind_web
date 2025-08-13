import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: '이메일',
    info: 'contact@logmind.kr',
    description: '일반 문의 및 제안사항'
  },
  {
    icon: Phone,
    title: '전화',
    info: '+82-2-1234-5678',
    description: '평일 09:00 - 18:00'
  },
  {
    icon: MapPin,
    title: '주소',
    info: '서울특별시 강남구 테헤란로 123',
    description: 'LogMind 본사'
  },
  {
    icon: Clock,
    title: '운영시간',
    info: '평일 09:00 - 18:00',
    description: '주말 및 공휴일 휴무'
  }
];

export function ContactMethodsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            연락 방법
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 방법으로 로그마인드와 
            소통할 수 있습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <method.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-indigo-600 font-medium mb-2">
                  {method.info}
                </p>
                <p className="text-gray-600 text-sm">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}