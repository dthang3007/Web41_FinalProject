import React from "react";
import "../../App.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaComment, FaEye } from "react-icons/fa";
export const BlockPost = (props) => {
  return (
    <div className="inner">
      <Card style={{ border: "none" }}>
        <div className="row author ">
          <a>
            <img
              src={props.avatar}
              style={{
                width: 36,
                height: 36,
                objectFit: "cover",
                borderRadius: "50%",
                whiteSpace: "nowrap",
                marginRight: 10,
              }}
              alt="ava"
            ></img>
          </a>

          <div className="col-10">
            <div className="row ">
              <span>
                <a className="name-author ">Son Tung Mtp</a>
                &nbsp;trong&nbsp;
                <a className="categorize-author">Phim</a>
              </span>
            </div>
            <div className="row created">
              <span>Hôm qua</span>
              &nbsp; . &nbsp;
              <span>11 phút đọc</span>
            </div>
          </div>
        </div>
        <a>
          <Card.Img
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
            variant="top"
            src={props.image}
          />
        </a>

        <Card.Body
          style={{
            display: "block",
            wordBreak: "break-word",
            textAlign: "left",
            padding: "0",
          }}
        >
          <div className="title-content">
            <h3>
              <a className="font-weight-bold " href="#">
               {props.title}
              </a>
            </h3>
            <Link to="/bai-dang">
              Bài viết này dành cho những người có bạn gái nhưng cô này hay đòi
              chia tay, những người bạn gái hay đòi chia tay và bất cứ ai có cái
              gì đó...
            </Link>
          </div>
          <div className="tool-bar">
            <div className="left">
              <div className="vote-box">
                <span className="vote-count">11</span>
                <a className="vote-btn vote-up"></a>
                <a className="vote-btn vote-down"></a>
              </div>
            </div>
            <div className="right">
              <div className="view">
                <span>
                  <FaEye />
                </span>
                <span className="views">200</span>
              </div>
              <div>
                <FaComment />
                <span>20</span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
