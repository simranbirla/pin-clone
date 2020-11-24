import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { storage, db } from "../firebase";

const UploadImage = (props) => {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const body = (
    <div className={useStyles().paper}>
      <h2 id="simple-modal-title">Upload image</h2>
      <p id="simple-modal-description">
        Select image from your local computer to upload
      </p>
      <input type="file" />
      <input type="url" placeholder="Enter url *(optional)" />
      <Button variant="contained" color="secondary">
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

export default UploadImage;
