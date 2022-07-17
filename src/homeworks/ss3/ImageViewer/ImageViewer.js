import React, { useState } from "react";
import { pic } from "./Img/Img";
import './Img.css'

export default function ImageViewer() {
  const [imageViewer, setImageViewer] = useState(0);
  return (
    <div>
      <button
        onClick={() =>
          setImageViewer(imageViewer === 0 ? pic.length - 1 : imageViewer - 1)
        }
      >
        prev
      </button>
      <button
        onClick={() =>
          setImageViewer(imageViewer === pic.length - 1 ? 0 : imageViewer + 1)
        }
      >
        next
      </button>

      <img src={pic[imageViewer]} alt="" />
    </div>
  );
}
