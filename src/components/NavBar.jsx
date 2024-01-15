import React, { useState } from 'react'
import {FaBars , FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';


const NavBar = () => {

    const [nav,setNav]=useState(false);
    
  return (
   <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
    <div>
        <h1 
        className='text-5xl font-signature ml-2'
        > 
        Luqman
        </h1>
    </div>

    <ul className='hidden md:flex'>
        
        <li 
        className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link 
            to='home'
            smooth
            duration={500}>
                Home
            </Link>
        </li>

        <li 
        className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link 
            to='about'
            smooth
            duration={500}>
                About me
            </Link>
        </li>

        <li 
        className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
        >
            <Link 
            to='portfolio'
            smooth
            duration={500}>
                Porfolio
            </Link>
        </li>
        
        <li 
        className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
        >
            <Link 
            to='expertise'
            smooth
            duration={500}>
                Expertise
            </Link>
        </li>

        <li 
        className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
        >
            <Link 
            to='contact'
            smooth
            duration={500}>
                Contact Me
            </Link>
        </li>
    </ul>

    <div 
    onClick={()=> setNav(!nav)} 
    className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
    </div>

    {nav &&(
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            <l1
            className="px=4 cursor-pointer capitalize py-6 text-4xl">
            <Link 
            to='home'
            onClick={()=> setNav(!nav)} >
                Home
            </Link>
            </l1>
            <l1 className="px=4 cursor-pointer capitalize py-6 text-4xl">
                <Link 
                to='about'
                onClick={()=> setNav(!nav)} 
                >
                About ME
                </Link>
            </l1>

            <l1 className="px=4 cursor-pointer capitalize py-6 text-4xl">
            <Link 
            to='portfolio'
            onClick={()=> setNav(!nav)} >
                My Work
            </Link>
            </l1>

            <l1 className="px=4 cursor-pointer capitalize py-6 text-4xl">
            <Link 
            to='expertise'
            onClick={()=> setNav(!nav)} >
                Expertise
            </Link>
            </l1>

            <l1 className="px=4 cursor-pointer capitalize py-6 text-4xl">
            <Link 
            to='contact'
            onClick={()=> setNav(!nav)} >
                Contact Me
            </Link>
            </l1>
        </ul>
    

    )}

   </div>
  )
}

export default NavBar