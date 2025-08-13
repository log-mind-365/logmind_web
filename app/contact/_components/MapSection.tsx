import { MapPin } from 'lucide-react';

export function MapSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            오시는 길
          </h2>
          <p className="text-lg text-gray-600">
            로그마인드 본사 위치입니다.
          </p>
        </div>
        
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="h-16 w-16 mx-auto mb-4" />
            <p className="text-lg font-medium">지도가 표시될 영역</p>
            <p className="text-sm">실제 구현 시 Google Maps 또는 네이버 지도 API 연동</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 font-medium mb-2">
            서울특별시 강남구 테헤란로 123, LogMind Building
          </p>
          <p className="text-gray-600">
            지하철 2호선 강남역 3번 출구에서 도보 5분
          </p>
        </div>
      </div>
    </section>
  );
}