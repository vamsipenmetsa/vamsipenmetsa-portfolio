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
                src="/vamsiPenmetsa.png"
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

      {/* How Can I Help You Section */}
      <section className="py-20 bg-white">
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
            <div className="bg-ali-cream rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-20 h-20 bg-ali-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ali-blue/30 transition-colors">
                <svg className="w-12 h-12 text-ali-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Career Mentorship</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get personalized guidance for your DevOps/Cloud career. Mock interviews, resume reviews, and career strategy sessions based on 150+ interviews conducted.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" className="inline-flex items-center gap-2 text-ali-blue-dark font-bold hover:gap-3 transition-all">
                Get started <ArrowRight size={20} />
              </a>
            </div>

            {/* Card 2: DevOps Consulting */}
            <div className="bg-ali-cream rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-20 h-20 bg-ali-orange/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ali-orange/30 transition-colors">
                <svg className="w-12 h-12 text-ali-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">DevOps Consulting</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Azure AKS, Terraform, CI/CD pipelines, and cloud architecture design. Leverage my experience from LSEG, IMF, and Fortune 500 companies.
              </p>
              <a href="https://openinapp.link/aq10m" target="_blank" className="inline-flex items-center gap-2 text-ali-orange font-bold hover:gap-3 transition-all">
                Get started <ArrowRight size={20} />
              </a>
            </div>

            {/* Card 3: AI/LLM Guidance */}
            <div className="bg-ali-cream rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-20 h-20 bg-ali-yellow/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ali-yellow/40 transition-colors">
                <svg className="w-12 h-12 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">AI/LLM Guidance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Learn how to deploy and manage LLMs in production. GitHub Copilot mastery, AI tooling, and productivity enhancement strategies.
              </p>
              <a href="https://vamsipenmetsa.gumroad.com/" target="_blank" className="inline-flex items-center gap-2 text-yellow-700 font-bold hover:gap-3 transition-all">
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Success Story</h2>
              <div className="bg-ali-yellow/30 p-2 rounded-full">
                <span className="text-2xl">⭐</span>
              </div>
            </div>

            <blockquote className="text-lg text-gray-600 italic border-l-4 border-ali-orange pl-4 py-2 bg-ali-cream/50 rounded-r-lg">
              "Hi Vamsi! I am writing back to tell you that I successfully passed last technical interview. Thank you for your recommendation to try to behave as I am already middle... I am sure there’s a lot of work ahead, but I am so excited and grateful!"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-ali-blue rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
              <div>
                <p className="font-bold text-ali-heading">Mariia</p>
                <p className="text-sm text-gray-500">Aspiring DevOps Engineer</p>
              </div>
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" className="ml-auto text-sm font-bold text-ali-blue-dark hover:underline">
                Read full story ➔
              </a>
            </div>
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
