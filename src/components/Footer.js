import React from 'react'
import "../Footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div>
      <h4> Contact</h4> 
      <p> <strong>Mobile No:</strong>254741991874</p>
      <p> <strong>Mobile No:</strong>254741991874</p>
      </div>
      <div className='social Media'>
        <h4>Social Media</h4>
       <p><i className="fa-brands fa-instagram-square">  _deinAirlines</i></p>
       <p><i className="fa-brands fa-facebook">  deinAirlines</i></p>
       <p><i className="fa-brands fa-linkedin">  deinAirlines</i></p>

      </div>
      <div className='email'>
        <h4>Email</h4>
         deinAirlines@gmail.com
      </div>
      <div className='location'></div>

  </div>
        </>
  )
}

export default Footer