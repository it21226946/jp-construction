import React from 'react';
import { Building, Home, Truck, Recycle, Shield, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: '商業建物解体',
      subtitle: 'Commercial Building Demolition',
      description: 'オフィスビル、店舗、工場などの大型建物の解体工事',
      features: ['高層ビル対応', '騒音・粉塵対策', '周辺安全確保']
    },
    {
      icon: Home,
      title: '住宅解体工事',
      subtitle: 'Residential Demolition',
      description: '一戸建て住宅、アパート、マンションの解体工事',
      features: ['迅速な作業', '近隣配慮', '廃材分別']
    },
    {
      icon: Truck,
      title: '現場清掃・整地',
      subtitle: 'Site Clearing & Preparation',
      description: '解体後の現場清掃、整地、廃材の運搬・処理',
      features: ['完全清掃', '整地作業', '廃材運搬']
    },
    {
      icon: Recycle,
      title: '廃材リサイクル',
      subtitle: 'Waste Recycling',
      description: '解体廃材の適切な分別・リサイクル処理',
      features: ['環境配慮', 'リサイクル率向上', '法令遵守']
    },
    {
      icon: Shield,
      title: '安全管理',
      subtitle: 'Safety Management',
      description: '徹底した安全管理体制による事故ゼロの実現',
      features: ['安全教育', '保護具完備', '定期点検']
    },
    {
      icon: Clock,
      title: '緊急対応',
      subtitle: 'Emergency Response',
      description: '災害時や緊急時の迅速な解体・撤去作業',
      features: ['24時間対応', '迅速出動', '災害対応']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            サービス <span className="text-teal-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            住宅から商業施設まで、あらゆる建物の解体工事に対応。安全で効率的なサービスを提供いたします。
          </p>
          <p className="text-lg text-gray-500 mt-2">
            From residential to commercial buildings, we handle all types of demolition projects with safety and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-teal-300">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <h4 className="text-teal-600 font-semibold mb-3">
                {service.subtitle}
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-white border border-teal-600 text-teal-600 py-2 px-4 rounded-lg hover:bg-teal-600 hover:text-white transition-colors font-medium">
                詳細を見る / Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            プロジェクトのご相談はお気軽に
          </h3>
          <p className="text-gray-300 mb-6">
            Feel free to consult us about your demolition project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              無料見積り依頼 / Free Quote
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              お電話でお問い合わせ / Call Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;