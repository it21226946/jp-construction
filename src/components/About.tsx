import React from 'react';
import { Users, Calendar, MapPin, Award, Shield, Recycle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '15+', label: '年の経験', subLabel: 'Years Experience' },
    { number: '500+', label: '完成プロジェクト', subLabel: 'Completed Projects' },
    { number: '100%', label: '安全記録', subLabel: 'Safety Record' },
    { number: '24/7', label: 'サポート', subLabel: 'Support Available' }
  ];

  const values = [
    {
      icon: Shield,
      title: '安全第一',
      subtitle: 'Safety First',
      description: '全ての作業において安全を最優先に考えています'
    },
    {
      icon: Award,
      title: '品質保証',
      subtitle: 'Quality Assurance',
      description: '高品質な解体工事を保証いたします'
    },
    {
      icon: Recycle,
      title: '環境配慮',
      subtitle: 'Environmental Care',
      description: '廃材のリサイクルと環境保護に取り組んでいます'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-500/10 to-orange-500/10 backdrop-blur-sm border border-teal-500/20 rounded-full px-6 py-2 mb-8 shadow-lg">
            <span className="text-teal-600 font-semibold">信頼と実績</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-teal-600 to-gray-900 bg-clip-text text-transparent">
              会社情報
            </span>
            <span className="text-teal-600 ml-4">About Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            私たちは日本で最も信頼される解体工事会社として、安全で効率的な建物解体サービスを提供しています
          </p>
          <p className="text-lg text-gray-500 mt-4 font-medium">
            We are Japan's most trusted demolition company, providing safe and efficient building demolition services.
          </p>
        </div>

        {/* Enhanced Company Details */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 mb-20 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-2 mb-6 shadow-lg">
              <span className="text-teal-600 font-bold">会社詳細</span>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Company Details
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full mr-4"></div>
                  会社名 / Company Name
                </h4>
                <p className="text-xl text-gray-700 font-semibold">茂手木解体工業株式会社</p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-4"></div>
                  許可・認可 / Licenses
                </h4>
                <div className="space-y-3">
                  <p className="text-lg text-gray-700 font-semibold">建築業許可 (般-4) 26687号</p>
                  <p className="text-lg text-gray-700 font-semibold">収集運搬業</p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
                サービスエリア / Service Areas
              </h4>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                栃木県 群馬県 埼玉県 茨城県 東京都 千葉県
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">栃木県</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">群馬県</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">埼玉県</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">茨城県</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">東京都</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">千葉県</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-3 h-12 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full mr-6"></div>
                <h3 className="text-3xl font-black text-gray-900">
                  私たちの使命 / Our Mission
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  創業以来、私たちは日本全国で安全かつ効率的な解体工事を提供してきました。最新の重機と熟練した技術者により、住宅から大型商業施設まで、あらゆる規模の建物解体に対応しています。
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Since our establishment, we have been providing safe and efficient demolition services throughout Japan. With state-of-the-art machinery and skilled technicians, we handle building demolition of all sizes, from residential homes to large commercial facilities.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-2xl mr-4 shadow-lg group-hover:shadow-teal-500/50 transition-shadow">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">関東全域でサービスを提供</span>
                </div>
                <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-2xl mr-4 shadow-lg group-hover:shadow-orange-500/50 transition-shadow">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">経験豊富な認定技術者チーム</span>
                </div>
                <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl mr-4 shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">24時間365日対応可能</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="text-center mb-10">
                <div className="inline-flex items-center bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-2 mb-6 shadow-lg">
                  <span className="text-teal-600 font-bold">実績</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900">
                  Our Record
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:scale-105">
                      <div className="text-4xl font-black bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-3">
                        {stat.number}
                      </div>
                      <div className="text-gray-900 font-bold text-lg mb-2">
                        {stat.label}
                      </div>
                      <div className="text-gray-500 font-medium">
                        {stat.subLabel}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-2 mb-8 shadow-lg">
              <span className="text-teal-600 font-bold">価値観</span>
            </div>
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              私たちの価値観 / Our Values
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all duration-500 border border-white/20 hover:scale-105 transform">
                <div className="relative mb-8">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-teal-500/50 transition-all duration-300 group-hover:scale-110">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h4 className="text-2xl font-black text-gray-900 mb-3">
                  {value.title}
                </h4>
                <h5 className="text-teal-600 font-bold text-lg mb-4">
                  {value.subtitle}
                </h5>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {value.description}
                </p>
                
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;