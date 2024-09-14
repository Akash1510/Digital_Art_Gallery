import React from 'react';
import { Link } from 'react-router-dom';
import sortIcon from '../Landing_UI/asset/sort.png'; // Update path as necessary
import userConnectIcon from '../Landing_UI/asset/userconnect.png'; // Update path as necessary
import exhibitionIcon from '../Landing_UI/asset/exhibition.png'; // Update path as necessary
import feedbackIcon from '../Landing_UI/asset/feedback.png'; // Update path as necessary
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import Footer from './Footer ';

const FeaturesSection = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-500"> Empowering Artists Digitally</p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Join our community of digital artists and unleash your creative potential with confidence and support.
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Experience the power of creativity with our intuitive platform, designed to showcase, inspire, and connect digital artists from around the world
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <Link to="/" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                Contact Us
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
            <div>
              <Link to="/" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                FAQ's
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <img src={sortIcon} alt="Search and Filter" className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">Search and Filter</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Implement robust search and filtering options so users can discover artwork based on criteria like genre, medium, artist, popularity, and more.
            </p>
          </div>
          <div>
            <img src={userConnectIcon} alt="Community Forums" className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">Community Forums</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Create discussion forums or groups where users can connect, share ideas, collaborate on projects, and seek advice from fellow artists and enthusiasts.
            </p>
          </div>
          <div>
            <img src={exhibitionIcon} alt="Events and Exhibitions" className="w-12 h-12 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">Events and Exhibitions</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Promote digital art events, exhibitions, and competitions within the community, providing a platform for artists to showcase their work and gain recognition.
            </p>
          </div>
          <div>
            <img src={feedbackIcon} alt="Commenting and Feedback" className="w-12 h-12 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">Commenting and Feedback</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Enable users to leave comments and feedback on artwork, fostering community interaction and engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
    
     <TestimonialSection/>
     <FAQSection/>
     <Footer/>
    </>

  );
};

export default FeaturesSection;
