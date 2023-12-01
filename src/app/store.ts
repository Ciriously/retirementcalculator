import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../features/calculator/calculatorSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
      // define a reducer 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; //represent the type of the dispatch function, it uses type of the store.dispatch function

export default store;
