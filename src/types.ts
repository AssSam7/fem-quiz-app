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
};
