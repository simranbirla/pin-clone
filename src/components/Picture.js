import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import firebase from "firebase";
import "../Styling/Picture.css";
import { connect } from "react-redux";

const Picture = (props) => {
  const [pic, setPic] = useState();
  const [comments, setComments] = useState();
  const [comment, setComment] = useState();
  const inpRef = useRef();

  useEffect(() => {
    db.collection("feed")
      .doc(props.match.params.id)
      .get()
      .then((doc) => {
        setPic(doc.data());
      });
    return;
  }, []);

  useEffect(() => {
    db.collection("feed")
      .doc(props.match.params.id)
      .collection("comments")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            photos: doc.data(),
          }))
        );
      });
  }, []);

  const addComment = (e) => {
    e.preventDefault();
    db.collection("feed")
      .doc(props.match.params.id)
      .collection("comments")
      .add({
        time: firebase.firestore.FieldValue.serverTimestamp(),
        comment: comment,
        user_photo: props.user.photoURL,
        username: props.user.displayName,
      });
    inpRef.current.value = "";
    setComment();
  };

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="picture">
      {pic ? (
        <div className="picture__main">
          <div className="picture__main-img">
            <img src={pic.url} alt={pic.type} />
          </div>
          <div className="picture__right">
            <div className="picture__user">
              <img src={pic.user_photo} alt="user" />
              <p>{pic.username}</p>
            </div>
            <div className="picture__comments">
              <h2 style={{ textAlign: "left", margin: "10px" }}>Comments:</h2>
              {comments
                ? comments.map((comment) => {
                    return (
                      <div className="picture__comments-main">
                        <div className="picture__comments-name">
                          <img src={comment.photos.user_photo} />
                          <p>{comment.photos.username}</p>
                        </div>
                        <p>{comment.photos.comment} </p>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="picture__input">
              <form onSubmit={addComment}>
                <div>
                  <img src={props.user.photoURL} alt="user" />
                  <p>{props.user.displayName}</p>
                </div>
                <input
                  placeholder="Enter your comments"
                  onChange={handleInput}
                  ref={inpRef}
                />
                <button>Add</button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(Picture);
