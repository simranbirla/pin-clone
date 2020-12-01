import React, { useState, useEffect, useRef } from "react";
import history from "../history";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined";
import addLikes from "../utils/addLikes";
import addBoard from "../utils/addBoard";
import calSpans from "../utils/calSpans";
import "../Styling/ImageCard.css";

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
          <img
            ref={imgRef}
            alt={image.description}
            src={image.urls.regular}
            onClick={() => window.open(image.urls.regular)}
            style={{ cursor: "pointer" }}
          />
          <button
            onClick={() => {
              addBoard(userId.uid, image, "photo");
              document
                .getElementsByClassName("home__msg")[0]
                .classList.add("show");
              setTimeout(() => {
                document
                  .getElementsByClassName("home__msg")[0]
                  .classList.remove("show");
              }, 2000);
            }}
            className="image-list__icon"
          >
            <AddToPhotosOutlinedIcon />
          </button>
        </>
      ) : (
        <>
          <img
            ref={imgRef}
            alt={image.type}
            src={image.url}
            onClick={() => history.push(`/photo/${id}`)}
            className="image-list__image"
          />

          <div className="imagelist__user">
            <img
              src={image.user_photo}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              alt="user_profilePhoto"
            />
            <p>{image.username}</p>
          </div>
          <div className="imagelist__likes">
            <button onClick={() => manageLikes(id, image)} ref={btnRef}>
              <FavoriteOutlinedIcon />
              {image.likes}
            </button>
            <button
              onClick={() => {
                addBoard(userId.uid, image, "feed");
                document
                  .getElementsByClassName("home__msg")[0]
                  .classList.add("show");
                setTimeout(() => {
                  document
                    .getElementsByClassName("home__msg")[0]
                    .classList.remove("show");
                }, 2000);
              }}
            >
              <AddToPhotosOutlinedIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCard;
