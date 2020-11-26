import React from "react";
import ImageCard from "./ImageCard";
import "../Styling/ImageList.css";
import { connect } from "react-redux";
import { auth } from "../firebase";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <ImageCard
        image={image}
        key={image.id}
        user={image.user.id}
        userId={props.auth.user}
      />
    );
  });

  return <div className="image-list">{images}</div>;
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(ImageList);
