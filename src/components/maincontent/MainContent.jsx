import React from 'react';
import SvgWithNames from '../svgwithnames/SvgWithNames';
import { Link } from 'react-router-dom';
import Testimonials from '../testimonials/Testimonials';
import { Sparkles } from '../sparkles/Sparkles';
import SparkleCard from '../SparkleCard/SparkleCard';
import { BlurIn } from '../blurineffect/BlurIn';
import resumeIcon from '../../assets/contenticons/resume.svg';
import projectIcon from '../../assets/contenticons/projects.svg';

function MainContent() {

    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center px-4 pt-3 md:pt-4 md:px-48 dark:bg-gray-800">
                    <h1 className="text-3xl font-bold mb-2 md:text-[46px] leading-tight dark:text-white"><BlurIn /></h1>
                    <p className="text-base text-gray-600 dark:text-white md:mt-1 mb-2 md:text-xl">
                        I am a creative software developer from India, proficient in the following tech stacks.
                    </p>
                    {/* Add Sparkles effect similar to SparkleCard */}
                </div>
                <SvgWithNames />
                <div className="relative -mt-20 h-40 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] dark:after:border-t dark:after:border-[#7876c566] dark:after:bg-zinc-900">
                    <Sparkles
                        density={1200}
                        className="absolute inset-x-0 bottom-0 h-full w-full [dark:mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                    />
                </div>
                <div className="flex justify-center pt-0 space-x-4 dark:bg-gray-800">
                    <a href="https://drive.google.com/file/d/15ATyfKqk157ka-BOf9MAzZngKThK0UnG/view?usp=sharing" target="_blank"><button className="flex items-center px-4 py-2 bg-indigo-500 dark:bg-blue-500 text-white dark:text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-blue-700 transition duration-300">View Resume
                    <img src={resumeIcon} className="w-6 h-6 ml-2" />
                    </button></a>
                    <Link to="/Projects"><button className="flex items-center px-4 py-2 bg-indigo-500 dark:bg-blue-500 text-white dark:text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-blue-700 transition duration-300">Projects
                    <img src={projectIcon} className="w-6 h-6 ml-2" />
                    </button></Link>
                </div>
                <Testimonials />
                {/* <SparkleCard /> */}
            </div>
        </>
    );
}

export default MainContent;
