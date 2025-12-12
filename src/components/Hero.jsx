import React from "react";
import profilepic from "../assets/profpic.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLink,
    AiOutlineLinkedin,

} from "react-icons/ai";
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFigmaLogoDuotone } from "react-icons/pi";

import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <div className="mt-32 max-w-[1100px] mx-auto relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "UX/UI Designer",
                            1000,
                            "Serial Napper",
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 w-full md:text-7xl text-5xl mb-4"
                    >
                        HEY, I'M <br />
                        <span className="text-blue-600">MARK</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        I'm a web developer and designer who builds clean, functional websites—without making things more complicated than they need to be.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        I’m all about creating smooth, user-friendly experiences, and I’m always picking up new skills along the way—<span className="text-blue-600">steady, curious, and always improving.</span>                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-row items-center gap-6 my-4 md:mb-0"
                    >
                        <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-blue-500 rounded-xl inline-flex items-center"
                        >
                            <a href="/markmanlapaz-cv.pdf" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                Download CV
                            </a>                        </motion.button>

                        <div className="flex gap-6 flex-row text-4xl md:text-6xl text-gray-500 z-20">
                            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/markmanlapaz" aria-label="Mark Manlapaz GitHub Profile" target="_blank" rel="noopener noreferrer">
                                <AiOutlineGithub />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/mark-manlapaz-50b277191/" aria-label="Mark Manlapaz LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                                <AiOutlineLinkedin />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/cheeese.jpeg" aria-label="Mark Manlapaz Instagram Profile" target="_blank" rel="noopener noreferrer">
                                <AiOutlineInstagram />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.img
                    src={profilepic}
                    className="w-[300px] md:w-[450px] rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="flex flex-col sm:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
            >
                <h2 className="text-gray-200 mr-6 text-3xl font-bold w-full sm:w-auto text-center sm:text-left pb-6 sm:pb-0">
                    My Tech Stack</h2>
                <div className="flex flex-wrap justify-center sm:justify-start w-full sm:w-auto">
                    <DiHtml5 className="text-orange-600 mx-2" />
                    <DiCss3 className="text-blue-600 mx-2" />
                    <DiJavascript1 className="text-yellow-500 mx-2" />
                    <RiTailwindCssFill className="text-sky-400 mx-2" />
                    <PiFigmaLogoDuotone className="text-white mx-2" />
                    <DiReact className="text-blue-500 mx-2" />
                    <DiNodejsSmall className="text-green-500 mx-2" />
                </div>
            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>
        </div>
    )
}
