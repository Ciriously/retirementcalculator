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
  error?: string; // error field to store error message
  [key: string]: string | number | undefined;
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
  inflationRate: 0.06, // Default inflation rate (6%)
  error: undefined, // Default error message
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

const requiredFields: Array<keyof CalculatorState> = ['currentAge', 'retirementAge', 'currentSavings', 'savingsContribution', 'monthlyIncomeRequired', 'inflationRate'];

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setInputField: (state, action: PayloadAction<{ field: string; value: any }>) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    calculateRetirement: (state) => {
      
      // Check if all required input fields are filled
      if (requiredFields.some(field => state[field] === undefined)) {
        return { ...state, error: 'Please fill all input fields' };
      }
    
      // Check for negative values
      if (requiredFields.some(field => Number(state[field]) < 0)) {
        return { ...state, error: 'Input values cannot be negative' };
      }
    
      // Convert currentAge and retirementAge to numbers for comparison
      const currentAge = Number(state.currentAge);
      const retirementAge = Number(state.retirementAge);
    
      // Check if current age exceeds retirement age
      if (currentAge >= retirementAge) {
        return { ...state, error: 'Current age must be less than retirement age' };
      }
    
      // Check if retirement age is more than 90
      if (retirementAge > 90) {
        return { ...state, error: 'Retirement age cannot exceed 90' };
      }
    
      const { requiredSavings, requiredMonthlyContribution } = calculateRetirementValues(
        currentAge,
        retirementAge,
        Number(state.currentSavings),
        Number(state.savingsContribution),
        Number(state.monthlyIncomeRequired),
        Number(state.inflationRate)
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