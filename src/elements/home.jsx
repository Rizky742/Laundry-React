import React from 'react'
import image1 from '../assets/images/Group1.svg';
import image2 from '../assets/images/mesin-cuci.png';
import './home.css'
import Fade from 'react-reveal/Fade';

function home() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className='w-6/12'>
          <Fade left>
          <div className="w-40 h-2 bg-blue1 mt-36 rounded-lg ">
          </div>
          <h1 className="text-blue2 font-medium mt-10 text-5xl w-580 tracking-wide">
            Your team of
            housekeepers, errand
            runners, and laundry
            specialists
          </h1>
          <p className='text-blue3 text-xl w-96 mt-3'>
            We take care of cleaning and other tasks so
            that coming home feels delightful
          </p>
          <div className="flex mt-4">
            <button className='bg-blue1 w-56 h-10 rounded-lg text-white mr-5'>Book a visit</button>
            <button className='border-2 border-blue1 w-56 h-10 rounded-lg text-blue1'>See how it works</button>
          </div>
          </Fade>
        </div>
        <div className='w-6/12'>
          <div className="bingkai">
          <img src={image2} style={{width: 800}} className="image2"/>
            <img src={image1} style={{width: 700}} className="image1"/>
            <div className="w-40 h-2 bg-blue1 absolute right-40 bottom-10 rounded-lg  ">
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home
