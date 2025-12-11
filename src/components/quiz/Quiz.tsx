import { QuizProvider, useQuiz } from './QuizContext';
import { QuizIntro } from './QuizIntro';
import { QuizQuestions } from './QuizQuestions';
import { QuizResult } from './QuizResult';

function QuizContent() {
  const { step } = useQuiz();

  switch (step) {
    case 'intro':
      return <QuizIntro />;
    case 'questions':
      return <QuizQuestions />;
    case 'result':
      return <QuizResult />;
    default:
      return <QuizIntro />;
  }
}

export function Quiz() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}
