import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-5xl font-semibold mb-5">About <span className="text-blue-600">Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto mb-3">
                    Yeow, I’m Mark! A global pandemic and a career shift later… life has led me to become a junior full-stack web developer. Stepping into something new hasn’t been easy, but I’m all in—eager to learn, grow, and refine my craft every step of the way.
                    </p>
                    <p className="text-justify leading-7 w-11/12 mx-auto mb-3">
                     When I’m not fighting with code, you can usually find me binge-watching anime like it's a full-time job, learning how to edit photos and videos, or fully embracing the fine art of doing absolutely nothing.
                    </p>
                    <p className="text-justify leading-7 w-11/12 mx-auto mb-3">
                      I also enjoy sushi and napping. And cats.
                    </p>
                </div>
            </div>

            <form
                action="https://getform.io/f/adrnxela"
                method="POST"
                className=" max-w-6xl p-5 md:p-12"
                id="form"
            >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="bg-white mb-2 w-full rounded-md border border-gray-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="bg-white mb-2 w-full rounded-md border border-gray-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="bg-white mb-2 w-full rounded-md border border-gray-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color cursor-pointer"
            >
              Send Message
            </button>
            
          </form>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact