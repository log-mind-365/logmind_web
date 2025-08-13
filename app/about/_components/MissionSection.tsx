import { Target } from 'lucide-react';

export function MissionSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              우리의 미션
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              로그마인드는 AI 기반 감정 분석 기술을 통해 개인의 정신 건강을
              체계적으로 관리하고, 더 나은 삶의 질을 추구할 수 있도록 돕는
              혁신적인 솔루션을 제공합니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              우리는 기술이 인간의 감정과 정신 건강에 긍정적인 영향을 미칠 수 있다고
              믿으며, 모든 사람이 자신의 감정을 더 잘 이해하고 관리할 수 있는
              세상을 만들어가고 있습니다.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-white text-center">
              <Target className="h-24 w-24 mx-auto mb-4" />
              <p className="text-xl font-semibold">정신 건강의 혁신</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}