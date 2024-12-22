import React from 'react';
import LockTechDark from '/locktechdark.png';
import RightArrow from '../../assets/contenticons/rightarrow.svg';

const cardsData = [
    {
        id: 1,
        image: LockTechDark,
        title: "Lock-Tech Fitness Blog Web App",
        content: "Built with React, Tailwind CSS, and Supabase, responsive across all devices, Lock-Tech Fitness offers personalized fitness insights for all levels. It uses React Router for navigation, React Context for state management, and Supabase for secure social authentication. The app teaches you how to leverage AI and smart tech in your fitness journey, accessible on any device.",
        link: "https://lock-tech-fitness.vercel.app/",
    },
];

const Card = ({ image, title, content, link }) => (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <img className="w-full h-auto rounded-t-xl" src={image} alt={title} />
        <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white text-start">{title}</h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400 text-start text-sm">{content}</p>
            <a
                className="mt-2 py-2 px-3 w-full inline-flex justify-between gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href={link}
            >
                <div className="flex justify-between w-full">
                    <p>Visit Website</p>
                    <img className="w-6 h-6" src={RightArrow} />
                </div>
            </a>
        </div>
    </div>
);

function Projects() {
    return (
        <div className="max-w-[1000px] mx-auto mt-6 px-5 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardsData.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        content={card.content}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
