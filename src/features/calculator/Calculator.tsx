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

  const handleCalculate = () => {
    dispatch(calculateRetirement());
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrency(e.target.value));
  };

  return (
    <div>
      <div>
        <p>Hello {calculator.name}!!</p>
      </div>

      <label>Name:</label>
      <input
        type="text"
        value={calculator.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <label>Current Age</label>
      <input
        type="number"
        value={calculator.currentAge}
        onChange={(e) => handleChange("currentAge", e.target.value)}
      />
      <label>Retirement Age</label>
      <input
        type="number"
        value={calculator.retirementAge}
        onChange={(e) => handleChange("retirementAge", e.target.value)}
      />
      <label>Current Savings</label>
      <input
        type="number"
        value={calculator.currentSavings}
        onChange={(e) => handleChange("currentSavings", e.target.value)}
      />
      <label>Savings Contribution</label>
      <input
        type="number"
        value={calculator.savingsContribution}
        onChange={(e) => handleChange("savingsContribution", e.target.value)}
      />
      <label>Monthly Income Required</label>
      <input
        type="number"
        value={calculator.monthlyIncomeRequired}
        onChange={(e) => handleChange("monthlyIncomeRequired", e.target.value)}
      />

      {/* Currency dropdown */}
      <label>Currency:</label>
      <select
        value={calculator.selectedCurrency}
        onChange={handleCurrencyChange}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        {/* Add more currency options as needed */}
      </select>

      <button onClick={handleCalculate}>Calculate</button>

      {/* Display results */}
      <div>
        <p>
          Required Retirement Savings: {calculator.requiredSavings}{" "}
          {calculator.selectedCurrency}
        </p>
        <p>
          Required Monthly Contribution:{" "}
          {calculator.requiredMonthlyContribution} {calculator.selectedCurrency}
        </p>
      </div>
    </div>
  );
};

export default Calculator;
