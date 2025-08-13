import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            LogMind의 첫 번째 서비스
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
          MoodLog
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          AI 기반 감정 일기로 시작하는<br />
          나만의 정신 건강 관리
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            <Download className="mr-2 h-5 w-5" />
            무료 다운로드
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            체험하기
          </Button>
        </div>
      </div>
    </section>
  );
}