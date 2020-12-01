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
      {auth.sign_in ? (
        <>
          <UploadImage />
          <div className="home__msg">Added to Board !!</div>
          <div className="image-list">
            {feed.map((img) => (
              <ImageCard
                image={img.photos}
                key={img.id}
                id={img.id}
                userId={auth.user}
              />
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
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Feed);
