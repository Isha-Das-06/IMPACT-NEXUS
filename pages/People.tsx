
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';

const TEAM = [
  { 
    name: 'Isha Das', 
    role: 'President', 
    image: 'https://i.ibb.co.com/ccpMbRwd/IMG-20251129-WA0015-1.jpg',
    bio: 'Founder of Lumina Tech and ID Tech Solutions, and Founder and President of Impact Nexus.', 
    type: 'core' 
  },
  { 
    name: 'Dr. Sarah Chen', 
    role: 'Executive Catalyst', 
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    bio: 'Former neuroscientist turned social architect. Believes technology is the missing limb of community care.', 
    type: 'core' 
  },
  { name: 'Marcus Obasi', role: 'Head of Civic Systems', bio: 'Expert in decentralized governance and environmental justice. Focused on the Guardian Network.', type: 'core' },
  { name: 'Yuna Kim', role: 'Digital Preservation Lead', bio: 'Linguist and developer dedicated to bringing endangered voices to the digital forefront.', type: 'core' },
  { name: 'Mateo Hernandez', role: 'Lead Community Engineer', bio: 'Bridging the physical-digital divide through inclusive hardware design.', type: 'core' },
  { name: 'Elena Volkov', role: 'Chief Ethics Officer', bio: 'Dedicated to the philosophy of moral technology and human-centric algorithms.', type: 'core' },
  { name: 'Kwame Boateng', role: 'Global Outreach Director', bio: 'Building bridges between grassroots movements and high-scale tech solutions.', type: 'core' },
  { name: 'Sofia Martinez', role: 'Head of Inclusive Design', bio: 'Believes that if it\'t accessible to everyone, it isn\'t finished.', type: 'core' },
  { name: 'David Park', role: 'Infrastructure Architect', bio: 'Designing the resilient, offline-first networks that power our rural initiatives.', type: 'core' },
  { name: 'Amara Okafor', role: 'Africa Regional Lead', bio: 'Championing digital literacy and local tech autonomy across the continent.', type: 'core' },
  { name: 'Liam O\'Sullivan', role: 'Open Source Advocate', bio: 'Ensuring that every line of code we write remains a public good.', type: 'core' },
  { name: 'Zara Ahmed', role: 'Data Sovereignty Lead', bio: 'Protecting community identities through advanced encryption and ethical data practices.', type: 'core' },
  { name: 'Victor Hugo', role: 'Environmental Tech Lead', bio: 'Integrating IoT and spatial data to protect fragile ecosystems.', type: 'core' },
  { name: 'Naomi Tanaka', role: 'AI Safety & Research', bio: 'Exploring the boundaries of machine learning while keeping humanity at the helm.', type: 'core' },
  { name: 'Carlos Ruiz', role: 'Field Operations Lead', bio: 'Managing our mobile labs and ensuring tech reaches the hardest-to-access zones.', type: 'core' },
  { name: 'Priya Sharma', role: 'Educational Program Director', bio: 'Crafting adaptive learning journeys for the next generation of digital creators.', type: 'core' },
];

const CONTRIBUTORS = [
  'Arjun Singh (India)', 'Sofia Rossi (Italy)', 'Fatima Diop (Senegal)', 'Emma Watson (UK)', 
  'Chen Wei (China)', 'Ana Silva (Brazil)', 'Kenji Sato (Japan)', 'Laila Al-Farsi (Oman)',
  'Dimitri Volkov (Poland)', 'Sarah Miller (USA)', 'Ahmed Khan (Pakistan)', 'Leila Bekhti (France)'
];

export const People: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">The <span className="text-primary italic">Heart</span> Behind the Code</h1>
        <p className="text-xl text-ivory/70 max-w-3xl leading-relaxed mb-16">
          Impact Nexus is not a faceless entity. We are a collective of dreamers, builders, and listeners. No hierarchy obsession—just shared purpose.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((person, i) => (
            <motion.div 
              key={i}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[3/4] bg-white/5 rounded-2xl mb-6 overflow-hidden relative">
                <img 
                  src={(person as any).image || `https://picsum.photos/id/${i+50}/600/800`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  alt={person.name}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-serif font-bold text-ivory">{person.name}</h3>
              <p className="text-accent text-sm font-bold mb-4 uppercase tracking-widest">{person.role}</p>
              <p className="text-ivory/60 text-sm italic leading-relaxed">"{person.bio}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Users className="text-secondary w-8 h-8" />
            <h2 className="text-3xl font-serif font-bold">Community Contributors</h2>
          </div>
          <p className="text-ivory/60 mb-12 max-w-2xl">
            We are powered by hundreds of researchers, volunteers, and local leaders who contribute their time and expertise without seeking the spotlight.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CONTRIBUTORS.map(name => (
              <div key={name} className="p-4 bg-white/5 border border-white/5 rounded-lg text-sm text-ivory/80 flex items-center gap-2">
                <Heart className="w-3 h-3 text-primary" /> {name}
              </div>
            ))}
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg text-sm text-accent font-bold text-center">
              + 240 More Global Souls
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
