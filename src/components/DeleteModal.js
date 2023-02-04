import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";
import { deleteEntry } from "../utils/mutations";

export default function DeleteModal({ opening, entry }) {
  const handleClose = () => {
    deleteEntry(entry.id, entry).catch(console.error);
  };

  return (
    <div>
      <Dialog open={opening}>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Yes
          </Button>
          <Button onClick={() => handleClose()}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
