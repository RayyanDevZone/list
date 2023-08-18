import React from 'react';
import './List.scss';
import BookIcon from '../images/book 1.svg';
import ClipboardIcon from '../images/clipboard (1) 1.svg';
import BriefcaseIcon from '../images/briefcase (1) 1.svg';
import HouseIcon from '../images/house 1.svg';
import ShoppingIcon from '../images/online-shopping 1.svg';
import WorldIcon from '../images/world 1.svg';
import BurgerIcon from '../images/menu-_1_ 1.svg'

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
          <p className='head'>All</p>
          <p>23 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
            <img src={BriefcaseIcon} alt='Briefcase' />
          </div>
          <p className='head'>Work</p>
          <p>14 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
            <img src={BookIcon} alt='Book' />
          </div>
          <p className='head'>Study</p>
          <p>2 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
          <img src={WorldIcon} alt='World' />
            
          </div>
          <p className='head'>Travel</p>
          <p>14 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
            <img src={ShoppingIcon} alt='Shopping' />
          </div>
          <p className='head'>Shopping</p>
          <p>5 tasks</p>
        </div>
        <div className='cards'>
          <div className='icon'>
          <img src={HouseIcon} alt='House' />
          </div>
          <p className='head'>Home</p>
          <p>8 tasks</p>
        </div>
      </div>
    </div>
  );
}

export default List;
