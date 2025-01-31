import { configureStore } from "@reduxjs/toolkit";
import financialReducer from "./modules/counterSlice"; // Atualize o nome do reducer, se necessário

export const store = configureStore({
  reducer: {
    financial: financialReducer, // Atualize o nome do slice aqui
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
