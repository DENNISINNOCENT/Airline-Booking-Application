import React from 'react'

import Schedule from './Schedule'




function Home() {
  return (
    <div className='home'>
 
  
   <section className='header'>
    
     <h1 className='h1header'>DEIN AIRLINES</h1> 
     <p className='pheader'>We are commited to offer you the Best,<br></br>affordable and Quality Air Transport</p>
   </section>
   <h6 className='h1header'>SCHEDULES</h6>
     <Schedule/>
   
        </div>
  )
}

export default Home
