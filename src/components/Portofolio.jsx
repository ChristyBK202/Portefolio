import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['about', 'experience', 'formation', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    'React', 'Vue.js', 'Next.js', 'Nest.js', 'Laravel',
    'JavaScript', 'PHP', 'Python', 'Flask',
    'HTML/CSS', 'React Native',
    'MySQL', 'MongoDB', 'SQL'
  ];

  const experiences = [
    {
      title: 'Technicienne Telecom',
      company: 'FiberCo SAS',
      period: 'Novembre 2023 - Avril 2025',
      description: 'Intégrée à une équipe, participation au raccordement FTTH et SAV, déploiement de réseaux de fibre optique, maintenance des équipements optiques, et optimisation des réseaux locaux.'
    },
    {
      title: 'Stagiaire Développement Web',
      company: 'Caisse Autonome d\'Amortissement du Bénin',
      period: 'Mars 2023 - Juin 2023',
      description: 'Développement d\'une application web pour la digitalisation des prestations RH. Configuration de routeurs, sertissage de câbles Ethernet, configuration d\'imprimantes.'
    }
  ];

  const formations = [
    {
      title: 'Développement Fullstack',
      school: 'Wecode - Programme ForProde',
      period: 'Juin 2025 - En cours',
      description: 'Formation intensive en développement web fullstack'
    },
    {
      title: 'Licence en Génie Telecom et Informatique',
      school: 'Université Catholique de l\'Afrique de l\'Ouest',
      period: '2020 - 2023',
      description: 'Formation en télécommunications et informatique'
    },
    {
      title: 'Licence 2 en Science Economique et de Gestion',
      school: 'Université d\'Abomey Calavi',
      period: '2019 - 2021',
      description: 'Formation en sciences économiques'
    }
  ];

  const projects = [
    {
      title: 'My Rotten Tomatoes',
      description: 'Application web de critiques de films avec Next.js, intégrant l\'API The Movie Database. Espace administrateur pour ajouter des films et gérer les retours du public.',
      tech: ['Next.js', 'React', 'API Integration', 'JavaScript'],
      github: 'https://github.com/ChristyBK202/MoviesTomatoe',
      demo: 'https://movies-tomatoe.vercel.app/'
    },
    {
      title: 'Yowl',
      description: 'Application web complète avec Laravel (API), Vue.js (front-end) et base de données SQL. Système d\'authentification sécurisé.',
      tech: ['Laravel', 'Vue.js', 'SQL', 'Authentication'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Micro Service',
      description: 'Architecture microservices développée avec React pour une meilleure scalabilité et maintenance.',
      tech: ['React', 'Microservices', 'API'],
      github: 'https://github.com/EpitechCodingAcademyPromo2026/C-COD-280-ABJ-2-1-dashboard-6',
      demo: '#'
    },
    {
      title: 'My Show Time',
      description: 'Application développée avec Nest.js pour la gestion de contenus multimédia.',
      tech: ['Nest.js', 'Node.js', 'TypeScript'],
      github: 'https://github.com/EpitechCodingAcademyPromo2026/C-COD-250-ABJ-2-1-showtime-7',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .hero-background {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%),
                      url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070') center/cover;
          position: relative;
        }

        .hero-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="text-emerald-400 font-bold text-2xl hover:scale-110 transition-transform cursor-pointer">CB</div>
            <div className="flex space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`hover:text-emerald-400 transition-all hover:scale-110 ${
                  activeSection === 'about' ? 'text-emerald-400' : ''
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className={`hover:text-emerald-400 transition-all hover:scale-110 ${
                  activeSection === 'experience' ? 'text-emerald-400' : ''
                }`}
              >
                Expérience
              </button>
              <button
                onClick={() => scrollToSection('formation')}
                className={`hover:text-emerald-400 transition-all hover:scale-110 ${
                  activeSection === 'formation' ? 'text-emerald-400' : ''
                }`}
              >
                Formation
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`hover:text-emerald-400 transition-all hover:scale-110 ${
                  activeSection === 'projects' ? 'text-emerald-400' : ''
                }`}
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`hover:text-emerald-400 transition-all hover:scale-110 ${
                  activeSection === 'contact' ? 'text-emerald-400' : ''
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section avec Background */}
      <section className="hero-background min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="max-w-5xl w-full z-10">
          <div className="text-emerald-400 text-lg mb-4 font-mono animate-fade-in-up opacity-0">
            Bonjour, je suis
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4 animate-fade-in-up opacity-0 delay-100">
            Christelle BOKO
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 animate-fade-in-up opacity-0 delay-200">
            Développeur Web Fullstack Junior
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mb-8 animate-fade-in-up opacity-0 delay-300">
            Passionnée par la création de solutions digitales innovantes. 
            Spécialisée en React, Vue.js et développement backend avec Laravel et Nest.js.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-all hover:scale-105 animate-fade-in-up opacity-0 delay-400"
          >
            Me contacter
          </button>
        </div>
        
        {/* Particules décoratives */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float delay-200"></div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center mb-12 animate-slide-in-left opacity-0">
            <h2 className="text-3xl font-bold text-slate-200 whitespace-nowrap">
              <span className="text-emerald-400 font-mono mr-2">01.</span>À propos
            </h2>
            <div className="h-px bg-slate-700 ml-4 w-full max-w-xs"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 animate-slide-in-left opacity-0 delay-100">
              <div className="space-y-4 text-slate-400">
                <p>
                  Développeur FullStack passionnée et rigoureuse, dotée d'une solide capacité 
                  d'adaptation et d'un goût prononcé pour la résolution de défis techniques.
                </p>
                <p>
                  Aujourd'hui, je suis focalisée sur la création de solutions digitales innovantes.
                  Mon ambition est de mettre mes compétences techniques et ma créativité au service de projets à fort impact, 
                  en particulier pour contribuer au développement du numérique en Afrique.
                </p>
                <p>
                  Mon parcours diversifié, alliant télécommunications et développement web, 
                  me permet d'avoir une vision complète des projets technologiques.
                </p>
                
                <div className="pt-4">
                  <h3 className="text-slate-200 font-semibold mb-3">Compétences techniques:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skills.map((skill, i) => (
                      <div key={i} className="flex items-center text-sm hover:text-emerald-400 transition-colors">
                        <span className="text-emerald-400 mr-2">▹</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-slate-200 font-semibold mb-3">Qualités:</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Créativité', 'Adaptation', 'Optimisme', 'Esprit d\'équipe', 'Perfectionnisme'].map((q, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm hover:bg-emerald-400/20 transition-all hover:scale-105 cursor-default">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end animate-slide-in-right opacity-0 delay-200">
              <div className="relative group">
                <div className="w-64 h-64 rounded-lg overflow-hidden border-2 border-emerald-400 relative hover:border-emerald-300 transition-all">
                  <div className="absolute inset-0 bg-emerald-400/20 group-hover:bg-transparent transition-all z-10"></div>
                  
                  <img 
                    src="Christelle.png"
                    alt="Christelle BOKO" 
                    className="w-full h-full object-cover"
                  />
                 
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 border-2 border-emerald-400 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20 bg-slate-800/30">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center mb-12 animate-slide-in-left opacity-0">
            <h2 className="text-3xl font-bold text-slate-200 whitespace-nowrap">
              <span className="text-emerald-400 font-mono mr-2">02.</span>Expérience
            </h2>
            <div className="h-px bg-slate-700 ml-4 w-full max-w-xs"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="group animate-fade-in-up opacity-0" style={{animationDelay: `${i * 0.2}s`}}>
                <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-400/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="text-emerald-400 font-medium">{exp.company}</div>
                    </div>
                    <div className="text-slate-500 text-sm mt-2 md:mt-0">{exp.period}</div>
                  </div>
                  <p className="text-slate-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="min-h-screen flex items-center px-6 py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center mb-12 animate-slide-in-left opacity-0">
            <h2 className="text-3xl font-bold text-slate-200 whitespace-nowrap">
              <span className="text-emerald-400 font-mono mr-2">03.</span>Formation
            </h2>
            <div className="h-px bg-slate-700 ml-4 w-full max-w-xs"></div>
          </div>
          
          <div className="space-y-8">
            {formations.map((form, i) => (
              <div key={i} className="group animate-fade-in-up opacity-0" style={{animationDelay: `${i * 0.2}s`}}>
                <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-400/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                        {form.title}
                      </h3>
                      <div className="text-emerald-400 font-medium">{form.school}</div>
                    </div>
                    <div className="text-slate-500 text-sm mt-2 md:mt-0">{form.period}</div>
                  </div>
                  <p className="text-slate-400">{form.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20 bg-slate-800/30">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center mb-12 animate-slide-in-left opacity-0">
            <h2 className="text-3xl font-bold text-slate-200 whitespace-nowrap">
              <span className="text-emerald-400 font-mono mr-2">04.</span>Projets
            </h2>
            <div className="h-px bg-slate-700 ml-4 w-full max-w-xs"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group bg-slate-800/50 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-400/10 animate-fade-in-up opacity-0" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-emerald-400 group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.github} className="text-slate-400 hover:text-emerald-400 transition-all hover:scale-125">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="text-slate-400 hover:text-emerald-400 transition-all hover:scale-125">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="text-xs text-emerald-400 font-mono hover:bg-emerald-400/10 px-2 py-1 rounded transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="text-emerald-400 font-mono mb-4 animate-fade-in-up opacity-0">05. Et maintenant?</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6 animate-fade-in-up opacity-0 delay-100">
            Me contacter
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12 animate-fade-in-up opacity-0 delay-200">
            Je suis actuellement à la recherche de nouvelles opportunités. 
            N'hésitez pas à me contacter, ma boîte mail est toujours ouverte!
          </p>
          
          <div className="space-y-4 mb-12 animate-fade-in-up opacity-0 delay-300">
            <a href="mailto:christelle.boko@epitech.eu" className="flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              christelle.boko@epitech.eu
            </a>
            <a href="tel:+2250575499953" className="flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all hover:scale-105">
              <Phone className="w-5 h-5 mr-2" />
              +225 0575499953
            </a>
            <div className="flex items-center justify-center text-slate-400">
              <MapPin className="w-5 h-5 mr-2" />
              Abidjan, Côte d'Ivoire
            </div>
          </div>
          
          <a
            href="mailto:christelle.boko@epitech.eu"
            className="inline-block px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-all text-lg hover:scale-105 animate-fade-in-up opacity-0 delay-400"
          >
            Dites bonjour
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm animate-fade-in">
        <p>Conçu et développé par Christelle BOKO © 2025</p>
      </footer>
    </div>
  );
}