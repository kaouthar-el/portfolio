import React, { useState } from 'react';
import { Code, Smartphone, Database, Palette, ChevronRight, Briefcase, Award } from 'lucide-react';

export default function PortfolioPresentation() {
  const [activeTab, setActiveTab] = useState('competences');

  const competences = [
    {
      category: 'Frontend',
      icon: <Code className="w-5 h-5" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-5 h-5" />,
      skills: ['React Native', 'Flutter', 'iOS/Android', 'Expo']
    },
    {
      category: 'Backend',
      icon: <Database className="w-5 h-5" />,
      skills: ['Node.js', 'Express', 'Laravel', 'PostgreSQL', 'MongoDB', 'GraphQL']
    },
    {
      category: 'Design & UX',
      icon: <Palette className="w-5 h-5" />,
      skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Animations']
    }
  ];

  const experiences = [
    {
      title: 'Développeur Web',
      company: 'Projets Personnels & Collaboratifs',
      period: '2025 - 2026',
      description: 'Réalisation de plusieurs sites web modernes et responsives en utilisant React et TypeScript.',
      achievements: [
        'Site web complet pour un fast-food avec interface de commande',
        'Développement d\'un site portfolio personnel',
        'Conception d\'interfaces attractives et performantes'
      ]
    },
    {
      title: 'Développeur Mobile',
      company: 'Entreprise Jbel Ennour',
      period: '2024 - Présent',
      description: 'Participation au développement d\'applications mobiles innovantes avec Flutter et React Native.',
      achievements: [
        'Développement d\'applications mobiles facilitant la gestion interne',
        'Création d\'applications permettant la collaboration en temps réel',
        'Renforcement des compétences en développement mobile'
      ]
    },
    {
      title: 'Stage PFE',
      company: 'Présidence Moulay Ismaïl, Meknès',
      period: '2023',
      description: 'Participation au développement et à la maintenance de plusieurs sites web internes.',
      achievements: [
        'Formatage et configuration de postes informatiques',
        'Câblage RJ45 et organisation du réseau local',
        'Installation et configuration de systèmes'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Kaouthar El Mansouri
          </h1>
          <p className="text-xl md:text-2xl text-pink-300 mb-2">
            Développeuse Web & Mobile
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionnée par la création d'expériences digitales modernes, performantes et élégantes
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">À propos de moi</h2>
              <p className="text-gray-200 leading-relaxed mb-6">
                Développeuse web & mobile diplômée en <span className="text-pink-300 font-semibold">Développement Informatique</span>, 
                avec <span className="text-pink-300 font-semibold">1 an d'expérience</span> chez Jbel Nour.
              </p>
              <p className="text-gray-200 leading-relaxed mb-6">
                J'ai eu l'occasion de créer plusieurs applications web et mobiles modernes, 
                en mettant l'accent sur l'expérience utilisateur et la performance.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                  React
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  Laravel
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                  Flutter
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Briefcase className="w-8 h-8 text-pink-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">1+</div>
                <div className="text-gray-300 text-sm">An d'expérience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Award className="w-8 h-8 text-purple-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-gray-300 text-sm">Projets réalisés</div>
              </div>
            </div>
          </div>

          {/* Right Side - Tablet Device */}
          <div className="relative">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {/* Tablet Frame */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl border-4 border-gray-700">
                {/* Screen */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-inner">
                  {/* Tablet Header */}
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4">
                    <div className="flex gap-2 mb-3">
                      <button
                        onClick={() => setActiveTab('competences')}
                        className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                          activeTab === 'competences'
                            ? 'bg-white text-purple-600'
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        Compétences
                      </button>
                      <button
                        onClick={() => setActiveTab('experiences')}
                        className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                          activeTab === 'experiences'
                            ? 'bg-white text-purple-600'
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        Expériences
                      </button>
                    </div>
                  </div>

                  {/* Tablet Content */}
                  <div className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
                    {activeTab === 'competences' && (
                      <div className="space-y-4">
                        {competences.map((comp, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg text-white">
                                {comp.icon}
                              </div>
                              <h3 className="font-bold text-gray-800">{comp.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {comp.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'experiences' && (
                      <div className="space-y-4">
                        {experiences.map((exp, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-gray-800">{exp.title}</h3>
                                <p className="text-sm text-pink-600 font-medium">{exp.company}</p>
                              </div>
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{exp.description}</p>
                            <ul className="space-y-1">
                              {exp.achievements.slice(0, 2).map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                                  <ChevronRight className="w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Découvrir mes projets
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
