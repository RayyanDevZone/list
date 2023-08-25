import React, { useState, useEffect } from 'react';
import './Work.scss';
import { Link } from 'react-router-dom';
import BackButton from '../../../images/return 1.svg';
import Dot from '../../../images/blur 1.svg';
import Tick from '../../../images/checked 1.svg';
import Delete from '../../../images/delete 1.svg';

const Work = () => {
  const [workTasks, setWorkTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const workCategoryTasks = storedTasks.filter(task => task.category === 'Work');
    setWorkTasks(workCategoryTasks);
  }, []);

  const handleToggleComplete = (taskId) => {
    const updatedTasks = workTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setWorkTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = workTasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setWorkTasks(updatedTasks);
  };

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
        {workTasks.length === 0 ? (
          <p>No Task Right Now!</p>
        ) : (
          workTasks.map(task => (
            <div key={task.id} className='task-item'>
              <img id='hash' src={Dot} alt='' />
              <p
                style={{
                  margin: 0,
                  flex: 1,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  textOverflow: 'ellipsis',
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#ccc' : 'inherit',
                }}
              >
                {task.text}
              </p>
              <img
                id='tick'
                src={Tick}
                alt=''
                onClick={() => handleToggleComplete(task.id)}
              />
              <img
                id='delete'
                src={Delete}
                alt=''
                onClick={() => handleDeleteTask(task.id)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Work;
