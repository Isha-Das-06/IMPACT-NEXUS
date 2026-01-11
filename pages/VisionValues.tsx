
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Eye, Handshake, Fingerprint, Share2, Leaf, RefreshCw, Compass, Feather, Cloud } from 'lucide-react';

const VALUES = [
  { icon: <Heart className="w-8 h-8 text-primary" />, title: 'Deep Empathy', desc: 'We do not assume. We listen. We feel. We design for the lived reality of every individual.' },
  { icon: <Shield className="w-8 h-8 text-secondary" />, title: 'Radical Responsibility', desc: 'If we build it, we are accountable for its consequences—intended or otherwise.' },
  { icon: <Users className="w-8 h-8 text-accent" />, title: 'Fierce Inclusion', desc: 'Access is a human right, not a luxury. We prioritize the margins, not the center.' },
  { icon: <Eye className="w-8 h-8 text-primary" />, title: 'Transparency', desc: 'Our code, our funding, and our failures are open to the world.' },
  { icon: <Handshake className="w-8 h-8 text-secondary" />, title: 'Sustained Collaboration', desc: 'We are part of a nexus. We believe in the power of collective wisdom.' },
];

export const VisionValues: React.FC = () => {
  return (
    <div className="pb-24">
      {/* 1. Vision */}
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl md:text-8xl font-serif font-bold mb-8">The <span className="text-accent">Vision</span></h1>
          <p className="text-2xl md:text-4xl text-ivory/60 max-w-4xl mx-auto font-light leading-relaxed italic">
            "A world where technology is a bridge to belonging, an architect of equity, and a catalyst for the human spirit."
          </p>
        </motion.div>
      </section>

      {/* 2. Core Values */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-16 text-center">The Values That Guide Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((v, i) => (
            <motion.div 
              key={i} 
              className="p-10 bg-white/5 rounded-3xl border border-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6">{v.icon}</div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-ivory/60 leading-relaxed text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Ethics in Technology */}
      <section className="py-24 bg-primary/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Ethics as an <span className="text-secondary">Architectural</span> Requirement</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-accent mb-2">Data Dignity</h4>
                  <p className="text-ivory/60 text-sm">We believe individuals should own their digital footprints. We use edge-computing to keep sensitive community data local.</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">Meaningful Consent</h4>
                  <p className="text-ivory/60 text-sm">Consent isn't a checkbox. It's an ongoing dialogue and a shared understanding of how technology interacts with life.</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">Algorithmic Accountability</h4>
                  <p className="text-ivory/60 text-sm">We audit every automated system for bias, ensuring our "innovations" don't inadvertently silence the already quiet voices.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-primary to-accent rounded-full opacity-10 absolute -inset-10 animate-pulse" />
              <img src="https://picsum.photos/id/447/800/800" className="rounded-3xl relative z-10 shadow-2xl" alt="Ethics" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Intersectional Design */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Feather className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-3xl font-serif font-bold mb-6">Intersectional Design</h3>
                <p className="text-ivory/70 leading-relaxed">
                  Technology is often built for a "universal user" who doesn't actually exist. We build for the overlap. We recognize that gender, class, geography, and ability intersect to create unique barriers. Our design process starts at these intersections to ensure no one is left in the shadows of "efficiency."
                </p>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Designing for the <span className="text-accent italic">Margins</span></h2>
            <p className="text-lg text-ivory/60 leading-relaxed">
              When we solve for the most excluded, we build better systems for everyone. This is our non-negotiable starting point.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Data Sovereignty & Rights */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
            <div className="md:w-1/4">
              <Fingerprint className="w-24 h-24 text-secondary opacity-50 mx-auto md:mx-0" />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-4xl font-serif font-bold mb-6 text-ivory">Digital <span className="text-secondary">Sovereignty</span></h2>
              <p className="text-xl text-ivory/70 leading-relaxed">
                We believe community data belongs to the community. We strictly adhere to the principle of "Local First, Cloud Second." We empower communities to host their own archives, manage their own identities, and decide who gets to see their stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Open Source Mandate */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary/20 to-transparent p-12 md:p-20 rounded-[60px] border border-white/10 relative overflow-hidden">
          <Share2 className="absolute top-10 right-10 w-32 h-32 text-primary opacity-10" />
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif font-bold mb-8">The <span className="text-primary">Open Source</span> Mandate</h2>
            <p className="text-lg text-ivory/70 leading-relaxed mb-8">
              Knowledge is a global commons. We pledge to keep our software open, our hardware designs public, and our research accessible to all. We don't believe in proprietary solutions for human problems. If a community needs to fork our project to better serve their local context, we celebrate it.
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">Public Good</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">Permissionless Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Community Stewardship */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
             <h2 className="text-4xl font-serif font-bold text-accent">Stewardship, Not <span className="italic">Ownership</span></h2>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <p className="text-xl text-ivory/70 leading-relaxed">
              Our goal for every project is to eventually become obsolete. We build for the day we can hand over the keys.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex gap-4">
                  <Compass className="text-secondary shrink-0" />
                  <p className="text-sm text-ivory/50">Local leaders are trained as technical architects, not just users.</p>
               </div>
               <div className="flex gap-4">
                  <RefreshCw className="text-secondary shrink-0" />
                  <p className="text-sm text-ivory/50">Governance models are handed over to community elders and youth councils.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Global Ecological Tech */}
      <section className="py-24 bg-primary/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Leaf className="w-12 h-12 text-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ecological <span className="text-accent italic">Harmony</span></h2>
          <p className="text-xl text-ivory/70 max-w-3xl mx-auto mb-12">
            Technology consumes energy and generates waste. We are committed to "Low-Impact Tech"—minimizing our carbon footprint, using repairable hardware, and building software that runs efficiently on older, recycled devices.
          </p>
          <div className="inline-flex items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10">
            <Cloud className="text-accent w-5 h-5" />
            <span className="text-sm font-medium">Committed to Net-Zero Digital Operations by 2030</span>
          </div>
        </div>
      </section>

      {/* 9. Adaptive Resilience */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-4xl font-serif font-bold mb-8 text-ivory">Built for <span className="text-secondary">Resilience</span></h2>
              <p className="text-lg text-ivory/60 leading-relaxed">
                The world is volatile. Our systems are designed to work offline, in low-bandwidth environments, and during infrastructure failures. We build tech that survives the storm, ensuring that vital community services remain accessible when they are needed most.
              </p>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center p-8 text-center group hover:bg-white/10 transition-all">
                <div>
                  <h4 className="font-bold text-accent mb-2">Offline First</h4>
                  <p className="text-xs text-ivory/40">Continuity without connectivity.</p>
                </div>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center p-8 text-center group hover:bg-white/10 transition-all">
                <div>
                  <h4 className="font-bold text-accent mb-2">Modular</h4>
                  <p className="text-xs text-ivory/40">Easy to repair and adapt.</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 10. The Conscience of Innovation */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-12">Innovation with a <span className="text-primary italic">Conscience</span></h2>
            <p className="text-xl text-ivory/60 leading-relaxed font-light mb-12">
              Progress is not a straight line up; it's a circle that must include everyone. At the Impact Nexus, we don't just ask "Can we build it?" We ask "Should we build it? Who does it empower? And whose voice might it silence?"
            </p>
            <div className="w-24 h-px bg-accent mx-auto mb-12" />
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent/50">Heartbeat of the Nexus</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
