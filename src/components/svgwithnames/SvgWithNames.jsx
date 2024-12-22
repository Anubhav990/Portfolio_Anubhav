import React, { useState, useEffect } from 'react';
import githubIcon from '../../assets/contenticons/github.svg';
import javascriptIcon from '../../assets/contenticons/javascript.svg';
import javascriptDarkIcon from '../../assets/contenticons/javascriptTwo.svg';
import nodejsIcon from '../../assets/contenticons/nodejs.svg';
import reduxIcon from '../../assets/contenticons/redux.svg';
import reactIcon from '../../assets/react.svg';
import reactnativeIcon from '../../assets/contenticons/reactnative.svg';
import tailwindcssIcon from '../../assets/contenticons/tailwindcss.svg';
import postmanIcon from '../../assets/contenticons/postman.svg';
import mongodbIcon from '../../assets/contenticons/mongodb.svg';
import firebaseIcon from '../../assets/contenticons/firebase.svg';
import supabaseIcon from '../../assets/contenticons/supabase.svg';
import laravelIcon from '../../assets/contenticons/laravel.svg';

function SvgWithNames() {

    const items = [
        {
            id: 1,
            name: 'React',
            svg: <img src={reactIcon} alt="React" className="w-8 h-8" />,
        },
        {
            id: 2,
            name: 'React Native',
            svg: <img src={reactnativeIcon} alt="React Native" className="w-8 h-8" />,
        },
        {
            id: 3,
            name: 'Tailwind Css',
            svg: <img src={tailwindcssIcon} alt="Tailwind CSS" className="w-8 h-8" />,
        },
        {
            id: 4,
            name: 'Redux',
            svg: <img src={reduxIcon} alt="Redux" className="w-8 h-8" />,
        },
        {
            id: 5,
            name: 'NodeJs',
            svg: <img src={nodejsIcon} alt="Node.js" className="w-8 h-8" />,
        },
        {
            id: 6,
            name: 'Javascript',
            svg: <img src={javascriptIcon} alt="JavaScript" className="w-8 h-8" />,
        },
        {
            id: 7,
            name: 'GitHub',
            svg: <img src={githubIcon} alt="GitHub" className="w-8 h-8" />,
        },
        {
            id: 8,
            name: 'Postman',
            svg: <img src={postmanIcon} alt="Postman" className="w-8 h-8" />,
        },
        {
            id: 9,
            name: 'Mongo DB',
            svg: <img src={mongodbIcon} alt="Mongo Db" className="w-8 h-8" />,
        },
        {
            id: 10,
            name: 'Firebase',
            svg: <img src={firebaseIcon} alt="Firebase" className="w-8 h-8" />,
        },
        {
            id: 11,
            name: 'Supabase',
            svg: <img src={supabaseIcon} alt="Supabase" className="w-8 h-8" />,
        },
        {
            id: 12,
            name: 'Laravel/PHP',
            svg: <img src={laravelIcon} alt="PHP" className="w-8 h-8" />
        }
    ];

    return (
        <div>
            <div className="flex flex-wrap justify-center mt-2 md:mt-8 dark:bg-gray-800">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col items-center m-2 md:m-4 dark:text-white">
                        {item.svg}
                        <span className="mt-2 text-center">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SvgWithNames;