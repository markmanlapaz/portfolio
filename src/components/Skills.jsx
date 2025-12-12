import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import { SiMysql, SiPhp, SiTailwindcss, SiRobotframework } from "react-icons/si";
import { RiSpeakAiLine } from "react-icons/ri";
import { FcCollaboration, FcAlarmClock } from "react-icons/fc";
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className='text-sky-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'MySQL', icon: <SiMysql className='text-orange-300' /> },
        { name: 'PHP', icon: <SiPhp className='text-blue-500' /> },
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
      ],
    },
    {
        category: 'People',
        technologies: [
          { name: 'Collaboration', icon: <FcCollaboration className='text-green-500' /> },
          { name: 'Communication', icon: <RiSpeakAiLine className='text-orange-300' /> },
          { name: 'Adaptability', icon: <SiRobotframework className='text-blue-500' /> },
          { name: 'Time Management', icon: <FcAlarmClock className='text-blue-500' /> },
        ],
      },
  ]

const Skills = () => {
  return (
    <div className="max-w-[1100px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            Always learning 
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {skills.map((skill, index) => (
                <div key={index} className="border border-gray-600 p-7 rounded-lg bg-gray-900/20 shadow-lg w-full md:w-1/3">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-5">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span>{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
