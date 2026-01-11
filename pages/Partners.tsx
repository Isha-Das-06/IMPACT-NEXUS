
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Link2, Globe } from 'lucide-react';

const PARTNERS = [
  { name: '115+ Global Partners', type: 'Global', focus: 'Operations in 20+ countries' },
  { name: 'Rural Education Network', type: 'NGO', focus: 'Connectivity' },
  { name: 'The Language Institute', type: 'Academic', focus: 'Linguistics' },
  { name: 'EcoWatch Global', type: 'Foundation', focus: 'Environmental Data' },
  { name: 'NeuroInclusion Lab', type: 'Research', focus: 'Accessibility' },
  { name: 'Village Councils (Oaxaca)', type: 'Community', focus: 'Governance' },
  { name: 'Open Source Hardware Assn', type: 'Tech', focus: 'Standards' },
];

export const Partners: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">Global <span className="text-accent italic">Alliance</span></h1>
          <p className="text-xl text-ivory/70 leading-relaxed mb-16">
            We don't believe in "charity logos." We believe in collaboration. Impact Nexus is one node in a vast network of organizations working toward the same goal: human-centered progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNERS.map((p, i) => (
            <motion.div 
              key={i}
              className="p-10 border border-white/10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-ivory/40 border border-white/5">
                  {p.type}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-ivory mb-2">{p.name}</h3>
              <p className="text-sm text-ivory/50 mb-6 italic">Focus Area: {p.focus}</p>
              <a href="#" className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                Collaboration Story <Link2 className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-t from-primary/10 to-transparent">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Share2 className="w-12 h-12 text-secondary mx-auto mb-8" />
          <h2 className="text-4xl font-serif font-bold mb-8">Stronger Together</h2>
          <p className="text-lg text-ivory/70 leading-relaxed mb-12">
            Are you an institution, NGO, or school looking to integrate ethical technology into your community? We are always open to exploring how our nexus can support your existing mission. No competition—only shared capacity.
          </p>
          <button className="px-10 py-5 bg-white/5 border border-white/10 text-ivory font-bold rounded-full hover:bg-white/10 transition-all">
            Inquire About Strategic Alliance
          </button>
        </div>
      </section>
    </div>
  );
};
