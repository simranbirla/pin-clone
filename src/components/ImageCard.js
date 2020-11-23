import React, { useState, useEffect, useRef } from "react";

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState();
  const imgRef = useRef();

  const calSpans = () => {
    const height = imgRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    setSpans(spans);
  };

  /* function tempAlert(msg, duration) {
    var el = document.createElement("div");
    el.setAttribute(
      "style",
      "position:absolute;top:40%;left:20%;background-color:white;"
    );
    el.innerHTML = msg;
    setTimeout(function () {
      el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
  }*/

  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  useEffect(() => {
    imgRef.current.addEventListener("load", calSpans);
    return;
  }, []);
  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imgRef}
        alt={image.description}
        src={image.urls.regular}
        onClick={() => copyToClipboard(image.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
