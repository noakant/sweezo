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
          <Link to="/" className="flex flex-col relative group">
            {/* Try loading image logo.png from public folder. Fallback to CSS logo if fails. */}
            <div className="h-10">
               <img src="/logo.png" alt="Sweezo Logo" className="h-full object-contain" 
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById('text-fallback');
                      if(fallback) fallback.style.display = 'block';
                    }} 
               />
               <span id="text-fallback" className="font-display font-bold text-3xl tracking-tight uppercase hidden">
                 Sweezo
               </span>
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-black origin-left transform scale-x-0 transition-transform group-hover:scale-x-100" />
            <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-black origin-left transform scale-x-0 transition-transform delay-75 group-hover:scale-x-100" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium text-sm uppercase tracking-widest transition-colors hover:text-black/60 relative ${
                    isActive ? 'text-black' : 'text-black/60'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-black"
                      />
                    )}
                  </>
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
