import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../features/calculator/calculatorSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    // Add other reducers if any
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
