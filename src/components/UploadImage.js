import React, { useState, useEffect, useRef } from "react";
import useStyles from "../utils/modalStyle";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { addDB, addStorage } from "../utils/addDB";
import { connect } from "react-redux";

const UploadImage = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState();
  const [file, setFile] = useState();
  const [type, setType] = useState();
  const [progress, setProgress] = useState();
  const handleChange = (e, type) => {
    if (type === "file") {
      if (e.target.files[0]) {
        setFile(e.target.files[0]);
      }
    } else if (type === "url") {
      setUrl(e.target.value);
    } else {
      setType(e.target.value);
    }
  };

  const handleUpload = () => {
    if (!url && !file) {
      alert("Select file to upload");
    } else if (url && file) {
      alert("Select only one file to upload");
    } else if (url) {
      addDB(type, user.displayName, url, setOpen, user.photoURL);
    } else {
      addStorage(
        type,
        file,
        setProgress,
        user.displayName,
        setOpen,
        user.photoURL
      );
    }
    setFile();
    setUrl();
    setType();
    setProgress();
  };

  const body = (
    <div className={useStyles().paper}>
      <h2 id="simple-modal-title">Upload image</h2>
      <p id="simple-modal-description">
        Select image from your local computer to upload
      </p>
      <input type="file" onChange={(e) => handleChange(e, "file")} />
      <input
        type="url"
        placeholder="Enter url *(optional)"
        onChange={(e) => handleChange(e, "url")}
      />
      <input
        type="text"
        placeholder="Enter description"
        onChange={(e) => handleChange(e, "type")}
        required
      />
      <Button variant="contained" color="secondary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );

  return (
    <div>
      <button onClick={() => setOpen(true)}>POP UP</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={useStyles().modal}
      >
        {body}
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(UploadImage);
