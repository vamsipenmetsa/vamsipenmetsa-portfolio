import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Mail, Linkedin, Github, BookOpen, Instagram, Users, Award, Gift, Star } from 'lucide-react';

function Links() {

  const linkCards = {
    free: [
      {
        href: "https://vamsipenmetsa.gumroad.com/l/ryfhqh",
        icon: "fas fa-robot",
        bg: "bg-ali-yellow",
        title: "GitHub Copilot Visual Guide",
        desc: "Master AI-powered coding with prompting strategies",
        badge: "FREE"
      },
      {
        href: "https://vamsipenmetsa.gumroad.com/l/knioda",
        icon: "fas fa-dharmachakra",
        bg: "bg-ali-blue",
        title: "Kubernetes Cheat Sheet",
        desc: "Complete K8s reference from basics to advanced",
        badge: "FREE"
      }
    ],
    services: [
      {
        href: "https://topmate.io/vamsipenmetsa/1755002",
        icon: Calendar,
        bg: "bg-ali-orange",
        title: "1:1 Career Mentorship",
        desc: "Mock interviews & guidance (150+ interviews conducted)"
      },
      {
        href: "https://topmate.io/vamsipenmetsa/1804944?utm_source=public_profile&utm_campaign=vamsipenmetsa",
        icon: Award,
        bg: "bg-ali-blue-dark",
        title: "Resume Review & Optimisation",
        desc: "Get your resume optimized for Cloud & DevOps roles"
      }
    ],
    social: [
      {
        href: "https://www.linkedin.com/in/vamsipenmetsa",
        icon: Linkedin,
        bg: "bg-ali-blue-dark",
        title: "LinkedIn Profile",
        desc: "Professional updates & networking"
      },
      {
        href: "https://github.com/vamsipenmetsa",
        icon: Github,
        bg: "bg-ali-heading",
        title: "GitHub",
        desc: "Open source projects & contributions"
      },
      {
        href: "https://medium.com/@vamsipenmetsa",
        icon: BookOpen,
        bg: "bg-ali-heading",
        title: "Medium Blog",
        desc: "Technical articles & insights"
      },
      {
        href: "mailto:vamsivarmapenmatsa@gmail.com",
        icon: Mail,
        bg: "bg-ali-orange",
        title: "Email",
        desc: "vamsivarmapenmatsa@gmail.com"
      }
    ],
    communities: [
      {
        href: "https://linkedin.openinapp.co/groups-13986647",
        icon: Users,
        bg: "bg-ali-blue",
        title: "DevOps Professionals Group",
        desc: "Join 15,000+ cloud & DevOps professionals"
      },
      {
        href: "https://www.instagram.com/poland_streets",
        icon: Instagram,
        bg: "bg-ali-orange",
        title: "Poland Streets 📸",
        desc: "Curated street photography (3M+ Views)"
      },
      {
        href: "https://www.instagram.com/international_friends_wawa",
        icon: Instagram,
        bg: "bg-ali-yellow",
        title: "International Friends Warsaw",
        desc: "Community events & meetups"
      },
      {
        href: "https://www.instagram.com/vamsipenmetsa7",
        icon: Instagram,
        bg: "bg-ali-blue-dark",
        title: "Instagram",
        desc: "Personal updates & life"
      }
    ]
  };

  const LinkCard = ({ href, icon: Icon, bg, title, desc, badge, iconClass }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group bg-white rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl border border-white relative overflow-hidden"
    >
      {badge && (
        <span className="absolute top-3 right-3 bg-ali-orange text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">
          {badge}
        </span>
      )}
      <div className="flex items-center gap-4">
        <div className={`${bg} rounded-xl p-3 flex items-center justify-center min-w-[52px] group-hover:scale-110 transition-transform duration-300`}>
          {iconClass ? (
            <i className={`${iconClass} text-2xl text-ali-heading`}></i>
          ) : (
            <Icon className="text-ali-heading" size={24} />
          )}
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
            <div className="absolute -top-2 -right-2 w-32 h-32 bg-ali-yellow rounded-full blur-3xl opacity-40"></div>
            <img 
              src="./vamsi-profile.jpg" 
              alt="Vamsi Penmetsa"
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl mx-auto object-cover object-[center_20%] relative z-10"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-ali-heading mb-3 relative inline-block">
            Vamsi Penmetsa
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00025 7.00001C45.9184 3.66668 156.667 -2.33332 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </h1>
          <p className="text-lg text-ali-text mt-4 font-sans">Lead DevOps Engineer | AI & Cloud Enthusiast</p>
          <p className="text-sm text-ali-text mt-2 font-sans max-w-2xl mx-auto opacity-75">
            All my resources, services, and community links in one place 🚀
          </p>
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
                  <LinkCard key={idx} {...link} iconClass={link.icon} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS STORY */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-white shadow-md">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-ali-yellow rounded-full p-3 flex-shrink-0">
              <Star className="text-ali-heading" size={24} fill="currentColor" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-ali-heading mb-2">Success Story</h3>
              <blockquote className="text-ali-text italic leading-relaxed font-sans">
                "Hi Vamsi! I am writing back to tell you that I successfully passed last technical interview. Thank you for your recommendation to try to behave as I am already middle... I am sure there's a lot of work ahead, but I am so excited and grateful!"
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-blue rounded-full flex items-center justify-center text-ali-heading font-bold">
                  M
                </div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Mariia</p>
                  <p className="text-xs text-ali-text opacity-75">Aspiring DevOps Engineer</p>
                </div>
                <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs font-bold text-ali-blue-dark hover:underline">
                  Read full story →
                </a>
              </div>
            </div>
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
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-ali-heading text-ali-heading hover:bg-ali-heading hover:text-white transition-all duration-300 shadow-md hover:shadow-lg font-sans font-medium"
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
