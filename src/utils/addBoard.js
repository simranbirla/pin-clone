import { db } from "../firebase";

const addBoard = (userId, image) => {
  db.collection(`boards/${userId}/photos`).add({
    likes: image.likes,
    url: image.url,
    username: image.username,
    user_photo: image.user_photo,
  });
};

export default addBoard;
