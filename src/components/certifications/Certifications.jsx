import React from 'react';
import IbmHtml from '/ibmhtmljscss.png';
import Certificate from '../../assets/contenticons/certificate.svg';
import IbmPrompt from '/ibmprompteng.png';
import IbmGit from '/ibmgithub.png';
import IbmIntroGen from '/ibmgenintro.png';

const cardsData = [
    {
        id: 1,
        image: IbmHtml,
        title: "Web Development with HTML, CSS, JavaScript",
        company: "IBM",
        content: "Web development involves front-end (HTML, CSS, JavaScript) for interactive interfaces and back-end for server-side logic and databases. Full-stack developers handle both. Tools like IDEs (e.g., VSCode) and version control (Git) are used to build dynamic, responsive applications.",
        link: "https://coursera.org/share/2d1c8fae9896302bf9d9b503cc9f8186",
    },
    {
        id: 2,
        image: IbmPrompt,
        title: "Generative AI: Prompt Engineering Basics",
        company: "IBM",
        content: "Learn the fundamentals of prompt engineering in generative AI, including best practices, effective techniques, and impactful examples. Explore commonly used tools to enhance prompt creation and writing.",
        link: "https://coursera.org/share/c75a36726f4e9af5ae9e9fa9869b0b2d",
    },
    {
        id: 3,
        image: IbmGit,
        title: "Getting Started with Git and GitHub",
        company: "IBM",
        content: "Version control with Git enables collaborative coding and DevOps. Learn to use repositories, branches, pull requests, and merges, while building your portfolio through open-source projects on GitHub.",
        link: "https://coursera.org/share/bc27b4e31c759cc8253b2ae7185ada2b",
    },
    {
        id: 4,
        image: IbmIntroGen,
        title: "Generative AI: Introduction and Applications",
        company: "IBM",
        content: "Generative AI creates new content like text, code, images, audio, and video, unlike discriminative AI, which classifies data. Discover its real-world applications across industries and explore models and tools enabling these capabilities.",
        link: "https://coursera.org/share/28518b4f58290041ba938cbdcb43491f",
    },
];

const Card = ({ image, title, company, content, link }) => (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 h-full">
        <img className="w-full h-auto rounded-t-xl" src={image} alt={title} />
        <div className="flex flex-col p-4 md:p-5 flex-grow">
            <h3 className="text-md font-bold text-gray-800 dark:text-white text-start">{title}</h3>
            <h2 className="font-bold text-sky-400 dark:text-sky-400 text-lg">{company}</h2>
            <p className="mt-1 text-gray-500 dark:text-neutral-400 text-start text-sm flex-grow">{content}</p>
        </div>
        <a target="_blank"
            className="py-2 px-3 w-full inline-flex justify-between mb-0.5 gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href={link}
        >
            <div className="flex justify-center gap-x-2 w-full">
                <p>View Certificate</p>
                <img className="w-5 h-5" src={Certificate} />
            </div>
        </a>
    </div>
);

function Certifications() {
    return (
        <div className="max-w-[1000px] mx-auto mt-6 px-5 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardsData.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        company={card.company}
                        content={card.content}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Certifications;
