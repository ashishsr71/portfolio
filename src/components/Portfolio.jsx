import React from 'react';

import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';
import one from "../assets/1.png"
import project from "../assets/2.png"
import project0 from "../assets/3.jpg"
import project9 from "../assets/4.png"
const projects = [
    {
      img: project,
      title: "Project #1",
      description: "Fullstack application for documents built in mern stack ,editing, realtime-collaboration ,Organization feature, multiple format saving ",
      links: {
        site: "https://docs-app-8l42.onrender.com",
        github: "https://github.com/ashishsr71/docs-app",
      },
    },
    {
      img: one,
      title: "Project #2",
      description: "A fullstack application for built with Mern stack ,Audio conferencing, Stories , Posts , Server-sent-events ,Websockets ,Cloudinary , Video-calling",
      links: {
        site: "https://social-threads-mgts.onrender.com",
        github: "https://github.com/ashishsr71/social-threads",
      },
    },
    {
      img: project0,
      title: "Project #3",
      description: "An e-commerce platform with various features.",
      links: {
        site: "https://e-commerce2-1.onrender.com",
        github: "#",
      },
    },
    {
      img: project9,
      title: "Project #4",
      description: "A mobile-friendly application using React and firebase for managing library and village memories , exam results , selections and admin controls  for updating data .",
      links: {
        site: "https://dalanwas-frontend.onrender.com",
        github: "#",
      },
    },
    // {
    //   img: project6,
    //   title: "Project #5",
    //   description: "A data visualization project using D3.js and other libraries.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio