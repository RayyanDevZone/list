import React from 'react'
import './Study.scss'
import { Link } from 'react-router-dom';
import BackButton from '../../../images/return 1.svg';
const Study = () => {
  return (
    <div className='study'>
       <div className='back'>
        <Link to='/' id='backbtn'>
          <img src={BackButton} alt='back' />
        </Link>
      </div>
      <div className='h'>
      
      <h1>Study</h1></div></div>
  )
}

export default Study