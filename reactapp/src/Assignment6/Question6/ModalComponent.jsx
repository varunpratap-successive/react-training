//Question6
// Create a React component (Modal) that displays a modal dialog with content. Users can open and close the modal.
// Write tests to check if the modal opens and closes when triggered

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./Modal.css";

const ModalComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="boxclass">
          <Typography>Content of Modal</Typography>
          <Button onClick={handleClose}>Close modal</Button>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalComponent;
