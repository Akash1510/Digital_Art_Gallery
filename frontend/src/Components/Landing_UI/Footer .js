import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div className="max-w-screen-sm mx-auto text-center">
                        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Don't Miss Out!</h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Sign up now to stay updated with the latest digital art trends and events</p>
                        <Link to="/signup" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Register</Link>
                    </div>
                </div>
            </section>
            <footer className="bg-white dark:bg-gray-800">
                <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Team Members</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Ankit Kumar Tiwari</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Ruchita Chaudhari</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Akash Jadhav</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Om Raundal</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">LinkedIn</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/in/ankit-kumar-tiwari-565a56257/" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/in/ruchita-n-chaudhari-77a931253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/in/akash-jadhav-5b8236259" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/in/om-raundal-64947a228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:underline">Click Here</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">GitHub</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://github.com/a4d3e" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/ru2003" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/RaundalOm" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <a href="http://gitHub.com/Akash1510" className="hover:underline">Click Here</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Instagram</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/annkiit___/" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/_elipidius18/" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Click Here</Link>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/raundalom78/" className="hover:underline">Click Here</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Other Links</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://aspecta.id/u/ankitkumartiwari" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Click Here</Link>
                                </li>
                                <li className="mb-4">
                                    <a href="https://twitter.com/HarshalJad92011" className="hover:underline">Click Here</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://pin.it/60hNCIZuI" className="hover:underline">Click Here</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="text-center">
                        <Link to="/" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img src="./asset/logo.png" className="h-6 mr-3 sm:h-9" alt="" />
                            CreativitySphere
                        </Link>
                        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 CreativitySphere™. All Rights Reserved. Built by <Link to="/" className="text-purple-600 hover:underline dark:text-purple-500">Byte</Link><Link to="/" className="text-purple-600 hover:underline dark:text-purple-500">Brigade</Link>.</span>
                        <ul className="flex justify-center mt-5 space-x-5">
                            {/* Add social media icons or additional links here */}
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
