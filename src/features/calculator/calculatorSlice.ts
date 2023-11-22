import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  name?: string;
  currentAge?: number;
  retirementAge?: number;
  currentSavings?: number;
  savingsContribution?: number;
  monthlyIncomeRequired?: number;
  requiredSavings?: number;
  requiredMonthlyContribution?: number;
  selectedCurrency?: string;
  inflationRate?: number;
  error?: string; // Add error field to store error message
}

const initialState: CalculatorState = {
  name: undefined,
  currentAge: undefined,
  retirementAge: undefined,
  currentSavings: undefined,
  savingsContribution: undefined,
  monthlyIncomeRequired: undefined,
  requiredSavings: undefined,
  requiredMonthlyContribution: undefined,
  selectedCurrency: 'USD',
  inflationRate: 0.02, // Default inflation rate (2%)
  error: undefined, // Initialize error field as undefined
};

// Function to calculate required retirement savings and monthly contribution
export const calculateRetirementValues = (
  currentAge: number,
  retirementAge: number,
  currentRetirementSavings: number,
  currentRetirementSavingsContribution: number,
  monthlyIncomeRequired: number,
  inflationRate: number
): { requiredSavings: number; requiredMonthlyContribution: number } => {
  const remainingYears = retirementAge - currentAge;

  // Adjust for inflation in monthly income required
  const inflationAdjustedMonthlyIncome = monthlyIncomeRequired * Math.pow(1 + inflationRate, remainingYears);

  // Required Retirement Savings at Retirement Age with inflation adjustment
  const requiredSavings = (inflationAdjustedMonthlyIncome * 12) * remainingYears;

  // Required Monthly Contribution to Achieve Retirement Savings Goal with inflation adjustment
  const requiredMonthlyContribution =
    (requiredSavings - currentRetirementSavings + currentRetirementSavingsContribution * 12 * remainingYears) /
    (remainingYears * 12);

  return {
    requiredSavings: Number(requiredSavings.toFixed(2)),
    requiredMonthlyContribution: Number(requiredMonthlyContribution.toFixed(2)),
  };
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
      // Check if all input fields are filled
      if (
        state.currentAge === undefined ||
        state.retirementAge === undefined ||
        state.currentSavings === undefined ||
        state.savingsContribution === undefined ||
        state.monthlyIncomeRequired === undefined ||
        state.inflationRate === undefined
      ) {
        return { ...state, error: 'Please fill all input fields' }; // Set error message
      }

      const { requiredSavings, requiredMonthlyContribution } = calculateRetirementValues(
        state.currentAge!,
        state.retirementAge!,
        state.currentSavings!,
        state.savingsContribution!,
        state.monthlyIncomeRequired!,
        state.inflationRate!
      );

      return {
        ...state,
        requiredSavings,
        requiredMonthlyContribution,
        error: undefined, // Clear error message
      };
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      return { ...state, selectedCurrency: action.payload };
    },
    setInflationRate: (state, action: PayloadAction<number>) => {
      return { ...state, inflationRate: action.payload };
    },
  },
});

export const { setInputField, calculateRetirement, setCurrency, setInflationRate } = calculatorSlice.actions;
export default calculatorSlice.reducer;
