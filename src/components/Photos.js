import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getPhotos, increasePage } from "../redux/actions";
import ImageList from "./ImageList";

const Photos = (props) => {
  const photosRef = useRef();
  console.log(props.search);
  const onScrolling = () => {
    if (
      photosRef.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      if (props.search.term && props.search.page)
        console.log(props.search.term, props.search.page);
      props.getPhotos(props.search.term, props.search.page);
      props.increasePage();
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrolling);
    return () => {
      document.removeEventListener("scroll", onScrolling);
    };
  }, [props.search.term, props.search.page]);

  return (
    <div ref={photosRef}>
      {console.log(props.search)}
      <h2>Photos</h2>
      {props.search.photos[0] ? (
        <ImageList images={props.search.photos[0]} />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state.search);
  return { search: state.search };
};

export default connect(mapStateToProps, { getPhotos, increasePage })(Photos);
