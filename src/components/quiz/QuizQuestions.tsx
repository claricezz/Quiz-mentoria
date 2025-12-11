import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from './QuizContext';
import { cn } from '@/lib/utils';

const questions = [
  {
    question: "Hoje, qual é o maior desafio da sua vida financeira?",
    options: [
      { key: 'A', text: "O dinheiro não sobra para nada." },
      { key: 'B', text: "Até sobra um pouco, mas não consigo crescer." },
      { key: 'C', text: "Quero algo maior do que só pagar contas." },
    ]
  },
  {
    question: "O que mais te trava hoje para crescer na vida?",
    options: [
      { key: 'A', text: "Falta de tempo." },
      { key: 'B', text: "Falta de dinheiro." },
      { key: 'C', text: "Falta de direção." },
    ]
  },
  {
    question: "Quando você olha para sua rotina, sente que…",
    options: [
      { key: 'A', text: "Está vivendo no automático." },
      { key: 'B', text: "Está tentando, mas nada muda." },
      { key: 'C', text: "Merecia uma vida com mais liberdade." },
    ]
  },
  {
    question: "Se você pudesse mudar algo HOJE, o que seria?",
    options: [
      { key: 'A', text: "Sobrar dinheiro no fim do mês." },
      { key: 'B', text: "Ter mais liberdade de horário." },
      { key: 'C', text: "Criar algo meu que funcione de verdade." },
    ]
  },
  {
    question: "Sobre tecnologia, você diria que…",
    options: [
      { key: 'A', text: "Precisa de ajuda pra quase tudo." },
      { key: 'B', text: "Se vira bem com passo a passo." },
      { key: 'C', text: "Aprende rápido e gosta de explorar." },
    ]
  },
  {
    question: "Você já tentou ganhar dinheiro no digital antes?",
    options: [
      { key: 'A', text: "Nunca tentei." },
      { key: 'B', text: "Já tentei, mas me perdi." },
      { key: 'C', text: "Já fiz, mas sem constância." },
    ]
  },
  {
    question: "Se você tivesse ajuda para criar sua estrutura e página de vendas, isso te ajudaria hoje?",
    options: [
      { key: 'A', text: "Sim, seria essencial." },
      { key: 'B', text: "Sim, mas posso tentar sozinha(o)." },
      { key: 'C', text: "Não sei, mas acho interessante." },
    ]
  },
  {
    question: "Se você pudesse aprender a vender no automático (robôs + tráfego + IA), você gostaria?",
    options: [
      { key: 'A', text: "Sim, quero muito." },
      { key: 'B', text: "Talvez, se for simples." },
      { key: 'C', text: "Só no orgânico já me ajudaria." },
    ]
  },
];

export function QuizQuestions() {
  const { currentQuestion, setCurrentQuestion, answers, setAnswer, setStep, totalQuestions } = useQuiz();
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (answer: string) => {
    setAnswer(currentQuestion, answer);
    
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setStep('result');
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-cream-dark h-1">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex-1 container mx-auto px-4 py-8 md:py-16 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          {/* Question Counter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <span className="text-text-soft text-sm font-medium">
              Pergunta {currentQuestion + 1} de {totalQuestions}
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Question */}
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-text-heading text-center mb-10 leading-relaxed">
                {question.question}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={option.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => handleAnswer(option.key)}
                    className={cn(
                      "w-full p-5 md:p-6 rounded-xl text-left transition-all duration-300",
                      "bg-card border border-border hover:border-primary/50",
                      "shadow-soft hover:shadow-card",
                      "hover:scale-[1.01]",
                      answers[currentQuestion] === option.key && "border-primary bg-cream"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-secondary-foreground flex-shrink-0">
                        {option.key}
                      </span>
                      <span className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                        {option.text}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Back Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 text-center"
            >
                {currentQuestion === 0 ? (
                    <button
                        onClick={() => setStep("intro")}
                        className="text-text-soft hover:text-foreground transition-colors text-sm"
                    >
                        ← Voltar ao início
                    </button>
                ) : (
                    <button
                        onClick={() => setCurrentQuestion(currentQuestion - 1)}
                        className="text-text-soft hover:text-foreground transition-colors text-sm"
                    >
                        ← Voltar para pergunta anterior
                    </button>
                )}
            </motion.div>
        </div>
      </div>
    </div>
  );
}
