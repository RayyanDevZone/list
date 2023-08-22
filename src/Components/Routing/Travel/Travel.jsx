import React from 'react'
import './Travel.scss'
import { Link } from 'react-router-dom';
import BackButton from '../../../images/return 1.svg';
const Travel = () => {
  return (
    <div className='travel'>
       <div className='back'>
        <Link to='/' id='backbtn'>
          <img src={BackButton} alt='back' />
        </Link>
      </div>
      <div className='h'>
      
      <h1>Travel</h1></div></div>
  )
}

export default Travel