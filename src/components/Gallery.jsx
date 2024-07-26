import React from 'react'
import {motion,AnimatePresence,} from 'framer-motion'
import Image1 from '../assets/IMG-20240514-WA0004.jpg'
import Image2 from '../assets/IMG-20240514-WA0003.jpg'
import Image3 from '../assets/IMG-20240608-WA0007.jpg'
import Image4 from '../assets/InShot_20240524_152654217.jpg'
import Image5 from '../assets/Snapchat-425737183.jpg'
import Image6 from '../assets/winter_mountains_snow_130143_1920x1080.jpg'

const Gallery=()=>{
  return (
  <motion.div  initial={{rotateY:90}} animate={{rotateY:0}} transition={{duration:0.5,ease:'backInOut'}} exit={{rotateY:-90}} layout  className='p-3 text-light bg-dark col-12 col-lg-10 '>
    <h4  style={{fontFamily:'Outfit-Regular',fontWeight:'bolder'}} className='text-s'>Gallery</h4>
    <div className='d-flex align-items-center justify-content-center overflow-hidden '>
        <motion.div className='col-1 border-top border-bottom border-2 border-light rounded-5 overflow-hidden' transition={{ease:'backInOut',duration:0.5}} whileHover={{width:200,margin:'0px'}} style={{height:500,width:100,objectFit:'cover',margin:'2px'}}>
         <img src={Image1} className='' style={{height:'100%',width:'100%',objectFit:'cover'}}/>
        </motion.div>
        <motion.div className='col-1 border-top border-bottom border-2 border-light rounded-5 overflow-hidden' transition={{ease:'backInOut',duration:0.5}} whileHover={{width:200,margin:'0px'}} style={{height:500,width:100,objectFit:'cover',margin:'2px'}}>
         <img src={Image2} className='' style={{height:'100%',width:'100%',objectFit:'cover'}}/>
        </motion.div>
        <motion.div className='col-1 border-top border-bottom border-2 border-light rounded-5 overflow-hidden' transition={{ease:'backInOut',duration:0.5}} whileHover={{width:200,margin:'0px'}} style={{height:500,width:100,objectFit:'cover',margin:'2px'}}>
         <img src={Image3} className='' style={{height:'100%',width:'100%',objectFit:'cover'}}/>
        </motion.div>
        <motion.div className='col-1 border-top border-bottom border-2 border-light rounded-5 overflow-hidden' transition={{ease:'backInOut',duration:0.5}} whileHover={{width:200,margin:'0px'}} style={{height:500,width:100,objectFit:'cover',margin:'2px'}}>
         <img src={Image4} className='' style={{height:'100%',width:'100%',objectFit:'cover'}}/>
        </motion.div>
        <motion.div className='col-1 border-top border-bottom border-2 border-light rounded-5 overflow-hidden' transition={{ease:'backInOut',duration:0.5}} whileHover={{width:200,margin:'0px'}} style={{height:500,width:100,objectFit:'cover',margin:'2px'}}>
         <img src={Image5} className='' style={{height:'100%',width:'100%',objectFit:'cover'}}/>
        </motion.div>
        <motion.div className='col-1 d-md-block d-none border-top border-bottom border-2 border-light rounded-5 overflow-hidden' transition={{ease:'backInOut',duration:0.5}} whileHover={{width:200,margin:'0px'}} style={{height:500,width:100,objectFit:'cover',margin:'2px'}}>
         <img src={Image6} className='' style={{height:'100%',width:'100%',objectFit:'cover'}}/>
        </motion.div>
    </div>
  </motion.div>
  )
}

export default Gallery
//   <motion.div  initial={{rotateY:90}} animate={{rotateY:0}} exit={{rotateY:-90}}  transition={{duration:0.5,ease:'backInOut'}} layout className='p-3 text-light col-12 col-lg-10 bg-dark '>
//   <h3><span className='text-s'>Gallery</span></h3>    
//   <div className='row gap-5 gap-lg-2 px-lg-3 justify-content-center'>
//       <div className='col-lg-4 col-md-6 text-center' style={{height:250,width:280}}>
//         <img src={Image1} className='' style={{height:250,width:280,objectFit:'cover'}}/>
//       </div>
//       <div className='col-lg-4 col-md-6 bg-b text-center' style={{height:250,width:280}}>
//         <img src={Image2} className='' style={{height:250,width:280,objectFit:'cover'}}/>
//       </div>
//       <div className='col-lg-4 col-md-6 d-none d-lg-block text-center' style={{height:250,width:280}}>
//         <img src={Image3} className='' style={{height:250,width:280,objectFit:'cover'}}/>
//       </div>
//     </div>
//     <div className='row gap-5 gap-lg-2 mt-2 px-lg-3 justify-content-center'>
//       <div className='col-lg-4 col-md-6 text-center' style={{height:250,width:280}}>
//         <img src={Image4} className='' style={{height:250,width:280,objectFit:'cover'}}/>
//       </div>
//       <div className='col-lg-4 col-md-6 text-center' style={{height:250,width:280}}>
//         <img src={Image5} className='' style={{height:250,width:280,objectFit:'cover'}}/>
//       </div>
//       <div className='col-lg-4 col-md-6 d-none d-lg-block text-center' style={{height:250,width:280}}>
//         <img src={Image6} className='' style={{height:250,width:280,objectFit:'cover'}}/>
//       </div>
//     </div>
//     <div className='d-flex d-lg-none row gap-5 gap-lg-2 px-lg-3 justify-content-center'>
//       <div className='col-lg-4 col-6 col-12 text-center' style={{height:250,width:280}}>
//         <img src={Image3} className='' style={{height:250,width:280,objectFit:'cover'}}/>
//       </div>
//       <div className='col-lg-4 col-md-6 col-1 text-center' style={{height:250,width:280}}>
//         <img src={Image6} className='' style={{height:250,width:280,objectFit:'cover'}}/>
//       </div>
//     </div>
// </motion.div>