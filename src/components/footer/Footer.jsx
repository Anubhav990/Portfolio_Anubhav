import React from 'react';
import { Link } from 'react-router-dom';
import xIcon from '../../assets/contenticons/x.svg';
import githubIcon from '../../assets/contenticons/githubfooter.svg';
import linkedinIcon from '../../assets/contenticons/linkedin.svg';
import discordIcon from '../../assets/contenticons/discord.svg';

function Footer() {
    return (
        <div>
            <footer className="w-full mt-2 md:mt-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-10 justify-center items-center mb-2 md:mb-4">
                        <a href="https://x.com/Anubhav990" target="_blank" className="block">
                            <img src={xIcon} alt="x" width="35" height="35" />
                        </a>
                        <a href="https://github.com/Anubhav990" target="_blank" className="block">
                            <img src={githubIcon} alt="instagram" width="30" height="30" />
                        </a>
                        <a href="https://www.linkedin.com/in/anubhav-gupta-2ba294235/" target="_blank" className="block">
                            <img src={linkedinIcon} alt="instagram" width="30" height="30" />
                        </a>
                        <a href="https://discordapp.com/users/xxxx/1241444105997910089/" target="_blank" className="block">
                            <img src={discordIcon} alt="instagram" width="40" height="40" />
                        </a>
                    </div>
                    <span className="text-lg text-center block font-semibold text-gray-800 dark:text-white hover:text-indigo-600 transition duration-300 ease-in-out">
                        Let’s Connect & Chase Creativity Together!
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
