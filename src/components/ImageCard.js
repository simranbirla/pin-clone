import React, { useState, useEffect, useRef } from "react";
import addLikes from "../utils/addLikes";
const ImageCard = ({ image, id }) => {
  const [spans, setSpans] = useState();
  const btnRef = useRef();

  const manageLikes = (id, image) => {
    addLikes(id, image);
    btnRef.current.setAttribute("disabled", "disabled");
  };

  const imgRef = useRef();

  const calSpans = () => {
    const height = imgRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    setSpans(spans);
  };

  useEffect(() => {
    imgRef.current.addEventListener("load", calSpans);
    return;
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      {image.urls ? (
        <img ref={imgRef} alt={image.description} src={image.urls.regular} />
      ) : (
        <>
          <img ref={imgRef} alt={image.type} src={image.url} />
          <div>
            <img
              src={image.user_photo}
              style={{ width: "50px", height: "50px" }}
            />
            <span>{image.username}</span>
          </div>

          <span>{image.likes}</span>
          <button onClick={() => manageLikes(id, image)} ref={btnRef}>
            Like
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCard;
