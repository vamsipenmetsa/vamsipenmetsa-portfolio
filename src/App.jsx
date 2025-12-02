import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronRight, BookOpen, Terminal, Cloud, Code } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-ali-dark text-ali-text selection:bg-ali-gold selection:text-ali-dark">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-ali-dark/80 backdrop-blur-md border-b border-ali-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tighter">Vamsi Penmetsa</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-ali-muted hover:text-ali-gold transition-colors text-sm font-medium">About</a>
              <a href="#experience" className="text-ali-muted hover:text-ali-gold transition-colors text-sm font-medium">Experience</a>
              <a href="#skills" className="text-ali-muted hover:text-ali-gold transition-colors text-sm font-medium">Skills</a>
              <a href="#resources" className="text-ali-muted hover:text-ali-gold transition-colors text-sm font-medium">Resources</a>
              <a href="#contact" className="px-4 py-2 bg-ali-gold text-ali-dark rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors">
                Let's Talk
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-ali-text hover:text-ali-gold">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-ali-dark border-b border-ali-blue">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-ali-muted hover:text-ali-gold" onClick={toggleMenu}>About</a>
              <a href="#experience" className="block px-3 py-2 text-ali-muted hover:text-ali-gold" onClick={toggleMenu}>Experience</a>
              <a href="#skills" className="block px-3 py-2 text-ali-muted hover:text-ali-gold" onClick={toggleMenu}>Skills</a>
              <a href="#resources" className="block px-3 py-2 text-ali-muted hover:text-ali-gold" onClick={toggleMenu}>Resources</a>
              <a href="#contact" className="block px-3 py-2 text-ali-gold font-bold" onClick={toggleMenu}>Let's Talk</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ali-blue text-ali-gold text-xs font-bold tracking-wide uppercase">
              Lead DevOps Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-ali-gold to-yellow-200">Vamsi Penmetsa</span>
            </h1>
            <p className="text-xl text-ali-muted max-w-2xl leading-relaxed">
              Deploying <span className="text-ali-text font-semibold">LLMs as a Service</span> on Azure AKS for <span className="text-ali-text font-semibold">LSEG × Microsoft UK Partnership</span>.
              Based in Warsaw, Poland 🇵🇱.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#resources" className="px-8 py-3 bg-ali-gold text-ali-dark rounded-full font-bold hover:bg-yellow-400 transition-all transform hover:scale-105">
                Free Resources
              </a>
              <a href="Vamsi_Penmetsa_Resume.pdf" target="_blank" className="px-8 py-3 bg-ali-blue text-ali-text border border-ali-muted/20 rounded-full font-bold hover:bg-ali-blue/80 transition-all">
                View Resume
              </a>
            </div>
            <div className="flex items-center gap-6 pt-6 text-ali-muted">
              <div className="flex items-center gap-2">
                <span className="font-bold text-ali-text">150+</span> Interviews
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-ali-text">7x</span> Azure Certified
              </div>
            </div>
          </div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
            <div className="absolute inset-0 bg-ali-gold/20 rounded-full blur-3xl"></div>
            <img
              src="/vamsi-profile.jpg"
              alt="Vamsi Penmetsa"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-2 border-ali-blue"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-ali-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-ali-gold rounded-full"></span>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-ali-blue p-8 rounded-2xl border border-ali-muted/10 hover:border-ali-gold/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-ali-gold">The Professional Side 👔</h3>
              <p className="text-ali-muted mb-4 leading-relaxed">
                I'm a <strong className="text-ali-text">Lead DevOps Engineer</strong> deploying Large Language Models (LLMs) as a service on Azure AKS and PaaS for the London Stock Exchange Group (LSEG) and its UK financial clients.
              </p>
              <p className="text-ali-muted leading-relaxed">
                Part of the high-profile <strong className="text-ali-text">LSEG × Microsoft UK Partnership</strong>. I hold 7 Active Azure Certifications and am an EPAM AI Ambassador.
              </p>
            </div>
            <div className="bg-ali-blue p-8 rounded-2xl border border-ali-muted/10 hover:border-ali-gold/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-ali-gold">The Journey 🌟</h3>
              <p className="text-ali-muted mb-4 leading-relaxed">
                Successfully navigated from Manual Tester → Automation Engineer → DevOps → SRE → Platform Engineer → Cloud Engineer.
              </p>
              <p className="text-ali-muted leading-relaxed">
                Worked with industry leaders: IMF, WTW, Wolters Kluwer, Corteva, UBS Swiss, Microsoft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-ali-gold rounded-full"></span>
            My Journey
          </h2>
          <div className="space-y-8">
            {[
              {
                role: "AI Ambassador & Copilot Champion",
                company: "EPAM Poland",
                date: "May 2025 - Present",
                desc: "Promoting Microsoft Copilot, conducting workshops, and driving AI adoption.",
                tags: ["AI", "Workshops"]
              },
              {
                role: "Lead Systems Engineer",
                company: "EPAM Systems",
                date: "Apr 2023 - Present",
                desc: "Leading DevOps for LLM deployment on Azure AKS & PaaS. Designing scalable infrastructure for model hosting.",
                tags: ["Azure AKS", "LLM", "SRE"]
              },
              {
                role: "Senior Systems Engineer",
                company: "EPAM Systems",
                date: "Aug 2022 - Mar 2023",
                desc: "PaaS infrastructure for Corteva. Cloud migration for UBS Switzerland.",
                tags: ["PaaS", "Migration"]
              }
            ].map((job, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-ali-blue/50 transition-colors border-l-4 border-ali-gold bg-ali-blue/20">
                <div className="md:w-1/4">
                  <span className="text-sm font-bold text-ali-gold">{job.date}</span>
                  <h4 className="text-lg font-semibold text-ali-muted">{job.company}</h4>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">{job.role}</h3>
                  <p className="text-ali-muted mb-4">{job.desc}</p>
                  <div className="flex gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-ali-blue text-ali-text border border-ali-muted/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-ali-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-ali-gold rounded-full"></span>
            Skills & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-ali-blue rounded-xl text-center hover:-translate-y-1 transition-transform duration-300">
              <Cloud className="w-10 h-10 mx-auto mb-4 text-ali-gold" />
              <h3 className="font-bold mb-2">Cloud</h3>
              <p className="text-sm text-ali-muted">Azure, AWS, AKS</p>
            </div>
            <div className="p-6 bg-ali-blue rounded-xl text-center hover:-translate-y-1 transition-transform duration-300">
              <Code className="w-10 h-10 mx-auto mb-4 text-ali-gold" />
              <h3 className="font-bold mb-2">IaC</h3>
              <p className="text-sm text-ali-muted">Terraform, Bicep</p>
            </div>
            <div className="p-6 bg-ali-blue rounded-xl text-center hover:-translate-y-1 transition-transform duration-300">
              <Terminal className="w-10 h-10 mx-auto mb-4 text-ali-gold" />
              <h3 className="font-bold mb-2">Scripting</h3>
              <p className="text-sm text-ali-muted">Python, PowerShell</p>
            </div>
            <div className="p-6 bg-ali-blue rounded-xl text-center hover:-translate-y-1 transition-transform duration-300">
              <BookOpen className="w-10 h-10 mx-auto mb-4 text-ali-gold" />
              <h3 className="font-bold mb-2">AI/ML</h3>
              <p className="text-sm text-ali-muted">LLM Ops, Copilot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Resources & Community</h2>
            <p className="text-ali-muted text-lg">Everything you need to grow!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group relative bg-gradient-to-br from-ali-blue to-ali-dark p-8 rounded-3xl border border-ali-muted/20 hover:border-ali-gold transition-all">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                FREE
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-ali-gold transition-colors">GitHub Copilot Visual Guide</h3>
              <p className="text-ali-muted mb-6">Prompting Made Simple. Master AI coding assistance.</p>
              <a href="https://vamsipenmetsa.gumroad.com/l/ryfhqh" target="_blank" className="inline-flex items-center text-ali-gold font-bold hover:gap-2 transition-all">
                Get it Free <ChevronRight size={20} />
              </a>
            </div>
            <div className="group relative bg-gradient-to-br from-ali-blue to-ali-dark p-8 rounded-3xl border border-ali-muted/20 hover:border-ali-gold transition-all">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                FREE
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-ali-gold transition-colors">Kubernetes Cheat Sheet</h3>
              <p className="text-ali-muted mb-6">Complete Pack: From Basics to Advanced K8s.</p>
              <a href="https://vamsipenmetsa.gumroad.com/l/knioda" target="_blank" className="inline-flex items-center text-ali-gold font-bold hover:gap-2 transition-all">
                Get it Free <ChevronRight size={20} />
              </a>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-ali-gold/10 p-8 rounded-3xl border border-ali-gold/30 text-center max-w-3xl mx-auto">
            <p className="text-xl italic text-ali-text mb-6">
              "Hi Vamsi! I am writing back to tell you that I successfully passed last technical interview. Thank you for your recommendation... I am so excited and grateful!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-left">
                <p className="font-bold text-ali-gold">Mariia</p>
                <p className="text-sm text-ali-muted">Aspiring DevOps Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ali-blue py-12 border-t border-ali-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Vamsi Penmetsa</h3>
              <p className="text-ali-muted">Lead DevOps Engineer & AI Enthusiast</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/vamsipenmetsa" target="_blank" className="text-ali-muted hover:text-ali-gold transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vamsipenmetsa" target="_blank" className="text-ali-muted hover:text-ali-gold transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vamsivarmapenmatsa@gmail.com" className="text-ali-muted hover:text-ali-gold transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-ali-muted text-sm">
            &copy; 2025 Vamsi Penmetsa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
