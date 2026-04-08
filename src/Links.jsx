import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Mail, Linkedin, Github, BookOpen, Instagram, Users, Award, Bot, Server, ArrowRight } from 'lucide-react';

function Links() {

  const LinkCard = ({ href, icon: Icon, bg, iconColor = "text-white", title, desc, badge }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
    >
      {badge && (
        <span className="absolute top-3 right-3 bg-ali-orange text-white text-xs font-bold px-2.5 py-0.5 rounded-full z-10">
          {badge}
        </span>
      )}
      <div className="flex items-center gap-4">
        <div className={`${bg} rounded-xl p-3.5 flex items-center justify-center min-w-[52px] min-h-[52px] group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
          <Icon className={iconColor} size={24} strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-bold text-base text-ali-heading group-hover:text-ali-orange transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500 font-sans mt-0.5 leading-snug">
            {desc}
          </p>
        </div>
        <ExternalLink className="text-gray-300 group-hover:text-ali-orange transition-colors ml-2 flex-shrink-0" size={18} />
      </div>
    </a>
  );

  const SectionHeader = ({ title, accent = "text-ali-blue" }) => (
    <div className="mb-6">
      <h2 className="text-xl font-serif font-bold text-ali-heading relative inline-block">
        {title}
        <svg className={`absolute w-full h-2 -bottom-1 left-0 ${accent}`} viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.00025 7.00001C45.9184 3.66668 156.667 -2.33332 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-ali-cream text-ali-text selection:bg-ali-orange selection:text-white">

      {/* Hero Profile */}
      <section className="pt-14 pb-10 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <div className="text-center relative">
          <div className="relative inline-block mb-5">
            <img
              src="./vamsi-profile.jpg"
              alt="Vamsi Penmetsa — Lead DevOps & Platform Engineer"
              className="w-28 h-28 rounded-full border-4 border-white shadow-xl mx-auto object-cover object-[center_20%] relative z-10 ring-4 ring-ali-blue/10"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-ali-heading mb-2">
            Vamsi Penmetsa
          </h1>
          <p className="text-sm font-bold tracking-wide uppercase text-ali-blue-dark mb-2">Lead DevOps & Platform Engineer</p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="text-xs font-bold px-2.5 py-1 bg-ali-blue/15 text-ali-blue-dark rounded-full">LSEG × Microsoft</span>
            <span className="text-xs font-bold px-2.5 py-1 bg-ali-orange/15 text-ali-orange rounded-full">7 Azure Certs</span>
            <span className="text-xs font-bold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">🇮🇳 → 🇵🇱</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-2.5 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-xl transition-all shadow-md text-sm">
              Book a 1:1 Session <ArrowRight size={16} className="ml-1.5" />
            </a>
            <a href="/vamsipenmetsa-portfolio" className="inline-flex items-center justify-center px-7 py-2.5 bg-white text-ali-heading border-2 border-gray-200 rounded-full font-bold hover:border-ali-orange hover:text-ali-orange transition-all text-sm">
              Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10">

        {/* SERVICES — First for conversion */}
        <section>
          <SectionHeader title="Services" accent="text-ali-orange" />
          <div className="space-y-3">
            <LinkCard
              href="https://topmate.io/vamsipenmetsa/1755002"
              icon={Calendar}
              bg="bg-gradient-to-br from-ali-orange to-ali-yellow"
              title="Land Your Next Cloud Role"
              desc="Mock interviews & career guidance — 150+ interviews conducted"
            />
            <LinkCard
              href="https://topmate.io/vamsipenmetsa/137043?utm_source=public_profile&utm_campaign=vamsipenmetsa"
              icon={Linkedin}
              bg="bg-[#0A66C2]"
              title="Transition to Cloud/DevOps"
              desc="LinkedIn optimization & career transition roadmap"
            />
            <LinkCard
              href="https://topmate.io/vamsipenmetsa/1804944?utm_source=public_profile&utm_campaign=vamsipenmetsa"
              icon={Award}
              bg="bg-gradient-to-br from-ali-blue-dark to-ali-blue"
              title="Resume That Gets Interviews"
              desc="Professional review optimized for Cloud & DevOps roles"
            />
          </div>
        </section>

        {/* FREE RESOURCES */}
        <section>
          <SectionHeader title="Free Resources" accent="text-ali-blue" />
          <div className="space-y-3">
            <LinkCard
              href="https://vamsipenmetsa.gumroad.com/l/ryfhqh"
              icon={Bot}
              bg="bg-gradient-to-br from-ali-blue-dark to-ali-blue"
              title="GitHub Copilot Visual Guide"
              desc="Master AI-powered coding with prompting strategies"
              badge="FREE"
            />
            <LinkCard
              href="https://vamsipenmetsa.gumroad.com/l/knioda"
              icon={Server}
              bg="bg-gradient-to-br from-ali-orange to-ali-yellow"
              title="Kubernetes Cheat Sheet"
              desc="Complete K8s reference — basics to advanced"
              badge="FREE"
            />
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-serif font-bold text-ali-heading mb-5">What People Say</h2>

          <div className="space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-ali-orange text-xs">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-sm text-gray-600 italic border-l-2 border-ali-blue pl-3 py-1">
                "His insights regarding DevOps and associated tools and technologies are very valuable."
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-ali-orange rounded-full flex items-center justify-center text-white font-bold text-[10px]">SK</div>
                <p className="text-xs text-gray-500"><strong className="text-ali-heading">Sumeet Khastgir</strong> · Dec 2025</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1 text-ali-orange text-xs">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-sm text-gray-600 italic border-l-2 border-ali-orange pl-3 py-1">
                "I successfully passed last technical interview. Thank you for your recommendation... I am so excited and grateful!"
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-ali-blue rounded-full flex items-center justify-center text-white font-bold text-[10px]">M</div>
                <p className="text-xs text-gray-500"><strong className="text-ali-heading">Mariia</strong> · Aspiring DevOps Engineer</p>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center">
            <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-ali-orange text-white rounded-full font-bold text-sm hover:bg-ali-blue-dark hover:shadow-lg transition-all">
              Start your journey <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* CONNECT */}
        <section>
          <SectionHeader title="Connect" accent="text-ali-orange" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <LinkCard
              href="https://www.linkedin.com/in/vamsipenmetsa"
              icon={Linkedin}
              bg="bg-[#0A66C2]"
              title="LinkedIn"
              desc="Professional updates"
            />
            <LinkCard
              href="https://github.com/vamsipenmetsa"
              icon={Github}
              bg="bg-gradient-to-br from-gray-800 to-gray-600"
              title="GitHub"
              desc="Open source projects"
            />
            <LinkCard
              href="https://medium.com/@vamsipenmetsa"
              icon={BookOpen}
              bg="bg-gradient-to-br from-gray-900 to-gray-700"
              title="Medium"
              desc="Technical articles"
            />
            <LinkCard
              href="mailto:vamsivarmapenmatsa@gmail.com"
              icon={Mail}
              bg="bg-gradient-to-br from-ali-orange to-ali-yellow"
              title="Email"
              desc="Get in touch"
            />
          </div>
        </section>

        {/* COMMUNITIES */}
        <section>
          <SectionHeader title="Communities" accent="text-ali-blue" />
          <div className="space-y-3">
            <LinkCard
              href="https://linkedin.openinapp.co/groups-13986647"
              icon={Users}
              bg="bg-gradient-to-br from-ali-blue to-ali-blue-dark"
              title="DevOps Professionals Group"
              desc="15,000+ cloud & DevOps professionals"
            />
            <LinkCard
              href="https://www.instagram.com/poland_streets"
              icon={Instagram}
              bg="bg-gradient-to-br from-purple-500 to-pink-500"
              title="Poland Streets 📸"
              desc="Curated street photography (3M+ views)"
            />
            <LinkCard
              href="https://www.instagram.com/international_friends_wawa"
              icon={Instagram}
              bg="bg-gradient-to-br from-orange-400 to-pink-400"
              title="International Friends Warsaw"
              desc="Community events & meetups"
            />
            <LinkCard
              href="https://www.instagram.com/vamsipenmetsa7"
              icon={Instagram}
              bg="bg-gradient-to-br from-purple-600 to-pink-600"
              title="Instagram"
              desc="Personal updates & life"
            />
          </div>
        </section>

        {/* Back to Portfolio */}
        <div className="text-center pt-4">
          <a
            href="/vamsipenmetsa-portfolio"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-gray-200 text-ali-heading hover:border-ali-orange hover:text-ali-orange transition-all text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
