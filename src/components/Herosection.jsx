import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Herosection() {
    const [text]= useTypewriter({
        words: ['Travellers', 'Hodophiles', 'Tourists', 'the Cultured'],
        loop:{

        },

    })
  return (
<div className='flex flex-col items-center mt-6 lg:mt-20'>
    <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'> 
        A bliss for
    <span className='bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text'>
        {" "}
        {text}
    </span>
    </h1>
    <p className='mt-10 text-lg text-center max-w-4xl'>
        Unravel some of the exquisite locations in India, become a part of India's rich culture and heritage. Sign Up today for awesome goodies.
    </p>
    <div className='flex justify-center my-10'>
        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-900 py-3 px-4 mx-3 rounded-md'> 
            Start for free
        </a>
    </div>
</div>
  )
}

export default Herosection
