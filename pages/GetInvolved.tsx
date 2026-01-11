
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Code2, Handshake, Mail } from 'lucide-react';

const WAYS_TO_JOIN = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: 'Volunteers',
    desc: 'Be our hands and feet on the ground. From community outreach to operational support, every heart matters.',
    skills: ['Empathy', 'Communication', 'Organizing', 'Local knowledge']
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-secondary" />,
    title: 'Educators & Mentors',
    desc: 'Share your wisdom. Help us build curriculum that empowers rather than dictates.',
    skills: ['Teaching', 'Curriculum Design', 'Mentorship', 'Storytelling']
  },
  {
    icon: <Code2 className="w-8 h-8 text-accent" />,
    title: 'Technologists',
    desc: 'Build the nexus. We need developers, researchers, and designers who believe code is a service.',
    skills: ['Full-stack', 'AI/ML', 'UX/UI', 'Hardware Engineering']
  },
  {
    icon: <Handshake className="w-8 h-8 text-primary" />,
    title: 'Partners',
    desc: 'Join our institutional network. Communities, NGOs, and schools working together for systemic change.',
    skills: ['Strategy', 'Resource Sharing', 'Policy', 'Advocacy']
  }
];

export const GetInvolved: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">Walk with <span className="text-primary italic">Us</span></h1>
          <p className="text-xl text-ivory/70 leading-relaxed mb-12">
            This isn't just about donating. It's about participation. We invite you to bring your unique skills, your lived experience, and your care to the Nexus.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WAYS_TO_JOIN.map((way, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl group transition-all hover:border-accent/30"
            >
              <div className="mb-8">{way.icon}</div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-ivory group-hover:text-accent transition-colors">{way.title}</h2>
              <p className="text-ivory/60 mb-10 leading-relaxed">{way.desc}</p>
              
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-ivory/40 mb-4">Core Skills Welcomed:</h4>
                <div className="flex flex-wrap gap-2">
                  {way.skills.map(s => (
                    <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-xs text-accent/80 border border-white/5">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-32 px-6 max-w-3xl mx-auto text-center bg-secondary/10 p-16 rounded-[40px] border border-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20"><Handshake className="w-32 h-32" /></div>
        <h2 className="text-4xl font-serif font-bold mb-8 relative z-10">Start the Conversation</h2>
        <p className="text-lg text-ivory/70 mb-12 relative z-10 leading-relaxed">
          Tell us about yourself and why you're drawn to our mission. We're interested in humans, not resumes.
        </p>
        <button className="px-10 py-5 bg-primary text-ivory font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-3 mx-auto relative z-10">
          <Mail className="w-5 h-5" /> Inquire About Participation
        </button>
      </section>
    </div>
  );
};
