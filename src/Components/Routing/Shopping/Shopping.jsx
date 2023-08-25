import React, { useState, useEffect } from 'react';
import './Shopping.scss';
import { Link } from 'react-router-dom';
import BackButton from '../../../images/return 1.svg';
import Dot from '../../../images/blur 1.svg';
import Tick from '../../../images/checked 1.svg';
import Delete from '../../../images/delete 1.svg';

const Shopping = () => {
  const [shoppingTasks, setShoppingTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const shoppingCategoryTasks = storedTasks.filter(task => task.category === 'Shopping');
    setShoppingTasks(shoppingCategoryTasks);
  }, []);

  const handleToggleComplete = (taskId) => {
    const updatedTasks = shoppingTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setShoppingTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = shoppingTasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setShoppingTasks(updatedTasks);
  };

  return (
    <div className='shopping'>
      <div className='back'>
        <Link to='/' id='backbtn'>
          <img src={BackButton} alt='back' />
        </Link>
      </div>
      <div className='h'>
        <h1>Shopping</h1>
      </div>
      <div className='task-list'>
        {shoppingTasks.length === 0 ? (
          <p>No Task Right Now!</p>
        ) : (
          shoppingTasks.map(task => (
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

export default Shopping;
