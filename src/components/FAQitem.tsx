import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing chevron icons
import './FAQ.css'; // Import the CSS file

const FAQitem = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAnswer = (index:any) => {
    setIsOpen(isOpen === index ? null : index); // Toggle state to show/hide answer
  };

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions ?</h1>

      <div className="faq-item">
        <div onClick={() => toggleAnswer(0)} className="question">
          <h2>How do I enroll in a course?</h2>
          {isOpen === 0 ? <FaChevronUp className="icon open" /> : <FaChevronDown className="icon closed" />}
        </div>

        {isOpen === 0 && (
          <p className="answer">
            You can enroll in a course by visiting our course catalog and clicking on the "Enroll Now" button for the course of your choice.
          </p>
        )}
      </div>

      <div className="faq-item">
        <div onClick={() => toggleAnswer(1)} className="question">
          <h2>Are certificates provided upon course completion?</h2>
          {isOpen === 1 ? <FaChevronUp className="icon open" /> : <FaChevronDown className="icon closed" />}
        </div>

        {isOpen === 1 && (
          <p className="answer">
            Yes, we provide certificates upon successful completion of the course.
          </p>
        )}
      </div>

      <div className="faq-item">
        <div onClick={() => toggleAnswer(2)} className="question">
          <h2>Is technical support available for online learning issues?</h2>
          {isOpen === 2 ? <FaChevronUp className="icon open" /> : <FaChevronDown className="icon closed" />}
        </div>

        {isOpen === 2 && (
          <p className="answer">
            Yes, technical support is available to assist with any issues you may encounter during the course.
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQitem;
