import { storage, db } from "../firebase";
import firebase from "firebase";
const addDB = (type, username, url, setOpen, displaypic) => {
  db.collection("feed").add({
    type,
    username,
    url,
    time: firebase.firestore.FieldValue.serverTimestamp(),
    user_photo: displaypic,
  });
  setOpen(false);
};

const addStorage = (type, image, setbar, user, setOpen, displaypic) => {
  const uploadimg = storage.ref(`/images/${image.name}`).put(image);

  uploadimg.on(
    "state_changed",
    (snap) => {
      const progress = Math.round(
        (snap.bytesTransferred / snap.totalBytes) * 100
      );
      setbar(progress);
    },
    (error) => {
      alert(error.message);
    },
    () => {
      storage
        .ref("/images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          addDB(type, user, url, setOpen, displaypic);
        });
      setbar(0);
    }
  );
};

export { addDB, addStorage };
