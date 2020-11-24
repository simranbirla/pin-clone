import React from "react";
import { db } from "../firebase";

const addDB = (type, username, url) => {
  db.collection("feed").add({
    type,
    username,
    url,
  });
};

export default addDB;
