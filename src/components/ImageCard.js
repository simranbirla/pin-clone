import React, { useState, useEffect, useRef } from "react";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined";
import addLikes from "../utils/addLikes";
import addBoard from "../utils/addBoard";
import calSpans from "../utils/calSpans";

const ImageCard = ({ image, id, userId, likeBtn }) => {
  const [spans, setSpans] = useState();
  const imgRef = useRef();
  const btnRef = useRef();

  const manageLikes = (id, image) => {
    addLikes(id, image);
    btnRef.current.setAttribute("disabled", "disabled");
  };

  useEffect(() => {
    imgRef.current.addEventListener("load", () => {
      calSpans(imgRef, setSpans);
    });
    return;
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }} className="image-list_grid">
      {image.urls ? (
        <>
          <img ref={imgRef} alt={image.description} src={image.urls.regular} />
          <button
            onClick={() => {
              addBoard(userId.uid, image, "photo");
            }}
            className="image-list__icon"
          >
            <AddToPhotosOutlinedIcon />
          </button>
        </>
      ) : (
        <>
          <img ref={imgRef} alt={image.type} src={image.url} />
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
            {likeBtn !== false ? (
              <>
                <button onClick={() => manageLikes(id, image)} ref={btnRef}>
                  <FavoriteOutlinedIcon />
                </button>
                <button onClick={() => addBoard(userId.uid, image, "feed")}>
                  <AddToPhotosOutlinedIcon />
                </button>
              </>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCard;
