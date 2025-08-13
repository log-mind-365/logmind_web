import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function ContactCTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="container mx-auto text-center text-white">
        <Mail className="h-16 w-16 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          함께 만들어가요
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          로그마인드와 함께 정신 건강 기술의 미래를
          만들어갈 파트너를 찾고 있습니다.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
          문의하기
        </Button>
      </div>
    </section>
  );
}