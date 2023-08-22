import React, { useState, useEffect } from 'react';
import './Work.scss';
import { Link } from 'react-router-dom';
import BackButton from '../../../images/return 1.svg';

const Work = () => {
  const [workTasks, setWorkTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const workCategoryTasks = storedTasks.filter(task => task.category === 'work');
    setWorkTasks(workCategoryTasks);
  }, []);
  return (
    <div className='work'>
      <div className='back'>
        <Link to='/' id='backbtn'>
          <img src={BackButton} alt='back' />
        </Link>
      </div>
      <div className='h'>
        <h1>Work</h1>
      </div>
      <div className='task-list'>
        {workTasks.map(task => (
          <div key={task.id} className='task'>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
