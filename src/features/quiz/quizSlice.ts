import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import data from "../../data.json";
import { QuizSliceInitialState } from "../../types";

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

const initialState: QuizSliceInitialState = {
  quizSubjects: getTransformedSubjects(),
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
    },
  },
});

export const { selectQuizSubject, startQuiz, selectAnswer, submitAnswer } =
  quizSlice.actions;

export default quizSlice.reducer;
