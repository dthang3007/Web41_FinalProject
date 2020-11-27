import Picker from "emoji-picker-react";
import React from "react";
import "./css/comment.css";
export const Comment = () => {
  let modules = {
    toolbar: [],
  };
  return (
    <div className="comment-box">
      <div className="comment-form ">
        <form className="d-flex">
          <input
            className="border-0"
            placeholder="Hãy chia sẻ cảm nghĩ của bạn về bài viết"
          />
          <button>Gửi</button>
        </form>
      </div>
      <div className="comments">
        <div className="no-comment">
          <div className="icon-comment-large">
            <div className="icon-comment-bubble"></div>
            <div className="icon-comment-arrow"></div>
            
          </div>
          <span>Hãy là người đầu tiên bình luận bài viết này</span>
        </div>
      </div>
    </div>
  );
};
