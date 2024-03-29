import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div 
    name="home" 
    className="lg:h-[100vh] w-full bg-gradient-to-b from-black to-gray-800"
    >
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 ">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-3xl sm:text-7xl font-bold text-white">
                    I'm a Full Stack Developer 
                </h2>
                
                <p className="text-gray-500 py-4 max-w-md"> 
                With a comprehensive understanding of front & back-end technologies, 
                I excel at crafting exceptional web applications that prioritize efficiency, 
                security, and user experience.
                </p>

                <div>
                    <Link 
                     to='portfolio'
            smooth
            duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="px-4 group-hover:rotate-90 duration-300">
                        <FaCircleArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img 
                src={HeroImage} 
                alt='My Portfolio' 
                className="rounded-2xl mx-auto w-2/3 md:w-full "/>
            </div>
        </div>
    </div>
  )
}

export default Home