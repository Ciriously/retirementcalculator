import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="cursor-pointer flex justify-between items-center bg-gray-100 p-4 rounded-md"
        onClick={toggleAnswer}
      >
        <h3 className="text-lg font-inter font-semibold">{question}</h3>
        <span
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && <p className="mt-2 font-inter ">{answer}</p>}
    </div>
  );
};

export default FAQItem;
