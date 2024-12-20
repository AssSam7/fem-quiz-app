import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import data from "../../data.json";
import { QuizSliceInitialState, QuizSubjects } from "../../types";

const getTransformedSubjects = () => {
  return data.quizzes.map((subject) => {
    const sub = { ...subject, id: nanoid() };
    if (subject.title === "HTML") {
      return { ...sub, iconFillColor: "#FFF1E9" };
    } else if (subject.title === "CSS") {
      return { ...sub, iconFillColor: "#E0FDEF" };
    } else if (subject.title === "JavaScript") {
      return { ...sub, iconFillColor: "#EBF0FF" };
    }
    return { ...sub, iconFillColor: "#F6E7FF" };
  });
};

const shuffleQuestions = (questions: QuizSubjects) => {
  const shuffledQuestions = [...questions];
  for (let k = 0; k < shuffledQuestions.length; k++) {
    for (let i = shuffledQuestions[k].questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[k].questions[i], shuffledQuestions[k].questions[j]] = [
        shuffledQuestions[k].questions[j],
        shuffledQuestions[k].questions[i],
      ];
    }
  }
  return shuffledQuestions;
};

const initialState: QuizSliceInitialState = {
  quizSubjects: shuffleQuestions(getTransformedSubjects()),
  subjectId: null,
  quizStarted: false,
  quizQuestions: null,
  currentQuestionIndex: null,
  totalQuestions: null,
  currentQuestion: null,
  currentOptions: null,
  correctAnswer: null,
  selectedAnswer: null,
  isCorrectAnswerSelected: false,
  isAnswerSubmitted: false,
  quizScore: 0,
  quizEnded: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectQuizSubject: (state, action: PayloadAction<string>) => {
      state.subjectId = action.payload;
    },
    startQuiz: (state) => {
      const filteredQuizSubjects = state.quizSubjects.filter(
        (sub) => state.subjectId === sub.id
      )[0];
      state.quizStarted = true;
      state.quizQuestions = filteredQuizSubjects;
      state.currentQuestionIndex = 0;
      state.totalQuestions = filteredQuizSubjects.questions.length;
      state.currentQuestion = filteredQuizSubjects.questions[0].question;
      state.currentOptions = filteredQuizSubjects.questions[0].options;
      state.correctAnswer = filteredQuizSubjects.questions[0].answer;
    },
    selectAnswer: (state, action: PayloadAction<string>) => {
      state.selectedAnswer = action.payload;
    },
    submitAnswer: (state) => {
      state.isAnswerSubmitted = true;
      state.isCorrectAnswerSelected =
        state.selectedAnswer === state.correctAnswer;
      state.quizScore += state.isCorrectAnswerSelected ? 1 : 0;
    },
    proceedToNextQuestion: (state) => {
      if (
        state.currentQuestionIndex !== null &&
        state.totalQuestions !== null &&
        state.currentQuestionIndex < state.totalQuestions - 1
      ) {
        state.currentQuestionIndex += 1;
        const nextQuestion =
          state.quizQuestions?.questions[state.currentQuestionIndex];
        if (nextQuestion) {
          state.currentQuestion = nextQuestion.question;
          state.currentOptions = nextQuestion.options;
          state.correctAnswer = nextQuestion.answer;
          state.selectedAnswer = null;
          state.isAnswerSubmitted = false;
          state.isCorrectAnswerSelected = false;
        }
      } else if (
        state.currentQuestionIndex !== null &&
        state.totalQuestions !== null &&
        state.currentQuestionIndex === state.totalQuestions - 1
      ) {
        state.quizStarted = false;
        state.quizEnded = true;
      }
    },
    restartQuiz: (state) => {
      state.quizStarted = false;
      state.quizQuestions = null;
      state.currentQuestionIndex = null;
      state.totalQuestions = null;
      state.currentQuestion = null;
      state.currentOptions = null;
      state.correctAnswer = null;
      state.selectedAnswer = null;
      state.isCorrectAnswerSelected = false;
      state.isAnswerSubmitted = false;
      state.quizScore = 0;
      state.quizEnded = false;
    },
  },
});

export const {
  selectQuizSubject,
  startQuiz,
  selectAnswer,
  submitAnswer,
  proceedToNextQuestion,
  restartQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
