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

  const handleCalculate = () => {
    dispatch(calculateRetirement());
    setIsCalculated(true);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrency(e.target.value));
  };

  return (
    <div className="max-w-md mx-auto lg:max-w-2xl my-8 p-6 bg-white rounded-md shadow-md font-inter">
      <div className="mb-4">
        <p className="text-xl font-medium">Hello👋 {calculator.name}!!</p>
      </div>
      {/* Input form to add all inputs */}
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full font-medium"
            value={calculator.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Current Age
          </label>
          <input
            type="number"
            className="mt-1 p-2 border rounded-t-md rounded-b-md w-full font-medium"
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
            className="mt-1 p-2 border rounded-md w-full font-medium"
            value={calculator.retirementAge}
            onChange={(e) => handleChange("retirementAge", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Current Retirement Savings
          </label>
          <div className="flex items-center">
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full font-medium"
              value={calculator.currentSavings?.toLocaleString() || ""}
              onChange={(e) =>
                handleChange(
                  "currentSavings",
                  e.target.value.replace(/,/g, "").replace(/\$/g, "")
                )
              }
              placeholder="$"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Current Retirement Savings Contribution
          </label>
          <div className="flex items-center">
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full font-medium"
              value={calculator.savingsContribution?.toLocaleString() || ""}
              onChange={(e) =>
                handleChange(
                  "savingsContribution",
                  e.target.value.replace(/,/g, "").replace(/\$/g, "")
                )
              }
              placeholder="$"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Monthly Income Required at Retirement
          </label>
          <div className="flex items-center">
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full font-medium"
              value={calculator.monthlyIncomeRequired?.toLocaleString() || ""}
              onChange={(e) =>
                handleChange(
                  "monthlyIncomeRequired",
                  e.target.value.replace(/,/g, "").replace(/\$/g, "")
                )
              }
              placeholder="$"
            />
          </div>
        </div>

        {/* Currency dropdown */}

        {/* <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Currency:
          </label>
          <select
            className="mt-1 p-2 border rounded-md w-full font-medium"
            value={calculator.selectedCurrency}
            onChange={handleCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div> */}

        <button
          type="button"
          className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-white py-3 px-6 rounded-md hover:from-blue-600 hover:via-blue-500 hover:to-blue-600 transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </form>

      {calculator.error && (
        <div className="mt-4 p-3 bg-red-500 text-white rounded-md">
          {calculator.error}
        </div>
      )}

      {/* Results */}
      <div className="mt-8">
        {isCalculated && !calculator.error && (
          <div className="result-container bg-green-500 text-white p-4 rounded-md text-center">
            <p className="text-lg font-semibold mb-4">Your Retirement Plan:</p>

            <div className="flex flex-col items-center mb-4">
              <div className="mb-2">
                <span className="text-sm font-inter font-semibold text-darkgreen">
                  Required Retirement Savings:
                </span>
              </div>
              <div className="text-lg font-inter font-bold text-white">
                {calculator.requiredSavings?.toLocaleString()}{" "}
                {calculator.selectedCurrency}
              </div>
            </div>

            <div className="mx-auto border-b border-white my-4 w-1/2"></div>

            <div className="flex flex-col items-center">
              <div className="mb-2">
                <span className="text-sm font-inter font-semibold text-darkgreen">
                  Required Monthly Contribution:
                </span>
              </div>
              <div className="text-lg font-inter font-bold text-white">
                {calculator.requiredMonthlyContribution?.toLocaleString()}{" "}
                {calculator.selectedCurrency}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* signature */}
      <div className="mt-8">
        <p className="text-sm text-gray-600">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://github.com/Ciriously"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient bg-gradient-to-r from-red-600 via-yellow-500 to-green-400 hover:underline"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Aditya Mishra
          </a>
        </p>
      </div>
    </div>
  );
};

export default Calculator;
