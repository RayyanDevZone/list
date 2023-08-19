import React from 'react';
import './List.scss';
import BookIcon from '../images/book 1.svg';
import ClipboardIcon from '../images/clipboard (1) 1.svg';
import BriefcaseIcon from '../images/briefcase (1) 1.svg';
import HouseIcon from '../images/house 1.svg';
import ShoppingIcon from '../images/online-shopping 1.svg';
import WorldIcon from '../images/world 1.svg';
import BurgerIcon from '../images/menu-_1_ 1.svg'
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <div className='list'>
      <div className='burger'>
       <img src={BurgerIcon} alt='menu'/>
      </div>
      <div className='heading'>
        <h1>TODO LIST</h1>
      </div>
      <div className='tasks'>
        <div className='cards'>
          <div className='icon'>
          <img src={ClipboardIcon} alt='Clipboard' />
            
          </div>
          <Link to="./all-tasks" className='head'>All</Link>
          <p>23 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
            <img src={BriefcaseIcon} alt='Briefcase' />
          </div>
          <Link to="./work" className='head'>Work</Link>
          <p>14 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
            <img src={BookIcon} alt='Book' />
          </div>
          <Link to="./study" className='head'>Study</Link>
          <p>2 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
          <img src={WorldIcon} alt='World' />
            
          </div>
          <Link to="./travel" className='head'>Travel</Link>
          <p>14 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
            <img src={ShoppingIcon} alt='Shopping' />
          </div>
          <Link to="./shopping" className='head'>Shopping</Link>
          <p>5 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
          <img src={HouseIcon} alt='House' />
          </div>
          <Link to='./home' className='head'>Home</Link>
          <p>8 tasks</p>
        </div>
      </div>
    </div>
  );
}

export default List;
