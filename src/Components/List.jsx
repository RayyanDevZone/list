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
        <h1 className='title'>TODO LIST</h1>
      </div>
      <div className='tasks'>
      <Link to="./all-tasks" >
        <div className='cards'>
          <div className='icon'>
          <img src={ClipboardIcon} alt='Clipboard' />
            
          </div>
          <div className='head'>All</div>
          <p>23 tasks</p>
        </div></Link>
        <Link to="./work" className='head'>
        <div className='cards'>
          <div className='icon'>
            <img src={BriefcaseIcon} alt='Briefcase' />
          </div>
           <div className='head'>Work</div>
          <p>14 tasks</p>
        </div></Link>
        <Link to="./study" className='head'>
        <div className='cards'>
          <div className='icon'>
            <img src={BookIcon} alt='Book' />
          </div>
          <div className='head'>Study</div>
          <p>2 tasks</p>
        </div></Link>
        
        <Link to="./travel" className='head'>
        <div className='cards'>
          <div className='icon'>
          <img src={WorldIcon} alt='World' />
          </div>
          <div className="head">Travel</div>
          <p>14 tasks</p>
        </div>
        </Link>

        <Link to="./shopping" className='head'>
        <div className='cards'>
          <div className='icon'>
            <img src={ShoppingIcon} alt='Shopping' />
          </div>
          <div className='head'>Shopping</div>
          <p>5 tasks</p>
        </div></Link>
        <Link to='./home' className='head'>
        <div className='cards'>
          <div className='icon'>
          <img src={HouseIcon} alt='House' />
          </div>
          <div className='head'>Home</div>
          <p>8 tasks</p>
        </div></Link>
      </div>
    </div>
  );
}

export default List;
