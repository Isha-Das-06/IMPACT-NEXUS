
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Mail, Linkedin, Twitter, Github } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'What We Do', path: '/what-we-do' },
  { label: 'Impact', path: '/impact' },
  { label: 'Vision & Values', path: '/vision-values' },
  { label: 'Programs', path: '/programs' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'People', path: '/people' },
  { label: 'Partners', path: '/partners' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Heart className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-serif font-bold tracking-tight text-ivory">
              IMPACT <span className="text-secondary">NEXUS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === item.path ? 'text-accent' : 'text-ivory/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden text-ivory p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-b border-white/5"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-lg font-medium text-ivory/80 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-background border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <Heart className="w-6 h-6 text-primary" />
                <span className="text-2xl font-serif font-bold tracking-tight">IMPACT NEXUS</span>
              </Link>
              <p className="text-ivory/60 max-w-md leading-relaxed">
                We believe technology must be designed with empathy, deployed with responsibility, and measured by human impact. Joining hearts and minds for a future that uplifts everyone.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-accent">Navigation</h4>
              <ul className="space-y-3">
                {NAV_ITEMS.slice(0, 5).map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-ivory/60 hover:text-accent transition-colors text-sm">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-accent">Connect</h4>
              <div className="flex gap-4 mb-6">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Twitter className="w-5 h-5 text-secondary" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-secondary" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-secondary" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </a>
              </div>
              <p className="text-xs text-ivory/40">
                123 Ethical Way, Tech District<br />
                hello@impactnexus.ngo
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/30">
            <p>© {new Date().getFullYear()} Impact Nexus NGO. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-ivory/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-ivory/60 transition-colors">Terms of Ethics</a>
              <a href="#" className="hover:text-ivory/60 transition-colors">Accessibility Statement</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
