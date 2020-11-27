import React from "react";
import "./Css/FloatingPanel.css";
import "../../App.css";
import { AiFillFire } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { GiChessKing } from "react-icons/gi";
import { Link } from "react-router-dom";

export const FloatingPanel = () => {
  return (
    <div className="floating-panel ">
      <ul className="list-tab">
        <li>
          <a href="#">
            <span className="icon">
              <AiFillFire color="#99d05e" />
            </span>
            <span className="text">Đang hot</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <BiStar />
            </span>
            <span className="text">Mơi nhất</span>
          </a>
        </li>
        <li className="create-post">
          <Link to="/create-post">
         
            <span className="icon">
              <BsPencilSquare />
            </span>
            <span className="text">Viết bài</span>
          </Link>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <FaHeartbeat />
            </span>
            <span className="text">Sôi nổi</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <GiChessKing />
            </span>
            <span className="text">Top</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
