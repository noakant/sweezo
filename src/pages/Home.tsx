import { motion } from 'motion/react';
import { ArrowUpRight, Code, Cpu, LineChart, Cpu as Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-lines opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-block mb-6 px-4 py-1.5 border border-black/10 rounded-full bg-white/50 backdrop-blur-sm">
              <span className="font-sans text-sm font-medium tracking-wide uppercase text-black/70">
                Agence Digitale & IA depuis 2022
              </span>
            </div>
            
            <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-8 group">
              <span className="block">Nous créons</span>
              <span className="block opart-connected pt-4 py-2 opacity-90 transition-opacity duration-300 group-hover:opacity-100">la valeur</span>
              <span className="block">de demain.</span>
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl font-sans text-black/70 max-w-2xl mx-auto leading-relaxed">
              Sweezo transforme vos idées en solutions numériques expertes : Web, Applications, Intelligence Artificielle et Automatisation.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link 
                to="/contact" 
                className="bg-black text-[#FFFCF7] px-8 py-4 rounded-full text-lg uppercase tracking-wider font-semibold hover:bg-black/80 transition-all flex items-center justify-center gap-2 group"
              >
                Démarrer un projet
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="border border-black px-8 py-4 rounded-full text-lg uppercase tracking-wider font-semibold hover:bg-black/5 transition-all flex items-center justify-center"
              >
                Nos expertises
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Marquee */}
      <div className="border-y border-black overflow-hidden py-4 bg-white">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {[...Array(3)].map((_, i) => (
             <div key={i} className="flex gap-16 items-center">
              <span className="font-display text-4xl uppercase tracking-tighter font-bold">Développement Web</span>
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span className="opart-connected text-4xl pt-2">intelligence artificielle</span>
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span className="font-display text-4xl uppercase tracking-tighter font-bold">Design UX/UI</span>
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span className="opart-connected text-4xl pt-2">automatisation</span>
              <span className="w-3 h-3 bg-black rounded-full"></span>
             </div>
          ))}
        </motion.div>
      </div>

      {/* Featured Services */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter max-w-2xl">
               Nos <span className="italic text-black/50 font-serif">Domaines</span> d'Intervention
             </h2>
             <Link to="/services" className="text-lg font-medium underline uppercase tracking-widest hover:text-black/60 transition-colors">
               Voir tout
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Applications & Web",
                desc: "Des plateformes modernes, rapides et scalables taillées pour votre croissance."
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Intelligence Artificielle",
                desc: "Intégration d'IA pour booster vos produits et offrir des expériences uniques."
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Design UX/UI",
                desc: "Des interfaces intuitives et esthétiques pensées pour vos utilisateurs."
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Automatisation",
                desc: "Optimisez vos processus métiers avec des workflows fluides et automatisés."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-black/10 bg-white/50 hover:bg-white p-10 rounded-[2rem] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="w-16 h-16 border rounded-2xl flex items-center justify-center mb-8 bg-[#FFFCF7] group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">{service.title}</h3>
                <p className="font-sans text-black/60 text-lg leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-black text-[#FFFCF7] rounded-[3rem] mx-4 sm:mx-8 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-lines opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            L'excellence technique au service de votre vision.
          </h2>
          <p className="text-xl md:text-2xl text-[#FFFCF7]/70 font-sans leading-relaxed mb-12">
            Chez Sweezo, nous croyons qu'un projet réussi est un savant mélange entre innovation technologique et design centré sur l'humain.
          </p>
          <Link 
            to="/about"
            className="inline-flex border border-[#FFFCF7] px-8 py-4 rounded-full text-lg uppercase tracking-wider font-semibold hover:bg-[#FFFCF7] hover:text-black transition-all"
          >
            Découvrir notre histoire
          </Link>
        </div>
      </section>
    </div>
  );
}
