
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Heart, Globe2 } from 'lucide-react';

const REGIONAL_HUBS = [
  { city: 'Dhaka, Bangladesh', lead: 'Arif Rahman', email: 'arif.bd@impactnexusbd.com', phone: '+880 1712-345678' },
  { city: 'Nairobi, Kenya', lead: 'Sarah Wambui', email: 'sarah.ke@impactnexus.ngo', phone: '+254 712-345678' },
  { city: 'Mexico City, Mexico', lead: 'Carlos Gomez', email: 'carlos.mx@impactnexus.ngo', phone: '+52 55 1234-5678' },
  { city: 'Seoul, South Korea', lead: 'Ji-won Kim', email: 'jiwon.kr@impactnexus.ngo', phone: '+82 2-123-4567' },
  { city: 'Lagos, Nigeria', lead: 'Olumide Adeyemi', email: 'olumide.ng@impactnexus.ngo', phone: '+234 803-123-4567' },
  { city: 'Mumbai, India', lead: 'Priya Iyer', email: 'priya.in@impactnexus.ngo', phone: '+91 22-1234-5678' },
  { city: 'São Paulo, Brazil', lead: 'Beatriz Santos', email: 'beatriz.br@impactnexus.ngo', phone: '+55 11 91234-5678' },
  { city: 'Berlin, Germany', lead: 'Hans Mueller', email: 'hans.de@impactnexus.ngo', phone: '+49 30 123456' },
  { city: 'Tokyo, Japan', lead: 'Yuki Tanaka', email: 'yuki.jp@impactnexus.ngo', phone: '+81 3-1234-5678' },
  { city: 'Singapore', lead: 'Li Wei', email: 'liwei.sg@impactnexus.ngo', phone: '+65 6123-4567' },
  { city: 'Accra, Ghana', lead: 'Kofi Mensah', email: 'kofi.gh@impactnexus.ngo', phone: '+233 24 123 4567' },
  { city: 'Bogotá, Colombia', lead: 'Elena Ruiz', email: 'elena.co@impactnexus.ngo', phone: '+57 1 1234567' },
  { city: 'Jakarta, Indonesia', lead: 'Budi Santoso', email: 'budi.id@impactnexus.ngo', phone: '+62 21 1234567' },
  { city: 'Cairo, Egypt', lead: 'Amira Hassan', email: 'amira.eg@impactnexus.ngo', phone: '+20 2 12345678' },
  { city: 'Buenos Aires, Argentina', lead: 'Mateo Diaz', email: 'mateo.ar@impactnexus.ngo', phone: '+54 11 1234-5678' },
  { city: 'Bangkok, Thailand', lead: 'Somchai P.', email: 'somchai.th@impactnexus.ngo', phone: '+66 2 123 4567' },
  { city: 'Lima, Peru', lead: 'Lucia Ferro', email: 'lucia.pe@impactnexus.ngo', phone: '+51 1 1234567' },
  { city: 'Addis Ababa, Ethiopia', lead: 'Abebe T.', email: 'abebe.et@impactnexus.ngo', phone: '+251 11 123 4567' },
  { city: 'Cape Town, South Africa', lead: 'Zanele M.', email: 'zanele.za@impactnexus.ngo', phone: '+27 21 123 4567' },
  { city: 'Istanbul, Turkey', lead: 'Emre Can', email: 'emre.tr@impactnexus.ngo', phone: '+90 212 123 4567' },
  { city: 'Warsaw, Poland', lead: 'Jan K.', email: 'jan.pl@impactnexus.ngo', phone: '+48 22 123 45 67' },
  { city: 'Ho Chi Minh, Vietnam', lead: 'Nguyen An', email: 'nguyen.vn@impactnexus.ngo', phone: '+84 28 1234 5678' },
  { city: 'Karachi, Pakistan', lead: 'Zaid Khan', email: 'zaid.pk@impactnexus.ngo', phone: '+92 21 12345678' },
  { city: 'Casablanca, Morocco', lead: 'Youssef B.', email: 'youssef.ma@impactnexus.ngo', phone: '+212 522 123 456' },
  { city: 'Kyiv, Ukraine', lead: 'Olena V.', email: 'olena.ua@impactnexus.ngo', phone: '+380 44 123 4567' },
  { city: 'Santiago, Chile', lead: 'Diego M.', email: 'diego.cl@impactnexus.ngo', phone: '+56 2 1234 5678' },
  { city: 'Almaty, Kazakhstan', lead: 'Askar T.', email: 'askar.kz@impactnexus.ngo', phone: '+7 727 123 4567' },
  { city: 'Taipei, Taiwan', lead: 'Mei Ling', email: 'meiling.tw@impactnexus.ngo', phone: '+886 2 1234 5678' },
  { city: 'Lisbon, Portugal', lead: 'Joao P.', email: 'joao.pt@impactnexus.ngo', phone: '+351 21 123 4567' },
  { city: 'Amsterdam, Netherlands', lead: 'Lars V.', email: 'lars.nl@impactnexus.ngo', phone: '+31 20 123 4567' },
  { city: 'Toronto, Canada', lead: 'Emma S.', email: 'emma.ca@impactnexus.ngo', phone: '+1 (416) 123-4567' },
  { city: 'Melbourne, Australia', lead: 'Jack T.', email: 'jack.au@impactnexus.ngo', phone: '+61 3 1234 5678' },
  { city: 'Oslo, Norway', lead: 'Erik B.', email: 'erik.no@impactnexus.ngo', phone: '+47 21 12 34 56' },
  { city: 'Helsinki, Finland', lead: 'Matti L.', email: 'matti.fi@impactnexus.ngo', phone: '+358 9 123 456' },
  { city: 'Copenhagen, Denmark', lead: 'Sofia K.', email: 'sofia.dk@impactnexus.ngo', phone: '+45 33 12 34 56' },
];

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
  };

  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">Let's <span className="text-secondary italic">Talk</span></h1>
            <p className="text-xl text-ivory/70 leading-relaxed mb-12">
              Whether you have a question, a proposal, or just want to share a story, our doors are open. We respond to every thoughtful inquiry.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-white/5 rounded-xl"><Mail className="text-primary" /></div>
                <div>
                  <h4 className="font-bold text-ivory">Email Us</h4>
                  <p className="text-ivory/60">isha@impactnexusbd.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-white/5 rounded-xl"><MapPin className="text-secondary" /></div>
                <div>
                  <h4 className="font-bold text-ivory">Global Presence</h4>
                  <p className="text-ivory/60">Distributed team with hubs in Mexico City, Nairobi, and Seoul.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-white/5 rounded-xl"><Phone className="text-accent" /></div>
                <div>
                  <h4 className="font-bold text-ivory">Voice</h4>
                  <p className="text-ivory/60">+1 (555) 012-3456 (Operations)</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-primary/5 rounded-3xl border border-primary/10">
              <h4 className="font-serif font-bold text-xl mb-4">A Note on Privacy</h4>
              <p className="text-sm text-ivory/60">Your data is safe with us. We do not use tracking scripts or sell information. Your inquiry goes directly to a human being at the Nexus.</p>
            </div>
          </div>

          <div className="bg-white/5 p-10 lg:p-16 rounded-[40px] border border-white/10 shadow-2xl relative min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-ivory/40">Full Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-ivory focus:border-accent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-ivory/40">Email Address</label>
                      <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-ivory focus:border-accent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-ivory/40">Inquiry Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-ivory focus:border-accent outline-none transition-all appearance-none">
                      <option>General Participation</option>
                      <option>Partnership Inquiry</option>
                      <option>Technical Question</option>
                      <option>Sharing a Human Story</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-ivory/40">Your Message</label>
                    <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-ivory focus:border-accent outline-none transition-all resize-none" placeholder="Tell us how we can collaborate..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-5 bg-primary text-ivory font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-ivory/30 italic">We usually respond within 48-72 hours.</p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Heart className="w-10 h-10 text-primary animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-ivory">Inquiry Sent with Heart</h2>
                  <p className="text-ivory/60 leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. Your inquiry has been sent successfully. A member of the Nexus team will be in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent text-sm font-bold uppercase tracking-widest hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Global Nodes Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Globe2 className="text-accent w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Global Footprint</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory">Regional <span className="text-secondary italic">Nodes</span></h2>
          <p className="text-ivory/50 mt-4 max-w-2xl">Connect directly with our local teams for region-specific inquiries and community collaborations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {REGIONAL_HUBS.map((hub, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all group"
            >
              <h3 className="text-lg font-serif font-bold text-ivory mb-1 group-hover:text-accent transition-colors">{hub.city}</h3>
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{hub.lead}</p>
              <div className="space-y-2">
                <a href={`mailto:${hub.email}`} className="flex items-center gap-2 text-xs text-ivory/40 hover:text-ivory transition-colors">
                  <Mail className="w-3 h-3" /> {hub.email}
                </a>
                <a href={`tel:${hub.phone}`} className="flex items-center gap-2 text-xs text-ivory/40 hover:text-ivory transition-colors">
                  <Phone className="w-3 h-3" /> {hub.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-serif font-bold text-accent mb-4">Stay Human. Stay Connected.</h2>
        <p className="text-ivory/40">Impact Nexus — Building the heart of the future.</p>
      </section>
    </div>
  );
};
