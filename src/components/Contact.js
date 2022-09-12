import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const Navigate = useNavigate();

  return (
    <div className='sizing'>
      <p>Contact</p>
      <button onClick={() => {
        Navigate("/")
      }}>Go to Home</button>
    </div>
  )
}

export default Contact