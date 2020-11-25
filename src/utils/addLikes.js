import { db } from "../firebase";
const addLikes = (id, image) => {
  db.collection("feed")
    .doc(id)
    .set({
      likes: image.likes + 1,
      username: image.username,
      type: image.type,
      url: image.url,
      time: image.time,
    });
};

export default addLikes;
