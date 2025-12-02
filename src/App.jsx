import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Send, BookOpen, Cloud, Terminal, Code, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-ali-cream text-ali-text selection:bg-ali-orange selection:text-white">
      {/* Navigation */}
      <nav className="w-full py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder - stylized text */}
            <span className="font-serif text-2xl font-bold tracking-tight">Vamsi Penmetsa</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-sans font-medium hover:text-ali-orange transition-colors">About</a>
            <div className="group relative cursor-pointer">
              <span className="font-sans font-medium hover:text-ali-orange transition-colors flex items-center gap-1">
                Resources <ChevronDown size={16} />
              </span>
            </div>
            <a href="#experience" className="font-sans font-medium hover:text-ali-orange transition-colors">Experience</a>
            <a href="#contact" className="px-6 py-2.5 bg-ali-orange text-white rounded-full font-bold hover:bg-orange-400 transition-transform transform hover:scale-105 shadow-sm">
              Let's Connect
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-ali-heading">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-xl z-50 border-t border-gray-100">
            <div className="p-4 space-y-4">
              <a href="#about" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>About</a>
              <a href="#experience" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>Experience</a>
              <a href="#resources" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>Resources</a>
              <a href="#contact" className="block font-bold text-ali-orange p-2" onClick={toggleMenu}>Let's Connect</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

          {/* Image Side (Left on Desktop) */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              {/* Yellow Blob Background */}
              <div className="absolute top-4 right-4 w-full h-full bg-ali-yellow rounded-[60%_40%_30%_70%/60%_30%_70%_40%] -z-10 transform rotate-12"></div>
              <img
                src="/vamsi-profile.jpg"
                alt="Vamsi Penmetsa"
                className="w-full h-full object-cover rounded-[50%] border-4 border-white shadow-xl z-10 relative"
              />
              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg transform -rotate-6 z-20 hidden md:block">
                <span className="text-2xl">👋</span>
                <span className="font-hand text-xl font-bold ml-2">Hi there!</span>
              </div>
            </div>
          </div>

          {/* Text Side (Right on Desktop) */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-ali-heading relative inline-block">
              Hey Friends
              <span className="text-4xl md:text-6xl ml-4 animate-wave inline-block">👋</span>
              {/* Blue Underline */}
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-ali-blue" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 7.00001C45.9184 3.66668 156.667 -2.33332 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-sans font-light">
              I'm <span className="font-bold text-ali-heading">Vamsi</span>. I'm a Lead DevOps Engineer turned
              <span className="font-serif italic font-bold text-ali-heading"> AI Enthusiast</span>,
              deploying LLMs for LSEG × Microsoft.
            </p>

            <p className="text-lg text-gray-500">
              Author of the <span className="underline decoration-ali-orange decoration-2 underline-offset-2">GitHub Copilot Visual Guide</span> and
              <span className="underline decoration-ali-blue decoration-2 underline-offset-2"> Kubernetes Cheat Sheet</span>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#about" className="px-8 py-3 bg-ali-heading text-white rounded-full font-bold hover:bg-gray-800 transition-all">
                More About Me
              </a>
              <a href="#resources" className="px-8 py-3 bg-white text-ali-heading border-2 border-gray-200 rounded-full font-bold hover:border-ali-orange hover:text-ali-orange transition-all">
                Free Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / LifeNotes Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24 relative">
        {/* Hand drawn arrow */}
        <div className="absolute -top-16 right-0 md:-right-12 hidden md:block text-ali-orange transform rotate-12">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10,10 Q50,50 20,80" strokeLinecap="round" />
            <path d="M20,80 L30,70 M20,80 L10,70" strokeLinecap="round" />
          </svg>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Subscribe to LifeNotes</h2>
              <Send className="text-ali-blue transform -rotate-12" size={32} />
            </div>
            <p className="text-lg text-gray-600">
              Each week, I share actionable DevOps tips, AI insights, and highlights from my journey in tech.
              It's free to join, and always will be.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
              <span>Join a growing community of more than</span>
              <span className="text-ali-heading bg-ali-yellow/30 px-2 py-0.5 rounded">15,000+ friendly readers</span>
            </div>
          </div>

          <div className="w-full md:w-5/12 bg-ali-cream p-6 rounded-2xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Your email address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ali-blue focus:ring-2 focus:ring-ali-blue/20 outline-none transition-all"
                />
              </div>
              <button className="w-full py-3 bg-ali-blue-dark text-white font-bold rounded-xl hover:bg-sky-500 transition-colors shadow-md hover:shadow-lg">
                Subscribe
              </button>
              <p className="text-xs text-center text-gray-400">No spam, unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </section>

      {/* About / Professional Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">The Professional Side</h2>
            <div className="w-24 h-1 bg-ali-yellow mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-ali-cream rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-ali-blue/20 text-ali-blue-dark rounded-xl flex items-center justify-center mb-6">
                <Cloud size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud Architect</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized in Azure AKS and PaaS infrastructure. Currently leading the deployment of LLMs for major financial institutions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-ali-cream rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-ali-orange/20 text-ali-orange rounded-xl flex items-center justify-center mb-6">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">DevOps Leader</h3>
              <p className="text-gray-600 leading-relaxed">
                From Manual Tester to Lead Systems Engineer. I've walked the path and now mentor others to do the same.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-ali-cream rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-ali-yellow/20 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Educator</h3>
              <p className="text-gray-600 leading-relaxed">
                EPAM AI Ambassador and Microsoft Copilot Champion. I love breaking down complex topics into simple guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-24 bg-ali-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Free Resources</h2>
              <p className="text-xl text-gray-600">Tools to help you grow in your career.</p>
            </div>
            <a href="https://vamsipenmetsa.gumroad.com/" target="_blank" className="text-ali-blue-dark font-bold hover:underline flex items-center gap-2">
              View all resources <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://vamsipenmetsa.gumroad.com/l/ryfhqh" target="_blank" className="group bg-white rounded-3xl p-2 hover:shadow-xl transition-all duration-300">
              <div className="bg-ali-blue/10 rounded-2xl h-48 flex items-center justify-center mb-6 group-hover:bg-ali-blue/20 transition-colors">
                <Code size={64} className="text-ali-blue-dark" />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-ali-blue-dark transition-colors">GitHub Copilot Visual Guide</h3>
                <p className="text-gray-600 mb-4">Prompting Made Simple. Master AI coding assistance with this visual guide.</p>
                <span className="inline-block px-4 py-1 bg-ali-yellow/20 text-yellow-800 text-sm font-bold rounded-full">Free Download</span>
              </div>
            </a>

            <a href="https://vamsipenmetsa.gumroad.com/l/knioda" target="_blank" className="group bg-white rounded-3xl p-2 hover:shadow-xl transition-all duration-300">
              <div className="bg-ali-orange/10 rounded-2xl h-48 flex items-center justify-center mb-6 group-hover:bg-ali-orange/20 transition-colors">
                <Cloud size={64} className="text-ali-orange" />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-ali-orange transition-colors">Kubernetes Cheat Sheet</h3>
                <p className="text-gray-600 mb-4">Complete Pack: From Basics to Advanced K8s. Your go-to reference.</p>
                <span className="inline-block px-4 py-1 bg-ali-yellow/20 text-yellow-800 text-sm font-bold rounded-full">Free Download</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="font-serif text-2xl font-bold tracking-tight block mb-6">Vamsi Penmetsa</span>
              <p className="text-gray-500 max-w-sm mb-6">
                Lead DevOps Engineer, AI Ambassador, and creator of educational content for the tech community.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/vamsipenmetsa" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-ali-heading hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vamsipenmetsa" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:vamsivarmapenmatsa@gmail.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-ali-orange hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#about" className="hover:text-ali-orange">About</a></li>
                <li><a href="#experience" className="hover:text-ali-orange">Experience</a></li>
                <li><a href="#resources" className="hover:text-ali-orange">Free Resources</a></li>
                <li><a href="#contact" className="hover:text-ali-orange">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Community</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#" className="hover:text-ali-orange">Newsletter</a></li>
                <li><a href="#" className="hover:text-ali-orange">LinkedIn Group</a></li>
                <li><a href="#" className="hover:text-ali-orange">Warsaw Friends</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2025 Vamsi Penmetsa. All rights reserved.</p>
            <p>Designed with <span className="text-red-400">♥</span> inspired by Ali Abdaal.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
