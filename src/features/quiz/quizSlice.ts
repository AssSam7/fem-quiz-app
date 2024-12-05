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
    } else if (subject.title === "Javascript") {
      return { ...sub, iconFillColor: "#EBF0FF" };
    }
    return { ...sub, iconFillColor: "#F6E7FF" };
  });
};

const initialState: QuizSliceInitialState = {
  quizSubjects: getTransformedSubjects(),
  subjectId: null,
  quizStarted: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectQuizSubject: (state, action: PayloadAction<string>) => {
      state.subjectId = action.payload;
      state.quizStarted = true;
    },
  },
});

export const { selectQuizSubject } = quizSlice.actions;

export default quizSlice.reducer;
