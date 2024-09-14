import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush">
            {[{
              id: 1,
              question: "What types of artwork are accepted for submission?",
              answer: "Our platform celebrates creativity in all its forms, welcoming not just visual art and painting, but also embracing diverse expressions like dance, music, yoga, and writing. We believe in fostering a community where artists from various disciplines can come together, collaborate, and showcase their talents, enriching the cultural landscape with their unique contributions. With clear submission guidelines and unwavering support for creators, we provide a vibrant platform for artists from all backgrounds to showcase their work and inspire others. Join us in shaping the future of digital art.",
              link: "/guidelines.pdf"
            }, {
              id: 2,
              question: "Is there a limit to the number of artworks I can submit?",
              answer: "There are no limits to the number of artworks you can submit depending on the specific guidelines and policies of the organization, event, or platform you are submitting to.",
              link: "/guidelines.pdf"
            }, {
              id: 3,
              question: "Is there a fee for submitting artwork?",
              answer: "No, there is no fee for submitting artwork. We believe in providing an inclusive platform where artists can freely share their work without any financial barriers. Our goal is to support and promote creativity, and we welcome submissions from artists of all backgrounds and levels of experience."
            }, {
              id: 4,
              question: "Can I sell my artwork through the website?",
              answer: "Yes, you can sell your artwork through our website. We provide a platform for artists to showcase and sell their creations to a global audience. Whether you're an established artist or just starting out, our marketplace offers a convenient way to reach potential buyers and monetize your talent."
            }].map(({ id, question, answer, link }) => (
              <div key={id}>
                <h3>
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full py-5 font-medium text-left ${openIndex === id ? 'text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white' : 'text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'}`}
                    onClick={() => toggleAccordion(id)}
                    aria-expanded={openIndex === id}
                    aria-controls={`accordion-flush-body-${id}`}
                  >
                    <span>{question}</span>
                    <svg
                      className={`w-6 h-6 ${openIndex === id ? 'rotate-180' : ''} shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id={`accordion-flush-body-${id}`}
                  className={`py-5 border-b border-gray-200 dark:border-gray-700 ${openIndex === id ? 'block' : 'hidden'}`}
                  aria-labelledby={`accordion-flush-heading-${id}`}
                >
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {answer}
                    {link && (
                      <span> Read our <Link to={link} className="text-purple-600 dark:text-purple-500 hover:underline">guidelines</Link>.</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
