import React from 'react'
import AvantGarde from '/avantgrde.jpg';
import Certificate from '../../assets/contenticons/certificate.svg';
import LinkedInTwo from '../../assets/contenticons/linkedinTwo.svg';

const cardsData = [
    {
        id: 1,
        image: AvantGarde,
        title:"Avant Garde Digital services Pvt. Ltd.",
        company: "Full Stack Developer",
        content: "Designed and developed web and mobile apps,troubleshooting issues to ensure seamless functionality. Leveraged emerging technologies to deliver innovative solutions and enhance user satisfaction.",
        link: "https://www.linkedin.com/company/avant-garde-digital/",
    },

];

const Card = ({ image, title, company, content, link }) => (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 h-full">
        <img className="w-full h-auto rounded-t-xl" src={image} alt={title} />
        <div className="flex flex-col p-4 md:p-5 flex-grow">
            <h3 className="text-md font-bold text-gray-800 dark:text-white text-start">{title}</h3>
            <p className="font-bold text-sky-400 dark:text-sky-400 text-lg">{company}</p>
            <p className="mt-1 text-gray-500 dark:text-neutral-400 text-start text-sm flex-grow">{content}</p>
        </div>
        <a target="_blank"
            className="py-2 px-3 w-full inline-flex justify-between mb-0.5 gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href={link}
        >
            <div className="flex justify-center gap-x-2 w-full">
                <p>Visit LinkedIn</p>
                <img className="w-4 h-4" src={LinkedInTwo} />
            </div>
        </a>
    </div>
);

function WorkExp() {
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
  )
}

export default WorkExp;
