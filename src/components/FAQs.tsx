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
      question: "How does a retirement planning calculator work?",
      answer:
        "A retirement planning calculator is a utility tool that shows you the amount of money you need after retirement. It helps you to plan your investments to get the desired retirement corpus at the time of retirement. The retirement planning calculator will serve two primary purposes. It shows you the amount of money you need to maintain your current lifestyle after retirement.The retirement planning calculator has a formula box where you select your present age, the age at which you plan to retire, the life expectancy, and the monthly income you will need in retirement. You must also choose the expected inflation rate (a good guess would be 6-7% a year), expected return on investment, and if you have set aside any amount for retirement.The retirement planning calculator will show you the annual income you require at retirement, the additional amount you must acquire for your retirement, and the monthly savings to accumulate the retirement corpus you desire.",
    },
  ]);

  return (
    <div className="max-w-l mx-auto mt-8 font-mono">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQs;
