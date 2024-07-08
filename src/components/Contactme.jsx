import React, { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { Link } from 'react-router-dom'
const Contactme=()=>{
  const [message,setMessage]=useState('')
  const [contact,setContact]=useState('')
  const [name,setName]=useState('')
  const send=()=>{
    setMessage('')
    setName('')
    setContact('')
  }
  return (
    <motion.div  initial={{rotateY:90}} animate={{rotateY:0}} exit={{rotateY:-90}}  transition={{duration:0.5,ease:'backInOut'}} layout className='p-lg-3 col-lg-10 col-12 bg-dark' style={{fontFamily:'Outfit-Regular'}}>
        <h4 className='text-s' style={{fontFamily:'Outfit-Bold',fontWeight:'bolder'}}>Contact Me</h4>
      <div className='row '>
      <div className='d-flex d-lg-none text-center text-s justify-content-center '>
          <div className='m-2'>
            <i className='bi bi-phone-fill h5 h3-lg'></i>
            <h6>Mobile No</h6>
            <p className='text-light f'>+923420443066</p>
          </div>
          <div className='m-2'>
            <i className='bi bi-map-fill h5 h3-lg'></i>
            <h6>Location</h6>
            <p  className='text-light f'>Sargodha</p>
          </div>
          <div className='m-2'>
            <i className='bi bi-envelope-fill h5 h3-lg'></i>
            <h6>Email</h6>
            <p className='text-light f'>subiq1917@gmail.com</p>
          </div>
          <div className='m-2 text-center'>
            <i className='bi bi-globe h5 h3-lg'></i>
            <h6>Website</h6>
            <Link to='/' className='f text-decoration-none text-light'><p>https://youtube.com</p></Link>
          </div>
        </div>
        <div className='col-lg-3 d-none d-lg-block py-5 text-center text-s '>
          <div className='m-2'>
            <i className='bi bi-phone-fill h5 h3-lg'></i>
            <h6>Mobile No</h6>
            <p  className='text-light f'>+923420443066</p>
          </div>
          <div className='m-2'>
            <i className='bi bi-map-fill h5 h3-lg'></i>
            <h6>Location</h6>
            <p  className='text-light f'>Sargodha</p>
          </div>
          <div className='m-2'>
            <i className='bi bi-envelope-fill h5 h3-lg'></i>
            <h6>Email</h6>
            <p className='text-light f'>subiq1917@gmail.com</p>
          </div>
          <div className='m-2'>
            <i className='bi bi-globe h5 h3-lg'></i>
            <h6>Website</h6>
            <Link to='/' className='f text-decoration-none text-light'>https://youtube.com</Link>
          </div>
        </div>
        <div className='col-lg-9 col-12  justify-content-center'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='bg-b text-light rounded px-1'>Send Me A Message</div>
              <div className='bg-b text-light rounded p-1 gap-3'>
                <a className='text-light' href='https://github.com/Subhan-hub1917' target='_blank'><i className='bi bi-github px-2'></i></a>
                <a className='text-light' href='https://instagram.com/subhan_qamar_2002/?igsh=MXRkYWF5YWtzY2IvNA==' target='_blank'><i className='bi bi-instagram px-2'></i></a>
                <a className='text-light' href='https://www.facebook.com/share/TXcYLk6wEdnfKeWg/?mibextid=qi20mg' target='_blank'><i className='bi bi-facebook px-2'></i></a></div>
            </div>
            <div className='d-flex mt-4 align-items-center justify-content-between'>
              <input placeholder=' Name' value={name} onChange={()=>setName()} style={{width:200,height:30}} className='bg-b border-0 rounded text-light'  />
              <input placeholder=' Contact #' value={contact}  onChange={()=>setContact()} style={{width:200,height:30}} className='bg-b border-0 rounded text-light' />
            </div>  
            <div className='mt-2 col-12'>
              <textarea placeholder=' Message Might Not Work Proporly Contact Through Other Methods...' value={message}  onChange={()=>setMessage()} style={{height:350}} className='col-12 bg-b border-0 rounded text-light'/>
            </div>
            <div className='text-center px-5 '>
              <Link  className='text-decoration-none text-light mx-5' onClick={()=>send()}><div className='bg-p mx-5 rounded-1 p-2 cursor-pointer'>Send</div></Link>
            </div>  
        </div>
      </div>
    </motion.div>
  )
}

export default Contactme