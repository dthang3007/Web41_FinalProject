import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Navbar } from "../Home/Navbar";
import "./css/ckeditor.css";
import "./css/create-post.css";
import "react-quill/dist/quill.snow.css";
export const CreatePost = () => {
  let modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
    ],
  };

  let formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const [value, setValue] = useState("sdasd");
  const handleChange = (e) => {
    setValue(e);
    console.log(value);
  };
  return (
    <div style={{ background: "#fff" }}>
      <Navbar />

      <div className="container-create-post">
        <form>
          <input className="input-group-text" placeholder="Tiêu đề bài viết" />

          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={value}
            onChange={handleChange}
          ></ReactQuill>
        </form>
      </div>
    </div>
  );
};
