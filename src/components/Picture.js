import React, { useState, useEffect } from "react";
import { db } from "../firebase";
const Picture = (props) => {
  const [pic, setPic] = useState();

  useEffect(() => {
    db.collection("feed")
      .doc(props.match.params.id)
      .get()
      .then((doc) => {
        console.log(doc.data());
        setPic(doc.data());
      });
    return;
  }, []);

  return (
    <div className="picture">
      {pic ? (
        <div className="picture__main">
          <div className="picture__main-img">
            <img src={pic.url} alt={pic.type} />
          </div>
          <div>
            <img src={pic.user_photo} alt="user" />
            <p>{pic.username}</p>
          </div>
        </div>
      ) : null}
      {/* comments */}
    </div>
  );
};

export default Picture;
