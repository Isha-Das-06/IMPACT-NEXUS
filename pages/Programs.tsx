
import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Cpu, Smartphone, Users2, Sparkle } from 'lucide-react';

const PROGRAMS = [
  {
    title: 'Lost Language Revival Initiative',
    purpose: 'To document, archive, and revitalize endangered indigenous languages using community-first AI toolkits.',
    scope: 'Currently active in 4 continents, partnering with 18 distinct language communities.',
    community: 'Directly involves community elders as data guardians and youth as digital curators.',
    outcomes: 'Interactive mobile dictionaries, oral history archives, and digital literacy curricula in native scripts.'
  },
  {
    title: 'NeuroTech Outreach (Open Mind)',
    purpose: 'Democratizing access to brain-computer interfaces for individuals with non-verbal communication needs.',
    scope: 'Open-source hardware development and clinical pilot programs in underserved hospitals.',
    community: 'Collaborative feedback loops between neuroscientists, engineers, and end-users.',
    outcomes: 'Affordable, low-latency communication boards controlled via EEG/EOG signals.'
  },
  {
    title: 'Digital Literacy Campaigns (Nexus Pulse)',
    purpose: 'Rapid deployment of digital skills workshops focusing on ethical internet usage and economic agency.',
    scope: 'Rural villages and urban centers with significant technology gaps.',
    community: 'Train-the-trainer model empowering local educators to lead their own workshops.',
    outcomes: 'Over 15,000 "Pulse-certified" navigators who now use digital tools for commerce and civic engagement.'
  },
  {
    title: 'Civic Tech: The Guardian Network',
    purpose: 'Decentralized platforms for environmental monitoring and transparent local governance.',
    scope: 'Focusing on zones of high ecological risk and low political transparency.',
    community: 'Local environmental wardens equipped with mobile sensor stations.',
    outcomes: 'Real-time air/water quality dashboards and verifiable civic voting prototypes.'
  },
  {
    title: 'AI for Smallholder Farmers',
    purpose: 'Predictive analytics for crop health and soil quality in climate-affected regions.',
    scope: 'Pilot programs in the Sahel region and parts of the Andes.',
    community: 'Local agricultural cooperatives and small-scale farmers.',
    outcomes: 'Reduced crop failure rates by 25% through data-driven planting cycles.'
  },
  {
    title: 'Mesh Connect: Disaster Resilience',
    purpose: 'Deployable decentralized communication networks for communities after natural disasters.',
    scope: 'High-risk island nations and flood-prone coastal regions.',
    community: 'Emergency response volunteers and community organizers.',
    outcomes: 'Restored connectivity within 4 hours of primary grid failure in recent trials.'
  },
  {
    title: 'Braille-Tech: Accessible Programming',
    purpose: 'A specialized IDE and haptic feedback system for blind developers in emerging markets.',
    scope: 'Global open-source project with regional training hubs.',
    community: 'Developers with visual impairments and accessibility researchers.',
    outcomes: 'Successfully trained 200+ blind developers now employed in the tech sector.'
  },
  {
    title: 'Bio-Harmony: Water Security IoT',
    purpose: 'Low-cost, community-managed sensors for real-time monitoring of groundwater pollutants.',
    scope: 'Industrial zones adjacent to residential areas in South Asia.',
    community: 'Local residents and environmental health advocates.',
    outcomes: 'Identified 12 major contamination leaks before they reached local wells.'
  },
  {
    title: 'Dignity Ledger: Refugee Identity',
    purpose: 'Blockchain-based non-custodial identities for displaced persons to access essential services.',
    scope: 'Border regions and transitional housing settlements.',
    community: 'Displaced individuals and international aid organizations.',
    outcomes: 'Secured access to healthcare and banking for 5,000+ individuals without state papers.'
  },
  {
    title: 'MindBridge: PTSD Support AI',
    purpose: 'Ethical, privacy-first AI companions for veterans and survivors of conflict.',
    scope: 'Conflict-affected zones and veteran support groups.',
    community: 'Mental health professionals and trauma survivors.',
    outcomes: 'Reduced isolation markers in 65% of participants during initial studies.'
  },
  {
    title: 'Green-Grid: Solar Autonomy',
    purpose: 'Decentralized solar energy management systems for off-grid healthcare facilities.',
    scope: 'Rural healthcare clinics in sub-Saharan Africa.',
    community: 'Healthcare workers and local electrical engineers.',
    outcomes: 'Ensured 24/7 power for critical medical equipment in 30 remote clinics.'
  },
  {
    title: 'Spatial Justice: Urban Mapping',
    purpose: 'Open-source mapping tools to advocate for equitable resource distribution in informal settlements.',
    scope: 'Densely populated urban centers with irregular infrastructure.',
    community: 'Urban planners and residents of informal settlements.',
    outcomes: 'Redraw municipal service maps to include 15 previously "invisible" neighborhoods.'
  },
  {
    title: 'Edu-Link: Satellite Classrooms',
    purpose: 'High-speed educational content delivery via LEO satellite constellations for remote schools.',
    scope: 'Mountainous and remote island schools globally.',
    community: 'Rural teachers and primary school students.',
    outcomes: 'Provided internet access to 50 schools previously disconnected from global knowledge.'
  },
  {
    title: 'Heritage Lens: VR Oral Histories',
    purpose: 'Immersive VR experiences capturing the wisdom of the world\'s last remaining nomadic tribes.',
    scope: 'Central Asian steppes and Amazonian territories.',
    community: 'Tribal elders and cultural historians.',
    outcomes: 'Created 100+ high-fidelity VR archives of sacred rituals and oral laws.'
  }
];

export const Programs: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">Programs in <span className="text-secondary">Motion</span></h1>
        <p className="text-xl text-ivory/60 max-w-3xl leading-relaxed">
          Our initiatives are more than projects; they are sustained commitments to systemic change. Each program is a node in the Impact Nexus.
        </p>
      </section>

      <div className="px-6 max-w-7xl mx-auto space-y-12">
        {PROGRAMS.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/[0.07] transition-all"
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Initiative {i + 1}</span>
                <h3 className="text-3xl font-serif font-bold mb-6 text-ivory group-hover:text-secondary transition-colors">{p.title}</h3>
                <div className="p-4 bg-primary/10 rounded-xl inline-flex items-center gap-3">
                  <Sparkle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium italic">Active & Scaling</span>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                    <Bookmark className="w-4 h-4" /> Purpose
                  </h4>
                  <p className="text-ivory/60 text-sm leading-relaxed">{p.purpose}</p>
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                    <Smartphone className="w-4 h-4" /> Scope
                  </h4>
                  <p className="text-ivory/60 text-sm leading-relaxed">{p.scope}</p>
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                    <Users2 className="w-4 h-4" /> Community
                  </h4>
                  <p className="text-ivory/60 text-sm leading-relaxed">{p.community}</p>
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> Outcomes
                  </h4>
                  <p className="text-ivory/60 text-sm leading-relaxed">{p.outcomes}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-24 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-8 italic">Future Initiatives</h2>
        <p className="text-ivory/60 max-w-2xl mx-auto">
          We are constantly listening. Future projects in ethical bio-manufacturing, satellite-bridged education, and sovereign data repositories are currently in early consultation with our global community advisors.
        </p>
      </section>
    </div>
  );
};
