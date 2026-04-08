import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Mail, Linkedin, Github, BookOpen, Instagram, Users, Award, Bot, Server, ArrowRight } from 'lucide-react';

function Links() {
  return (
    <div className="min-h-screen bg-ali-cream text-ali-text">

      {/* Profile Header */}
      <div className="pt-12 pb-8 px-4 max-w-lg mx-auto text-center">
        <img
          src="./vamsi-profile.jpg"
          alt="Vamsi Penmetsa"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto object-cover object-[center_20%] mb-4"
        />
        <h1 className="text-2xl font-serif font-bold text-ali-heading">Vamsi Penmetsa</h1>
        <p className="text-xs font-bold tracking-widest uppercase text-ali-blue-dark mt-1">Lead DevOps & Platform Engineer</p>
        <p className="text-xs text-gray-500 mt-2">LSEG × Microsoft · 7 Azure Certs · 🇮🇳 → 🇵🇱</p>
      </div>

      {/* Links */}
      <div className="max-w-lg mx-auto px-4 pb-16 space-y-3">

        {/* Primary CTA */}
        <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer"
          className="block w-full text-center py-3.5 bg-ali-orange text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity shadow-md">
          🚀 Book a 1:1 Session
        </a>

        <a href="/vamsipenmetsa-portfolio"
          className="block w-full text-center py-3 bg-white text-ali-heading rounded-2xl font-bold text-sm border-2 border-gray-200 hover:border-ali-orange transition-colors">
          View Full Portfolio
        </a>

        {/* Divider — Services */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-4 pb-1">Services</p>

        <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <div className="w-10 h-10 bg-ali-orange rounded-xl flex items-center justify-center flex-shrink-0">
            <Calendar size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">Land Your Next Cloud Role</p>
            <p className="text-xs text-gray-500">Mock interviews & career guidance</p>
          </div>
          <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
        </a>

        <a href="https://topmate.io/vamsipenmetsa/137043?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <div className="w-10 h-10 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0">
            <Linkedin size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">Transition to Cloud/DevOps</p>
            <p className="text-xs text-gray-500">LinkedIn optimization & career roadmap</p>
          </div>
          <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
        </a>

        <a href="https://topmate.io/vamsipenmetsa/1804944?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <div className="w-10 h-10 bg-ali-blue-dark rounded-xl flex items-center justify-center flex-shrink-0">
            <Award size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">Resume That Gets Interviews</p>
            <p className="text-xs text-gray-500">Optimized for Cloud & DevOps roles</p>
          </div>
          <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
        </a>

        {/* Divider — Free Resources */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-4 pb-1">Free Resources</p>

        <a href="https://vamsipenmetsa.gumroad.com/l/ryfhqh" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all relative">
          <div className="w-10 h-10 bg-ali-blue-dark rounded-xl flex items-center justify-center flex-shrink-0">
            <Bot size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">GitHub Copilot Visual Guide</p>
            <p className="text-xs text-gray-500">Master AI-powered coding</p>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 bg-ali-yellow text-ali-heading rounded-full flex-shrink-0">FREE</span>
        </a>

        <a href="https://vamsipenmetsa.gumroad.com/l/knioda" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all relative">
          <div className="w-10 h-10 bg-ali-orange rounded-xl flex items-center justify-center flex-shrink-0">
            <Server size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">Kubernetes Cheat Sheet</p>
            <p className="text-xs text-gray-500">From basics to advanced K8s</p>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 bg-ali-yellow text-ali-heading rounded-full flex-shrink-0">FREE</span>
        </a>

        {/* Divider — Testimonials */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-4 pb-1">What People Say</p>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 space-y-4">
          <div>
            <p className="text-xs text-ali-orange mb-1">⭐⭐⭐⭐⭐</p>
            <p className="text-sm text-gray-600 italic">"His insights regarding DevOps tools and technologies are very valuable."</p>
            <p className="text-xs text-gray-400 mt-1.5"><strong className="text-ali-heading">Sumeet K.</strong> · Dec 2025</p>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-ali-orange mb-1">⭐⭐⭐⭐⭐</p>
            <p className="text-sm text-gray-600 italic">"I successfully passed my technical interview. I am so excited and grateful!"</p>
            <p className="text-xs text-gray-400 mt-1.5"><strong className="text-ali-heading">Mariia</strong> · DevOps Engineer</p>
          </div>
        </div>

        {/* Divider — Connect */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-4 pb-1">Connect</p>

        <div className="grid grid-cols-2 gap-3">
          <a href="https://www.linkedin.com/in/vamsipenmetsa" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-gray-100 hover:shadow-md transition-all">
            <Linkedin size={18} className="text-[#0A66C2]" />
            <span className="text-sm font-bold text-ali-heading">LinkedIn</span>
          </a>
          <a href="https://github.com/vamsipenmetsa" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-gray-100 hover:shadow-md transition-all">
            <Github size={18} className="text-gray-800" />
            <span className="text-sm font-bold text-ali-heading">GitHub</span>
          </a>
          <a href="https://medium.com/@vamsipenmetsa" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-gray-100 hover:shadow-md transition-all">
            <BookOpen size={18} className="text-gray-800" />
            <span className="text-sm font-bold text-ali-heading">Medium</span>
          </a>
          <a href="mailto:vamsivarmapenmatsa@gmail.com"
            className="flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-gray-100 hover:shadow-md transition-all">
            <Mail size={18} className="text-ali-orange" />
            <span className="text-sm font-bold text-ali-heading">Email</span>
          </a>
        </div>

        {/* Divider — Communities */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-4 pb-1">Communities</p>

        <a href="https://linkedin.openinapp.co/groups-13986647" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <div className="w-10 h-10 bg-ali-blue-dark rounded-xl flex items-center justify-center flex-shrink-0">
            <Users size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">DevOps Professionals Group</p>
            <p className="text-xs text-gray-500">15,000+ members</p>
          </div>
          <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
        </a>

        <a href="https://www.instagram.com/poland_streets" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <div className="w-10 h-10 bg-[#E4405F] rounded-xl flex items-center justify-center flex-shrink-0">
            <Instagram size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">Poland Streets 📸</p>
            <p className="text-xs text-gray-500">Street photography · 3M+ views</p>
          </div>
          <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
        </a>

        <a href="https://www.instagram.com/international_friends_wawa" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <div className="w-10 h-10 bg-[#E4405F] rounded-xl flex items-center justify-center flex-shrink-0">
            <Instagram size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">International Friends Warsaw</p>
            <p className="text-xs text-gray-500">Community events & meetups</p>
          </div>
          <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
        </a>

        {/* Back */}
        <div className="text-center pt-6">
          <a href="/vamsipenmetsa-portfolio" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-ali-orange transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
