import React, { useEffect, useState } from "react";
import "./List.scss";
import BookIcon from "../images/book 1.svg";
import ClipboardIcon from "../images/clipboard (1) 1.svg";
import BriefcaseIcon from "../images/briefcase (1) 1.svg";
import HouseIcon from "../images/house 1.svg";
import ShoppingIcon from "../images/online-shopping 1.svg";
import WorldIcon from "../images/world 1.svg";
import BurgerIcon from "../images/menu-_1_ 1.svg";
import { useNavigate } from "react-router-dom";
const List = () => {
  const [keyLength, setKeyLength] = useState(0);
  const [tasksCount, setTasksCount] = useState({
    Work: 0,
    Study: 0,
    Travel: 0,
    Shopping: 0,
    Home: 0,
  });

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    const allTasks = Object.values(tasks).flat();
    setKeyLength(allTasks.length);

    const updatedTasksCount = {
      Work: allTasks.filter((task) => task.category === "Work").length,
      Study: allTasks.filter((task) => task.category === "Study").length,
      Travel: allTasks.filter((task) => task.category === "Travel").length,
      Shopping: allTasks.filter((task) => task.category === "Shopping").length,
      Home: allTasks.filter((task) => task.category === "Home").length,
    };

    setTasksCount(updatedTasksCount);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="list">
      <div className="burger">
        <img src={BurgerIcon} alt="menu" />
      </div>
      <div className="heading">
        <h1 className="title">TODO LIST</h1>
      </div>
      <div className="tasks">
        <div
          className="cards"
          onClick={() => {
            navigate("/all-tasks");
          }}
        >
          <div className="icon">
            <img src={ClipboardIcon} alt="Clipboard" />
          </div>
          <div className="head">All</div>
          <p>{keyLength} tasks</p>
        </div>

        <div
          className="cards"
          onClick={() => {
            navigate("/work");
          }}
        >
          <div className="icon">
            <img src={BriefcaseIcon} alt="Briefcase" />
          </div>
          <div className="head">Work</div>
          <p>{tasksCount.Work} tasks</p>
        </div>

        <div
          className="cards"
          onClick={() => {
            navigate("/study");
          }}
        >
          <div className="icon">
            <img src={BookIcon} alt="Book" />
          </div>
          <div className="head">Study</div>
          <p>{tasksCount.Study} tasks</p>
        </div>

        <div
          className="cards"
          onClick={() => {
            navigate("/travel");
          }}
        >
          <div className="icon">
            <img src={WorldIcon} alt="World" />
          </div>
          <div className="head">Travel</div>
          <p>{tasksCount.Travel} tasks</p>
        </div>

        <div
          className="cards"
          onClick={() => {
            navigate("/shopping");
          }}
        >
          <div className="icon">
            <img src={ShoppingIcon} alt="Shopping" />
          </div>
          <div className="head">Shopping</div>
          <p>{tasksCount.Shopping} tasks</p>
        </div>

        <div
          className="cards"
          onClick={() => {
            navigate("/home");
          }}
        >
          <div className="icon">
            <img src={HouseIcon} alt="House" />
          </div>
          <div className="head">Home</div>
          <p>{tasksCount.Home} tasks</p>
        </div>
      </div>
    </div>
  );
};

export default List;
