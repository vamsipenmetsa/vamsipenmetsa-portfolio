import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Mail } from 'lucide-react';

function Links() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    setIsDark(theme === 'dark');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 relative overflow-x-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* Minimal Profile Section */}
      <div className="text-center mb-6 relative z-10">
        <img 
          src="./vamsi-profile.jpg" 
          alt="Vamsi Penmetsa"
          className="w-20 h-20 rounded-full border-2 border-gray-800 dark:border-gray-400 shadow-md mx-auto mb-3 object-cover object-top"
        />
        <h1 className="text-2xl font-bold mb-0.5 text-gray-900 dark:text-gray-50 font-serif">Vamsi Penmetsa</h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm font-sans">Lead DevOps Engineer | AI & Cloud</p>
      </div>

      {/* Links Container */}
      <div className="w-full max-w-lg space-y-6 z-10 mb-8">

        {/* FREE RESOURCES SECTION */}
        <section className="space-y-3">
          <div className="text-center mb-4">
            <div className="inline-block relative z-10">
              <h2 className="text-2xl font-bold inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg transform -rotate-1 shadow-lg relative z-0 font-serif">
                🎁 Free Resources
              </h2>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse z-20 font-sans">FREE</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-semibold font-sans">⚡ Limited: First 100 people only • $0</p>
          </div>

          <a href="https://vamsipenmetsa.gumroad.com/l/ryfhqh" target="_blank" rel="noopener noreferrer" className="link-item group relative">
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 font-sans">FREE</span>
            <div className="link-icon bg-yellow-400">
              <i className="fas fa-robot text-2xl text-gray-800"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">GitHub Copilot Visual Guide</h3>
              <p className="link-description font-sans">Master AI-powered coding with prompting strategies</p>
            </div>
            <i className="link-arrow fas fa-arrow-right"></i>
          </a>

          <a href="https://vamsipenmetsa.gumroad.com/l/knioda" target="_blank" rel="noopener noreferrer" className="link-item group relative">
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 font-sans">FREE</span>
            <div className="link-icon bg-blue-400">
              <i className="fas fa-dharmachakra text-2xl text-white"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">Kubernetes Cheat Sheet</h3>
              <p className="link-description font-sans">Complete K8s reference from basics to advanced</p>
            </div>
            <i className="link-arrow fas fa-arrow-right"></i>
          </a>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="space-y-3">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold inline-block px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-400 rounded-lg transform rotate-1 shadow-lg font-serif">
              ⭐ Success Story
            </h2>
          </div>

          <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="block link-item group bg-yellow-50 dark:bg-gray-800">
            <div className="link-icon bg-yellow-400">
              <i className="fas fa-quote-left text-2xl text-gray-800"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">"I successfully passed!"</h3>
              <p className="link-description italic font-sans">"Hi Vamsi! I am writing back to tell you that I successfully passed last technical interview. Thank you for your recommendation to try to behave as I am already middle..." — Mariia</p>
              <p className="text-xs text-gray-500 mt-1 font-bold font-sans">Read full story on Topmate ➔</p>
            </div>
          </a>
        </section>

        {/* LINKS SECTION */}
        <section className="space-y-3">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg transform rotate-1 shadow-lg font-serif">
              🔗 Links
            </h2>
          </div>

          <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="link-item group">
            <div className="link-icon bg-green-400">
              <Calendar className="text-white" size={24} />
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">1:1 Career Mentorship</h3>
              <p className="link-description font-sans">Mock interviews & guidance (150+ interviews conducted)</p>
            </div>
            <i className="link-arrow fas fa-arrow-right"></i>
          </a>

          <a href="https://openinapp.link/aq10m" target="_blank" rel="noopener noreferrer" className="link-item group">
            <div className="link-icon bg-purple-500">
              <i className="fas fa-calendar-check text-2xl text-white"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">Priority Questions</h3>
              <p className="link-description font-sans">Schedule & ask priority questions via Topmate</p>
            </div>
            <ExternalLink className="link-arrow" size={20} />
          </a>

          <a href="https://www.linkedin.com/in/vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="link-item group">
            <div className="link-icon bg-blue-700">
              <i className="fab fa-linkedin text-2xl text-white"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">LinkedIn Profile</h3>
              <p className="link-description font-sans">Professional updates & networking</p>
            </div>
            <ExternalLink className="link-arrow" size={20} />
          </a>

          <a href="https://github.com/vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="link-item group">
            <div className="link-icon bg-gray-800 dark:bg-gray-700">
              <i className="fab fa-github text-2xl text-white"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">GitHub</h3>
              <p className="link-description font-sans">Open source projects & contributions</p>
            </div>
            <ExternalLink className="link-arrow" size={20} />
          </a>

          <a href="https://medium.com/@vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="link-item group">
            <div className="link-icon bg-black dark:bg-gray-900">
              <i className="fab fa-medium text-2xl text-white"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">Medium Blog</h3>
              <p className="link-description font-sans">Technical articles & insights</p>
            </div>
            <ExternalLink className="link-arrow" size={20} />
          </a>

          <a href="mailto:vamsivarmapenmatsa@gmail.com" className="link-item group">
            <div className="link-icon bg-red-500">
              <Mail className="text-white" size={24} />
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">Email</h3>
              <p className="link-description font-sans">vamsivarmapenmatsa@gmail.com</p>
            </div>
            <i className="link-arrow fas fa-arrow-right"></i>
          </a>
        </section>

        {/* COMMUNITIES SECTION */}
        <section className="space-y-3">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold inline-block px-4 py-2 bg-green-100 dark:bg-green-900 rounded-lg transform -rotate-1 shadow-lg font-serif">
              🌍 Communities
            </h2>
          </div>

          <a href="https://www.instagram.com/poland_streets" target="_blank" rel="noopener noreferrer" className="link-item group">
            <div className="link-icon bg-pink-600">
              <i className="fab fa-instagram text-2xl text-white"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">Poland Streets 📸</h3>
              <p className="link-description font-sans">Curated street photography (3M+ Views)</p>
            </div>
            <ExternalLink className="link-arrow" size={20} />
          </a>

          <a href="https://www.instagram.com/international_friends_wawa" target="_blank" rel="noopener noreferrer" className="link-item group">
            <div className="link-icon bg-pink-500">
              <i className="fab fa-instagram text-2xl text-white"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">International Friends Warsaw</h3>
              <p className="link-description font-sans">Community events & meetups</p>
            </div>
            <ExternalLink className="link-arrow" size={20} />
          </a>

          <a href="https://linkedin.openinapp.co/groups-13986647" target="_blank" rel="noopener noreferrer" className="link-item group">
            <div className="link-icon bg-blue-600">
              <i className="fab fa-linkedin text-2xl text-white"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">DevOps Professionals Group</h3>
              <p className="link-description font-sans">Join 15,000+ cloud & DevOps professionals</p>
            </div>
            <ExternalLink className="link-arrow" size={20} />
          </a>

          <a href="https://www.instagram.com/vamsipenmetsa7" target="_blank" rel="noopener noreferrer" className="link-item group">
            <div className="link-icon bg-pink-600">
              <i className="fab fa-instagram text-2xl text-white"></i>
            </div>
            <div className="link-content">
              <h3 className="link-title font-serif">Instagram</h3>
              <p className="link-description font-sans">Personal updates & life</p>
            </div>
            <ExternalLink className="link-arrow" size={20} />
          </a>
        </section>

        {/* Back to Portfolio */}
        <div className="text-center pt-6 pb-4">
          <a href="/vamsipenmetsa-portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-800 dark:border-gray-400 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-all duration-300 shadow-lg font-sans">
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </a>
        </div>
      </div>

      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 text-xl text-gray-800 dark:text-gray-400 hover:text-blue-600 transition-all z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 border-gray-800 dark:border-gray-400 hover:rotate-12 hover:scale-110"
      >
        <i className={`fas ${isDark ? 'fa-sun text-yellow-400' : 'fa-moon'}`}></i>
      </button>

      <style jsx="true">{`
        .link-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border: 2px solid #1f2937;
          border-radius: 16px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
        }

        .dark .link-item {
          background: #1f2937;
          border-color: #9ca3af;
        }

        .link-item:hover {
          transform: translateY(-2px);
          box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.15);
        }

        .link-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .link-item:hover .link-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .link-content {
          flex: 1;
          text-align: left;
          min-width: 0;
        }

        .link-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
          color: #1f2937;
          transition: color 0.3s ease;
        }

        .dark .link-title {
          color: #f9fafb;
        }

        .link-item:hover .link-title {
          color: #2563eb;
        }

        .link-description {
          font-size: 0.875rem;
          margin: 0;
          color: #4b5563;
          line-height: 1.4;
        }

        .dark .link-description {
          color: #d1d5db;
        }

        .link-arrow {
          font-size: 1.25rem;
          color: #9ca3af;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.3s ease;
        }

        .link-item:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
          color: #2563eb;
        }

        @media (max-width: 640px) {
          .link-title {
            font-size: 1rem;
          }

          .link-description {
            font-size: 0.8125rem;
          }

          .link-icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Links;
