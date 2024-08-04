import React from 'react'
import Button from './ui/Button'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import TextGradient from './ui/TextGradient'

  const Footer = () => {
  return (
    <footer className = "w-full pt-20 pb-10" id = "contact">
    <div className = "w-full absolute left-0 -bottom-72 min-h-9">
        <img src = "/footer-grid.svg" alt = "grid" className = "w-full h-full opacity-50"/>

    
      </div>
      <div className = "flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Ready to take <span className="text-purple">your</span> digital prescence to the next level?
      </h1>
      <p className = "text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help to achieve your goals</p>
      <a href = "mailto:ogsknowledge@gmail.com">
        <Button title = {"Let's get in touch"} icon = {<FaLocationArrow/>} position = "right"/>
      </a>
      </div>
      <div className  ="flex w-full mt-16  gap-6 flex-col items-center">
        <div className = "flex justify-center items-center md:gap-3 lg:gap-6">
            {socialMedia.map(({id, img}) => (
                <div key = {id} className = "w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border border-black-300 bg-black-200">
                    <img src= {img} alt = "Profile" width = {20} height = {20}/>
                    </div>
            ))}
        </div>
        <TextGradient text = "Copyright 2024 © Oliver Stevenson"/>
        
      </div>
    </footer>
  )
}

export default Footer