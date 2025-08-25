'use client'

import { Check, Play, Zap, Globe, Shield, Clock } from 'lucide-react'
import VideoEmbed from './components/VideoEmbed'

export default function Home() {
  const handleSignUp = () => {
    // 구글폼 링크로 이동
    const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.google.com/your-form-link'
    window.open(formUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Blog API Service</span>
            </div>
            <button
              onClick={handleSignUp}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              신청하기
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            블로그 API로
            <span className="text-blue-600"> 자동화</span>하세요
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            n8n, Make.com과 100% 호환되는 티스토리, 네이버 블로그, 블로그스팟 API 서비스로 
            블로그 관리를 자동화하고 효율성을 극대화하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSignUp}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              지금 시작하기
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Play className="h-5 w-5 mr-2" />
              데모 보기
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              지원하는 플랫폼
            </h2>
            <p className="text-xl text-gray-600">
              주요 블로그 플랫폼을 모두 지원합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">티스토리</h3>
              <p className="text-gray-600">티스토리 블로그 포스팅 자동화</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">네이버 블로그</h3>
              <p className="text-gray-600">네이버 블로그 콘텐츠 관리</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">블로그스팟</h3>
              <p className="text-gray-600">Blogger 플랫폼 연동</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              100% 호환되는 자동화 플랫폼
            </h2>
            <p className="text-xl text-gray-600">
              n8n과 Make.com에서 바로 사용할 수 있습니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">n8n & Make.com 연동</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">REST API 엔드포인트 제공</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">JSON 형식 데이터 처리</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">OAuth 2.0 인증 지원</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">실시간 웹훅 알림</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">API 엔드포인트 예시</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                <div>POST /api/tistory/post</div>
                <div className="text-gray-400 mt-2">{'{'}</div>
                <div className="ml-4">"title": "포스트 제목",</div>
                <div className="ml-4">"content": "포스트 내용",</div>
                <div className="ml-4">"category": "카테고리"</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              합리적인 가격
            </h2>
            <p className="text-xl text-gray-600">
              월 1만원으로 모든 기능을 이용하세요
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">월 구독</h3>
                <div className="text-4xl font-bold mb-4">
                  ₩10,000
                  <span className="text-lg font-normal">/월</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>티스토리 블로그 API</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>네이버 블로그 API</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>블로그스팟 API</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>n8n & Make.com 연동</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>무제한 API 호출</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>24/7 기술 지원</span>
                  </li>
                </ul>
                
                <button
                  onClick={handleSignUp}
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  지금 신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              데모 영상
            </h2>
            <p className="text-xl text-gray-600">
              실제 사용 방법을 확인해보세요
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <VideoEmbed videoId={process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            블로그 자동화로 시간을 절약하고 콘텐츠 관리 효율성을 극대화하세요.
            월 1만원으로 모든 기능을 이용할 수 있습니다.
          </p>
          <button
            onClick={handleSignUp}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            무료로 신청하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">Blog API Service</span>
              </div>
              <p className="text-gray-400">
                블로그 자동화 API 서비스로 효율적인 콘텐츠 관리를 제공합니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">지원 플랫폼</h4>
              <ul className="space-y-2 text-gray-400">
                <li>티스토리</li>
                <li>네이버 블로그</li>
                <li>블로그스팟</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">자동화 도구</h4>
              <ul className="space-y-2 text-gray-400">
                <li>n8n</li>
                <li>Make.com</li>
                <li>Zapier</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400">
                <li>이메일: support@blogapi.com</li>
                <li>문의: 24/7 지원</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Blog API Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
