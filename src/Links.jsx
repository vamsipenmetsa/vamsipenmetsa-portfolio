import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Mail, Linkedin, Github, BookOpen, Instagram, Users, Award, Gift, Star, Code, Cloud } from 'lucide-react';

function Links() {

  const linkCards = {
    free: [
      {
        href: "https://vamsipenmetsa.gumroad.com/l/ryfhqh",
        icon: Code,
        bg: "bg-gradient-to-br from-ali-blue-dark to-ali-blue",
        iconColor: "text-white",
        title: "GitHub Copilot Visual Guide",
        desc: "Master AI-powered coding with prompting strategies",
        badge: "FREE"
      },
      {
        href: "https://vamsipenmetsa.gumroad.com/l/knioda",
        icon: Cloud,
        bg: "bg-gradient-to-br from-ali-orange to-ali-yellow",
        iconColor: "text-white",
        title: "Kubernetes Cheat Sheet",
        desc: "Complete K8s reference from basics to advanced",
        badge: "FREE"
      }
    ],
    services: [
      {
        href: "https://topmate.io/vamsipenmetsa/1755002",
        icon: Calendar,
        bg: "bg-gradient-to-br from-ali-orange to-ali-yellow",
        iconColor: "text-white",
        title: "1:1 Career Mentorship",
        desc: "Mock interviews & guidance (150+ interviews conducted)"
      },
      {
        href: "https://topmate.io/vamsipenmetsa/1804944?utm_source=public_profile&utm_campaign=vamsipenmetsa",
        icon: Award,
        bg: "bg-gradient-to-br from-ali-blue-dark to-ali-blue",
        iconColor: "text-white",
        title: "Resume Review & Optimisation",
        desc: "Get your resume optimized for Cloud & DevOps roles"
      }
    ],
    social: [
      {
        href: "https://www.linkedin.com/in/vamsipenmetsa",
        icon: Linkedin,
        bg: "bg-[#0A66C2]",
        iconColor: "text-white",
        title: "LinkedIn Profile",
        desc: "Professional updates & networking"
      },
      {
        href: "https://github.com/vamsipenmetsa",
        icon: Github,
        bg: "bg-gradient-to-br from-gray-800 to-gray-600",
        iconColor: "text-white",
        title: "GitHub",
        desc: "Open source projects & contributions"
      },
      {
        href: "https://medium.com/@vamsipenmetsa",
        icon: BookOpen,
        bg: "bg-gradient-to-br from-gray-900 to-gray-700",
        iconColor: "text-white",
        title: "Medium Blog",
        desc: "Technical articles & insights"
      },
      {
        href: "mailto:vamsivarmapenmatsa@gmail.com",
        icon: Mail,
        bg: "bg-gradient-to-br from-ali-orange to-ali-yellow",
        iconColor: "text-white",
        title: "Email",
        desc: "vamsivarmapenmatsa@gmail.com"
      }
    ],
    communities: [
      {
        href: "https://linkedin.openinapp.co/groups-13986647",
        icon: Users,
        bg: "bg-gradient-to-br from-ali-blue to-ali-blue-dark",
        iconColor: "text-white",
        title: "DevOps Professionals Group",
        desc: "Join 15,000+ cloud & DevOps professionals"
      },
      {
        href: "https://www.instagram.com/poland_streets",
        icon: Instagram,
        bg: "bg-gradient-to-br from-purple-500 to-pink-500",
        iconColor: "text-white",
        title: "Poland Streets 📸",
        desc: "Curated street photography (3M+ Views)"
      },
      {
        href: "https://www.instagram.com/international_friends_wawa",
        icon: Instagram,
        bg: "bg-gradient-to-br from-orange-400 to-pink-400",
        iconColor: "text-white",
        title: "International Friends Warsaw",
        desc: "Community events & meetups"
      },
      {
        href: "https://www.instagram.com/vamsipenmetsa7",
        icon: Instagram,
        bg: "bg-gradient-to-br from-purple-600 to-pink-600",
        iconColor: "text-white",
        title: "Instagram",
        desc: "Personal updates & life"
      }
    ]
  };

  const LinkCard = ({ href, icon: Icon, bg, iconColor = "text-white", title, desc, badge }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl p-6 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-ali-cream hover:to-white hover:border-ali-orange transition-all duration-300 shadow-md hover:shadow-2xl border border-gray-100 relative overflow-hidden"
    >
      {badge && (
        <span className="absolute top-3 right-3 bg-ali-orange text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">
          {badge}
        </span>
      )}
      <div className="flex items-center gap-4">
        <div className={`${bg} rounded-xl p-3 flex items-center justify-center min-w-[52px] group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={iconColor} size={24} strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-bold text-lg text-ali-heading group-hover:text-ali-orange transition-colors">
            {title}
          </h3>
          <p className="text-sm text-ali-text font-sans mt-1 leading-snug">
            {desc}
          </p>
        </div>
        <ExternalLink className="text-ali-text group-hover:text-ali-orange transition-colors ml-2 flex-shrink-0" size={20} />
      </div>
    </a>
  );

  const SectionHeader = ({ emoji, title, accent }) => (
    <div className="text-center mb-8">
      <div className="inline-block">
        <h2 className="text-3xl font-serif font-bold text-ali-heading mb-2 relative inline-block">
          {emoji} {title}
          <svg className={`absolute w-full h-3 -bottom-1 left-0 ${accent}`} viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.00025 7.00001C45.9184 3.66668 156.667 -2.33332 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </h2>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-ali-cream text-ali-text selection:bg-ali-orange selection:text-white">

      {/* Hero Profile Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-8 relative">
          <div className="relative inline-block mb-6">
            <div className="absolute -top-2 -right-2 w-40 h-40 bg-ali-blue rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-40 h-40 bg-ali-orange rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            <img
              src="./vamsi-profile.jpg"
              alt="Vamsi Penmetsa"
              className="w-36 h-36 rounded-full border-4 border-white shadow-2xl mx-auto object-cover object-[center_20%] relative z-10 ring-4 ring-ali-blue/10"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-ali-heading mb-3 relative inline-block">
            Vamsi Penmetsa
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00025 7.00001C45.9184 3.66668 156.667 -2.33332 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </h1>
          <p className="text-xl text-ali-heading mt-5 font-sans font-bold">Lead DevOps Engineer | AI & Cloud Enthusiast</p>
          <p className="text-base text-gray-600 mt-3 font-sans max-w-2xl mx-auto">
            All my resources, services, and community links in one place 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-[#0A66C2] text-white rounded-full font-bold hover:bg-[#004182] hover:shadow-xl transition-all transform hover:scale-105 shadow-md">
              <Linkedin size={20} className="mr-2" />
              Follow on LinkedIn
            </a>
            <a href="/vamsipenmetsa-portfolio" className="inline-flex items-center justify-center px-8 py-3 bg-white text-ali-heading border-2 border-gray-200 rounded-full font-bold hover:border-ali-orange hover:text-ali-orange transition-all shadow-md">
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">

        {/* FREE RESOURCES */}
        <section>
          <div className="bg-gradient-to-r from-ali-yellow/20 to-ali-orange/20 rounded-3xl p-8 md:p-10 border-2 border-dashed border-ali-orange/40 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Gift className="text-ali-orange opacity-10" size={120} />
            </div>
            <div className="relative z-10">
              <SectionHeader emoji="🎁" title="Free Resources" accent="text-ali-orange" />
              <p className="text-center text-sm font-bold text-ali-orange mb-6">
                ⚡ Limited: First 100 people only • $0
              </p>
              <div className="space-y-4">
                {linkCards.free.map((link, idx) => (
                  <LinkCard key={idx} {...link} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="bg-gradient-to-br from-white to-ali-cream/50 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-lg">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <Star className="text-ali-yellow" size={28} fill="currentColor" />
              <h3 className="text-3xl font-serif font-bold text-ali-heading">Success Stories</h3>
              <Star className="text-ali-yellow" size={28} fill="currentColor" />
            </div>
            <p className="text-sm text-gray-600">Real feedback from real people</p>
          </div>
          
          <div className="space-y-6">
            {/* Testimonial 1 - Sumeet */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-ali-blue shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Star className="text-ali-orange" size={16} fill="currentColor" />
                <Star className="text-ali-orange" size={16} fill="currentColor" />
                <Star className="text-ali-orange" size={16} fill="currentColor" />
                <Star className="text-ali-orange" size={16} fill="currentColor" />
                <Star className="text-ali-orange" size={16} fill="currentColor" />
              </div>
              <blockquote className="text-ali-text italic leading-relaxed font-sans mb-4">
                "I had a wonderful session with Vamsi, his insights regarding DevOps and associated tools and technologies are very valuable."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                  SK
                </div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Sumeet Khastgir</p>
                  <p className="text-xs text-gray-500">1st Dec, 2025</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Mariia */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-ali-orange shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Star className="text-ali-orange" size={16} fill="currentColor" />
                <Star className="text-ali-orange" size={16} fill="currentColor" />
                <Star className="text-ali-orange" size={16} fill="currentColor" />
                <Star className="text-ali-orange" size={16} fill="currentColor" />
                <Star className="text-ali-orange" size={16} fill="currentColor" />
              </div>
              <blockquote className="text-ali-text italic leading-relaxed font-sans mb-4">
                "Hi Vamsi! I am writing back to tell you that I successfully passed last technical interview. Thank you for your recommendation to try to behave as I am already middle... I am sure there's a lot of work ahead, but I am so excited and grateful!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Mariia</p>
                  <p className="text-xs text-gray-500">Aspiring DevOps Engineer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-ali-blue-dark hover:text-ali-orange transition-colors">
              Read more stories
              <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <SectionHeader emoji="💼" title="Services" accent="text-ali-blue" />
          <div className="grid md:grid-cols-2 gap-4">
            {linkCards.services.map((link, idx) => (
              <LinkCard key={idx} {...link} />
            ))}
          </div>
        </section>

        {/* CONNECT */}
        <section>
          <SectionHeader emoji="🔗" title="Connect" accent="text-ali-orange" />
          <div className="grid md:grid-cols-2 gap-4">
            {linkCards.social.map((link, idx) => (
              <LinkCard key={idx} {...link} />
            ))}
          </div>
        </section>

        {/* COMMUNITIES */}
        <section>
          <SectionHeader emoji="🌍" title="Communities" accent="text-green-500" />
          <div className="grid md:grid-cols-2 gap-4">
            {linkCards.communities.map((link, idx) => (
              <LinkCard key={idx} {...link} />
            ))}
          </div>
        </section>

        {/* Back to Portfolio */}
        <div className="text-center pt-8">
          <a
            href="/vamsipenmetsa-portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-ali-orange text-ali-heading hover:bg-ali-blue-dark hover:border-ali-blue-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-lg font-sans font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
