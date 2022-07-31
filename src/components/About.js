import React from 'react'
import p1 from '../assets/p1.avif'
import p2 from '../assets/p2.avif'
import p3 from '../assets/p3.avif'
import a4 from '../assets/a4.webp'
import a7 from  '../assets/a7.webp'
import a5 from  '../assets/a5.webp'


function About() {
  return (
    <>
    <div className='About'>
    <div className='us'>
      <h1>
        WHO WE ARE
      </h1>
      <p>We are Dein Airplanes,purposed to offer the <br></br>best ,Quality and Affordable <br></br>Air Transport </p >
   
    </div>
    <h2>Services</h2>
    <div className='services'>
      
      <div>
      <img src={a4} alt="" />
      </div>
      <div>
      <img src={a7}alt="" />
      </div>
      <div>
      <img src={a5} alt="" />
      </div>

    </div>
     <h2>Testimonials</h2>
    <div className='testimonials'>
     
      <div></div>
      <div className='testimony'>
      <img src={p1} alt="" />
      <div></div>
      <span>I am Innocent Dennis and I use Dein Airplanes because of there are there for you</span>
      <span>Their services are best suited for their customers from starting from their easier<br></br> booking in their best until to your destination</span>
     </div>
     <div className='testimony'>
      <img src={p2} alt="" />
      <div></div>
      <span>I am Innocent Dennis and I use Dein Airplanes because of there are there for you</span>
      <span>Their services are best suited for their customers from starting from their easier<br></br> booking in their best until to your destination</span>
     </div>
     <div></div>
     <div className='testimony'>
      <img src={p3} alt="" />
      <div></div>
      <span>I am Innocent Dennis and I use Dein Airplanes because of there are there for you</span>
      <span>Their services are best suited for their customers from starting from their easier<br></br> booking in their best until to your destination</span>
     </div>
     
</div>
    </div>
    </>

  )
}

export default About

