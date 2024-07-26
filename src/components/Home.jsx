import React from 'react'
import {motion} from 'framer-motion'
import homeImage from '../assets/uwp2150851.jpeg'
import subhan from '../assets/Picsart_24-06-08_12-32-56-767.jpg'
import { Link } from 'react-router-dom'

const Home=()=>{
  return (

      <motion.div initial={{rotateY:90}} animate={{rotateY:0}} exit={{rotateY:-90}}  transition={{duration:0.5,ease:'anticipate'}} layout className='p-5 text-light col-12 col-lg-10 bg-dark'>
      <div className='p-2 d-block d-lg-flex  align-items-center' style={{fontFamily:'Outfit-Regular'}}>
          <div className='text-center text-md-start Outfit-Regular'>
            <h3 style={{fontFamily:'Outfit-Regular'}}>Hi! I'm <span className='text-s'>Subhan,</span></h3>
            <h5 style={{fontFamily:'Outfit-Regular'}}>A <span className='text-s'>Web and Application Developer</span></h5>
            <p className='Outfit'>I am a web and React Native Expo developer who writes efficient code and maintains strong client communication.</p>
            <div className='d-flex align-items-center justify-content-center justify-content-md-start gap-3'>
              <Link to='/' className='text-decoration-none text-light Outfit' ><div className='bg-p rounded-1 p-1 cursor-pointer'>Hire Me </div></Link>
              <Link to='/Contactme' className='text-decoration-none text-light Outfit'><div className='bg-p rounded-1 p-1 cursor-pointer'>Contact Me</div></Link>
            </div>
          </div>
          <div className='text-center d-flex justify-content-center'>
            <div className='image-container mt-5 mt-lg-0 image'style={{objectFit:'cover'}}>
              <div className='image-container2  '>
                <img src={subhan}  className='image' style={{objectFit:'cover'}}/>
              </div>
            </div>
          </div>
      </div>
    </motion.div>
    )
}

export default Home