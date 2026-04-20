import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 'goal',
    title: 'Quel est votre objectif principal ?',
    options: [
      { id: 'visibility', label: 'Améliorer ma visibilité', desc: 'Site vitrine, identité, design' },
      { id: 'sales', label: 'Générer plus de revenus', desc: 'E-commerce, conversion' },
      { id: 'productivity', label: 'Gagner en productivité', desc: 'Automatisation, outils sur-mesure' },
      { id: 'innovation', label: 'Innover avec l\'IA', desc: 'LLM, analyse de données' },
    ]
  },
  {
    id: 'maturity',
    title: 'Où en êtes-vous dans ce projet ?',
    options: [
      { id: 'idea', label: 'C\'est juste une idée', desc: 'J\'ai besoin d\'accompagnement' },
      { id: 'spec', label: 'Design complet prêt', desc: 'Prêt pour le développement' },
      { id: 'redesign', label: 'Refonte existante', desc: 'Je veux améliorer l\'actuel' },
      { id: 'scaling', label: 'En pleine croissance', desc: 'Besoin de scaler la technique' },
    ]
  },
  {
    id: 'budget',
    title: 'Quelle est l\'enveloppe budgétaire estimée ?',
    options: [
      { id: 'low', label: '- de 5k€', desc: 'MVP rapide ou site simple' },
      { id: 'medium', label: '5k€ - 15k€', desc: 'Application moyen format, refonte' },
      { id: 'high', label: '+ de 15k€', desc: 'Plateforme complexe, IA poussée' },
      { id: 'unknown', label: 'À définir', desc: 'Besoin d\'un chiffrage' },
    ]
  }
];

export default function Diagnostic() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers({ ...answers, [questionId]: optionId });
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setCurrentStep(questions.length), 300);
    }
  };

  const currentQ = questions[currentStep];

  return (
    <div className="w-full pt-28 pb-20 min-h-[80vh] flex flex-col justify-center">
      <SEO 
        title="Diagnostic interactif" 
        description="Répondez à quelques questions pour nous aider à cerner votre besoin avec Sweezo." 
      />
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2 text-sm font-bold uppercase tracking-wider text-black/50">
            <span>Étape {Math.min(currentStep + 1, questions.length)} sur {questions.length}</span>
            {currentStep === questions.length ? (
              <span className="text-green-600">Terminé</span>
            ) : (
              <span>{(currentStep / questions.length) * 100}%</span>
            )}
          </div>
          <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-black"
              initial={{ width: 0 }}
              animate={{ width: `${(Math.min(currentStep, questions.length) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Questions Area */}
        <div className="relative overflow-hidden bg-white rounded-[2.5rem] border border-black/10 shadow-sm p-8 md:p-12 min-h-[450px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {currentStep < questions.length ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 tracking-tight">
                  {currentQ.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(currentQ.id, opt.id)}
                      className={`text-left p-6 rounded-2xl border-2 transition-all hover:border-black/50 ${answers[currentQ.id] === opt.id ? 'border-black bg-black/5' : 'border-black/10'}`}
                    >
                      <h3 className="font-bold text-lg mb-1">{opt.label}</h3>
                      <p className="text-sm text-black/60 font-sans">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-black text-[#FFFCF7] rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="font-display text-4xl font-bold mb-4 tracking-tight">Analyse terminée !</h2>
                <p className="text-xl text-black/70 mb-10 max-w-lg">
                  Nous avons parfaitement cerné votre demande. Sur la base de vos réponses, nous savons exactement comment vous aider.
                </p>
                <Link to="/demarrer" className="bg-black text-[#FFFCF7] px-8 py-4 rounded-full text-lg uppercase tracking-wider font-semibold hover:bg-black/80 transition-all">
                  Contactez un expert
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Back */}
          {currentStep > 0 && currentStep < questions.length && (
            <button 
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="absolute top-8 right-8 text-black/40 hover:text-black flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Retour
            </button>
          )}
        </div>
        
      </div>
    </div>
  );
}
