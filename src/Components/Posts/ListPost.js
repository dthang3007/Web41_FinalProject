import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlockPost } from "./BlockPost";
import { FloatingPanel } from "../Home/FloatingPanel";

export const ListPost = () => {
  const { topic } = useParams();
  useEffect(() => {
    switch (topic) {
      case "quan-diem-tranh-luan":
        console.log("quandiemtranhluan")
        break;

      case "sciece2vn":
        console.log("science2vn")
        break;

      default:
        break;
    }
  }, [topic]);
  return (
    <div className="main-content">
      <FloatingPanel />
      <div className="feed-list">
        <BlockPost title={topic} />
        <BlockPost title={topic} />
        <BlockPost title={topic} />
        <BlockPost title={topic} />
        <BlockPost title={topic} />
  
      </div>
    </div>
  );
};
