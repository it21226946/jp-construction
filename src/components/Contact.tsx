import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { API_ENDPOINTS } from '../config/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('お問い合わせありがとうございます。近日中にご連絡いたします。 / Thank you for your inquiry. We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        alert(`エラーが発生しました: ${errorData.error} / An error occurred: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('送信中にエラーが発生しました。後でもう一度お試しください。 / An error occurred while sending. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-2 mb-8 shadow-lg">
            <span className="text-teal-600 font-bold">お問い合わせ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-teal-600 to-gray-900 bg-clip-text text-transparent">
              お問い合わせ
            </span>
            <span className="text-teal-600 ml-4">Contact</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            解体工事に関するご相談・お見積りは無料です。お気軽にお問い合わせください
          </p>
          <p className="text-lg text-gray-500 mt-4 font-medium">
            Free consultation and quotes for demolition projects. Feel free to contact us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center mb-10">
              <div className="w-3 h-12 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full mr-6"></div>
              <h3 className="text-3xl font-black text-gray-900">
                連絡先情報 / Contact Information
              </h3>
            </div>
            
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-teal-500/50 transition-shadow">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xl">電話 / Phone</h4>
                    <p className="text-gray-700 text-lg font-semibold">0284-91-4119</p>
                    <p className="text-sm text-gray-500 mt-1">営業時間: 8:00 - 18:00 (平日) / Mon-Fri: 8:00-18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-orange-500/50 transition-shadow">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xl">メール / Email</h4>
                    <p className="text-gray-700 text-lg font-semibold">mk-kaitai@motegi-615.jp</p>
                    <p className="text-sm text-gray-500 mt-1">24時間受付 / Available 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xl">所在地 / Address</h4>
                    <p className="text-gray-700 text-lg font-semibold">
                      〒329-4215<br />
                      栃木県足利市奥戸町414-10<br />
                      Tokyo, Japan
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xl">緊急対応 / Emergency</h4>
                    <p className="text-gray-700 text-lg font-semibold">+81 (0)90-XXXX-XXXX</p>
                    <p className="text-sm text-gray-500 mt-1">24時間365日対応 / 24/7 Emergency Response</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Map Placeholder */}
            <div className="mt-10 bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-2xl flex items-center justify-center shadow-inner border border-gray-200">
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-2xl mb-4 mx-auto w-fit shadow-lg">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <p className="text-gray-600 font-semibold text-lg">Google Maps</p>
                <p className="text-sm text-gray-500">会社所在地 / Company Location</p>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-10">
                <div className="w-3 h-12 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-6"></div>
                <h3 className="text-3xl font-black text-gray-900">
                  お見積り依頼 / Request Quote
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    お名前 / Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                    placeholder="山田太郎 / Taro Yamada"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      メールアドレス / Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      電話番号 / Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                      placeholder="03-XXXX-XXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    プロジェクトタイプ / Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                  >
                    <option value="">選択してください / Select Type</option>
                    <option value="residential">住宅解体 / Residential</option>
                    <option value="commercial">商業施設解体 / Commercial</option>
                    <option value="industrial">工業施設解体 / Industrial</option>
                    <option value="emergency">緊急対応 / Emergency</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    詳細・ご要望 / Details & Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium resize-none"
                    placeholder="解体予定の建物の詳細、工期、その他ご要望などをお聞かせください..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-8 rounded-2xl font-bold text-xl hover:from-teal-500 hover:to-teal-600 transition-all duration-300 shadow-2xl hover:shadow-teal-500/50 flex items-center justify-center transform hover:scale-105 border border-teal-400/50"
                >
                  <Send className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  送信する / Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;