import React from 'react'
import './AllTask.scss'
import { Link } from 'react-router-dom'
import BackButton from '../../../images/return 1.svg'
import ClipboardIcon from '../../../images/clipboard (1) 1.svg';
import Dot from '../../../images/blur 1.svg';
import PLus from '../../../images/plus 1.svg'
import Tick from '../../../images/checked 1.svg'
import Delete from '../../../images/delete 1.svg'
const AllTask = () => {
  const data=[
    { 
      task:"complete a coloring book page using various colors and sketches",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    },
    { 
      task:"complete a coloring book page using various",
    }
  ]
  return (
    <div className='alltasks'>
        <div className='back'>
            <Link to="/" id='backbtn'><img src={BackButton} alt='back'></img></Link>
        </div>
        <div className='all'>
            <h1>ALL TASK</h1><img src={ClipboardIcon}/>
        </div>
        <div className='daily'>
        <div className='do'>
          {data.map((item, id) => (
            <div key={id} className='task-item'>
              <img id='hash' src={Dot} alt='' />
              <p>{item.task}</p>
              <img id='tick' src={Tick} alt=''/>
              <img id='delete' src={Delete} alt=''/>
            </div>
          ))}
        </div>
      </div>
        <div className='footer'> 
        <div className='logo_cont'>
        <Link to="/addtask">  <img src={PLus} alt=""/></Link>
          </div>
        </div>
    </div>
  )
}

export default AllTask