import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            </div>

            <a href='https://www.linkedin.com/in/aidam-kaila-749911264/' className='text-lg'>LinkedIn</a>
            <a href='https://www.instagram.com/aidamkai/' className='text-lg mt'>Instagram</a>
            <a href='https://line.me/ti/p/ACDYgDBw1f' className='text-lg mt'>Line ID</a>
            <a href='mailto:aidamkaila@gmail.com' className='text-lg mt'>aidamkaila@gmail.com</a>
        </div>
    </div>
  )
}

export default Contact