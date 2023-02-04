import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";
import { deleteEntry } from "../utils/mutations";
import { useState } from "react";

export default function DeleteModal({ entry }) {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = () => {
    deleteEntry(entry.id, entry).catch(console.error);
    setDeleteOpen(false);
  };

  return (
    <div>
      <Button sx={{ color: "red" }} onClick={() => setDeleteOpen(true)}>
        Delete
      </Button>
      <Dialog open={deleteOpen}>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleDelete}>
            Yes
          </Button>
          <Button onClick={() => setDeleteOpen(false)}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
