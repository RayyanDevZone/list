import React, { useState } from 'react';
import './AddTask.scss';
import { Link } from 'react-router-dom';
import Cross from '../../../images/close 1.svg';

const AddTask = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [taskText, setTaskText] = useState('');

  const isFormValid = selectedCategory !== '' && taskText.trim() !== '';

  return (
    <div className='add'>
      <div className='adding'>
        <Link to="/all-tasks">
          <img id='close' src={Cross} alt='close' />
        </Link>
        <h1 id='ad'>ADD TASKS</h1>
      </div>
      <div className='background-blue'>
        <div className='category'>
          <label htmlFor='categorySelect'>Select a category</label>
          <select required id='categorySelect' onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value='empty'></option>
            <option value='work'>Work</option>
            <option value='study'>Study</option>
            <option value='travel'>Travel</option>
            <option value='home'>Home</option>
            <option value='shopping'>Shopping</option>
          </select>

          <label htmlFor='taskInput'>Type a task here</label>
          <textarea
          required
            id='taskInput'
            rows='4'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          ></textarea>

          <button id='btn' disabled={!isFormValid}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
