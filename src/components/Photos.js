import React, { useState } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../redux/actions";
import ImageList from "./ImageList";

const Photos = (props) => {
  return (
    <div>
      <h2>Photos</h2>
      {props.search.photos[0] ? (
        <ImageList images={props.search.photos[0]} />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.search.photos[0]);
  return { search: state.search };
};

export default connect(mapStateToProps, { getPhotos })(Photos);
