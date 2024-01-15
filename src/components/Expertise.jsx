import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactjs from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import mysql from '../assets/mysql.png'
import mongodb from '../assets/mongodb.png'


const Expertise = () => {
    const shadowOrange = {
        boxShadow: '0 4px 8px -2px rgba(255, 165, 0, 0.5)',
      };

      const shadowBlue = {
        boxShadow: '0 4px 8px -2px rgba(0, 0, 255, 0.5)',
      };

      const shadowYellow = {
        boxShadow: '0 4px 8px -2px rgba(255, 222, 80, 0.5)',
      };
      
      const shadowWhite = {
        boxShadow: '0 4px 8px -2px rgba(255, 255, 255, 0.1)',
      };      

      const shadowSky = {
        boxShadow: '0 4px 8px -2px rgba(135, 206, 250, 0.2)',
      };

      const shadowGray = {
        boxShadow: '0 4px 8px -2px rgba(189, 195, 204, 0.4)',
      };
      
      const shadowGreen = {
        boxShadow: '0 4px 8px -2px rgba(28, 154, 102, 0.5)',
      };
      
  return (
    <div 
    name="expertise" 
    className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
         <div 
         className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
         >
            <div className="my-16">
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
                    Experience
                </p>
                
                <p className="py-8">
                    My Expertise
                </p>
            </div>
            
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0 padded-skill">
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img 
                    src={html} 
                    alt='HTML ICON' 
                    className="w-20 mx-auto"/>
                    <p 
                    className="mt-4" 
                    style={shadowOrange}
                    >
                        HTML
                    </p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img 
                    src={css} 
                    alt='CSS ICON' 
                    className="w-20 mx-auto"/>
                    
                    <p 
                    className="mt-4" 
                    style={shadowBlue}
                    >
                        CSS
                    </p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img 
                    src={tailwind} 
                    alt='TailwindCSS ICON' 
                    className="w-20 mx-auto"/>
                    
                    <p 
                    className="mt-4" 
                    style={shadowSky}
                    >
                        Tailwind CSS
                    </p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img 
                    src={javascript} 
                    alt='JavaScript ICON' 
                    className="w-20 mx-auto"/>
                    
                    <p 
                    className="mt-4" 
                    style={shadowYellow}
                    >
                        JavaScript
                    </p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img 
                    src={reactjs} 
                    alt='' 
                    className="w-20 mx-auto"
                    />
                    
                    <p 
                    className="mt-4" 
                    style={shadowBlue}
                    >
                        ReactJS
                    </p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img 
                    src={nextjs} 
                    alt='' 
                    className="w-20 mx-auto"
                    />
                    
                    <p 
                    className="mt-4" 
                    style={shadowWhite}
                    >
                        NextJS
                    </p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img 
                    src={mongodb} 
                    alt='' 
                    className="w-20 mx-auto"
                    />
                    
                    <p 
                    className="mt-4" 
                    style={shadowGreen}
                    >
                        MongoDB
                    </p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img 
                    src={mysql} 
                    alt='' 
                    className="w-20 mx-auto"
                    />
                    
                    <p 
                    className="mt-4" 
                    style={shadowBlue}
                    >
                        MySQL
                    </p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img 
                    src={github} 
                    alt='' 
                    className="w-20 mx-auto"
                    />
                    
                    <p 
                    className="mt-4" 
                    style={shadowGray}
                    >
                        GitHub
                    </p>
                </div>

            </div>
         </div>
    </div>
  )
}

export default Expertise