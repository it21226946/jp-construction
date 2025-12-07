import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'すべて / All', nameEn: 'All Projects' },
    { id: 'commercial', name: '商業施設 / Commercial', nameEn: 'Commercial' },
    { id: 'residential', name: '住宅 / Residential', nameEn: 'Residential' },
    { id: 'industrial', name: '工業施設 / Industrial', nameEn: 'Industrial' }
  ];

  const projects = [
    {
      id: 1,
      category: 'commercial',
      title: '事務所解体',
      titleEn: 'Multi-Story Office and Nursery School Demolition',
      location: '東京都舟渡',
      locationEn: 'Funato, Tokyo',
      date: '2024年3月',
      dateEn: 'March 2024',
      image: '/images/WhatsApp Image 2025-09-18 at 20.46.50 (1).jpeg',
      descriptionEn: 'Demolition of multi-story office and nursery school',
      simpleDescription: '事務所と保育園の解体プロジェクト',
      simpleDescriptionEn: 'Office and nursery school demolition project'
    },
    {
      id: 2,
      category: 'residential',
      title: '保育園解体',
      titleEn: 'Tokyo Office Demolition',
      location: '東京都板橋',
      locationEn: 'Itabashi, Tokyo',
      date: '2024年1月',
      dateEn: 'January 2024',
      image: '/images/WhatsApp Image 2025-09-18 at 20.46.50 (2).jpeg',
      descriptionEn: 'Demolition of an office in Tokyo',
      simpleDescription: '東京都内の事務所解体',
      simpleDescriptionEn: 'Tokyo office demolition'
    },
    {
      id: 3,
      category: 'industrial',
      title: '6階建解体工事  階上解体',
      titleEn: '6-Story Building Demolition',
      location: '埼玉県春日部',
      locationEn: 'Kasukabe, Saitama',
      date: '2023年12月',
      dateEn: 'December 2023',
      image: '/images/WhatsApp Image 2025-09-18 at 20.46.50 (3).jpeg',
      descriptionEn: 'Demolition of a 6-story building',
      simpleDescription: '6階建て建物の解体',
      simpleDescriptionEn: '6-story building demolition'
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5" aria-hidden="true">
        <div className="absolute top-20 right-20 w-32 h-32 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-2 mb-8 shadow-lg">
            <span className="text-teal-600 font-bold">実績</span>
          </div>
          <h2
            id="projects-heading"
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-teal-600 to-gray-900 bg-clip-text text-transparent">
              実績
            </span>
            <span className="text-teal-600 ml-4">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            これまでに手がけた代表的な解体工事プロジェクトをご紹介いたします
          </p>
          <p className="text-lg text-gray-500 mt-4 font-medium">
            Here are some of our representative demolition projects we have completed
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-white/20">
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="プロジェクトカテゴリフィルター / Project category filter">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  onKeyDown={(e) => handleKeyDown(e, () => setActiveCategory(category.id))}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-500/50'
                      : 'text-gray-600 hover:bg-gray-100 hover:shadow-lg'
                  }`}
                  aria-selected={activeCategory === category.id}
                  role="tab"
                  aria-controls={`projects-${category.id}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          role="tabpanel"
          id={`projects-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-white/20 hover:scale-105 transform"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.location} / ${project.titleEn} - ${project.locationEn}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                    project.category === 'commercial' ? 'bg-blue-500 text-white' :
                    project.category === 'residential' ? 'bg-green-500 text-white' :
                    'bg-purple-500 text-white'
                  }`}>
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-500 font-medium">
                    <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
                    {project.date}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {project.title}
                </h3>
                <h4 className="text-teal-600 font-bold text-lg mb-6">
                  {project.titleEn}
                </h4>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-3 text-teal-600" aria-hidden="true" />
                  <span className="font-semibold">{project.location} / {project.locationEn}</span>
                </div>

                <p className="text-gray-600 mb-3 font-medium leading-relaxed">
                  {project.simpleDescription}
                </p>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {project.descriptionEn}
                </p>

                <button
                  onClick={() => {/* Handle view details */}}
                  onKeyDown={(e) => handleKeyDown(e, () => {/* Handle view details */})}
                  className="group w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-teal-500 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 border border-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  aria-label={`${project.title} の詳細を見る / View details of ${project.titleEn}`}
                >
                  <span className="flex items-center justify-center">
                    詳細を見る / View Details
                    <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</div>
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Load More */}
        <div className="text-center mt-16">
          <button
            onClick={() => {/* Handle load more */}}
            onKeyDown={(e) => handleKeyDown(e, () => {/* Handle load more */})}
            className="group bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-2xl hover:shadow-gray-900/50 transform hover:scale-105 border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="さらにプロジェクトを表示 / Load more projects"
          >
            <span className="flex items-center justify-center">
              さらに表示 / Load More Projects
              <div className="ml-3 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</div>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
