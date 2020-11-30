import React, { useState, useRef, useEffect } from "react";
import calSpans from "../utils/calSpans";

const BoardCard = ({ image }) => {
  const [spans, setSpans] = useState();
  const imgRef = useRef();

  useEffect(() => {
    imgRef.current.addEventListener("load", () => {
      calSpans(imgRef, setSpans);
    });
    return;
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }} className="image-list_grid">
      {console.log("BOARDSSSSS")}
      <img
        ref={imgRef}
        alt={image.type}
        src={image.url}
        onClick={() => window.open(image.url)}
      />

      <div className="imagelist__user">
        <img
          src={image.user_photo}
          style={{ width: "50px", height: "50px" }}
          alt="user_profilePhoto"
        />
        <p>{image.username}</p>
      </div>
      <div className="imagelist__likes">
        <span>{image.likes}</span>
      </div>
    </div>
  );
};

export default BoardCard;
