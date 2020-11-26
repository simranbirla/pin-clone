import React, { useState, useEffect, useRef } from "react";
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
    <div style={{ gridRowEnd: `span ${spans}` }}>
      {image.urls ? (
        <>
          <img ref={imgRef} alt={image.description} src={image.urls.regular} />
          <button onClick={() => addBoard(userId.uid, image, "photo")}>
            Add To Board
          </button>
        </>
      ) : (
        <>
          <img ref={imgRef} alt={image.type} src={image.url} />
          <div>
            <img
              src={image.user_photo}
              style={{ width: "50px", height: "50px" }}
              alt="user_profilePhoto"
            />
            <span>{image.username}</span>
          </div>

          <span>{image.likes}</span>
          {likeBtn !== false ? (
            <>
              <button onClick={() => manageLikes(id, image)} ref={btnRef}>
                Like
              </button>
              <button onClick={() => addBoard(userId.uid, image, "feed")}>
                Add To Board
              </button>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default ImageCard;
