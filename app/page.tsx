import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Heart, Shield, Sparkles, Users, BarChart3 } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI 감정 분석',
      description: '최첨단 AI 기술로 감정 상태를 정확하게 분석하고 개인화된 인사이트를 제공합니다.'
    },
    {
      icon: Heart,
      title: '정신 건강 케어',
      description: '일상의 감정 변화를 추적하여 정신 건강 관리를 도와드립니다.'
    },
    {
      icon: Shield,
      title: '프라이버시 보호',
      description: '모든 데이터는 안전하게 암호화되어 개인정보를 철저히 보호합니다.'
    },
    {
      icon: Sparkles,
      title: '개인화 경험',
      description: '사용자의 패턴과 선호도를 학습하여 맞춤형 서비스를 제공합니다.'
    },
    {
      icon: Users,
      title: '전문가 상담',
      description: '필요시 전문 상담사와 연결하여 체계적인 관리를 받을 수 있습니다.'
    },
    {
      icon: BarChart3,
      title: '데이터 인사이트',
      description: '감정 패턴과 트렌드를 시각화하여 자기 이해를 높여드립니다.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            LogMind
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI 기반 감정 분석으로 시작하는<br />
            더 나은 정신 건강과 개인 성장
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              무료로 시작하기
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              더 알아보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 LogMind를 선택해야 할까요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              최첨단 AI 기술과 정신 건강 전문성을 결합하여 
              개인화된 감정 분석 솔루션을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MoodLog Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            무드로그 (MoodLog)
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            로그마인드의 첫 번째 서비스인 무드로그는 AI 기반 감정 일기 앱으로,
            일상의 감정을 기록하고 개인화된 AI 상담을 받을 수 있습니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">📝 감정 일기</h3>
              <p className="opacity-90">5단계 감정 상태로 하루를 기록하고 텍스트와 이미지로 표현하세요.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🤖 AI 상담</h3>
              <p className="opacity-90">3가지 AI 성격 중 선택하여 맞춤형 조언과 위로를 받아보세요.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">📊 감정 분석</h3>
              <p className="opacity-90">감정 패턴을 시각화하고 개인의 성장을 추적해보세요.</p>
            </div>
          </div>
          
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            무드로그 다운로드
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            지금 시작해보세요
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            로그마인드와 함께 더 나은 정신 건강과 
            개인 성장의 여정을 시작해보세요.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            무료 체험 시작하기
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
