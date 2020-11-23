import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getPhotos, increasePage } from "../redux/actions";
import ImageList from "./ImageList";

const Photos = (props) => {
  const photosRef = useRef();
  //console.log(props.search);
  const onScrolling = () => {
    if (
      photosRef.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      if (props.search.term && props.search.page) {
        //console.log(props.search.term, props.search.page)

        props.getPhotos(props.search.term, props.search.page + 1);
        props.increasePage();
        console.log(props.search.page);
      }
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
      <h2>Photos</h2>

      <ImageList images={props.photos} />
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state.search);
  return { search: state.search, photos: state.photos };
};

export default connect(mapStateToProps, { getPhotos, increasePage })(Photos);
