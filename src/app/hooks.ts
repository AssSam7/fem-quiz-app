import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store";
import { RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

/* Selectors */
