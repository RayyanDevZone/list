import React, { useEffect } from "react";
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

  useEffect(()=>{
   const Item=localStorage.getItem('tasks')

    if(item=>item.category=="All"){
  
    }
  },[])
  


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
          <p>{all}</p>
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
          <p>14 tasks</p>
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
          <p>2 tasks</p>
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
          <p>14 tasks</p>
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
          <p>5 tasks</p>
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
          <p>8 tasks</p>
        </div>
      </div>
    </div>
  );
};

export default List;
