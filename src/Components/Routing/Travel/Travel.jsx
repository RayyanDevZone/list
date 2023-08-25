import React, { useState, useEffect } from 'react';
import './Travel.scss';
import { Link } from 'react-router-dom';
import BackButton from '../../../images/return 1.svg';
import Dot from '../../../images/blur 1.svg';
import Tick from '../../../images/checked 1.svg';
import Delete from '../../../images/delete 1.svg';
import PLus from "../../../images/plus 1.svg";
const Travel = () => {
  const [travelTasks, setTravelTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const travelCategoryTasks = storedTasks.filter(task => task.category === 'Travel');
    setTravelTasks(travelCategoryTasks);
  }, []);

  const handleToggleComplete = (taskId) => {
    const updatedTasks = travelTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTravelTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = travelTasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTravelTasks(updatedTasks);
  };

  return (
    <div className='travel'>
      <div className='back'>
        <Link to='/' id='backbtn'>
          <img src={BackButton} alt='back' />
        </Link>
      </div>
      <div className='h'>
        <h1>Travel</h1>
      </div>
      <div className='task-list'>
        {travelTasks.length === 0 ? (
          <p>No Task Right Now!</p>
        ) : (
          travelTasks.map(task => (
            <div key={task.id} className='task-item'>
              <img id='hash' src={Dot} alt='' />
              <p
               className="tsk"
               style={{
                  margin: 0,
                  flex: 1,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  textOverflow: 'ellipsis',
                  textAlign:'start',
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#616161' : 'inherit',
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
      <div className="footer">
        <div className="logo_cont">
          <Link to="/addtask">
            <img src={PLus} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Travel;
