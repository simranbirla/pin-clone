import React from "react";
import ImageCard from "./ImageCard";
import "../Styling/ImageList.css";

const ImageList = (props) => {
  const images = props.images.map((image, index) => {
    return <ImageCard image={image} key={index} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
