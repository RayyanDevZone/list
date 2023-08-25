import React, { useState } from "react";
import "./AddTask.scss";
import { Link } from "react-router-dom";
import Cross from "../../../images/close 1.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmojiPicker from "emoji-picker-react";

const AddTask = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [taskText, setTaskText] = useState("");
  const [allTasks, setAllTasks] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const categories = ["Work", "Study", "Travel", "Home", "Shopping"]; 

  const isFormValid = selectedCategory !== "" && taskText.trim() !== "";
  const _id= new Date().getTime();
  const handleCreateTask = () => {
    if (isFormValid) {
      const newTask = {
        id:_id,
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
            {selectedCategory || ""}
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
          <div id="labeling">
          <label htmlFor="taskInput">Type a task here</label>  <button
            id="emoji-btn"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😊
          </button>  </div>
          <div className="textarea_emoji">
          <textarea
            required
            id="taskInput"
            rows="4"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          >
           
          </textarea>

          {showEmojiPicker && (
            <EmojiPicker 
            className="EmojiPicker"
              onEmojiClick={(event, emojiObject) => {
                setTaskText((prevText) => prevText + event.emoji);
                setShowEmojiPicker(false);
                
              }}
              // disableSearchBar
              // disableSkinTonePicker
              // groupVisibility={{ 
              //   recently_used: false,
              // }}
              preload
            />
          )}
          </div>
          <button id="btn" disabled={!isFormValid} onClick={handleCreateTask}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
