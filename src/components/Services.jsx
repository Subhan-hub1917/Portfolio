import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
const Services=()=> {
  return (
    <motion.div  initial={{rotateY:90}} animate={{rotateY:0}} exit={{rotateY:-90}}  transition={{duration:0.5,ease:'backInOut'}} layout className='p-3 text-light col-12 col-lg-10 bg-dark' style={{fontFamily:'Outfit-Regular'}}>
      <h3  style={{fontFamily:'Outfit-Regular'}}><span className='text-s'>Services</span></h3>    
      <div className='row gap-3 px-lg-3 justify-content-center  Outfit'>
          <div className='col-lg-4 col-md-6 bg-b text-center p-5 service child' style={{height:250,width:280}}>
              <i class="bi bi-globe text-s service h3"></i>
              <h5 className='text-s service'>Web-Development</h5>
              <p>Lorem ipsum dolor sit amet consectetur adr sit amet consectetur ad ipisicing elit. L</p>
          </div>
          <div className='col-lg-4 col-md-6 bg-b text-center p-5 service child' style={{height:250,width:280}}>
              <i class="bi bi-phone-fill text-s service h3"></i>
              <h5 className='text-s service'>React Native Developement</h5>
              <p>Lorem ipsum dolor sit amet consectetur adr sit amet consectetur ad ipisicing elit. L</p>
          </div>
          <div className='col-lg-4 col-md-6 d-none d-lg-block bg-b text-center p-5 service child' style={{height:250,width:280}}>
              <i class="bi bi-fire text-s service h3"></i>
              <h5 className='text-s service'>Firebase and Mongodb</h5>
              <p>Lorem ipsum dolor sit amet consectetur adr sit amet consectetur ad ipisicing elit. L</p>
          </div>
        </div>
        <div className='row gap-3 mt-2 px-lg-3 justify-content-center  Outfit'>
          <div className='col-lg-4 col-md-6 bg-b text-center p-5 service child' style={{height:250,width:280}}>
              <i class="bi bi-bootstrap-fill text-s service h3"></i>
              <h5 className='text-s service'>Front End FrameWorks</h5>
              <p>Lorem ipsum dolor sit amet consectetur adr sit amet consectetur ad ipisicing elit. L</p>
          </div>
          <div className='col-lg-4 col-md-6 bg-b text-center p-5 service child' style={{height:250,width:280}}>
              <i class="bi bi-database-fill text-s service h3"></i>
              <h5 className='text-s service'>Database Administrater</h5>
              <p>Lorem ipsum dolor sit amet consectetur adr sit amet consectetur ad ipisicing elit. L</p>
          </div>
          <div className='col-lg-4 col-md-6 d-none d-lg-block bg-b text-center p-5 service child' style={{height:250,width:280}}>
              <i class="bi bi-person-rolodex text-s service h3"></i>
              <h5 className='text-s service'>Collaboration 24/6</h5>
              <p>Lorem ipsum dolor sit amet consectetur adr sit amet consectetur ad ipisicing elit. L</p>
          </div>

          <div className='row gap-3 mt-2 px-lg-3 justify-content-center'>  
            <div className='col-lg-4 col-md-6 d-block d-lg-none bg-b text-center p-5 service child' style={{height:250,width:280}}>
                <i class="bi bi-fire text-s service h3"></i>
                <h5 className='text-s service'>Firebase and Mongodb</h5>
                <p>Lorem ipsum dolor sit amet consectetur adr sit amet consectetur ad ipisicing elit. L</p>
            </div>
            <div className='col-lg-4 col-md-6 d-block d-lg-none bg-b text-center p-5 service child' style={{height:250,width:280}}>
                <i class="bi bi-person-rolodex text-s service h3"></i>
                <h5 className='text-s service'>Collaboration 24/6</h5>
                <p>Lorem ipsum dolor sit amet consectetur adr sit amet consectetur ad ipisicing elit. L</p>
            </div>
          </div>
        </div>

    </motion.div>
  )
}

export default Services