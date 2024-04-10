//Question11
// .Design a modal dialog component using Material-UI's Dialog component.
// Use it to display additional information or capture user input within your app.

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Modal.css";

export default function ModalUi() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="boxclass">
          <Typography>Text in a modal</Typography>
          <Typography>Extra Info about Modal</Typography>
        </Box>
      </Modal>
    </div>
  );
}
