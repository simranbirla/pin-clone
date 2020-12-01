import React, { useState, useRef, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import calSpans from "../utils/calSpans";
import "../Styling/ImageList.css";

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
      <img
        ref={imgRef}
        alt={image.type}
        src={image.url}
        onClick={() => window.open(image.url)}
        className="board-image"
      />

      <div className="imagelist__user">
        <img
          src={image.user_photo}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          alt="user_profilePhoto"
        />
        <p>{image.username}</p>
      </div>
      <div
        className="likes"
        style={{ position: "absolute", bottom: "10px", opacity: "0" }}
      >
        <FavoriteIcon color="secondary" />
        <span>{image.likes}</span>
      </div>
    </div>
  );
};

export default BoardCard;
