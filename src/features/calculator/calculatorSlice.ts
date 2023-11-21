import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  name: string;
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  savingsContribution: number;
  monthlyIncomeRequired: number;
  requiredSavings: number;
  requiredMonthlyContribution: number;
  selectedCurrency: string; // New field for the selected currency
}

const initialState: CalculatorState = {
  name: '',
  currentAge: 0,
  retirementAge: 0,
  currentSavings: 0,
  savingsContribution: 0,
  monthlyIncomeRequired: 0,
  requiredSavings: 0,
  requiredMonthlyContribution: 0,
  selectedCurrency: 'USD', // Default currency
};

// Function to calculate required retirement savings and monthly contribution
export const calculateRetirementValues = (
  currentAge: number,
  retirementAge: number,
  currentRetirementSavings: number,
  currentRetirementSavingsContribution: number,
  monthlyIncomeRequired: number
): { requiredSavings: number; requiredMonthlyContribution: number } => {
  const remainingYears = retirementAge - currentAge;

  // Required Retirement Savings at Retirement Age
  const requiredSavings = (monthlyIncomeRequired * 12) * remainingYears;

  // Required Monthly Contribution to Achieve Retirement Savings Goal
  const requiredMonthlyContribution =
    (requiredSavings - currentRetirementSavings + currentRetirementSavingsContribution * 12 * remainingYears) /
    (remainingYears * 12);

  return { requiredSavings, requiredMonthlyContribution };
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setInputField: (state, action: PayloadAction<{ field: string; value: any }>) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    calculateRetirement: (state) => {
      const { requiredSavings, requiredMonthlyContribution } = calculateRetirementValues(
        state.currentAge,
        state.retirementAge,
        state.currentSavings,
        state.savingsContribution,
        state.monthlyIncomeRequired
      );

      return {
        ...state,
        requiredSavings,
        requiredMonthlyContribution,
      };
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      return { ...state, selectedCurrency: action.payload };
    },
  },
});

export const { setInputField, calculateRetirement, setCurrency } = calculatorSlice.actions;
export default calculatorSlice.reducer;
