import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              LogMind
            </Link>
            <p className="text-gray-600 mb-4 leading-relaxed">
              AI 기반 감정 분석 솔루션을 통해 더 나은 정신 건강과 
              개인의 성장을 지원하는 혁신적인 기술 회사입니다.
            </p>
            <div className="text-sm text-gray-500">
              <p>© 2024 LogMind. All rights reserved.</p>
            </div>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/moodlog" className="text-gray-600 hover:text-primary transition-colors">
                  무드로그
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                  AI 감정 분석
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                  개인화 상담
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">회사</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}