import React, { useState } from "react";
import "./AddTask.scss";
import { Link } from "react-router-dom";
import Cross from "../../../images/close 1.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [taskText, setTaskText] = useState("");
  const [allTasks, setAllTasks] = useState("");
  const [showOptions, setShowOptions] = useState(false); // State to manage dropdown options

  const categories = ["Work", "Study", "Travel", "Home", "Shopping"]; // List of categories

  const isFormValid = selectedCategory !== "" && taskText.trim() !== "";

  const handleCreateTask = () => {
    if (isFormValid) {
      const newTask = {
        category: selectedCategory,
        text: taskText,
      };
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

      existingTasks.push(newTask);

      localStorage.setItem("tasks", JSON.stringify(existingTasks));

      setSelectedCategory("");
      setTaskText("");

      toast.success("Task Added Successfully", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
        style: {
          background: "green",
          color: "white",
          borderRadius: "30px",
          boxShadow: "0px 4px 4px 0px #00000040",
          padding: "7px 22px",
        },
      });

      const updatedAllTasks = [...allTasks, newTask];
      setAllTasks(updatedAllTasks);
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
          {/* <label htmlFor="categorySelect">Select a category</label> */}
          <div
            className="dummy-dropdown"
            onClick={() => setShowOptions(!showOptions)}
          >
            {selectedCategory || "Select a category"}
            {showOptions && (
              <ul className="options">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowOptions(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

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
