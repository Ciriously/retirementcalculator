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
    
      // Check for negative values
      if (
        state.currentAge < 0 ||
        state.retirementAge < 0 ||
        state.currentSavings < 0 ||
        state.savingsContribution < 0 ||
        state.monthlyIncomeRequired < 0 ||
        state.inflationRate < 0
      ) {
        return { ...state, error: 'Input values cannot be negative' };
      }
    
      // Check if age is below 0 or above 120
      if (state.currentAge < 0 || state.retirementAge < 0 || state.currentAge > 120 || state.retirementAge > 120) {
        return { ...state, error: 'Age must be between 0 and 120' };
      }
    
      // Check if monthly income required is less than zero
      if (state.monthlyIncomeRequired < 0) {
        return { ...state, error: 'Monthly income required cannot be negative' };
      }
    
      // Check if current age exceeds retirement age
      if (state.currentAge >= state.retirementAge) {
        return { ...state, error: 'Current age must be less than retirement age' };
      }
    
      // Check if retirement age is more than 90
      if (state.retirementAge > 90) {
        return { ...state, error: 'Retirement age cannot exceed 90' };
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
      return { ...state, selectedCurrency: action.payload, error: undefined };
    },
    setInflationRate: (state, action: PayloadAction<number>) => {
      return { ...state, inflationRate: action.payload, error: undefined };
    },
  },
});

export const { setInputField, calculateRetirement, setCurrency, setInflationRate } = calculatorSlice.actions;
export default calculatorSlice.reducer;
