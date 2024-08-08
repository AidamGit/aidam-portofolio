import React from 'react'
import aidamProfilePicture from '../assets/aidam graduation profile picture.jpg'
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div id="Home" className='flex h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white'> 
        {/* via-gray-900 */}

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                
                {/* Text of home section */}
                <h2 className='text-4xl sm:text-5xl font-bold'>
                    Technology Enthusiast and Information Systems Student
                </h2>
                <p className='py-4 max-w-md text-gray-300'>
                    I am a freshman at the University of Indonesia majoring in Information Systems. 
                    I've been passionate about technology from a young age and have my eyes set for the world of Software Development and Data Science.
                </p>

                {/* Portofolio shortcut button */}
                <div>
                <Link to="Portofolio" smooth duration={500} className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-500 cursor-pointer hover:bg-blue-400'>
                    Portofolioㅤ
                <span className='group-hover:rotate-90 duration-300'>
                    <FaArrowRightLong/>
                </span>
                </Link>
                </div>

            </div>

            {/* Aidam Image */}
            <div><img src={aidamProfilePicture} alt='aidam-graduation-photo' className='rounded-2xl mx-auto w-2/3 md:w-full'/></div>
        
        </div>
    </div>
  )
}

export default Home