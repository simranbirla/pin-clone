import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import ImageCard from "./ImageCard";
import UploadImage from "./UploadImage";
import { connect } from "react-redux";

const Feed = ({ auth }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    db.collection("feed").onSnapshot((snapshot) => {
      setFeed(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          photos: doc.data(),
        }))
      );
    });
    return;
  }, []);

  return (
    <div>
      {auth ? (
        <>
          <UploadImage />
          <div className="image-list">
            {feed.map((img) => (
              <ImageCard image={img.photos} key={img.id} id={img.id} />
            ))}
          </div>
        </>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth.sign_in };
};

export default connect(mapStateToProps)(Feed);
