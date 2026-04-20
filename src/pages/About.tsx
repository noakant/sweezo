import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const faqs = [
  {
    question: "Comment se déroule un projet avec Sweezo ?",
    answer: "Nous commençons toujours par une phase d'audit et de cadrage pour bien comprendre vos enjeux. Ensuite, nous passons au prototypage/design, puis au développement agile avec des points d'étape réguliers, jusqu'au déploiement et à la formation de vos équipes."
  },
  {
    question: "Quels sont vos délais habituels ?",
    answer: "Cela dépend grandement de la complexité du projet. Un site vitrine ou un outil métier simple peut prendre de 3 à 6 semaines. Les applications web complexes ou les intégrations sur-mesure d'IA s'étalent généralement sur 2 à 4 mois."
  },
  {
    question: "Accompagnez-vous la maintenance après le lancement ?",
    answer: "Absolument. Nous proposons des forfaits de maintenance évolutive et corrective pour garantir que vos outils restent sécurisés, performants et s'adaptent à vos nouveaux besoins."
  },
  {
    question: "Travailler vous uniquement avec des entreprises en France ?",
    answer: "Nous sommes basés à Paris, mais la nature de notre métier nous permet de collaborer avec des clients partout dans le monde. Nous sommes habitués au travail asynchrone et aux réunions en visioconférence."
  }
];

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="font-display text-xl font-bold pr-8">{question}</h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-black/20 flex items-center justify-center">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-black/70 font-sans leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function About() {
  const [showSweezo, setShowSweezo] = useState(false);
  const [crossOut, setCrossOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setCrossOut(true), 2000);
    const t2 = setTimeout(() => setShowSweezo(true), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="w-full pt-24 pb-20">
      <SEO 
        title="À propos" 
        description="Découvrez l'histoire de Sweezo, de Mtbadges à aujourd'hui, et notre vision pour vos projets digitaux." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-20"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-black/50 block mb-6">
            Notre Histoire
          </span>
          <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter leading-none mb-10 h-32 md:h-40 relative">
            <AnimatePresence mode="wait">
              {!showSweezo ? (
                <motion.div 
                  key="mtbadges"
                  className="absolute inset-0 flex items-center"
                  exit={{ opacity: 0, y: -20 }}
                >
                  <span className="relative inline-block text-black/40">
                    Mtbadges
                    {crossOut && (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-1/2 left-0 right-0 h-3 bg-red-500 origin-left -translate-y-1/2"
                      />
                    )}
                  </span>
                </motion.div>
              ) : (
                <motion.div 
                  key="sweezo"
                  className="absolute inset-0 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span>Sweezo</span>
                </motion.div>
              )}
            </AnimatePresence>
          </h1>
          
          <div className="text-2xl font-sans text-black/70 leading-relaxed max-w-3xl space-y-6">
            <p>
              Avant de devenir Sweezo, notre agence s'appelait <strong>Mtbadges</strong>. Nous avons été le tout <strong>premier acteur en France à digitaliser les cartes des restaurants</strong> via la création de sites web dédiés, accessibles instantanément par QR Code et puces NFC.
            </p>
            <p>
              Cette première innovation nous a montré qu'une technologie bien intégrée pouvait révolutionner toute une industrie. Aujourd'hui, avec <strong>Sweezo</strong>, nous élargissons cet horizon pour construire les solutions web, les intégrations IA et les automatisations de demain.
            </p>
          </div>
        </motion.div>

        {/* Studio Image / Abstract */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full h-[50vh] md:h-[70vh] bg-black rounded-[3rem] overflow-hidden relative mb-32 group"
        >
          <div className="absolute inset-0 bg-pattern-lines opacity-20 group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
             <div className="w-full max-w-md aspect-square rounded-full border border-white/20 flex flex-col items-center justify-center text-white/50 relative">
               <div className="absolute w-[150%] h-[1px] bg-white/20 rotate-45"></div>
               <div className="absolute w-[150%] h-[1px] bg-white/20 -rotate-45"></div>
               {/* Logo abstrait vidéo */}
               <video src="/logo.mp4" autoPlay loop muted playsInline className="w-24 h-24 object-contain filter invert mix-blend-screen z-10" />
             </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              Notre vision
            </h2>
            <p className="text-xl text-black/70 font-sans leading-relaxed">
              Nous sommes une entreprise dédiée aux projets en informatique, IA, applications web, sites vitrines, design et automatisation de processus. Nous ne construisons pas seulement du code, nous architecturons des solutions pérennes qui font grandir votre entreprise.
            </p>
          </div>
          <div className="space-y-12">
            {[
              { num: "01", title: "Expertise technique", text: "Maîtrise des dernières technologies web et IA pour des performances optimales." },
              { num: "02", title: "Design centré utilisateur", text: "Des interfaces pensées pour engager, convertir et fidéliser." },
              { num: "03", title: "Approche sur-mesure", text: "Chaque projet est unique. Nous adaptons nos processus à vos enjeux spécifiques." }
            ].map((val, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="font-display text-2xl font-bold text-black/30">{val.num}</span>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{val.title}</h3>
                  <p className="text-black/60">{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-20 border-t border-black/10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-6">Foire Aux Questions</h2>
            <p className="text-xl text-black/60 font-sans">Vous avez une question ? Nous avons probablement la réponse.</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
