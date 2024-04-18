//Question13
// Design and implement a Modal component in React. Allow customization of the modal content
// and provide options to open, close, and toggle the modal. Use this component to display various types of content.

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Modalstyle.css";

export default function ModalComp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxclass">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            MODAL
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Data Inside Modal
          </Typography>
          <Button onClick={handleClose}>Close modal</Button>
        </Box>
      </Modal>
    </div>
  );
}
