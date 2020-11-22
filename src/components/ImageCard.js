import React, { useState, useEffect, useRef } from "react";

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState();
  const imgRef = useRef(null);

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
      <img ref={imgRef} alt={image.description} src={image.urls.regular} />
    </div>
  );
};

export default ImageCard;
