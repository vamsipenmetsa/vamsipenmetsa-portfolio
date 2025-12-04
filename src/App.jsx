import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Send, BookOpen, Cloud, Terminal, Code, ChevronDown, Instagram, Users, ExternalLink, Calendar } from 'lucide-react';

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
            <a href="#resources" className="font-sans font-medium hover:text-ali-orange transition-colors">Resources</a>
            <a href="#experience" className="font-sans font-medium hover:text-ali-orange transition-colors">Experience</a>
            <a href="/vamsipenmetsa-portfolio/links" className="font-sans font-medium hover:text-ali-blue-dark transition-colors">Links</a>
            <a href="#contact" className="px-6 py-2.5 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-lg transition-all transform hover:scale-105 shadow-sm">
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
            <div className="relative w-80 h-80 md:w-[550px] md:h-[550px]">
              <img
                src="./vamsiPenmetsa.png"
                alt="Vamsi Penmetsa"
                className="w-full h-full object-contain z-10 relative"
              />
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

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap">
              <a href="#resources" className="px-8 py-3 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-xl transition-all shadow-lg animate-pulse">
                🎁 Free Resources
              </a>
              <a href="#about" className="px-8 py-3 bg-white text-ali-heading border-2 border-ali-orange rounded-full font-bold hover:border-ali-blue-dark hover:bg-ali-blue-dark hover:text-white hover:shadow-lg transition-all">
                More About Me
              </a>
              <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-3 bg-[#0A66C2] text-white rounded-full font-bold hover:bg-[#004182] hover:shadow-xl transition-all">
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Can I Help You Section */}
      <section id="experience" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Scribble */}
        <div className="absolute top-10 right-20 text-ali-yellow/20">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,40 Q20,10 40,20 T70,40 Q60,70 40,60 T10,40" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              How Can <span className="relative inline-block">
                I Help You?
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 7.00001C45.9184 3.66668 156.667 -2.33332 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Career Mentorship */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-ali-blue hover:bg-ali-blue/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-ali-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ali-blue group-hover:scale-110 transition-all">
                <svg className="w-12 h-12 text-ali-blue-dark group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-ali-blue-dark transition-colors">Career Mentorship</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get personalized guidance for your DevOps/Cloud career. Mock interviews, resume reviews, and career strategy sessions based on 150+ interviews conducted.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-ali-blue-dark text-white rounded-full font-bold hover:bg-ali-orange hover:gap-3 hover:shadow-lg transition-all">
                Get started <ArrowRight size={20} />
              </a>
            </div>

            {/* Card 2: How to Leverage LinkedIn */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-ali-orange hover:bg-ali-orange/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-ali-orange/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ali-orange group-hover:scale-110 transition-all">
                <svg className="w-12 h-12 text-ali-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-ali-orange transition-colors">How to Leverage LinkedIn & Transition Career?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Learn strategies to optimize your LinkedIn profile, build your professional network, and successfully transition to a cloud/DevOps career.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/137043?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:gap-3 hover:shadow-lg transition-all">
                Get started <ArrowRight size={20} />
              </a>
            </div>

            {/* Card 3: Resume Review & Optimisation */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-ali-yellow hover:bg-ali-yellow/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-ali-yellow/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ali-yellow group-hover:scale-110 transition-all">
                <svg className="w-12 h-12 text-yellow-700 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-yellow-700 transition-colors">Resume Review & Optimisation for Cloud & DevOps</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get your resume professionally reviewed and optimized for cloud and DevOps roles. Stand out in the competitive tech job market.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/1804944?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-ali-yellow text-ali-heading rounded-full font-bold hover:bg-ali-blue-dark hover:text-white hover:gap-3 hover:shadow-lg transition-all">
                Get started <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story & Socials Section (Replaces Newsletter) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24 relative">
        {/* Hand drawn arrow */}
        <div className="absolute -top-16 right-0 md:-right-12 hidden md:block text-ali-orange transform rotate-12">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10,10 Q50,50 20,80" strokeLinecap="round" />
            <path d="M20,80 L30,70 M20,80 L10,70" strokeLinecap="round" />
          </svg>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12">
          {/* Left: Testimonial */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Success Stories</h2>
              <div className="bg-ali-yellow/30 p-2 rounded-full">
                <span className="text-2xl">⭐</span>
              </div>
            </div>

            {/* Testimonial 1 - Sumeet */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-ali-orange">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <blockquote className="text-base text-gray-600 italic border-l-4 border-ali-blue pl-4 py-2 bg-ali-cream/50 rounded-r-lg">
                "I had a wonderful session with Vamsi, his insights regarding DevOps and associated tools and technologies are very valuable."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-orange rounded-full flex items-center justify-center text-white font-bold text-sm">SK</div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Sumeet Khastgir</p>
                  <p className="text-xs text-gray-500">1st Dec, 2025</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Mariia */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-ali-orange">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <blockquote className="text-base text-gray-600 italic border-l-4 border-ali-orange pl-4 py-2 bg-ali-cream/50 rounded-r-lg">
                "Hi Vamsi! I am writing back to tell you that I successfully passed last technical interview. Thank you for your recommendation to try to behave as I am already middle... I am sure there's a lot of work ahead, but I am so excited and grateful!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-blue rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Mariia</p>
                  <p className="text-xs text-gray-500">Aspiring DevOps Engineer</p>
                </div>
              </div>
            </div>

            <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-bold text-ali-blue-dark hover:underline mt-4">
              Read more stories ➔
            </a>
          </div>

          {/* Right: Connect & Resources Grid */}
          <div className="w-full md:w-5/12 space-y-6">
            <h3 className="text-xl font-bold font-serif mb-4">Connect & Learn</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Socials */}
              <a href="https://www.linkedin.com/in/vamsipenmetsa" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-ali-cream hover:bg-ali-blue/10 transition-colors border border-transparent hover:border-ali-blue/30 group">
                <Linkedin size={20} className="text-[#0077b5]" />
                <span className="text-sm font-medium group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
              </a>
              <a href="https://github.com/vamsipenmetsa" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-ali-cream hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-300 group">
                <Github size={20} className="text-gray-800" />
                <span className="text-sm font-medium group-hover:text-gray-800 transition-colors">GitHub</span>
              </a>
              <a href="https://medium.com/@vamsipenmetsa" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-ali-cream hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-300 group">
                <BookOpen size={20} className="text-black" />
                <span className="text-sm font-medium group-hover:text-black transition-colors">Medium</span>
              </a>
              <a href="https://www.instagram.com/vamsipenmetsa7" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-ali-cream hover:bg-pink-50 transition-colors border border-transparent hover:border-pink-200 group">
                <Instagram size={20} className="text-[#E4405F]" />
                <span className="text-sm font-medium group-hover:text-[#E4405F] transition-colors">Instagram</span>
              </a>

              {/* Communities */}
              <a href="https://linkedin.openinapp.co/groups-13986647" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-ali-cream hover:bg-ali-blue/10 transition-colors border border-transparent hover:border-ali-blue/30 group col-span-full">
                <Users size={20} className="text-ali-blue-dark" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium group-hover:text-ali-blue-dark transition-colors">DevOps Pros Group</span>
                  <span className="text-xs text-gray-500">15,000+ Members</span>
                </div>
              </a>

              {/* Services */}
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-ali-orange/10 hover:bg-ali-orange/20 transition-colors border border-transparent hover:border-ali-orange/30 group col-span-full">
                <Calendar size={20} className="text-ali-orange" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-ali-heading">1:1 Mentorship</span>
                  <span className="text-xs text-gray-600">Mock Interviews & Guidance</span>
                </div>
                <ExternalLink size={16} className="ml-auto text-ali-orange opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About / Professional Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-ali-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-ali-blue-dark mx-auto rounded-full"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column - The Professional Side */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-l-4 border-ali-blue-dark">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-ali-blue-dark rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-ali-heading">The Professional Side</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a <span className="font-bold text-ali-heading">Lead DevOps Engineer</span> deploying Large Language Models (LLMs) as a service on <span className="font-bold">Azure AKS and PaaS</span> for the <span className="font-bold text-ali-blue-dark">London Stock Exchange Group (LSEG)</span> and its UK financial clients.
              </p>

              <div className="bg-ali-blue/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-bold text-ali-blue-dark mb-2">STRATEGIC PARTNERSHIP</p>
                <p className="text-gray-700">Part of the high-profile <span className="font-bold">LSEG × Microsoft UK Partnership</span></p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ali-blue-dark rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-ali-heading">7 Active Azure Certifications</p>
                    <p className="text-sm text-gray-600">Including Azure Solutions Architect Expert</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ali-blue-dark rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-ali-heading">2 EPAM AI Certifications</p>
                    <p className="text-sm text-gray-600">Specialized in AI/ML infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ali-orange rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-ali-heading">Microsoft M365 Copilot Champion</p>
                    <p className="text-sm text-gray-600">Pioneering AI productivity tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ali-orange rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-ali-heading">EPAM AI Ambassador</p>
                    <p className="text-sm text-gray-600">Leading AI adoption initiatives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - The Journey */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-l-4 border-ali-orange">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-ali-orange rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-ali-heading">The Journey</h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Successfully navigated from <span className="font-bold">Manual Tester</span> → <span className="font-bold">Automation Engineer</span> → <span className="font-bold">DevOps</span> → <span className="font-bold">SRE</span> → <span className="font-bold">Platform Engineer</span> → <span className="font-bold text-ali-orange">Cloud Engineer</span>
              </p>

              <div className="bg-ali-orange/5 rounded-xl p-5 mb-6">
                <p className="text-sm font-bold text-ali-orange mb-2">INDUSTRY EXPERIENCE</p>
                <p className="text-gray-700">Worked with industry leaders</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gradient-to-br from-ali-cream to-white p-3 rounded-lg border border-gray-100">
                  <p className="font-bold text-sm text-ali-heading">IMF</p>
                </div>
                <div className="bg-gradient-to-br from-ali-cream to-white p-3 rounded-lg border border-gray-100">
                  <p className="font-bold text-sm text-ali-heading">WTW</p>
                </div>
                <div className="bg-gradient-to-br from-ali-cream to-white p-3 rounded-lg border border-gray-100">
                  <p className="font-bold text-sm text-ali-heading">Wolters Kluwer</p>
                </div>
                <div className="bg-gradient-to-br from-ali-cream to-white p-3 rounded-lg border border-gray-100">
                  <p className="font-bold text-sm text-ali-heading">Corteva</p>
                </div>
                <div className="bg-gradient-to-br from-ali-cream to-white p-3 rounded-lg border border-gray-100">
                  <p className="font-bold text-sm text-ali-heading">UBS Swiss</p>
                </div>
                <div className="bg-gradient-to-br from-ali-cream to-white p-3 rounded-lg border border-gray-100">
                  <p className="font-bold text-sm text-ali-heading">Microsoft</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold text-ali-heading">Expertise:</span> Azure DevOps, AKS, SRE, Terraform, AI/ML infrastructure with architecture design & team management using ITIL v4, Scrum, Agile
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-ali-yellow rounded-full"></div>
                  <p>Thriving in multicultural environments & distributed teams</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Expertise Highlights - Horizontal Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-center mb-8">Core Competencies</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-white rounded-xl p-5 border-2 border-ali-blue/20 hover:border-ali-blue hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-ali-blue/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-5 h-5 text-ali-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm text-center text-ali-heading mb-1">Azure Infrastructure</h4>
                <p className="text-xs text-gray-600 text-center">Networking, Storage, Compute</p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-ali-orange/20 hover:border-ali-orange hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-ali-orange/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-5 h-5 text-ali-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm text-center text-ali-heading mb-1">DevOps Automation</h4>
                <p className="text-xs text-gray-600 text-center">CI/CD, IaC, Pipelines</p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-ali-yellow/30 hover:border-ali-yellow hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-ali-yellow/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-5 h-5 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm text-center text-ali-heading mb-1">SRE Excellence</h4>
                <p className="text-xs text-gray-600 text-center">Reliability, Monitoring</p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-ali-blue/20 hover:border-ali-blue hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-ali-blue/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-5 h-5 text-ali-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm text-center text-ali-heading mb-1">AI Integration</h4>
                <p className="text-xs text-gray-600 text-center">GenAI, Copilot, Agents</p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-ali-orange/20 hover:border-ali-orange hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-ali-orange/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-5 h-5 text-ali-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm text-center text-ali-heading mb-1">Cloud Architecture</h4>
                <p className="text-xs text-gray-600 text-center">Design, Implementation</p>
              </div>
            </div>
          </div>

          {/* Key Expertise Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-ali-cream rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-ali-blue">
              <div className="w-12 h-12 bg-ali-blue/20 text-ali-blue-dark rounded-xl flex items-center justify-center mb-6">
                <Cloud size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud & AI Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Expert in Azure AKS, PaaS, and deploying LLMs for financial services. Leading high-profile LSEG × Microsoft projects with scalable, compliant infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-ali-blue/10 text-ali-blue-dark rounded-full font-medium">Azure AKS</span>
                <span className="text-xs px-3 py-1 bg-ali-blue/10 text-ali-blue-dark rounded-full font-medium">Terraform</span>
                <span className="text-xs px-3 py-1 bg-ali-blue/10 text-ali-blue-dark rounded-full font-medium">LLM Deployment</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-ali-cream rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-ali-orange">
              <div className="w-12 h-12 bg-ali-orange/20 text-ali-orange rounded-xl flex items-center justify-center mb-6">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">DevOps & SRE Excellence</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                6+ years journey from Manual Tester to Lead Systems Engineer. Pioneered automation, ITIL v4 implementation, and incident response for mission-critical systems at IMF, WTW, and UBS.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-ali-orange/10 text-ali-orange rounded-full font-medium">CI/CD</span>
                <span className="text-xs px-3 py-1 bg-ali-orange/10 text-ali-orange rounded-full font-medium">SRE</span>
                <span className="text-xs px-3 py-1 bg-ali-orange/10 text-ali-orange rounded-full font-medium">ITIL v4</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-ali-cream rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-ali-yellow">
              <div className="w-12 h-12 bg-ali-yellow/20 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Leadership & Education</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                EPAM AI Ambassador and Microsoft Copilot Champion. Conducted 150+ technical interviews, mentor aspiring engineers, and create educational content for the DevOps community.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-ali-yellow/20 text-yellow-700 rounded-full font-medium">Mentorship</span>
                <span className="text-xs px-3 py-1 bg-ali-yellow/20 text-yellow-700 rounded-full font-medium">Interviewing</span>
                <span className="text-xs px-3 py-1 bg-ali-yellow/20 text-yellow-700 rounded-full font-medium">Content Creation</span>
              </div>
            </div>
          </div>

          {/* Certifications & Recognition */}
          <div className="bg-gradient-to-r from-ali-blue/5 to-ali-orange/5 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  Certifications & Recognition
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-ali-blue-dark mt-1">✓</span>
                    <span><strong>Microsoft Certified:</strong> Azure Solutions Architect Expert</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ali-blue-dark mt-1">✓</span>
                    <span>7 Active Azure Certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ali-blue-dark mt-1">✓</span>
                    <span>2 EPAM AI Certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ali-blue-dark mt-1">✓</span>
                    <span>Engineering Management Essentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ali-orange mt-1">★</span>
                    <span><strong>EPAM Poland Ambassador</strong> (2023)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">💼</span>
                  Career Highlights
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-ali-orange mt-1">►</span>
                    <span>Lead DevOps for <strong>LSEG × Microsoft Partnership</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ali-orange mt-1">►</span>
                    <span>Led SRE at <strong>IMF iData</strong> product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ali-orange mt-1">►</span>
                    <span>Azure DevOps migration for <strong>Willis Tower Watson</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ali-orange mt-1">►</span>
                    <span>Platform Engineer at <strong>Corteva Agrisciences</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ali-orange mt-1">►</span>
                    <span>Cloud migration for <strong>UBS Switzerland</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-24 bg-gradient-to-b from-ali-cream to-ali-yellow/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-ali-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-ali-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-20 text-ali-orange/10">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,50 L30,30 L50,40 L70,20 L80,50 L60,70 L40,60 L20,80 Z" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="inline-block mb-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 relative inline-block">
                  🎁 Free Resources
                  <svg className="absolute w-full h-4 -bottom-1 left-0 text-ali-orange" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00025 7.00001C45.9184 3.66668 156.667 -2.33332 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </h2>
              </div>
              <p className="text-xl text-gray-600 font-bold">⚡ Limited: First 100 people only • <span className="text-ali-orange text-2xl">$0</span></p>
              <p className="text-lg text-gray-500 mt-2">Tools to help you grow in your career.</p>
            </div>
            <a href="https://vamsipenmetsa.gumroad.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-ali-blue-dark text-white rounded-full font-bold hover:bg-ali-orange hover:shadow-lg transition-all">
              View all resources <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://vamsipenmetsa.gumroad.com/l/ryfhqh" target="_blank" className="group bg-white rounded-3xl p-2 hover:shadow-xl hover:bg-ali-blue/5 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-ali-blue/10 rounded-2xl h-48 flex items-center justify-center mb-6 group-hover:bg-ali-blue/20 transition-colors">
                <Code size={64} className="text-ali-blue-dark" />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-ali-blue-dark transition-colors">GitHub Copilot Visual Guide</h3>
                <p className="text-gray-600 mb-4">Prompting Made Simple. Master AI coding assistance with this visual guide.</p>
                <span className="inline-block px-4 py-1 bg-ali-yellow/20 text-yellow-800 text-sm font-bold rounded-full">Free Download</span>
              </div>
            </a>

            <a href="https://vamsipenmetsa.gumroad.com/l/knioda" target="_blank" className="group bg-white rounded-3xl p-2 hover:shadow-xl hover:bg-ali-orange/5 transition-all duration-300 transform hover:-translate-y-2">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-ali-cream relative overflow-hidden">
        {/* Decorative Scribble */}
        <div className="absolute bottom-20 right-10 text-ali-blue/10">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="3" />
            <path d="M30,60 L90,60 M60,30 L60,90" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's <span className="relative inline-block">
              Connect
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-ali-orange" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 7.00001C45.9184 3.66668 156.667 -2.33332 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions about DevOps, Cloud, or career growth? Let's connect and discuss how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <a href="mailto:vamsivarmapenmatsa@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-xl transition-all transform hover:scale-105">
              <Mail size={24} />
              <span>Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-xl transition-all transform hover:scale-105">
              <Linkedin size={24} />
              <span>Connect on LinkedIn</span>
            </a>
            <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A66C2] text-white rounded-full font-bold hover:bg-[#004182] hover:shadow-xl transition-all transform hover:scale-105">
              <Linkedin size={24} />
              <span>Follow on LinkedIn</span>
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-ali-heading hover:text-white hover:scale-110 transition-all shadow-md">
              <Github size={24} />
            </a>
            <a href="https://medium.com/@vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:scale-110 transition-all shadow-md">
              <BookOpen size={24} />
            </a>
            <a href="https://www.instagram.com/vamsipenmetsa7" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-110 transition-all shadow-md">
              <Instagram size={24} />
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
                <li><a href="https://linkedin.openinapp.co/groups-13986647" target="_blank" className="hover:text-ali-orange">LinkedIn Group</a></li>
                <li><a href="https://www.instagram.com/international_friends_wawa" target="_blank" className="hover:text-ali-orange">Warsaw Friends</a></li>
                <li><a href="https://www.instagram.com/poland_streets" target="_blank" className="hover:text-ali-orange">Poland Streets</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2025 Vamsi Penmetsa. All rights reserved.</p>
            <p>Designed with <span className="text-red-400">♥</span> by Vamsi Penmetsa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
