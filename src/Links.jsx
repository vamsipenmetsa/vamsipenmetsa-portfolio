import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Mail, Linkedin, Github, BookOpen, Instagram, Users, Award, ArrowRight, Megaphone } from 'lucide-react';

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
        <h1 className="text-2xl font-serif font-bold text-ali-heading relative inline-block">
          Vamsi Penmetsa
          <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-orange" viewBox="0 0 160 9" fill="none" aria-hidden="true">
            <path d="M2 7C37 3.7 126 -2.3 158 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </h1>
        <p className="text-xs font-bold tracking-widest uppercase text-ali-blue-dark mt-1">AI Systems Architect | Building MaaS</p>
        <p className="text-xs text-gray-500 mt-2">LSEG × Microsoft · 7X Azure Certified · GH-300 · 🇮🇳 → 🇵🇱</p>
        <div className="flex justify-center gap-4 mt-3 text-center">
          <div><p className="text-sm font-bold text-ali-heading">30.5K</p><p className="text-[10px] text-gray-400">LinkedIn</p></div>
          <div className="border-x border-gray-100 px-4"><p className="text-sm font-bold text-ali-heading">4.5K</p><p className="text-[10px] text-gray-400">Newsletter</p></div>
          <div><p className="text-sm font-bold text-ali-heading">2M+</p><p className="text-[10px] text-gray-400">Impressions/yr</p></div>
        </div>
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

        {/* Brand Collaborations — Passionfroot */}
        <a href="https://www.passionfroot.me/vamsi-penmetsa" target="_blank" rel="noopener noreferrer"
          className="block w-full rounded-2xl p-4 bg-gradient-to-r from-ali-orange to-purple-600 text-white hover:opacity-95 hover:-translate-y-0.5 transition-all shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Megaphone size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm relative inline-block pb-2">
                Brand Collaborations
                <svg className="absolute w-full h-3 bottom-0 left-0 text-ali-blue" viewBox="0 0 120 9" fill="none" aria-hidden="true">
                  <path d="M2 7C28 3.7 95 -2.3 118 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </p>
              <p className="text-xs text-white/80">Sponsorships · Partnerships · Promos</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-white/25 rounded-full flex-shrink-0">NEW</span>
          </div>
          <p className="text-xs text-white/90 pl-12">30.5K LinkedIn followers · 4.5K newsletter subscribers · <span className="font-bold">$300/package</span></p>
          <div className="flex items-center gap-1 pl-12 mt-2 text-xs font-bold text-white/90">
            View on Passionfroot <ArrowRight size={13} />
          </div>
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

        {/* Divider — Products & Resources */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-4 pb-1">Products & Resources</p>

        <a href="https://vamsipenmetsa.gumroad.com/l/claude" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border-2 border-green-500/40 hover:shadow-lg hover:-translate-y-0.5 transition-all relative">
          <div className="w-10 h-10 bg-ali-orange rounded-xl flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">Claude Exam Patterns EBook</p>
            <p className="text-xs text-gray-500">From the Breaking Down Claude in 30 Days series</p>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 bg-green-500 text-white rounded-full flex-shrink-0">FREE</span>
        </a>

        <a href="https://vamsipenmetsa.gumroad.com/l/linkedin" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border-2 border-green-500/40 hover:shadow-lg hover:-translate-y-0.5 transition-all relative">
          <div className="w-10 h-10 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0">
            <Linkedin size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">LinkedIn Zero-Cost Playbook</p>
            <p className="text-xs text-gray-500">Attract recruiters — free step-by-step guide</p>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 bg-green-500 text-white rounded-full flex-shrink-0">FREE</span>
        </a>

        <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7460975088108978176" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-[#0A66C2]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <div className="w-10 h-10 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0">
            <Linkedin size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-ali-heading">The Architect's Edge</p>
            <p className="text-xs text-gray-500">Weekly AI, cloud & platform engineering patterns</p>
          </div>
          <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
        </a>

        {/* Divider — Testimonials */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-4 pb-1 relative inline-block">
          What People Say
          <svg className="absolute w-full h-3 -bottom-0.5 left-0 text-ali-orange" viewBox="0 0 100 9" fill="none" aria-hidden="true">
            <path d="M2 7C23 3.7 79 -2.3 98 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </p>

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
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-ali-orange mb-1">⭐⭐⭐⭐⭐</p>
            <p className="text-sm text-gray-600 italic">"Clear 5-phase roadmap for my EU job search. Structured, no-fluff guidance. Highly recommend."</p>
            <p className="text-xs text-gray-400 mt-1.5"><strong className="text-ali-heading">Ram Kumar R</strong> · Cloud/DevOps</p>
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
            <p className="text-xs text-gray-500">30K+ DevOps professionals</p>
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
          <a href="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-ali-orange transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
