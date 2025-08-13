import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function ReviewsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            사용자 리뷰
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-lg font-semibold">4.8/5.0</span>
          </div>
          <p className="text-lg text-gray-600">
            수많은 사용자들이 무드로그로 감정 관리를 시작했습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;AI 상담 기능이 정말 놀라워요. 마치 진짜 상담사와 대화하는 것 같습니다.&rdquo;
              </p>
              <div className="font-medium text-gray-900">김○○</div>
              <div className="text-sm text-gray-500">직장인, 27세</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;감정 패턴을 시각적으로 볼 수 있어서 나 자신을 더 잘 이해하게 되었어요.&rdquo;
              </p>
              <div className="font-medium text-gray-900">이○○</div>
              <div className="text-sm text-gray-500">대학생, 22세</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;매일 사용하기 쉽고 UI가 예뻐서 지속적으로 기록할 수 있어요.&rdquo;
              </p>
              <div className="font-medium text-gray-900">박○○</div>
              <div className="text-sm text-gray-500">프리랜서, 31세</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}