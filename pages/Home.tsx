
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, BookOpen, Globe, HeartPulse, ShieldCheck, Users, 
  Lightbulb, Fingerprint, Anchor, Zap, Newspaper, Beaker, Lock
} from 'lucide-react';

const FOCUS_AREAS = [
  {
    title: 'Digital Literacy',
    icon: <BookOpen className="w-6 h-6 text-accent" />,
    description: 'Equipping communities with the tools to navigate and shape the digital age responsibly.',
    link: '/what-we-do'
  },
  {
    title: 'Education Access',
    icon: <Globe className="w-6 h-6 text-secondary" />,
    description: 'Bridging the global divide through adaptive learning and teacher empowerment.',
    link: '/what-we-do'
  },
  {
    title: 'Language Revival',
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    description: 'Using AI and data dignity to preserve lost languages and cultural oral histories.',
    link: '/programs'
  },
  {
    title: 'NeuroTech Outreach',
    icon: <HeartPulse className="w-6 h-6 text-accent" />,
    description: 'Expanding accessibility through ethical neural engineering and assistive devices.',
    link: '/programs'
  }
];

const METRICS = [
  { label: 'Communities Served', value: '142+', subtext: 'In 12 countries' },
  { label: 'Volunteers Engaged', value: '2.5k+', subtext: 'Globally distributed' },
  { label: 'Literacy Rate Increase', value: '34%', subtext: 'Average in target zones' },
  { label: 'Languages Archived', value: '18', subtext: 'Critical endangered status' },
];

const METHODOLOGY = [
  { step: '01', title: 'Deep Listening', desc: 'We begin by spending months within communities, understanding the nuances of their challenges before a single line of code is written.' },
  { step: '02', title: 'Co-Design', desc: 'Local leaders, elders, and youth are the primary architects. We provide the technical scaffolding; they provide the vision.' },
  { step: '03', title: 'Ethical Deployment', desc: 'Every tool is tested against our strict ethical framework, ensuring data sovereignty and long-term autonomy.' }
];

const HUB_POSTS = [
  { category: 'Research', title: 'The Future of Non-Verbal Communication', date: 'Oct 24, 2024' },
  { category: 'Ethics', title: 'Why Data Sovereignty is a Human Right', date: 'Oct 12, 2024' },
  { category: 'Field Report', title: 'Reviving Kichwa Dialects in the Digital Age', date: 'Sep 28, 2024' }
];

