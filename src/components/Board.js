import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { db } from "../firebase";
import ImageCard from "./ImageCard";

const Board = (props) => {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    if (props.auth.sign_in) {
      db.collection(`boards/${props.auth.user.uid}/photos`).onSnapshot(
        (snap) => {
          setBoard(
            snap.docs.map((doc) => ({
              id: doc.id,
              photos: doc.data(),
            }))
          );
        }
      );
    }

    return;
  }, []);

  return (
    <div>
      Board!! All the photos
      {props.auth.sign_in ? (
        <div className="image-list">
          {board.map((board) => (
            <ImageCard
              image={board.photos}
              key={board.id}
              id={board.id}
              likeBtn={false}
              userId={props.auth.user}
            />
          ))}
        </div>
      ) : (
        <h2> Please Login </h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Board);
