import React, { useState } from 'react'
import{FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portofolio'
        },
        {
            id: 4,
            link: 'Contact'
        }
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 fixed text-white bg-black px-4'>

            {/*large text on the left */}
            <div><h1 className='text-4xl font-bold font-codeFont text-blue-100'>Aidam Kaila</h1></div>

            {/* menu list for pc */}
            <ul className='hidden md:flex items-center'>
                {links.map(({id, link}) => (
                    <li 
                    key={id}
                    className='p-3 text-sm text-gray-500 cursor-pointer hover:scale-105 duration-200'>

                    <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            {/* menu list for mobile, checks if clicked */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 pr-4 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {/* mobile menu popup for mobile */}
            {nav &&( 
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-900'>
                {links.map(({id, link}) => (
                    <li 
                    key={id}
                    className='px-4 cursor-pointer py-6 text-3xl duration-200'>
                        <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>{link}</Link>
                    </li>
                ))}
            </ul>
            )}

        </div>
  )
}

export default NavBar