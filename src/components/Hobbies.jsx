import React from 'react'
import Reveal from "./Reveal"

const Hobbies = () => {
    return (
        <div className="px-6 max-w-[1100px] mx-auto md:my-12" id="Hobbies">
            <Reveal>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <div className="text-gray-300 my-3">
                            <h3 className="text-5xl font-semibold mb-5">About <span className="text-blue-600">Me</span></h3>
                            <p className="text-justify leading-7 w-11/12 mx-auto mb-3">
                                Hello world, I'm Mark! I didn’t start in web development, but after completing NAIT’s DMIT Web Design and Development program, I’ve fully leaned into the craft—ready to build, break, and debug my way forward.
                            </p>
                            <p className="text-justify leading-7 w-11/12 mx-auto mb-3">
                                I love clean, minimal designs backed by solid functionality, smooth animations, and a strong focus on SEO to help websites perform. Figma is my go-to, the console is a friend, and coffee keeps everything running.</p>
                            <p className="text-justify leading-7 w-11/12 mx-auto mb-3">
                                As a designer and developer, I’m always learning. Every project is a chance to sharpen my skills, take on new challenges, and stay current with modern web trends to deliver real results for clients.</p>
                            <p className="text-justify leading-7 w-11/12 mx-auto mb-3">
                                When I’m not wrestling with code, I’m probably binge-watching anime, editing photos in Lightroom, or enjoying the fine art of doing nothing. I also love snowboarding, cool cars, photography, travelling, and treating myself to a McDouble meal—large fries and a Coke Zero required.
                            </p>
                            {/* <div className='mt-8'>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="src\assets\hobby1.webp"
                                    alt="gallery-photo"
                                />
                            </div> */}
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg object-cover object-center"
                                src="/hobby1.webp"
                                alt="gallery-photo"
                            />
                        </div>
                        {/* <div>
                            <img
                                className="h-auto max-w-full rounded-lg object-cover object-center "
                                src="src\assets\hobby2.webp"
                                alt="gallery-photo"
                            />
                        </div> */}
                    </div>
                </div>
            </Reveal>
        </div>
    )
}

export default Hobbies