import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#FFFCF7] pt-20 pb-10 rounded-t-[2.5rem] mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-lines opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 h-12">
               <img src="/logo.png" alt="Sweezo" className="h-full object-contain filter invert" 
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById('footer-text-fallback');
                      if(fallback) fallback.style.display = 'block';
                    }} 
               />
               <h2 id="footer-text-fallback" className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-none hidden">
                 SWEEZO
               </h2>
            </div>
            <p className="text-[#FFFCF7]/70 font-sans max-w-sm text-lg leading-relaxed">
              Créateurs de projets à valeur ajoutée en informatique, IA, et design depuis 2022.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-medium mb-6 uppercase tracking-wider text-[#FFFCF7]/50">Navigation</h3>
            <ul className="space-y-4">
              {['Accueil', 'À propos', 'Prestations', 'Démarrer'].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(/à | /g, '').replace('é', 'e')}`}
                    className="group flex items-center text-lg hover:text-white transition-colors"
                  >
                    <span className="relative">
                      {item}
                      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-medium mb-6 uppercase tracking-wider text-[#FFFCF7]/50">Suivez-nous</h3>
            <ul className="space-y-4">
              {['LinkedIn', 'Twitter', 'Instagram'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="group flex items-center gap-1 text-lg hover:text-white transition-colors">
                    {item}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#FFFCF7]/40 border-t border-[#FFFCF7]/10 font-sans">
          <p>© {new Date().getFullYear()} Sweezo. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
