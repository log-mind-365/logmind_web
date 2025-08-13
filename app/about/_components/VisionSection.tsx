import { Lightbulb } from 'lucide-react';

export function VisionSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <Lightbulb className="h-24 w-24 mx-auto mb-4" />
                <p className="text-xl font-semibold">더 나은 내일을 위해</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              우리의 비전
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              2030년까지 전 세계 1억 명의 사용자가 로그마인드의 AI 기반
              정신 건강 솔루션을 통해 더 건강하고 행복한 삶을 살아갈 수 있도록
              지원하는 것이 우리의 목표입니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              정신 건강 관리가 일상의 자연스러운 부분이 되고,
              누구나 손쉽게 전문적인 도움을 받을 수 있는 세상을 만들어가겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}