
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages, Brain, TreePine, Sparkles } from 'lucide-react';

const SECTIONS = [
  {
    title: 'Education & Digital Literacy',
    icon: <GraduationCap className="w-12 h-12 text-primary" />,
    image: 'https://picsum.photos/id/119/800/600',
    problem: 'Traditional education systems often struggle to keep pace with digital advancement, leaving rural and marginalized youth behind.',
    humanImpact: 'Empowering students with agency and critical thinking skills that transcend the screen.',
    techUsed: 'Offline-first LMS, AI-assisted personalized curriculum, and distributed server mesh for rural connectivity.',
    whyItMatters: 'Literacy is the foundation of freedom in a digital world.'
  },
  {
    title: 'Language & Cultural Preservation',
    icon: <Languages className="w-12 h-12 text-secondary" />,
    image: 'https://picsum.photos/id/1014/800/600',
    problem: 'One language dies every two weeks, taking with it centuries of human wisdom, ecological knowledge, and identity.',
    humanImpact: 'Restoring pride and continuity to ancestral cultures through intergenerational digital storytelling.',
    techUsed: 'Large Language Models (LLMs) specialized in low-resource dialects, blockchain-based cultural IP protection.',
    whyItMatters: 'Diversity of thought is as vital as biodiversity.'
  },
  {
    title: 'Health, NeuroTech & Accessibility',
    icon: <Brain className="w-12 h-12 text-accent" />,
    image: 'https://picsum.photos/id/160/800/600',
    problem: 'Disability is often worsened by inaccessible technology, and neurotechnological benefits are usually reserved for the elite.',
    humanImpact: 'Enabling individuals with physical or cognitive challenges to communicate and interact with the world with dignity.',
    techUsed: 'Open-source BCIs (Brain-Computer Interfaces), ethical bio-sensor telemetry, and haptic feedback networks.',
    whyItMatters: 'Every human mind deserves a voice and a window to the world.'
  },
  {
    title: 'Civic & Environmental Technology',
    icon: <TreePine className="w-12 h-12 text-primary" />,
    image: 'https://picsum.photos/id/1018/800/600',
    problem: 'Local communities are often the last to know about environmental threats in their own backyards.',
    humanImpact: 'Turning community members into environmental guardians and active civic participants.',
    techUsed: 'Low-cost IoT sensor arrays for air/water monitoring, decentralised civic voting platforms, and spatial data viz.',
    whyItMatters: 'Protecting the planet starts with empowering its local stewards.'
  }
];

export const WhatWeDo: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Overview */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold mb-8"
          >
            How We <span className="text-secondary italic">Operate</span>
          </motion.h1>
          <p className="text-xl text-ivory/70 leading-relaxed">
            Technology is never the end goal. It is a catalyst. We work at the edges of what's possible to ensure that humanity remains at the center of every circuit.
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="space-y-32 mt-24">
        {SECTIONS.map((section, idx) => (
          <section key={idx} className="px-6 max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="mb-6">{section.icon}</div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 text-ivory">{section.title}</h2>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">The Problem</h4>
                    <p className="text-ivory/60 leading-relaxed">{section.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-2">The Technology</h4>
                    <p className="text-ivory/60 leading-relaxed">{section.techUsed}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Human Impact</h4>
                    <p className="text-ivory/60 leading-relaxed font-serif italic text-lg">{section.humanImpact}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-accent font-medium">Why it matters: {section.whyItMatters}</p>
                  </div>
                </div>
              </div>
              <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''} relative`}>
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
                <img src={section.image} alt={section.title} className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-32 px-6 max-w-5xl mx-auto text-center">
        <div className="p-12 bg-white/5 rounded-3xl border border-white/10">
          <Sparkles className="w-10 h-10 text-accent mx-auto mb-6" />
          <h3 className="text-3xl font-serif font-bold mb-6">Built with Care, Not for Profit</h3>
          <p className="text-ivory/60 mb-8 max-w-2xl mx-auto">
            Every project we undertake is co-designed with the communities it aims to serve. We don't build "for" them; we build "with" them. This ensures long-term sustainability and true ownership.
          </p>
          <button className="px-8 py-4 bg-primary text-ivory rounded-full font-bold hover:scale-105 transition-transform">
            View Active Projects
          </button>
        </div>
      </section>
    </div>
  );
};
