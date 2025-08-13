import { Smartphone } from 'lucide-react';

const screenshots = [
  { title: '홈 화면', description: '직관적인 메인 대시보드' },
  { title: '감정 기록', description: '간편한 감정 일기 작성' },
  { title: 'AI 상담', description: '개인화된 AI 조언' },
  { title: '통계 분석', description: '감정 패턴 시각화' }
];

export function ScreenshotsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            앱 미리보기
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            깔끔하고 직관적인 인터페이스로 
            누구나 쉽게 사용할 수 있습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl h-96 mb-4 flex items-center justify-center">
                <div className="text-white">
                  <Smartphone className="h-24 w-24 mx-auto mb-4" />
                  <p className="font-medium">{screenshot.title}</p>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{screenshot.title}</h3>
              <p className="text-gray-600 text-sm">{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}