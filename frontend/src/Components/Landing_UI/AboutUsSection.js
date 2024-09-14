import React from 'react';
import ourVisionImg from '../Landing_UI/asset/ourvision.png'; // Update with correct path
import dashboardImg from '../Landing_UI/asset/dashboard.png'; // Update with correct path

const AboutUsSection = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                {/* Row 1 */}
                <section>
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Our Story</h2>
                            <p className="mb-8 font-light lg:text-xl">
                                Welcome to CreativitySphere, a digital art gallery dedicated to showcasing the creative talents of students from around the world. Our platform provides a space for emerging artists to exhibit their work, connect with fellow creatives, and engage with art enthusiasts.
                            </p>
                            <section>
                                {/* List */}
                                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                    <li className="flex space-x-3">
                                        {/* Icon */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                            We offer students the chance to exhibit their artwork in our online gallery, reaching a global audience of art lovers and collectors.
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* Icon */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                            Our platform fosters a vibrant community of artists, educators, and art enthusiasts who share a passion for creativity and expression. Through forums, events, and collaborations, we encourage collaboration and connection among our members.
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* Icon */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                            We provide educational resources and tools to help students enhance their artistic skills, learn new techniques, and navigate the world of digital art.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mb-8 font-light lg:text-xl">
                                    Empowering student artists to unleash their creativity. Inspiring a passion for digital art.
                                </p>
                            </section>
                        </div>
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={ourVisionImg} alt="Our Vision" />
                    </div>
                </section>

                {/* Row 2 */}
                <section>
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={dashboardImg} alt="Feature Images 2" />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Who Benefits from Our Platform?</h2>
                            <p className="mb-8 font-light lg:text-xl">
                                Whether you're a student artist looking to showcase your work, an art lover seeking inspiration, or an educator passionate about supporting young talent, we invite you to join our community. Explore our gallery, connect with fellow creatives, and become a part of the CreativitySphere.
                            </p>
                            {/* List */}
                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Art Enthusiasts</span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Aspiring Artists</span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Student</span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Educator</span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Anyone Interested in Exploring and Appreciating Digital Art
                                    </span>
                                </li>
                            </ul>
                            <p className="font-light lg:text-xl">
                                We provide a harassment-free and non-toxic environment beneficial for creators, fostering a supportive community where individuals can freely express themselves, collaborate, and thrive without fear of judgment or mistreatment.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default AboutUsSection;
