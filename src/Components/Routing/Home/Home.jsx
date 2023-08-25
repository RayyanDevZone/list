import React, { useState, useEffect } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import BackButton from '../../../images/return 1.svg';
import Dot from '../../../images/blur 1.svg';
import Tick from '../../../images/checked 1.svg';
import Delete from '../../../images/delete 1.svg';
import PLus from "../../../images/plus 1.svg";
const Home = () => {
  const [homeTasks, setHomeTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const homeCategoryTasks = storedTasks.filter(task => task.category === 'Home');
    setHomeTasks(homeCategoryTasks);
  }, []);

  const handleToggleComplete = (taskId) => {
    const updatedTasks = homeTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setHomeTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = homeTasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setHomeTasks(updatedTasks);
  };

  return (
    <div className='home'>
      <div className='back'>
        <Link to='/' id='backbtn'>
          <img src={BackButton} alt='back' />
        </Link>
      </div>
      <div className='h'>
        <h1>Home</h1>
      </div>
      <div className='task-list'>
        {homeTasks.length === 0 ? (
          <p>No Task Right Now!</p>
        ) : (
          homeTasks.map(task => (
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

export default Home;
