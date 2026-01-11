
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, MessageCircle, RefreshCw, Layers } from 'lucide-react';

const QUAL_STORIES = [
  { name: 'Kiran', story: 'Gained a full scholarship in computer science through our rural mentorship program.', tag: 'Education' },
  { name: 'Tariq', story: 'Successfully launched a local language news portal using our revival toolkit.', tag: 'Cultural' },
  { name: 'Elena', story: 'Uses haptic interfaces to navigate her city, regaining independence after sight loss.', tag: 'NeuroTech' },
];

export const Impact: React.FC = () => {
  return (
    <div className="pb-24">
      {/* 1. What Impact Means to Us */}
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold mb-8"
          >
            The <span className="text-primary italic">Truth</span> of Our Work
          </motion.h1>
          <p className="text-xl text-ivory/70 leading-relaxed mb-8">
            We reject vanity metrics. Counting "app downloads" or "hours spent" tells us nothing about the heart. To us, impact is measured by shifted trajectories, preserved identities, and the quiet dignity of autonomy.
          </p>
          <div className="flex items-center gap-4 p-6 bg-white/5 border-l-4 border-accent rounded-r-xl">
             <Layers className="text-accent shrink-0" />
             <p className="text-sm font-medium italic">Transparency note: We share our failures as openly as our successes, because learning is the only way to evolve.</p>
          </div>
        </div>
      </section>

      {/* 2. Quantitative Impact */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <BarChart3 className="text-secondary w-8 h-8" />
            <h2 className="text-3xl font-serif font-bold">Hard Data</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 border border-white/5 bg-background rounded-2xl">
              <span className="text-5xl font-bold text-accent mb-4 block">12.4k</span>
              <h4 className="text-lg font-bold mb-2">Direct Beneficiaries</h4>
              <p className="text-sm text-ivory/50">Individuals who have completed at least one intensive 6-month program.</p>
            </div>
            <div className="p-10 border border-white/5 bg-background rounded-2xl">
              <span className="text-5xl font-bold text-secondary mb-4 block">89%</span>
              <h4 className="text-lg font-bold mb-2">Sustainability Rate</h4>
              <p className="text-sm text-ivory/50">Local projects that continue to operate 24 months after our direct involvement ends.</p>
            </div>
            <div className="p-10 border border-white/5 bg-background rounded-2xl">
              <span className="text-5xl font-bold text-primary mb-4 block">$4.2M</span>
              <h4 className="text-lg font-bold mb-2">Social Value Generated</h4>
              <p className="text-sm text-ivory/50">Estimated economic uplift created through digital literacy and employment access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Qualitative Impact */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <MessageCircle className="text-accent w-8 h-8" />
          <h2 className="text-3xl font-serif font-bold">Voices of Change</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {QUAL_STORIES.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 italic font-serif leading-relaxed"
            >
              <div className="mb-6 text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full inline-block">
                {s.tag}
              </div>
              <p className="text-lg text-ivory/80 mb-6">"{s.story}"</p>
              <p className="text-accent font-bold not-italic">— {s.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Long-Term Change */}
      <section className="py-24 bg-gradient-to-r from-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <RefreshCw className="w-12 h-12 text-secondary mx-auto mb-8 animate-spin-slow" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Capacity Over Charity</h2>
          <div className="max-w-3xl mx-auto space-y-8 text-lg text-ivory/70 leading-relaxed">
            <p>
              We don't build systems that require our permanent presence. True success for Impact Nexus means reaching a point where we are no longer needed in a community because local leaders have the tools, the knowledge, and the digital sovereignty to thrive independently.
            </p>
            <p>
              Every line of code we write is open-source. Every curriculum we design is modular. We are building a global toolkit for community ownership.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
