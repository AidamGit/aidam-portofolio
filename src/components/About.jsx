import React from 'react'

const About = () => {
  return (
    <div id='About' className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-sm lg:text-lg'>
                Aidam, full name Muhammad Kaila Aidam Riyan, was born on January 26th 2007. From a young age, he has always had a special love for technology. He loved spending hours tinkering
                with phones and computers. His first exposure to any kind of development was when he made a game using Scratch back in 6th grade. From there, he has continuously learned and acquired
                various skills related to development. Throughout his journey, he has acquired skills and built personal projects mainly with 2 languages, Python and Javascript.
                Those 2 languages are considered the backbone of Web Development and Data Science, both fields where he has large interest in.
            </p>

            <br />

            <p className='text-sm lg:text-lg'>
                As a person, he loves getting out of his comfort zone and pushing his limits. He considers himself to be highly adaptable
                to various situations which has aided him in his journey thus far. In high school, he was involved in various school events and gave speeches in lots of them.
                Now as a university student, he is eager to expand his horizons and maximize his potential by doing internships and joining organizations both on and off-campus. 
                He strives to join organizations that focus on the development of Information Technology, allowing him to improve on his technical abilities and setting him up for 
                a career in technology. Overall, he is very ambitious and optimistic for the future and is committed to do whatever it takes to achieve his dream.
            </p>

            
        </div>
    </div>
  )
}

export default About