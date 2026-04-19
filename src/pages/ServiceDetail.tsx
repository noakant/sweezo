import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { motion } from 'motion/react';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center font-display text-4xl">
        Service introuvable.
        <Link to="/services" className="block mt-8 text-lg underline">Retour aux prestations</Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-16 hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Retour aux prestations
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-black/50 block mb-6">
            {service.category}
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter leading-none mb-10">
            {service.title}
          </h1>
          <p className="text-2xl font-sans text-black/70 leading-relaxed max-w-2xl bg-pattern-lines p-4 border border-black/5 rounded-2xl">
            {service.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-display text-3xl font-bold mb-6 tracking-tight">Notre approche</h2>
            <p className="text-lg text-black/70 font-sans leading-relaxed mb-12">
              {service.fullDescription}
            </p>

            <h3 className="font-display text-2xl font-bold mb-6">Technologies Utilisées</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {service.techStack?.map((tech, i) => (
                <span key={i} className="px-4 py-2 border border-black/20 rounded-full text-sm font-bold uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="font-display text-2xl font-bold mb-6">Livrables inclus</h3>
            <ul className="space-y-4">
               {service.deliverables?.map((item, i) => (
                 <li key={i} className="flex gap-4 items-center">
                   <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                   <span className="font-sans font-medium">{item}</span>
                 </li>
               ))}
             </ul>

          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-black text-[#FFFCF7] rounded-[2rem] p-10">
               <h3 className="font-display text-2xl font-bold mb-8">Les avantages clés</h3>
               <ul className="space-y-6">
                 {service.benefits.map((benefit, i) => (
                   <li key={i} className="flex gap-4 items-start">
                     <div className="mt-1 bg-[#FFFCF7]/10 p-1 rounded-full shrink-0"><Check className="w-4 h-4" /></div>
                     <span className="font-sans opacity-90 text-lg">{benefit}</span>
                   </li>
                 ))}
               </ul>
            </div>

          </motion.div>
        </div>

        {/* Timeline Méthodologie Pleine Page */}
        <div className="mt-16 md:mt-32 w-full mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display text-4xl md:text-6xl font-bold mb-16 md:mb-24 text-center tracking-tight"
          >
            Notre méthodologie
          </motion.h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2" />
            
            {/* Mobile timeline line */}
            <div className="block md:hidden absolute left-8 top-0 bottom-0 w-px bg-black/10" />

            <div className="space-y-12 md:space-y-24">
              {service.process?.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                   {/* Center Node */}
                   <div className="absolute left-8 md:left-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#FFFCF7] border-2 border-black rounded-full flex items-center justify-center font-display font-bold text-xl md:text-2xl text-black shadow-none -translate-x-1/2 z-10 transition-transform hover:scale-110 duration-300">
                     {i + 1}
                   </div>
                   
                   {/* Content Block */}
                   <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-black/5 hover:border-black/20 transition-colors">
                        <h4 className="font-display font-bold text-2xl md:text-3xl mb-4">{step.step}</h4>
                        <p className="text-black/60 font-sans text-lg md:text-xl leading-relaxed">{step.desc}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center p-10 md:p-16 border border-black/10 rounded-[3rem] bg-white/50 backdrop-blur w-full">
          <h2 className="font-display text-3xl font-bold mb-6">Prêt à lancer ce projet ?</h2>
          <p className="font-sans text-lg text-black/60 mb-10 max-w-xl mx-auto">
            Contactez-nous pour en discuter et obtenir une estimation personnalisée.
          </p>
          <Link 
            to="/demarrer"
            className="inline-flex bg-black text-[#FFFCF7] px-8 py-4 rounded-full text-lg uppercase tracking-wider font-semibold hover:bg-black/80 transition-all items-center gap-2"
          >
            Démarrer le projet <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
