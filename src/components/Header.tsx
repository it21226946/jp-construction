import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white/85 backdrop-blur-[10px] shadow-lg border-b border-gray-200/40" : "bg-transparent"}
      `}
    >
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-500 text-white px-4 py-2 rounded-lg z-50"
      >
        メインコンテンツへスキップ / Skip to main content
      </a>

      {/* TOP BAR */}
      <div className={`${isScrolled ? "bg-transparent" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs py-2 text-white drop-shadow-md">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-2 text-amber-300" aria-hidden="true" />
                <span className="font-medium">0284-91-4119</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 mr-2 text-blue-300" aria-hidden="true" />
                <span className="font-medium">mk-kaitai@motegi-615.jp</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1 text-amber-300" aria-hidden="true" />
                <span className="text-xs">営業時間: 8:00-18:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1 text-amber-300" aria-hidden="true" />
                <span className="text-xs">関東圏対応</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center py-4 ${isScrolled ? "text-slate-700" : "text-white drop-shadow-md"}`}>
          
          {/* Logo */}
          <img
            src="/images/mitegi logo.png"
            alt="Motegi Logo"
            className="h-14 w-auto object-contain"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              ["home", "ホーム / Home"],
              ["about", "会社情報 / About"],
              ["services", "サービス / Services"],
              ["projects", "実績 / Projects"],
              ["contact", "お問い合わせ / Contact"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(id))}
                className={`font-medium transition-colors duration-300 py-2 px-2 rounded-lg
                  ${isScrolled ? "text-slate-700 hover:text-amber-600" : "text-white hover:text-amber-300"}
                `}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              無料見積り / Free Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? "text-slate-700" : "text-white"} p-2 rounded-lg`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-lg shadow-lg p-4 mb-4 border-2 border-amber-200">
            <div className="space-y-3">
              {[
                ["home", "ホーム / Home"],
                ["about", "会社情報 / About"],
                ["services", "サービス / Services"],
                ["projects", "実績 / Projects"],
                ["contact", "お問い合わせ / Contact"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-3 py-2 rounded-lg font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50"
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-white py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 shadow-md"
              >
                無料見積り / Free Quote
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
