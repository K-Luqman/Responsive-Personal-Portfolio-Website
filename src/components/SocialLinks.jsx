import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500">
                <a href="https:linkedin.com" className="flex justify-between items-center w-full text-white rounded-tr-md" target='_blank' rel="noreferrer" >
                    <>LinkedIn <FaLinkedin size={30}/>
                    </>
                </a>
            </li>

            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500">
                <a href="https://github.com" className="flex justify-between items-center w-full text-white" target='_blank' rel="noreferrer">
                    <>Github <FaGithub size={30}/>
                    </>
                </a>
            </li>

            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500">
                <a href="mailto:khawajaluqman98@gmail.com" className="flex justify-between items-center w-full text-white" target='_blank' rel="noreferrer">
                    <>Email <HiOutlineMail size={30}/>
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialIcons