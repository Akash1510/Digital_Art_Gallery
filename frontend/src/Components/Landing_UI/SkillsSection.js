import React from 'react';
import { Link } from 'react-router-dom';
import drawingImg from '../Landing_UI/asset/drawing.png'; // Update with correct path
import singingImg from '../Landing_UI/asset/singing.png'; // Update with correct path
import dancingImg from '../Landing_UI/asset/dancing.png'; // Update with correct path
import instrumentImg from '../Landing_UI/asset/instrument.png'; // Update with correct path
import codingImg from '../Landing_UI/asset/coding.png'; // Update with correct path
import writingImg from '../Landing_UI/asset/writing.png'; // Update with correct path

const SkillsSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <Link
            to="/drawing" // Update with actual route if needed
            className="inline-flex flex-col items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <img src={drawingImg} alt="Drawing" className="w-16 h-16 mb-2 text-gray-500 dark:text-gray-400" />
            <span className="text-right">Drawing</span>
          </Link>
          
          <Link
            to="/singing" // Update with actual route if needed
            className="inline-flex flex-col items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <img src={singingImg} alt="Singing" className="w-16 h-16 mb-2 text-gray-500 dark:text-gray-400" />
            <span className="text-right">Singing</span>
          </Link>
          
          <Link
            to="/dancing" // Update with actual route if needed
            className="inline-flex flex-col items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <img src={dancingImg} alt="Dancing" className="w-16 h-16 mb-2 text-gray-500 dark:text-gray-400" />
            <span className="text-right">Dancing</span>
          </Link>
          
          <Link
            to="/instruments" // Update with actual route if needed
            className="inline-flex flex-col items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <img src={instrumentImg} alt="Playing Instruments" className="w-16 h-16 mb-2 text-gray-500 dark:text-gray-400" />
            <span className="text-right">Playing Instruments</span>
          </Link>
          
          <Link
            to="/coding" // Update with actual route if needed
            className="inline-flex flex-col items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <img src={codingImg} alt="Coding" className="w-16 h-16 mb-2 text-gray-500 dark:text-gray-400" />
            <span className="text-right">Coding</span>
          </Link>
          
          <Link
            to="/writing" // Update with actual route if needed
            className="inline-flex flex-col items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <img src={writingImg} alt="Writing" className="w-16 h-16 mb-2 text-gray-500 dark:text-gray-400" />
            <span className="text-right">Writing</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
