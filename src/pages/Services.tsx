import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData as services } from '../data/services';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <div className="w-full pt-24 pb-20">
      <SEO 
        title="Prestations" 
        description="De la feuille vierge au produit final, découvrez toutes les prestations de Sweezo : Web, Application, IA, UX/UI, Automatisation." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-black/50 block mb-6">
            Nos Prestations
          </span>
          <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter leading-none mb-10">
            Ce que nous <br/>
            <span className="text-outline">faisons de mieux.</span>
          </h1>
          <p className="text-2xl font-sans text-black/70 leading-relaxed max-w-2xl">
            De la feuille vierge au produit final, nous vous accompagnons sur toute la chaîne de valeur numérique.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-black/10 rounded-[2rem] p-8 md:p-12 hover:bg-black hover:text-[#FFFCF7] transition-all duration-500 cursor-pointer block mt-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="max-w-3xl">
                    <span className="text-sm font-mono uppercase tracking-widest mb-4 block opacity-50 group-hover:opacity-70">
                      {service.category}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg md:text-xl font-sans opacity-70 mb-8 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 border border-current rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex ml-4 border border-current rounded-full p-6 group-hover:bg-[#FFFCF7] group-hover:text-black transition-colors">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-32 text-center p-16 border border-black/10 rounded-[3rem] bg-white/50 backdrop-blur">
          <h2 className="font-display text-4xl font-bold mb-6">Un projet en tête ?</h2>
          <p className="font-sans text-xl text-black/60 mb-10 max-w-xl mx-auto">
            Discutons de vos enjeux et découvrons comment nous pouvons vous aider à les relever.
          </p>
          <Link 
            to="/contact"
            className="inline-flex bg-black text-[#FFFCF7] px-8 py-4 rounded-full text-lg uppercase tracking-wider font-semibold hover:bg-black/80 transition-all items-center gap-2"
          >
            Parlons-en <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
