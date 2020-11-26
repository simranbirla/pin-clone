import { db } from "../firebase";

const addBoard = (userId, image, type) => {
  if (type === "feed") {
    db.collection(`boards/${userId}/photos`).add({
      likes: image.likes,
      url: image.url,
      username: image.username,
      user_photo: image.user_photo,
    });
  } else {
    db.collection(`boards/${userId}/photos`).add({
      likes: image.likes,
      url: image.urls.regular,
      username: image.user.name,
      user_photo: image.user.profile_image.small,
    });
  }
};

export default addBoard;
