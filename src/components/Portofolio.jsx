import React from 'react'
import clickWars from '../assets/portofolio/click wars.png' 
import snakeGame from '../assets/portofolio/snake game.jpg' 
import pongGame from '../assets/portofolio/pong game.png'
import usaStates from '../assets/portofolio/USA States.png' 
import pomodoroTimer from '../assets/portofolio/pomodoro timer.png' 

const Portofolio = () => {

  const projects = [
    {
      id:'https://github.com/AidamGit/click-wars',
      src: clickWars,
      projectName: 'Click Wars'
    },
    {
      id:'https://github.com/AidamGit/snake-game',
      src: snakeGame,
      projectName: 'Snake Game'
    },
    {
      id:'https://github.com/AidamGit/pong-game',
      src: pongGame,
      projectName: 'Pong Game'
    },
    {
      id:'https://github.com/AidamGit/USA-States-Guesser',
      src: usaStates,
      projectName: 'USA States Guesser'
    },
    {
      id:'https://github.com/AidamGit/pomodoro-timer',
      src: pomodoroTimer,
      projectName: 'Pomodoro Timer'
    }
  ]


  return (

    // text for portofolio section
    <div id='Portofolio' className='bg-gradient-to-b from-black to-gray-900 text-white md:h-screen'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portofolio</p>
          <p className='py-6'>Personal Projects</p>
        </div>

        {/* list of portofolios */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 
          {
        // loop through all the portofolio images and add button and section for each of them
        projects.map(({id, src, projectName}) => (
          <a href={id} className='shadow-md shadow-gray-600 rounded-lg'>
          <img src={src} alt="click wars" className='rounded-md duration-200 hover:scale-105'/>
          <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200'>{projectName}</button>
          </div>
        </a>
        ))
      }
          </div>

      </div>
    </div>
  )
}

export default Portofolio