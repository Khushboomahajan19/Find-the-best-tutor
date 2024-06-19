import React, { useState } from "react";

function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqData = [
    {
      question: "What subjects do your tutors teach?",
      answer:
        "Our tutors cover a wide range of subjects including Math, Science, English, History, and more.",
    },
    {
      question: "How do I book a tutoring session?",
      answer:
        "You can book a session by creating an account on our website and browsing available tutors.",
    },
    {
      question: "Is Trial Class Free or Paid?",
      answer:
        "Trial Class can be free or paid depending on the tutor. In most cases, it is free of cost. However, in some cases, an experienced tutor might demand a paid Trial Class. You can book your Free Trial Class in no time.",
    },
    {
      question: "To Whom Do I Need to Pay?",
      answer: "You can pay directly to the tutor.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-section border border-gray-300 p-4 rounded-lg">
      <h2 className="faq-title text-center font-bold text-xl mb-4">
        Frequently Asked Questions
      </h2>
      <ul className="faq-list">
        {faqData.map((faq, index) => (
          <li key={index} className="border-b border-gray-300">
            <div
              className="faq-question py-2 px-4 flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <span className="mr-2">{faq.question}</span>{" "}
              <span
                className={`plus-sign ${
                  expandedIndex === index ? "rotate-45" : "rotate-0"
                } text-xl`}
              >
                +
              </span>
            </div>
            {expandedIndex === index && (
              <div className="faq-answer px-4 py-2">{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQSection;
