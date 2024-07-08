import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { Link } from 'react-router-dom'

const Aboutme =()=> {
  return (
  <motion.div initial={{rotateY:90}} animate={{rotateY:0}} transition={{duration:0.5,ease:'backInOut'}} exit={{rotateY:-90}} layout style={{fontFamily:'Outfit-Regular'}} className='p-5 text-light col-12 col-lg-10 bg-dark'>
  <div className='p-2 align-items-center '>
      <div>
        <h3 style={{fontFamily:'Outfit-Bold',fontWeight:'bolder'}}><span className='text-s'>About Me</span></h3>
        <h6>I'm Motivated<span className='text-s'> Web and Application Developer</span></h6>
        <p>I am a BSCS undergraduate student with a strong foundation in computer science principles. My skills include web development, React Native, and creating efficient, maintainable code. I am dedicated to delivering high-quality projects while keeping clients informed and engaged throughout the process.</p>
      </div>
      
      <div className='row d-flex align-items-center justify-content-between'>
        <div className='col-lg-6 col-12'>
            <div className='row d-flex m-3'>
              <div className='col-6'>
              <div  className='text-s d-flex border-bot mb-2'><h6>Country: </h6><p className='ms-2 text-light'>  Pakistan</p></div>
              <div  className='text-s d-flex border-bot mb-2'><h6>Phone: </h6><p className='ms-2 text-light'>  +92342-0443066</p></div>
              <div  className='text-s d-flex border-bot mb-2'><h6>Age: </h6><p className='ms-2 text-light'>  21</p></div>
            </div>
            <div className='col-6'>
              <div  className='text-s d-flex border-bot mb-2'><h6>Languages: </h6><p className='ms-2 text-light'>  Urdu/English</p></div>
              <div  className='text-s d-flex border-bot mb-2'><h6>Country: </h6><p className='ms-2 text-light'>  Pakistan</p></div>
              <div  className='text-s d-flex border-bot mb-2'><h6>Degree: </h6><p className='ms-2 text-light'>  BSCS</p></div>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center gap-3'>
            <Link to='/Contactme' className='text-decoration-none text-light' ><div className='bg-p rounded-1 p-1 cursor-pointer'>Hire Me </div></Link>
            <Link to='/Contactme' className='text-decoration-none text-light'><div className='bg-p rounded-1 p-1 cursor-pointer'>Contact Me</div></Link>
          </div>
        </div>
        <div className='col-lg-6 col-12  mt-5 mt-lg-0 '>
          <h5>JavaScript</h5>
          <div class="progress m-2 bg-b">
            <div class="progress-bar bg-p " role="progressbar" style={{width: '85%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h5>React js</h5>
          <div class="progress m-2 bg-b">
            <div class="progress-bar bg-p" role="progressbar" style={{width: '80%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h5>React Native (Expo)</h5>
          <div class="progress m-2 bg-b">
            <div class="progress-bar bg-p" role="progressbar" style={{width: '70%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h5>Nodejs</h5>
          <div class="progress m-2 bg-b">
            <div class="progress-bar bg-p" role="progressbar" style={{width: '70%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h5>Bootsrap</h5>
          <div class="progress m-2 bg-b">
            <div class="progress-bar bg-p" role="progressbar" style={{width: '90%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h5>Framer Motion</h5>
          <div class="progress m-2 bg-b">
            <div class="progress-bar bg-p" role="progressbar" style={{width: '85%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
  </div>
</motion.div>

  )
}

export default Aboutme