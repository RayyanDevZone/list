import React, { useEffect, useState } from "react";
import "./AllTask.scss";
import { Link } from "react-router-dom";
import BackButton from "../../../images/return 1.svg";
import ClipboardIcon from "../../../images/clipboard (1) 1.svg";
import Dot from "../../../images/blur 1.svg";
import PLus from "../../../images/plus 1.svg";
import Tick from "../../../images/checked 1.svg";
import Delete from "../../../images/delete 1.svg";
const AllTask = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    const allTasks = Object.values(tasks).flat();
    setAllTasks(allTasks);
  }, []);

  const handleDeleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || {};

    const category = allTasks[index].category;

    if (tasks[category]) {
      tasks[category].splice(index, 1);

      localStorage.setItem("tasks", JSON.stringify(tasks));

      const updatedAllTasks = tasks[category].slice();
      setAllTasks(updatedAllTasks);
    }
  };

  const handleToggleComplete = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = !tasks[index].completed;
      console.log("clicked");
      console.log(tasks[index].completed);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      // You can update the state if needed
      setAllTasks([...tasks]);
    }
  };

  return (
    <div className="alltasks">
      <div className="back">
        <Link to="/" id="backbtn">
          <img src={BackButton} alt="back" />
        </Link>
      </div>
      <div className="all">
        <h1>ALL TASK</h1>
        <img src={ClipboardIcon} alt="" />
      </div>
      <div className="daily">
        <div className="do">
          {allTasks.map((item, index) => (
            <div key={index} className="task-item">
              <img id="hash" src={Dot} alt="" />
              <p
                style={{
                  margin: 0,
                  flex: 1,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  textOverflow: "ellipsis",
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "#ccc" : "inherit",
                }}
              >
                {item.text}
              </p>

              <img
                id="tick"
                src={Tick}
                alt=""
                onClick={() => handleToggleComplete(index)}
              />
              <img
                id="delete"
                src={Delete}
                alt=""
                onClick={() => handleDeleteTask(index)}
              />
            </div>
          ))}
        </div>
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

export default AllTask;
