import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import moonIcon from '../../assets/contenticons/moon.svg';
import sunIcon from '../../assets/contenticons/sun.svg';
import AnubhavIcon from '../../assets/personalLogo.svg';
import AnubhavIconTwo from '../../assets/personalLogoTwo.svg';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!darkMode);
    }

    // Check localStorage on mount and set the darkMode state
    // useEffect(() => {
    //     const savedTheme = localStorage.getItem('theme');
    //     if (savedTheme === 'dark') {
    //         setIsDarkMode(true);
    //     }
    // }, []);

    const [darkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Save dark mode preference
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light'); // Save light mode preference
        }
    }, [darkMode]);

    return (
        <div>
            <div className="relative w-full bg-gray-200 dark:bg-gray-900 rounded-lg font-robotoC">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <Link to="/"><div className="inline-flex items-center space-x-2">
                        {darkMode ? <img src={AnubhavIconTwo} alt="Anubhav" width="50" height="50" /> : <img src={AnubhavIcon} alt="Anubhav" width="50" height="50" />}
                        <span className="ml-3 text-xl dark:text-white font-bold">Anubhav.dev</span>
                    </div></Link>

                    <div className="hidden grow items-start lg:flex">
                        <ul className="ml-12 inline-flex space-x-8">
                            <li>
                                <NavLink to="/Workexperience" className="text-gray-800 dark:text-white font-semibold">Work Experience</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Certifications" className="text-gray-800 dark:text-white font-semibold">Certifications</NavLink>
                            </li>
                            <a href="https://anubhavcreates.hashnode.dev/" target="_blank">
                                <button className="text-gray-800 dark:text-white font-semibold">Tech Blogs</button></a>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        {/* Theme Toggle Button */}
                        <button
                            className="h-8 w-8 flex items-center justify-center rounded-lg mr-2 hover:bg-gray-300 dark:hover:bg-gray-700" onClick={toggleDarkMode}>
                            {darkMode ? <img src={sunIcon} alt="sun icon" /> : <img src={moonIcon} alt="moon icon" />}
                        </button>

                        {/* Hire Me Button - Hidden on Mobile */}
                        <div className="hidden lg:block">
                            <NavLink to="/Hireme"
                                className="rounded-md border-l-2 border-r-2 border-t border-b border-black dark:border-white px-3 py-2 text-sm font-semibold text-black dark:text-white 
                                hover:bg-indigo-600 hover:text-white hover:border-solid hover:border-indigo-600 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 dark:hover:border-solid transition-all duration-200 ease-in-out cursor-pointer"
                            >
                                HIRE ME
                            </NavLink>
                        </div>

                        <div className="lg:hidden ml-2">
                            {menuOpen ? (
                                <svg
                                    onClick={toggleMenu} // Cross icon to close menu
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 cursor-pointer dark:text-white"
                                >
                                    <line x1="4" y1="4" x2="20" y2="20"></line>
                                    <line x1="20" y1="4" x2="4" y2="20"></line>
                                </svg>
                            ) : (
                                <svg
                                    onClick={toggleMenu} // Hamburger icon to open menu
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 cursor-pointer dark:text-white"
                                >
                                    <line x1="4" y1="12" x2="20" y2="12"></line>
                                    <line x1="4" y1="6" x2="20" y2="6"></line>
                                    <line x1="4" y1="18" x2="20" y2="18"></line>
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                {menuOpen && ( // Conditionally render mobile menu
                    <div className="lg:hidden">
                        {/* <ul className="flex flex-col items-center space-y-4 bg-slate-200 dark:bg-slate-600 rounded-lg py-4">
                            <li>
                                <NavLink
                                    className="bg-indigo-500 dark:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                                    onClick={() => setMenuOpen(false)} // Close menu on link click
                                >
                                    Work Experience
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/work-experience"
                                    className="bg-sky-500 dark:bg-sky-400 border border-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded text-sm"
                                    onClick={() => setMenuOpen(false)} // Close menu on link click
                                >
                                    Hire me
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="bg-indigo-500 dark:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-sm"
                                    onClick={() => setMenuOpen(false)} // Close menu on link click
                                >
                                    Certifications
                                </NavLink>
                            </li>
                            <li>
                                <a href="https://anubhavcreates.hashnode.dev/" target="_blank">
                                    <button
                                        to="/work-experience"
                                        className="bg-indigo-500 dark:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded text-sm"
                                        onClick={() => setMenuOpen(false)} // Close menu on link click
                                    >
                                        Tech Blogs
                                    </button>
                                </a>
                            </li>

                        </ul> */}
                        <ul className="flex flex-col items-center space-y-4 bg-slate-200 dark:bg-slate-600 rounded-lg py-4">
            <li>
                <NavLink to="/WorkExperience"
                    className="bg-indigo-500 dark:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-sm"
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                    Work Experience
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Hireme"
                    className="bg-indigo-400 dark:bg-sky-400 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded text-sm"
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                    Hire Me
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Certifications"
                    className="bg-indigo-500 dark:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded text-sm"
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                    Certifications
                </NavLink>
            </li>
            <li>
                <a
                    href="https://anubhavcreates.hashnode.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-500 dark:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded text-sm"
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                    Tech Blogs
                </a>
            </li>
        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
