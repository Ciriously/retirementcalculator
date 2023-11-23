// FAQs.tsx
import React, { useState } from "react";
import FAQItem from "./FAQItem";

const FAQs: React.FC = () => {
  const [faqs, setFAQs] = useState([
    {
      question: "What is Retirement Planning?",
      answer:
        "Retirement planning is the preparation of finances for the period after retirement or when you stop working. Planning for retirement can start from the day you get the first salary. Inflation is known to erode the value of your money. You must invest in financial instruments that may offer the return above inflation over some time. It helps you to get the finances to enjoy a quality lifestyle in retirement.Retirement planning must include an estimation of the expenses in retirement, determining the time horizon for your retirement, assessing the risk appetite, and tax-efficiency of your investments.Life expectancy is on the rise. You will have to depend on children and relatives for money if you don’t invest for your retirement. You must increase your investment towards retirement when you get a hike on your salary. Don’t touch the money you have set aside for your retirement or you will lose the benefit of compounding.",
    },
    {
      question: "What is a retirement planning calculator?",
      answer:
        "A retirement planning calculator is a utility tool that shows you the amount of money you need after retirement. It helps you to plan your investments to get the desired retirement corpus at the time of retirement. The retirement planning calculator will serve two primary purposes. It shows you the amount of money you need to maintain your current lifestyle after retirement.The retirement planning calculator has a formula box where you select your present age, the age at which you plan to retire, the life expectancy, and the monthly income you will need in retirement. You must also choose the expected inflation rate (a good guess would be 6-7% a year), expected return on investment, and if you have set aside any amount for retirement.The retirement planning calculator will show you the annual income you require at retirement, the additional amount you must acquire for your retirement, and the monthly savings to accumulate the retirement corpus you desire.",
    },
    {
      question: "How do we calculate your results?",
      answer:
        "The retirement planning process involves a series of calculations to estimate the required savings and monthly contributions based on various financial parameters and user input. The first step in this calculation is determining the remaining years until retirement, which is achieved by subtracting the current age from the desired retirement age. This establishes a timeframe for the financial planning process.To account for the impact of inflation, the monthly income required during retirement is adjusted using the inflationAdjustedMonthlyIncome formula. This formula considers the anticipated inflation rate and calculates the future value of the monthly income, ensuring that it keeps pace with the rising cost of living over the remaining years.The next crucial element is calculating the Required Retirement Savings. This figure represents the total amount of savings needed by the time of retirement, taking into account the adjusted monthly income and the duration of retirement. The formula multiplies the inflation-adjusted monthly income by 12 (months) and then further multiplies it by the remaining years until retirement.Finally, the Required Monthly Contribution is determined to achieve the retirement savings goal. This calculation considers factors such as the existing retirement savings, ongoing savings contributions, and the remaining years until retirement. The formula divides the difference between the required savings and the current retirement savings, adjusted for the contributions made over the remaining years, by the total number of months remaining until retirement.In summary, these formulas collectively provide a comprehensive estimate of the required retirement savings and the corresponding monthly contribution. The approach considers the impact of inflation and tailors the calculations to individual financial circumstances, offering users valuable insights into their retirement planning strategy.",
    },
    {
      question: "How does a retirement planning calculator work?",
      answer:
        "A retirement planning calculator is a utility tool that shows you the amount of money you need after retirement. It helps you to plan your investments to get the desired retirement corpus at the time of retirement. The retirement planning calculator will serve two primary purposes. It shows you the amount of money you need to maintain your current lifestyle after retirement.The retirement planning calculator has a formula box where you select your present age, the age at which you plan to retire, the life expectancy, and the monthly income you will need in retirement. You must also choose the expected inflation rate (a good guess would be 6-7% a year), expected return on investment, and if you have set aside any amount for retirement.The retirement planning calculator will show you the annual income you require at retirement, the additional amount you must acquire for your retirement, and the monthly savings to accumulate the retirement corpus you desire.",
    },
    {
      question: "What factors should I consider in retirement planning?",
      answer:
        "Several factors should be considered in retirement planning, including your current age, expected retirement age, current savings, monthly savings contribution, and the monthly income you'll need in retirement. Additionally, consider the expected rate of return on your investments and the impact of inflation on your future expenses.",
    },
    {
      question: "How does inflation affect retirement planning?",
      answer:
        "Inflation erodes the purchasing power of money over time. When planning for retirement, it's crucial to account for inflation to ensure that the future income and savings are sufficient to maintain your desired lifestyle. A retirement planning calculator often factors in inflation to provide accurate projections.",
    },
    {
      question:
        "Can I use a retirement planning calculator for early retirement?",
      answer:
        "Yes, a retirement planning calculator can be used for early retirement planning. When using the calculator, input your desired early retirement age and adjust other parameters accordingly. Keep in mind that early retirement may require a more aggressive savings strategy to achieve your financial goals.",
    },
    {
      question:
        "What role does the expected rate of return play in retirement planning?",
      answer:
        "The expected rate of return on your investments is a critical factor in retirement planning. A higher rate of return can help your savings grow faster, potentially requiring lower monthly contributions. However, it also comes with increased risk. It's essential to strike a balance based on your risk tolerance and financial goals.",
    },
    {
      question: "How do we calculate your results?",
      answer:
        "The retirement planning process involves a series of calculations to estimate the required savings and monthly contributions based on various financial parameters and user input. The first step in this calculation is determining the remaining years until retirement, which is achieved by subtracting the current age from the desired retirement age. This establishes a timeframe for the financial planning process.To account for the impact of inflation, the monthly income required during retirement is adjusted using the inflationAdjustedMonthlyIncome formula. This formula considers the anticipated inflation rate and calculates the future value of the monthly income, ensuring that it keeps pace with the rising cost of living over the remaining years.The next crucial element is calculating the Required Retirement Savings. This figure represents the total amount of savings needed by the time of retirement, taking into account the adjusted monthly income and the duration of retirement. The formula multiplies the inflation-adjusted monthly income by 12 (months) and then further multiplies it by the remaining years until retirement.Finally, the Required Monthly Contribution is determined to achieve the retirement savings goal. This calculation considers factors such as the existing retirement savings, ongoing savings contributions, and the remaining years until retirement. The formula divides the difference between the required savings and the current retirement savings, adjusted for the contributions made over the remaining years, by the total number of months remaining until retirement.In summary, these formulas collectively provide a comprehensive estimate of the required retirement savings and the corresponding monthly contribution. The approach considers the impact of inflation and tailors the calculations to individual financial circumstances, offering users valuable insights into their retirement planning strategy.",
    },
  ]);

  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setSelectedFAQ(index === selectedFAQ ? null : index);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold font-inter  mb-6">
        Frequently Asked Questions
      </h2>
      <div id="faq-section"></div>
      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              selectedFAQ === index ? "border-sky-500" : ""
            } border p-4 rounded-lg transition duration-300 ease-in-out`}
            onClick={() => handleFAQClick(index)}
          >
            <FAQItem question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
