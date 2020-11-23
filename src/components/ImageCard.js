import React, { useState, useEffect, useRef } from "react";

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState();
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
      {image.description ? (
        <img ref={imgRef} alt={image.description} src={image.urls.regular} />
      ) : (
        <img ref={imgRef} alt={image.type} src={image.url} />
      )}
      {image.username ? <p>{image.username}</p> : null}
    </div>
  );
};

export default ImageCard;
