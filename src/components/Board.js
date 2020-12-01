import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { db } from "../firebase";
import BoardCard from "./BoardCard";
import "../Styling/Board.css";
import Login from "./Login";
import _ from "lodash";

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
      setBoard(_.uniqBy(board, "photos.url"));
    }
    return;
  }, []);

  return (
    <div>
      {props.auth.sign_in ? (
        <div className="image-list">
          {_.uniqBy(board, "photos.url").map((board) => (
            <BoardCard
              image={board.photos}
              key={board.id}
              id={board.id}
              userId={props.auth.user}
            />
          ))}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Board);
