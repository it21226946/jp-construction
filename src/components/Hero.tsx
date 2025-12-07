import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Award, Wrench, Star, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/image 1.png',
      title: '安全で効率的な解体工事',
      subtitle: 'Safe & Efficient Building Demolition',
      description: '最新の重機と熟練した技術で、確実な解体工事を提供します',
      highlight: '15年の実績'
    },
    {
      image: '/images/image 2.jpg',
      title: '専門的な建物解体',
      subtitle: 'Professional Building Dismantling',
      description: '住宅から商業施設まで、あらゆる建物の解体に対応',
      highlight: '認定業者'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Image Slider with Enhanced Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              role="presentation"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse bg-amber-500/20" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-xl animate-pulse delay-1000 bg-orange-500/20" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full blur-lg animate-bounce delay-500 bg-yellow-500/20" aria-hidden="true"></div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        onKeyDown={(e) => handleKeyDown(e, prevSlide)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 backdrop-blur-md text-white p-4 rounded-full hover:scale-110 transition-all z-20 border-2 border-amber-500/50 bg-slate-800/80 hover:bg-amber-500/20 shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        aria-label="前のスライド / Previous slide"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        onClick={nextSlide}
        onKeyDown={(e) => handleKeyDown(e, nextSlide)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 backdrop-blur-md text-white p-4 rounded-full hover:scale-110 transition-all z-20 border-2 border-amber-500/50 bg-slate-800/80 hover:bg-amber-500/20 shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        aria-label="次のスライド / Next slide"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Enhanced Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Highlight Badge */}
            <div className="inline-flex items-center backdrop-blur-sm border-2 border-amber-500/50 bg-slate-800/80 rounded-full px-6 py-2 mb-8 shadow-2xl">
              <Star className="h-5 w-5 mr-2 text-amber-400" aria-hidden="true" />
              <span className="text-white font-semibold">{slides[currentSlide].highlight}</span>
            </div>

            {/* Main Title with 3D Effect */}
            <h1
              id="hero-heading"
              className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white"
            >
              <span className="drop-shadow-2xl">
                {slides[currentSlide].title}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl mb-8 font-semibold tracking-wide text-amber-400">
              {slides[currentSlide].subtitle}
            </h2>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light text-gray-200">
              {slides[currentSlide].description}
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                onKeyDown={(e) => handleKeyDown(e, () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))}
                className="group relative text-white px-10 py-4 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl transform hover:scale-105 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-2 border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                aria-label="無料見積り依頼フォームへ移動 / Go to free quote request form"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 mr-3" aria-hidden="true" />
                  無料見積り依頼 / Get Free Quote
                </span>
              </button>

              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                onKeyDown={(e) => handleKeyDown(e, () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }))}
                className="group relative backdrop-blur-md text-white px-10 py-4 rounded-2xl text-xl font-bold transition-all duration-300 border-2 border-amber-500/50 bg-slate-800/80 hover:bg-amber-500/20 shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                aria-label="サービス詳細を見る / View service details"
              >
                <span className="relative z-10">サービス詳細 / View Services</span>
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group backdrop-blur-md rounded-3xl p-8 border-2 border-amber-500/30 bg-slate-800/60 hover:scale-105 transition-all duration-300 shadow-2xl hover:bg-amber-500/10">
                <div className="p-4 rounded-2xl mb-6 mx-auto w-fit shadow-2xl bg-gradient-to-br from-blue-600 to-blue-700">
                  <Shield className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">安全第一</h3>
                <p className="font-medium text-gray-300">Safety First Approach</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 rounded-full bg-amber-400" aria-hidden="true"></div>
                </div>
              </div>

              <div className="group backdrop-blur-md rounded-3xl p-8 border-2 border-amber-500/30 bg-slate-800/60 hover:scale-105 transition-all duration-300 shadow-2xl hover:bg-amber-500/10">
                <div className="p-4 rounded-2xl mb-6 mx-auto w-fit shadow-2xl bg-gradient-to-br from-emerald-600 to-emerald-700">
                  <Award className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">認定業者</h3>
                <p className="font-medium text-gray-300">Licensed & Certified</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 rounded-full bg-amber-400" aria-hidden="true"></div>
                </div>
              </div>

              <div className="group backdrop-blur-md rounded-3xl p-8 border-2 border-amber-500/30 bg-slate-800/60 hover:scale-105 transition-all duration-300 shadow-2xl hover:bg-amber-500/10">
                <div className="p-4 rounded-2xl mb-6 mx-auto w-fit shadow-2xl bg-gradient-to-br from-amber-500 to-orange-500">
                  <Wrench className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">最新設備</h3>
                <p className="font-medium text-gray-300">Modern Equipment</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 rounded-full bg-amber-400" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3" role="tablist" aria-label="スライド選択 / Slide selection">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            onKeyDown={(e) => handleKeyDown(e, () => setCurrentSlide(index))}
            className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
              index === currentSlide
                ? 'shadow-lg scale-125 bg-amber-400'
                : 'hover:scale-110 bg-slate-600 hover:bg-amber-500/50'
            }`}
            aria-label={`スライド ${index + 1} を表示 / Show slide ${index + 1}`}
            aria-selected={index === currentSlide}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
