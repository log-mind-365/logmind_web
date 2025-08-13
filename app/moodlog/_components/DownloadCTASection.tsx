import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function DownloadCTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          지금 무드로그를 시작하세요
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          무료로 다운로드하고 AI와 함께하는 
          새로운 감정 관리 경험을 시작해보세요.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Download className="mr-2 h-5 w-5" />
            App Store
          </Button>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Download className="mr-2 h-5 w-5" />
            Google Play
          </Button>
        </div>
        
        <p className="text-sm opacity-75">
          iOS 14.0+ 및 Android 7.0+ 지원 | 무료 다운로드
        </p>
      </div>
    </section>
  );
}