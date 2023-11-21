import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  setInputField,
  calculateRetirement,
  setCurrency,
} from "./calculatorSlice";

const Calculator: React.FC = () => {
  const dispatch = useDispatch();
  const calculator = useSelector((state: RootState) => state.calculator);

  const handleChange = (field: string, value: any) => {
    dispatch(setInputField({ field, value }));
  };
  const [isCalculated, setIsCalculated] = React.useState(false);
  // State to track whether the calculate button has been clicked

  const handleCalculate = () => {
    dispatch(calculateRetirement());
    setIsCalculated(true); // Set the flag to true after calculation
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrency(e.target.value));
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md font-inter">
      <div className="mb-4">
        <p className="text-xl font-bold">Hello👋 {calculator.name}!!</p>
      </div>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            value={calculator.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Current Age:
          </label>
          <input
            type="number"
            className="mt-1 p-2 border rounded-md w-full"
            value={calculator.currentAge}
            onChange={(e) => handleChange("currentAge", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Retirement Age:
          </label>
          <input
            type="number"
            className="mt-1 p-2 border rounded-md w-full"
            value={calculator.retirementAge}
            onChange={(e) => handleChange("retirementAge", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Current Retirement Savings
          </label>
          <input
            type="number"
            className="mt-1 p-2 border rounded-md w-full"
            value={calculator.currentSavings}
            onChange={(e) => handleChange("currentSavings", e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Current Retirement Savings Contribution
          </label>
          <input
            type="number"
            className="mt-1 p-2 border rounded-md w-full"
            value={calculator.savingsContribution}
            onChange={(e) =>
              handleChange("savingsContribution", e.target.value)
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Monthly Income Required at Retirement
          </label>
          <input
            type="number"
            className="mt-1 p-2 border rounded-md w-full"
            value={calculator.monthlyIncomeRequired}
            onChange={(e) =>
              handleChange("monthlyIncomeRequired", e.target.value)
            }
          />
        </div>

        {/* Currency dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Currency:
          </label>
          <select
            className="mt-1 p-2 border rounded-md w-full"
            value={calculator.selectedCurrency}
            onChange={handleCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            {/* Add more currency options as needed */}
          </select>
        </div>

        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </form>

      <div className="mt-8">
        {isCalculated && (
          <div className="result-container bg-green-500 text-darkgreen p-4 rounded-md">
            <p className="text-sm font-inter font-bold text-darkgreen">
              Required Retirement Savings: {calculator.requiredSavings}{" "}
              {calculator.selectedCurrency}
            </p>
            <p className="text-sm font-inter font-bold text-darkgreen">
              Required Monthly Contribution:{" "}
              {calculator.requiredMonthlyContribution}{" "}
              {calculator.selectedCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
