import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/about', label: 'À propos' },
    { to: '/services', label: 'Prestations' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFCF7]/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center relative group">
            {/* Try loading image logo.png from public folder. Fallback to CSS logo if fails. */}
            <div className="h-10 transition-transform duration-300 group-hover:scale-105">
               <img src="/logo.png" alt="Sweezo Logo" className="h-full object-contain" 
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById('text-fallback');
                      if(fallback) fallback.style.display = 'block';
                    }} 
               />
               <span id="text-fallback" className="opart-connected text-5xl hidden text-black pt-2">
                 sweezo
               </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="relative group py-2"
              >
                {({ isActive }) => (
                  <div className="relative overflow-hidden">
                    <span 
                      className={`block transition-transform duration-300 group-hover:-translate-y-full font-medium text-sm uppercase tracking-widest ${
                        isActive ? 'text-black' : 'text-black/60'
                      }`}
                    >
                      {link.label}
                    </span>
                    <span 
                      className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-black font-medium text-sm uppercase tracking-widest"
                      aria-hidden="true"
                    >
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black"
                      />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
            <Link
              to="/demarrer"
              className="ml-4 border border-black rounded-full px-6 py-2.5 text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-[#FFFCF7] transition-all flex items-center gap-2"
            >
              Démarrer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-black/5 bg-[#FFFCF7] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-4 text-base uppercase tracking-widest border-b border-black/5 ${
                      isActive ? 'font-bold text-black' : 'font-medium text-black/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-6 px-3">
                <Link
                  to="/demarrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center items-center gap-2 bg-black text-[#FFFCF7] rounded-full px-6 py-4 text-sm uppercase tracking-wider font-medium"
                >
                  Démarrer un projet <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
