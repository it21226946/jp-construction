import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Clock, Award, Shield, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-2xl mr-4 shadow-lg">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-teal-600 font-black text-lg">M</span>
                </div>
              </div>
              <div>
                <div className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
                    茂手木解体工業
                  </span>
                </div>
                <div className="text-sm text-gray-400 font-medium">株式会社</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              安全で効率的な解体工事を通じて、日本の建設業界に貢献いたします。
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Contributing to Japan's construction industry through safe and efficient demolition services.
            </p>
            
            {/* Trust Badges */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center">
                <div className="bg-teal-500/20 p-2 rounded-lg mr-3">
                  <Award className="h-5 w-5 text-teal-400" />
                </div>
                <span className="text-gray-300 text-sm font-medium">認定業者</span>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-500/20 p-2 rounded-lg mr-3">
                  <Shield className="h-5 w-5 text-orange-400" />
                </div>
                <span className="text-gray-300 text-sm font-medium">安全第一</span>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-teal-400 to-teal-500 rounded-full mr-4"></div>
              クイックリンク / Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="group flex items-center text-gray-300 hover:text-teal-400 transition-all duration-300 font-medium">
                  <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  ホーム / Home
                </a>
              </li>
              <li>
                <a href="#about" className="group flex items-center text-gray-300 hover:text-teal-400 transition-all duration-300 font-medium">
                  <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  会社情報 / About
                </a>
              </li>
              <li>
                <a href="#services" className="group flex items-center text-gray-300 hover:text-teal-400 transition-all duration-300 font-medium">
                  <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  サービス / Services
                </a>
              </li>
              <li>
                <a href="#projects" className="group flex items-center text-gray-300 hover:text-teal-400 transition-all duration-300 font-medium">
                  <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  実績 / Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="group flex items-center text-gray-300 hover:text-teal-400 transition-all duration-300 font-medium">
                  <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  お問い合わせ / Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full mr-4"></div>
              サービス / Services
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300 font-medium">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                商業建物解体
              </li>
              <li className="flex items-center text-gray-300 font-medium">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                住宅解体工事
              </li>
              <li className="flex items-center text-gray-300 font-medium">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                現場清掃・整地
              </li>
              <li className="flex items-center text-gray-300 font-medium">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                廃材リサイクル
              </li>
              <li className="flex items-center text-gray-300 font-medium">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                緊急対応
              </li>
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full mr-4"></div>
              お問い合わせ / Contact
            </h4>
            <div className="space-y-6">
              <div className="group bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-teal-500/50 transition-shadow">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 font-bold text-lg">0284-91-4119</div>
                    <div className="text-gray-400 text-sm">営業時間: 8:00-18:00</div>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-orange-500/50 transition-shadow">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 font-bold text-lg">mk-kaitai@motegi-615.jp</div>
                    <div className="text-gray-400 text-sm">24時間受付</div>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 font-bold text-lg">関東圏対応</div>
                    <div className="text-gray-400 text-sm">
                      栃木県 群馬県 埼玉県<br />
                      茨城県 東京都 千葉県
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div className="mt-8">
              <h5 className="text-lg font-bold mb-4 flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full mr-3"></div>
                SNS / Follow Us
              </h5>
              <div className="flex space-x-4">
                <a href="#" className="group bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Facebook className="h-5 w-5 text-gray-300 group-hover:text-teal-400 transition-colors" />
                </a>
                <a href="#" className="group bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Twitter className="h-5 w-5 text-gray-300 group-hover:text-teal-400 transition-colors" />
                </a>
                <a href="#" className="group bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Instagram className="h-5 w-5 text-gray-300 group-hover:text-teal-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-sm font-medium">
                © 2024 茂手木解体工業株式会社. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-400 text-sm">建築業許可 (般-4) 26687号</span>
              </div>
            </div>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="group text-gray-400 hover:text-teal-400 text-sm transition-all duration-300 font-medium">
                <span className="group-hover:underline">プライバシーポリシー / Privacy Policy</span>
              </a>
              <a href="#" className="group text-gray-400 hover:text-teal-400 text-sm transition-all duration-300 font-medium">
                <span className="group-hover:underline">利用規約 / Terms of Service</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;