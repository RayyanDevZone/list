// import React, { useState } from 'react';
// import './AddTask.scss';
// import { Link } from 'react-router-dom';
// import Cross from '../../../images/close 1.svg';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AddTask = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [taskText, setTaskText] = useState('');

//   const isFormValid = selectedCategory !== '' && taskText.trim() !== '';

//   return (
//     <div className='add'>
//       <div className='adding'>
//         <Link to="/all-tasks">
//           <img id='close' src={Cross} alt='close' />
//         </Link>
//         <h1 id='ad'>ADD TASKS</h1>
//       </div>
//       <div className='background-blue'>
//         <div className='category'>
//           <label htmlFor='categorySelect'>Select a category</label>
//           <select required id='categorySelect' onChange={(e) => setSelectedCategory(e.target.value)}>
//             <option value='empty'></option>
//             <option value='work'>Work</option>
//             <option value='study'>Study</option>
//             <option value='travel'>Travel</option>
//             <option value='home'>Home</option>
//             <option value='shopping'>Shopping</option>
//           </select>

//           <label htmlFor='taskInput'>Type a task here</label>
//           <textarea
//           required
//             id='taskInput'
//             rows='4'
//             value={taskText}
//             onChange={(e) => setTaskText(e.target.value)}
//           ></textarea>

//           <button id='btn' disabled={!isFormValid}>
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddTask;

import React, { useState } from "react";
import "./AddTask.scss";
import { Link } from "react-router-dom";
import Cross from "../../../images/close 1.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [taskText, setTaskText] = useState("");

  const isFormValid = selectedCategory !== "" && taskText.trim() !== "";

  const handleCreateTask = () => {
    if (isFormValid) {
      // Add your task creation logic here

      // Display toast message for successful task addition
      toast.success("Task Added Successfully", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
        style: {
          background: 'green', // Set the background color
          color: 'white',
          borderRadius:'30px',
          boxShadow:" 0px 4px 4px 0px #00000040" ,
          padding:"7px 22px"// Set the text color
        },
      });

      // Clear the input fields after successful task addition
      setSelectedCategory("");
      setTaskText("");
    }
  };

  return (
    <div className="add">
      <div className="adding">
        <Link to="/all-tasks">
          <img id="close" src={Cross} alt="close" />
        </Link>
        <h1 id="ad">ADD TASKS</h1>
      </div>
      <div className="background-blue">
        <div className="category">
          <label htmlFor="categorySelect">Select a category</label>
          <select
            required
            id="categorySelect"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="empty"></option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="travel">Travel</option>
            <option value="home">Home</option>
            <option value="shopping">Shopping</option>
          </select>

          <label htmlFor="taskInput">Type a task here</label>
          <textarea
            required
            id="taskInput"
            rows="4"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          ></textarea>

          <button id="btn" disabled={!isFormValid} onClick={handleCreateTask}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
