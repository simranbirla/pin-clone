import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import ImageCard from "./ImageCard";

const Feed = () => {
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
      Photos
      {console.log(feed)}
      <div className="image-list">
        {feed.map((img) => (
          <ImageCard image={img.photos} key={img.key} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
