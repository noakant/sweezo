import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-black/50 block mb-6">
            Contact
          </span>
          <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter leading-none mb-10">
            Démarrons <br/>
            <span className="text-outline">ensemble.</span>
          </h1>
          <p className="text-2xl font-sans text-black/70 leading-relaxed max-w-2xl">
            Prêt à transformer vos idées en réalité ? Laissez-nous un message et nous vous recontacterons très vite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-black/10 shadow-sm"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider">Nom complet</label>
                  <input type="text" id="name" className="w-full bg-transparent border-b border-black/20 pb-2 focus:border-black focus:outline-none transition-colors" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold uppercase tracking-wider">Entreprise</label>
                  <input type="text" id="company" className="w-full bg-transparent border-b border-black/20 pb-2 focus:border-black focus:outline-none transition-colors" placeholder="Votre société" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Email</label>
                <input type="email" id="email" className="w-full bg-transparent border-b border-black/20 pb-2 focus:border-black focus:outline-none transition-colors" placeholder="jean@exemple.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider">Sujet du projet</label>
                <select id="subject" className="w-full bg-transparent border-b border-black/20 pb-2 focus:border-black focus:outline-none transition-colors appearance-none rounded-none">
                  <option>Développement Web / App</option>
                  <option>Intelligence Artificielle</option>
                  <option>Design UX/UI</option>
                  <option>Automatisation</option>
                  <option>Autre domaine</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider">Message</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-black/20 pb-2 focus:border-black focus:outline-none transition-colors resize-none" placeholder="Parlez-nous de votre projet..."></textarea>
              </div>

              <button className="w-full bg-black text-[#FFFCF7] py-4 rounded-full text-lg uppercase tracking-wider font-semibold hover:bg-black/80 transition-all mt-4">
                Envoyer la demande
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="font-display text-3xl font-bold mb-8">Informations de contact</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white border border-black/10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm mb-1">Email</p>
                    <a href="mailto:hello@sweezo.com" className="text-lg hover:underline underline-offset-4">hello@sweezo.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white border border-black/10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm mb-1">Téléphone</p>
                    <a href="tel:+33123456789" className="text-lg hover:underline underline-offset-4">+33 (0) 1 23 45 67 89</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white border border-black/10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm mb-1">Bureaux</p>
                    <p className="text-lg">Paris, France<br/>(Sur rendez-vous uniquement)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-black text-[#FFFCF7] relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern-lines opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h4 className="font-display text-2xl font-bold mb-2">Rejoignez l'équipe</h4>
                <p className="opacity-70 mb-4 font-sans">Nous sommes toujours à la recherche de talents passionnés.</p>
                <a href="mailto:jobs@sweezo.com" className="uppercase text-sm font-bold tracking-widest underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Voir nos offres
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
