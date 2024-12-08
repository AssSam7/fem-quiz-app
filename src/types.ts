export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

export type QuizSubject = {
  id?: string;
  title: string;
  icon: string;
  iconFillColor?: string;
  questions: QuizQuestion[];
};

export type QuizSubjects = QuizSubject[];

export type QuizSliceInitialState = {
  quizSubjects: QuizSubjects;
  quizStarted: boolean;
  subjectId: string | null;
  quizQuestions: QuizSubject | null;
  currentQuestionIndex: number | null;
  totalQuestions: number | null;
  currentQuestion: string | null;
  currentOptions: string[] | null;
  correctAnswer: string | null;
  selectedAnswer: string | null;
  isCorrectAnswerSelected: boolean;
  isAnswerSubmitted: boolean;
  quizScore: number;
  quizEnded: boolean;
};
