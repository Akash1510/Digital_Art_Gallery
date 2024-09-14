import React from 'react'

import { Link } from 'react-router-dom'
import reportImg from '../Landing_UI/asset/report.png'; 
import creativeImg from '../Landing_UI/asset/creative.jpg'; 
import SkillsSection from './SkillsSection';
import AboutUsSection from './AboutUsSection';
import FeaturesSection from './FeaturesSection';
import Navbar from './Navbar'
const landing = () => {
  return (
    <>
    <Navbar/>
  
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Nurturing creativity, empowering students <br />fostering inclusion.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We're establishing a dedicated digital art platform tailored for students, providing a{' '}
            <Link to="https://www.linkedin.com/pulse/what-nurturing-environment-context-higher-ed-don-kilburn/" className="hover:underline">
              nurturing environment
            </Link>{' '}
            where they can confidently showcase their talents, connect with peers, and embark on a journey of artistic exploration and growth.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div className="flex">
              <Link
                to="https://learning.uic.edu/news-stories/the-power-of-student-voices-in-shaping-digital-education/" // Update with actual route if needed
                className="flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <img src={reportImg} alt="Report 1" className="w-10 h-10 mr-2" />
                Report 1
              </Link>
              <Link
                to="https://wellness.asu.edu/blog/the-importance-of-creative-expression" // Update with actual route if needed
                className="flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <img src={reportImg} alt="Report 2" className="w-10 h-10 mr-2" />
                Report 2
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={creativeImg} alt="hero images" />
        </div>
      </div>
    </section>

    <SkillsSection/>
    <AboutUsSection/>
    <FeaturesSection/>
    </>
  )
}

export default landing