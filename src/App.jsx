import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, BookOpen, Cloud, Terminal, Code, Instagram, Users, ExternalLink, Calendar } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-ali-cream text-ali-text selection:bg-ali-orange selection:text-white">
      {/* Navigation */}
      <nav className="w-full py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold tracking-tight">Vamsi Penmetsa</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="font-sans font-medium hover:text-ali-orange transition-colors">Services</a>
            <a href="#about" className="font-sans font-medium hover:text-ali-orange transition-colors">About</a>
            <a href="#resources" className="font-sans font-medium hover:text-ali-orange transition-colors">Resources</a>
            <a href="/vamsipenmetsa-portfolio/links" className="font-sans font-medium hover:text-ali-blue-dark transition-colors">Links</a>
            <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-lg transition-all transform hover:scale-105 shadow-sm">
              Book a Session
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
              <a href="#services" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>Services</a>
              <a href="#about" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>About</a>
              <a href="#resources" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>Resources</a>
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="block font-bold text-ali-orange p-2" onClick={toggleMenu}>Book a Session</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

          {/* Image Side */}
          <div className="relative w-full md:w-5/12 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
              <img
                src="./vamsiPenmetsa.png"
                alt="Vamsi Penmetsa — Lead DevOps & Platform Engineer"
                className="w-full h-full object-contain z-10 relative"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-7/12 text-center md:text-left space-y-5">
            <p className="text-sm font-bold tracking-widest uppercase text-ali-blue-dark">Lead DevOps & Platform Engineer</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-ali-heading leading-tight">
              Building ML/LLM Platforms
              <span className="block text-ali-orange">at Enterprise Scale</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans max-w-xl">
              Architecting a Modeling-as-a-Service platform for <span className="font-bold text-ali-heading">LSEG × Microsoft UK</span> on Azure — from development to production, with security-first design for regulated finance.
            </p>

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <span className="text-xs font-bold px-3 py-1.5 bg-ali-blue/15 text-ali-blue-dark rounded-full">7 Azure Certs</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-ali-orange/15 text-ali-orange rounded-full">150+ Global Interviews</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-ali-yellow/20 text-yellow-700 rounded-full">EPAM AI Ambassador</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full">🇮🇳 India → 🇵🇱 Poland (since 2022)</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-xl transition-all shadow-lg">
                Book a 1:1 Session <ArrowRight size={18} className="inline ml-1 -mt-0.5" />
              </a>
              <a href="#resources" className="px-8 py-3.5 bg-white text-ali-heading border-2 border-gray-200 rounded-full font-bold hover:border-ali-orange hover:shadow-lg transition-all">
                🎁 Free Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-3">
              How Can <span className="relative inline-block">
                I Help You?
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 7.00001C45.9184 3.66668 156.667 -2.33332 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">Practical guidance from someone who's walked the path — Manual Tester → Automation → DevOps → SRE → Platform Engineer → Cloud.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Career Mentorship */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-ali-blue hover:bg-ali-blue/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-ali-blue/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-ali-blue group-hover:scale-110 transition-all">
                <svg className="w-8 h-8 text-ali-blue-dark group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-ali-blue-dark transition-colors">Land Your Next Cloud Role</h3>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                Mock interviews, career strategy, and personalized guidance. Based on <span className="font-bold">150+ technical interviews</span> conducted for a global consulting firm.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-ali-blue-dark text-white rounded-full font-bold text-sm hover:bg-ali-orange hover:gap-3 hover:shadow-lg transition-all">
                Book session <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 2: LinkedIn & Career Transition */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-ali-orange hover:bg-ali-orange/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-ali-orange/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-ali-orange group-hover:scale-110 transition-all">
                <svg className="w-8 h-8 text-ali-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-ali-orange transition-colors">Transition to Cloud/DevOps</h3>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                LinkedIn optimization, networking strategies, and a clear roadmap to break into cloud & DevOps — from someone who made the switch.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/137043?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-ali-orange text-white rounded-full font-bold text-sm hover:bg-ali-blue-dark hover:gap-3 hover:shadow-lg transition-all">
                Book session <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 3: Resume Review */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-ali-yellow hover:bg-ali-yellow/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-ali-yellow/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-ali-yellow group-hover:scale-110 transition-all">
                <svg className="w-8 h-8 text-yellow-700 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-yellow-700 transition-colors">Resume That Gets Interviews</h3>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                Professional review and optimization for Cloud & DevOps roles. Stand out to recruiters and pass ATS filters.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/1804944?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-ali-yellow text-ali-heading rounded-full font-bold text-sm hover:bg-ali-blue-dark hover:text-white hover:gap-3 hover:shadow-lg transition-all">
                Book session <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
            What People Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Testimonial 1 - Sumeet */}
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-ali-orange text-sm">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-gray-600 italic border-l-4 border-ali-blue pl-4 py-2 bg-ali-cream/50 rounded-r-lg">
                "I had a wonderful session with Vamsi, his insights regarding DevOps and associated tools and technologies are very valuable."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-orange rounded-full flex items-center justify-center text-white font-bold text-sm">SK</div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Sumeet Khastgir</p>
                  <p className="text-xs text-gray-500">Dec 2025</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Mariia */}
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-ali-orange text-sm">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-gray-600 italic border-l-4 border-ali-orange pl-4 py-2 bg-ali-cream/50 rounded-r-lg">
                "I successfully passed last technical interview. Thank you for your recommendation to try to behave as I am already middle... I am so excited and grateful!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-blue rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Mariia</p>
                  <p className="text-xs text-gray-500">Aspiring DevOps Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-xl transition-all">
              Start your journey <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section — Compact */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-ali-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-ali-blue-dark mx-auto rounded-full"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 mb-14">
            {/* Left Column - What I Do */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-ali-blue-dark">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-ali-blue-dark rounded-lg flex items-center justify-center">
                  <Terminal size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-ali-heading">What I Do</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-5 text-sm">
                Designing and delivering a production <span className="font-bold text-ali-heading">ML/LLM platform</span> for <span className="font-bold text-ali-blue-dark">LSEG × Microsoft UK</span> on Azure — spanning the full lifecycle of financial models from development to monitoring, with security-first design for regulated environments.
              </p>

              <div className="bg-ali-blue/5 rounded-xl p-4 mb-5">
                <p className="text-xs font-bold text-ali-blue-dark mb-1 uppercase tracking-wide">Specialization</p>
                <p className="text-gray-700 text-sm">Azure AKS · Terraform · GitLab CI/CD · Python/FastAPI · API Automation · Security-first Architecture</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-ali-blue-dark mt-0.5 text-sm">✓</span>
                  <p className="text-sm text-gray-700"><strong>7 Azure Certs</strong> incl. Solutions Architect Expert</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ali-blue-dark mt-0.5 text-sm">✓</span>
                  <p className="text-sm text-gray-700"><strong>2 EPAM AI Certifications</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ali-orange mt-0.5 text-sm">★</span>
                  <p className="text-sm text-gray-700"><strong>Microsoft Copilot Champion</strong> & <strong>EPAM AI Ambassador</strong></p>
                </div>
              </div>
            </div>

            {/* Right Column - The Journey */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-ali-orange">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-ali-orange rounded-lg flex items-center justify-center">
                  <Cloud size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-ali-heading">The Journey</h3>
              </div>

              <div className="bg-ali-orange/5 rounded-xl p-4 mb-5">
                <p className="text-sm text-gray-700">
                  <span className="font-bold">🇮🇳 India → 🇵🇱 Poland</span> — Working in EU since 2022. Thriving in multicultural, distributed teams across global financial institutions.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5 text-sm">
                <span className="font-bold">Manual Tester</span> → <span className="font-bold">Automation</span> → <span className="font-bold">DevOps</span> → <span className="font-bold">SRE</span> → <span className="font-bold">Platform Eng.</span> → <span className="font-bold text-ali-orange">Cloud/AI</span>
              </p>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {['LSEG', 'IMF', 'WTW', 'UBS', 'Corteva', 'Microsoft'].map((company) => (
                  <div key={company} className="bg-ali-cream p-2 rounded-lg text-center">
                    <p className="font-bold text-xs text-ali-heading">{company}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-ali-heading">150+ global technical interviews</span> conducted · EPAM Poland Ambassador 2023
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Career Highlights */}
          <div className="bg-gradient-to-r from-ali-blue/5 to-ali-orange/5 rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold mb-5 flex items-center gap-2">
                  <span className="text-2xl">🏆</span> Certifications
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-ali-blue-dark mt-0.5">✓</span>
                    <span><strong>Azure Solutions Architect Expert</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ali-blue-dark mt-0.5">✓</span>
                    <span>7 Active Azure Certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ali-blue-dark mt-0.5">✓</span>
                    <span>2 EPAM AI Certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ali-blue-dark mt-0.5">✓</span>
                    <span>Engineering Management Essentials</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-5 flex items-center gap-2">
                  <span className="text-2xl">💼</span> Career Highlights
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-ali-orange mt-0.5">►</span>
                    <span>Lead DevOps for <strong>LSEG × Microsoft</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ali-orange mt-0.5">►</span>
                    <span>Led SRE at <strong>IMF iData</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ali-orange mt-0.5">►</span>
                    <span>Azure migration for <strong>Willis Towers Watson</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ali-orange mt-0.5">►</span>
                    <span>Cloud migration for <strong>UBS Switzerland</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section — Compact */}
      <section id="resources" className="py-20 bg-gradient-to-b from-ali-cream to-ali-yellow/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-3">🎁 Free Resources</h2>
            <p className="text-gray-500 text-lg">Grab these tools to accelerate your career.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://vamsipenmetsa.gumroad.com/l/ryfhqh" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-ali-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-ali-blue/20 transition-colors">
                <Code size={32} className="text-ali-blue-dark" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 group-hover:text-ali-blue-dark transition-colors">GitHub Copilot Visual Guide</h3>
                <p className="text-sm text-gray-500">Master AI-powered coding with prompting strategies</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-ali-yellow/20 text-yellow-800 rounded-full flex-shrink-0">FREE</span>
            </a>

            <a href="https://vamsipenmetsa.gumroad.com/l/knioda" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-ali-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-ali-orange/20 transition-colors">
                <Cloud size={32} className="text-ali-orange" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 group-hover:text-ali-orange transition-colors">Kubernetes Cheat Sheet</h3>
                <p className="text-sm text-gray-500">Complete K8s reference — basics to advanced</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-ali-yellow/20 text-yellow-800 rounded-full flex-shrink-0">FREE</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section — Clean */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Ready to <span className="text-ali-orange">Level Up?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Whether it's career guidance, resume help, or DevOps mentorship — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-xl transition-all">
              <Calendar size={20} />
              Book a Session
            </a>
            <a href="mailto:vamsivarmapenmatsa@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ali-heading border-2 border-gray-200 rounded-full font-bold hover:border-ali-orange hover:shadow-lg transition-all">
              <Mail size={20} />
              Email Me
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-5">
            <a href="https://github.com/vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-ali-heading hover:text-white hover:scale-110 transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://medium.com/@vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:scale-110 transition-all">
              <BookOpen size={20} />
            </a>
            <a href="https://www.instagram.com/vamsipenmetsa7" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-110 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer — Minimal */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2026 Vamsi Penmetsa. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#services" className="hover:text-ali-orange transition-colors">Services</a>
              <a href="#about" className="hover:text-ali-orange transition-colors">About</a>
              <a href="#resources" className="hover:text-ali-orange transition-colors">Resources</a>
              <a href="https://linkedin.openinapp.co/groups-13986647" target="_blank" rel="noopener noreferrer" className="hover:text-ali-orange transition-colors">Community</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
