import React from 'react';
import { Sparkles } from "../sparkles/Sparkles";
import githubIcon from '../../assets/contenticons/github.svg';
import javascriptIcon from '../../assets/contenticons/javascript.svg';
import nodejsIcon from '../../assets/contenticons/nodejs.svg';
import reduxIcon from '../../assets/contenticons/redux.svg';
import reactIcon from '../../assets/react.svg';
import reactnativeIcon from '../../assets/contenticons/reactnative.svg';
import tailwindcssIcon from '../../assets/contenticons/tailwindcss.svg';
import postmanIcon from '../../assets/contenticons/postman.svg';
import mongodbIcon from '../../assets/contenticons/mongodb.svg';
import firebaseIcon from '../../assets/contenticons/firebase.svg';
import supabaseIcon from '../../assets/contenticons/supabase.svg';
import phpIcon from '../../assets/contenticons/php.svg';

function SparkleCard() {

    const items = [
        { id: 1, name: 'React', svg: reactIcon },
        { id: 2, name: 'React Native', svg: reactnativeIcon },
        { id: 3, name: 'Tailwind CSS', svg: tailwindcssIcon },
        { id: 4, name: 'Redux', svg: reduxIcon },
        { id: 5, name: 'Node.js', svg: nodejsIcon },
        { id: 6, name: 'JavaScript', svg: javascriptIcon },
        { id: 7, name: 'GitHub', svg: githubIcon },
        { id: 8, name: 'Postman', svg: postmanIcon },
        { id: 9, name: 'Mongo DB', svg: mongodbIcon },
        { id: 10, name: 'Firebase', svg: firebaseIcon },
        { id: 11, name: 'Supabase', svg: supabaseIcon },
        { id: 12, name: 'PHP', svg: phpIcon }
    ];

    return (
        <div className="h-screen w-screen overflow-hidden">
            <div className="mx-auto mt-32 w-screen max-w-2xl">
                <div className="text-center text-gray-600 dark:text-white">
                    <span className="text-black dark:text-indigo-200 text-3xl font-bold">Hey there! I'm Anubhav.</span>
                    <br />
                    <span className="text-xl">I am a creative software developer from India, proficient in the following tech stacks.</span>
                </div>

                <div className="mt-8 grid grid-cols-12">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col items-center m-4">
                            <img src={item.svg} alt={item.name} className="w-8 h-8" />
                            <span className="mt-2 text-center text-xs dark:text-white">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
                <Sparkles
                    density={1200}
                    className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                />
            </div>
        </div>
    );
}

export default SparkleCard;
