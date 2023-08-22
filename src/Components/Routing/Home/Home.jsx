import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';
import BackButton from '../../../images/return 1.svg';
const Home = () => {
  return (
    <div className='home'>
      <div className='back'>
        <Link to='/' id='backbtn'>
          <img src={BackButton} alt='back' />
        </Link>
      </div>
      <div className='h'>
      
      <h1>Home</h1></div>
    </div>
  )
}

export default Home