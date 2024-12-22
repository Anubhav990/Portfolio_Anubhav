import React from 'react';
import MorphingText from '../morphingtext/MorphingText';
import projectIcon from '../../assets/contenticons/projects.svg';
import CertificateIcon from '../../assets/contenticons/certificate.svg';
import {Link, NavLink} from 'react-router-dom';

function WhyYouShouldHireMe() {

    const texts = [
        "Hire Me",
        "Drive Success",
        "Recruit Me",
        "Elevate Your Team",
        "Choose Me",
        "Empower Your Growth",
        "Employ Me",
        "Let's Achieve Together!",
    ]

    // Array of cards with heading and content
    const cards = [
        { heading: "Innovative", content: "Driven to explore diverse domains, from Web2 to Web3. Intrigued by Solidity, AI/ML, and Python, with a passion for integrating cutting-edge technologies and continuous learning." },
        { heading: "Expertise", content: "Skilled in front-end development with strong backend logic. Currently honing expertise in MERN stack and PHP Laravel. Passionate about building efficient, user-focused solutions." },
        { heading: "Team Player", content: "Excel at fostering collaboration and building strong team dynamics. Thrive in diverse environments, leveraging collective strengths to achieve shared goals effectively." },
        { heading: "Problem-Solving", content: "Passionate about tackling challenges with innovative and efficient solutions. Skilled at analyzing problems, optimizing processes, and delivering impactful, scalable results." },
       
    ];
    return (
        <>
            <div className="pt-8">
                <div className="dark:text-white flex">
                    <MorphingText texts={texts} />
                </div>
            </div>

            <div className="flex flex-wrap justify-center pt-6 md:pt-1 gap-x-4 dark:bg-gray-800">
                <Link to="/Projects" className="px-4 py-2 flex items-center gap-x-1 bg-indigo-500 dark:bg-blue-500 text-white dark:text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 dark:hover:bg-blue-600 transition duration-300">
                    Projects
                    <img src={projectIcon} className="w-5 h-5" />
                </Link>
                <Link to="/Certifications" className="px-4 py-2 flex items-center gap-x-1 bg-indigo-500 dark:bg-blue-500 text-white dark:text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 dark:hover:bg-blue-600 transition duration-300">
                    Certifications
                    <img src={CertificateIcon} className="w-5 h-5" />
                </Link>
            </div>

            <div className="flex flex-wrap justify-center pt-6 md:pt-10 gap-4 dark:bg-gray-800">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="m-4 p-6 bg-white dark:bg-slate-700 rounded-xl shadow-neon-indigo dark:shadow-neon-blue flex flex-col items-center w-full sm:w-72 md:w-80 lg:w-96"
                    >
                        <h3 className="text-lg font-semibold text-indigo-600 dark:text-blue-400">{card.heading}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{card.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default WhyYouShouldHireMe;