export const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full animate-pulse-slow delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-accent border border-accent/20 rounded-full bg-accent/5">
              Technology serving humanity
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] text-ivory">
              Where <span className="text-primary italic">Inspiration</span> Meets 
              <span className="block text-secondary">Inclusive Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-ivory/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Impact Nexus is a tech-driven NGO rewriting the code of community service. 
              We believe technology is a tool, but humanity is the heartbeat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/get-involved" className="px-8 py-4 bg-primary text-ivory font-semibold rounded-full hover:bg-primary/80 transition-all flex items-center gap-2 group">
                Be Part of the Nexus <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/vision-values" className="px-8 py-4 bg-white/5 border border-white/10 text-ivory font-semibold rounded-full hover:bg-white/10 transition-all">
                Our Values
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What Impact Nexus Is */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-accent">Defining the Nexus</h2>
              <p className="text-lg text-ivory/70 leading-relaxed mb-6">
                Impact Nexus was founded on a simple, radical truth: progress is only real if it includes everyone. We exist at the intersection of high-end technology and deep-rooted community needs.
              </p>
              <p className="text-lg text-ivory/70 leading-relaxed">
                In a world where digital systems often widen divides, we build bridges. We bridge the gap between those who design technology and those whose lives are transformed by it. We don't just donate hardware; we cultivate ecosystems of empowerment.
              </p>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
                alt="Community Impact" 
                className="rounded-2xl shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700 w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 p-8 bg-background border border-white/10 rounded-xl shadow-xl max-w-xs">
                <HeartPulse className="w-10 h-10 text-primary mb-4" />
                <p className="italic text-ivory/80 font-serif">"Technology should never be a monologue. It must be a conversation with the people it serves."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Technology Needs Humanity */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Cpu className="w-12 h-12 text-secondary mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 italic">Technology is not neutral.</h2>
          <p className="text-xl text-ivory/60 leading-relaxed font-light">
            An algorithm can serve or exclude. A network can connect or surveil. At Impact Nexus, we reject the notion of "tech for tech's sake." We believe that without ethics, responsibility, and deep human empathy, technology becomes a cold extension of existing biases. We choose to build with conscience.
          </p>
        </motion.div>
      </section>

      {/* 4. NEW: The Methodology (How We Build) */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our <span className="text-primary">DNA</span></h2>
            <p className="text-ivory/50">The rigorous process behind every intervention.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {METHODOLOGY.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-10 bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-accent/30 transition-all"
              >
                <div className="text-8xl font-bold absolute -top-4 -right-4 opacity-5 text-ivory group-hover:opacity-10 transition-opacity">
                  {item.step}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-accent">{item.title}</h3>
                <p className="text-ivory/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Focus Areas (Preview) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-4">Core Missions</h2>
              <p className="text-ivory/50">Four pillars of human-centric advancement.</p>
            </div>
            <Link to="/what-we-do" className="hidden md:flex items-center gap-2 text-accent hover:underline">
              See detailed overview <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOCUS_AREAS.map((area, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/[0.03] border border-white/5 rounded-2xl flex flex-col h-full"
              >
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-4 text-ivory">{area.title}</h3>
                <p className="text-ivory/60 text-sm leading-relaxed mb-8 flex-grow">{area.description}</p>
                <Link to={area.link} className="text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Real Impact Preview */}
      <section className="py-24 bg-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {METRICS.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-serif font-bold text-accent mb-2">{metric.value}</div>
                <div className="text-lg font-bold text-ivory mb-1">{metric.label}</div>
                <div className="text-sm text-ivory/40">{metric.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEW: Global Presence (Where We Are) */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-accent font-bold mb-2">Latin America</h4>
                  <p className="text-ivory/40 text-sm">Mexico City, Oaxaca, Quito, Lima</p>
                </div>
                <div>
                  <h4 className="text-secondary font-bold mb-2">East Africa</h4>
                  <p className="text-ivory/40 text-sm">Nairobi, Mombasa, Dar es Salaam</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-2">Southeast Asia</h4>
                  <p className="text-ivory/40 text-sm">Bangkok, Jakarta, Manila</p>
                </div>
                <div>
                  <h4 className="text-accent font-bold mb-2">Digital Nodes</h4>
                  <p className="text-ivory/40 text-sm">Global Remote Network</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-ivory">Global <span className="text-secondary italic">Footprint</span></h2>
              <p className="text-lg text-ivory/60 leading-relaxed mb-8">
                We aren't just an office in a skyscraper. We are a distributed nexus of community hubs, field offices, and mobile labs across 12 countries. Our impact is local, our network is global.
              </p>
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 inline-flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Globe className="text-secondary" />
                </div>
                <p className="text-sm font-medium">Join our global network of field workers and researchers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Human Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <Users className="w-10 h-10 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Voices from the Nexus</h2>
            <p className="text-ivory/60 max-w-2xl mx-auto italic">True impact isn't found in a spreadsheet. It's found in the lives of those we walk alongside.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative group overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-10">
                <blockquote className="text-2xl md:text-3xl font-serif italic text-ivory mb-6">
                  "I used to think my language would die with me. Now, my grandchildren are learning it through an app Impact Nexus helped us build. Technology gave my culture a digital body."
                </blockquote>
                <p className="text-accent font-bold">— Maria, Elder of the Kichwa Community</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-ivory/70 italic mb-6">"As a teacher in a rural school, the adaptive learning platforms aren't just gadgets—they are partners that help me see every student's unique potential."</p>
                <p className="text-secondary font-bold">— David, Educator</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-ivory/70 italic mb-6">"The NeuroTech project didn't just give me a device; they gave me back my agency. Inclusion is about dignity, not charity."</p>
                <p className="text-primary font-bold">— Sam, Participant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. NEW: Ethical Manifesto (Non-Negotiables) */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory">The <span className="text-accent">Manifesto</span></h2>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Fingerprint className="text-secondary shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-lg mb-2">No Data Extraction</h4>
                  <p className="text-ivory/50 text-sm">We never sell, trade, or weaponize community data. All intelligence stays with the people who generated it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Anchor className="text-secondary shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Local Sustainability</h4>
                  <p className="text-ivory/50 text-sm">Every project must be maintainable by local teams within 24 months. We build for independence, not dependence.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="text-secondary shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Open Source Soul</h4>
                  <p className="text-ivory/50 text-sm">Transparency is non-negotiable. Our code is public, our finances are clear, and our failures are documented.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lightbulb className="text-secondary shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Human Agency</h4>
                  <p className="text-ivory/50 text-sm">Algorithms assist, humans decide. We never automate decisions that impact human dignity or survival.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEW: Knowledge Hub (Latest from the Nexus) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-4">Nexus <span className="text-secondary">Journal</span></h2>
              <p className="text-ivory/50">Dispatches from the front lines of ethical innovation.</p>
            </div>
            <Link to="/impact" className="hidden md:flex items-center gap-2 text-accent hover:underline">
              Visit the Hub <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HUB_POSTS.map((post, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-between h-full group"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">{post.category}</span>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-ivory group-hover:text-accent transition-colors">{post.title}</h3>
                </div>
                <div className="flex justify-between items-center text-xs text-ivory/30">
                  <span>{post.date}</span>
                  <Newspaper className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. NEW: Innovation Labs (Experimental Projects) */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Beaker className="w-12 h-12 text-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Experimental <span className="text-accent italic">Labs</span></h2>
          <p className="text-xl text-ivory/60 max-w-3xl mx-auto mb-16 leading-relaxed">
            Where we pilot the technologies of tomorrow. Low-cost BCI hardware, satellite-bridged educational mesh, and AI-driven agricultural planning for smallholders.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-10 border border-white/5 bg-white/5 rounded-3xl hover:bg-primary/10 transition-colors cursor-default">
              <h4 className="font-bold mb-2">Project Aura</h4>
              <p className="text-xs text-ivory/40 uppercase tracking-widest">NeuroTech</p>
            </div>
            <div className="p-10 border border-white/5 bg-white/5 rounded-3xl hover:bg-secondary/10 transition-colors cursor-default">
              <h4 className="font-bold mb-2">Project Gaia</h4>
              <p className="text-xs text-ivory/40 uppercase tracking-widest">EcoData</p>
            </div>
            <div className="p-10 border border-white/5 bg-white/5 rounded-3xl hover:bg-accent/10 transition-colors cursor-default">
              <h4 className="font-bold mb-2">Project Vox</h4>
              <p className="text-xs text-ivory/40 uppercase tracking-widest">Linguistics</p>
            </div>
            <div className="p-10 border border-white/5 bg-white/5 rounded-3xl hover:bg-primary/10 transition-colors cursor-default">
              <h4 className="font-bold mb-2">Project Ethos</h4>
              <p className="text-xs text-ivory/40 uppercase tracking-widest">Ethics AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. NEW: Governance & Accountability */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-20 bg-gradient-to-br from-background via-white/5 to-background border border-white/10 rounded-[60px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5"><Lock className="w-64 h-64" /></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl font-serif font-bold mb-8">Radical <span className="text-secondary">Trust</span></h2>
              <p className="text-lg text-ivory/70 leading-relaxed mb-12">
                We are governed by a global council of community members, researchers, and ethicists. Every major decision is voted upon by our stakeholders. We don't have a CEO in the traditional sense; we have collective stewardship.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="text-accent" />
                  <span className="text-sm font-medium">100% Transparent Financials</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="text-accent" />
                  <span className="text-sm font-medium">Community-Led Governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Invitation */}
      <section className="py-32 bg-gradient-to-b from-background to-primary/20 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8">Ready to <span className="text-accent">Collaborate?</span></h2>
          <p className="text-xl text-ivory/70 mb-12 leading-relaxed">
            We don't need "donors." We need partners, visionaries, and caretakers of the future. Whether you are a technologist, an educator, or a community leader, your heartbeat belongs here.
          </p>
          <Link to="/get-involved" className="inline-flex items-center gap-3 px-10 py-5 bg-ivory text-background font-bold rounded-full hover:scale-105 transition-transform">
            Join the Movement <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
      </section>
    </div>
  );
};
