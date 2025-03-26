import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
// import project5 from "../assets/project5.png"
// import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
  {
    id: 1,
    img: project1,
    title: "Pirates RFC",
    description: "Rebuilt from the ground up, utilizing agile methodology, Figma, WordPress, Github. A group effort managed with Trello and Toggl.",
    links: {
      site: "https://pirates-rugby.web.dmitcapstone.ca/pirates-rugby/",
      github: "#",
    },
  },
  {
    id: 2,
    img: project2,
    title: "Solana YEG",
    description: "A rapid, simple WordPress build for a local events service. Testing knowledge in UX/UI principles, brand identity, and WordPress.",
    links: {
      site: "https://solanayeg.com/",
      github: "#",
    },
  },
  {
    id: 3,
    img: project3,
    title: "Portfolio",
    description: "Built on React + Vite, utilizing TailwindCSS and Framer Motion.",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project) => (
        <Reveal key={project.id}>
          <div className={`flex flex-col md:flex-row ${project.id % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
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
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                  View Site
                </a>
                <a href={project.links.github}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                  <AiOutlineGithub />
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