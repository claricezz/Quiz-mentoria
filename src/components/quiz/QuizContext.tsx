import React, { createContext, useContext, useState, ReactNode } from 'react';

export type QuizStep = 'intro' | 'questions' | 'result';

interface QuizContextType {
  step: QuizStep;
  setStep: (step: QuizStep) => void;
  currentQuestion: number;
  setCurrentQuestion: (q: number) => void;
  answers: Record<number, string>;
  setAnswer: (questionIndex: number, answer: string) => void;
  totalQuestions: number;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<QuizStep>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const totalQuestions = 8;

  const setAnswer = (questionIndex: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  return (
    <QuizContext.Provider value={{
      step,
      setStep,
      currentQuestion,
      setCurrentQuestion,
      answers,
      setAnswer,
      totalQuestions,
    }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
